"use strict";

const fs = require("fs");
const path = require("path");

class MigrationTool {
    constructor(baseDir) {
        this.baseDir = baseDir;
        this.guidesDir = path.join(baseDir, "guides");
        this.i18nDir = path.join(baseDir, "i18n");

        if (!fs.existsSync(this.i18nDir)) {
            fs.mkdirSync(this.i18nDir, { recursive: true });
        }
    }

    // 工具函数：规范化 Key (去除空格，转小写)
    normalizeKey(s) {
        return s.replace(/\s+/g, '').toLowerCase();
    }

    /**
     * 查找已存在的 Key，忽略大小写和空格差异
     */
    findExistingKey(map, text) {
        const target = this.normalizeKey(text);
        for (const key of Object.keys(map)) {
            if (this.normalizeKey(key) === target) return key;
        }
        return null;
    }

    /**
     * 核心：注册翻译 Key
     * 如果已存在相似 Key 则复用，否则新建。同时更新 translations 对象。
     */
    registerKey(translations, lang, rawKey, value = null) {
        const cleanKey = rawKey.trim();
        let finalKey = cleanKey;

        // 仅针对主语言(en)检查 Key 复用
        if (lang === 'en') {
            const existing = this.findExistingKey(translations.en, cleanKey);
            if (existing) finalKey = existing;
            translations.en[finalKey] = finalKey;
        } else {
            // 对于其他语言，直接使用传入的 finalKey (通常是 en 的 key)
            if (value) translations[lang][rawKey] = value;
        }
        return finalKey;
    }

    migrateAll() {
        console.log("=== Starting migration ===");
        if (!fs.existsSync(this.guidesDir)) {
            console.error(`Guides directory not found: ${this.guidesDir}`);
            return;
        }
        
        const files = fs.readdirSync(this.guidesDir).filter(file => file.endsWith(".js"));

        for (const file of files) {
            const dungeonId = path.basename(file, ".js");
            console.log(`\nProcessing ${file}...`);
            try {
                this.migrateDungeon(dungeonId);
            } catch (e) {
                console.error(`Failed to migrate ${file}:`, e.message);
                console.error(e.stack);
            }
        }
        console.log("\n=== Migration completed ===");
    }

    migrateDungeon(dungeonId) {
        const filePath = path.join(this.guidesDir, `${dungeonId}.js`);
        let content = fs.readFileSync(filePath, "utf8");
        const originalContent = content;

        // 检测文件是否已经转换为 i18n 格式
        const hasTranslationFunction = /\bt\s*\(/.test(content);
        const hasTParameter = /module\.exports\s*=\s*\([^)]*\bt\b[^)]*\)\s*=>/.test(content);
        
        if (hasTranslationFunction && hasTParameter) {
            console.log(`  Skipping ${dungeonId}.js (already migrated)`);
            return;
        }

        const translations = { en: {}, ru: {}, zh_Hans: {} };

        // 提取元数据
        this.extractDungeonName(content, translations);

        // 0. 更新函数签名
        content = this.updateModuleSignature(content);

        // 0.5 处理三元变量
        content = this.processTernaryVariables(content, translations);

        // 1. 处理普通字符串 (message: "...")
        content = this.processStaticMessages(content, translations);

        // 2. 处理模板字符串 (message: `...`)
        content = this.processTemplateMessages(content, translations);

        // 3. 处理特殊赋值模式 (message += "...")
        content = this.processParallelAssignments(content, translations);

        // 4. 清理残留的 message_RU/message_zh
        content = this.cleanupLegacyKeys(content);

        const modified = content !== originalContent;

        if (Object.keys(translations.en).length > 0) {
            this.saveTranslations(dungeonId, translations);
        } else if (!modified) {
            console.log(`  No changes needed for ${dungeonId}.js`);
            return;
        }

        if (modified) {
            const backupPath = filePath + ".backup";
            if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(filePath, backupPath);
                console.log(`  Backup created: ${dungeonId}.js.backup`);
            }
            fs.writeFileSync(filePath, content, "utf8");
            console.log(`  Updated: ${dungeonId}.js`);
            console.log(`    - Extracted ${Object.keys(translations.en).length} keys`);
        }
    }

    extractDungeonName(content, translations) {
        const firstLine = content.split('\n')[0].trim();
        if (firstLine.startsWith("//")) {
            const name = firstLine.replace(/^\/\/\s*/, "").trim();
            if (name) {
                translations.en["@dungeon"] = name;
            }
        }
    }

    updateModuleSignature(content) {
        const regex = /module\.exports\s*=\s*\(\s*dispatch\s*,\s*handlers\s*,\s*guide\s*,\s*lang\s*\)\s*=>/;
        if (regex.test(content)) {
            return content.replace(regex, "module.exports = (dispatch, handlers, guide, lang, t) =>");
        }
        return content;
    }

    /**
     * 辅助函数：寻找相邻的 RU/ZH 翻译定义
     * @param {string} content 全文
     * @param {number} searchStart 开始搜索的位置
     * @param {RegExp} ruRegex 用于匹配 RU 的正则
     * @param {RegExp} zhRegex 用于匹配 ZH 的正则
     */
    findNeighboringTranslations(content, searchStart, ruRegex, zhRegex) {
        // 限制查找范围（例如找到当前对象的结尾，或者往后 500 字符）
        const contextEnd = this.findContextEnd(content, searchStart);
        // 为了防止 findContextEnd 失败导致范围太大，加个最大长度限制
        const safeEnd = Math.min(contextEnd, searchStart + 1000); 
        const contextStr = content.substring(searchStart, safeEnd);

        const ruMatch = contextStr.match(ruRegex);
        const zhMatch = contextStr.match(zhRegex);

        const results = {
            ruText: ruMatch ? ruMatch[2] : null, // 假设正则第2组是内容
            zhText: zhMatch ? zhMatch[2] : null,
            edits: []
        };

        if (ruMatch) {
            results.edits.push({
                start: searchStart + ruMatch.index,
                end: searchStart + ruMatch.index + ruMatch[0].length,
                text: ""
            });
        }
        if (zhMatch) {
            results.edits.push({
                start: searchStart + zhMatch.index,
                end: searchStart + zhMatch.index + zhMatch[0].length,
                text: ""
            });
        }

        return results;
    }

    processTernaryVariables(content, translations) {
        // 匹配 const v = c ? "A" : "B";
        const regex = /const\s+(\w+)\s*=\s*([^?]+)\s*\?\s*(["'])(.*?)\3\s*:\s*(["'])(.*?)\5\s*;?/g;
        let match;
        const edits = [];

        while ((match = regex.exec(content)) !== null) {
            const [fullMatch, varName, condition, q1, enTrue, q2, enFalse] = match;

            if (/_ru$|_zh$|_zh_Hans$/i.test(varName)) continue;

            const matchStart = match.index;
            const matchEnd = matchStart + fullMatch.length;

            // 构建查找相邻变量定义的正则
            const ruRegex = new RegExp(`const\\s+${varName}(?:_ru|_RU)\\s*=\\s*[^?]+\\s*\\?\\s*(["'])(.*?)\\1\\s*:\\s*(["'])(.*?)\\3\\s*;?`);
            const zhRegex = new RegExp(`const\\s+${varName}(?:_zh|_ZH|_zh_Hans)\\s*=\\s*[^?]+\\s*\\?\\s*(["'])(.*?)\\1\\s*:\\s*(["'])(.*?)\\3\\s*;?`);

            // 复用 context 查找逻辑，这里稍微特殊因为正则匹配组不同 (True/False 两部分)
            const contextEnd = this.findContextEnd(content, matchEnd);
            const contextStr = content.substring(matchEnd, contextEnd);
            const ruMatch = contextStr.match(ruRegex);
            const zhMatch = contextStr.match(zhRegex);

            // 注册 Keys
            const keyTrue = this.registerKey(translations, 'en', enTrue);
            const keyFalse = this.registerKey(translations, 'en', enFalse);

            if (ruMatch) {
                this.registerKey(translations, 'ru', keyTrue, ruMatch[2]);
                this.registerKey(translations, 'ru', keyFalse, ruMatch[4]);
                edits.push({ start: matchEnd + ruMatch.index, end: matchEnd + ruMatch.index + ruMatch[0].length, text: "" });
            }
            if (zhMatch) {
                this.registerKey(translations, 'zh_Hans', keyTrue, zhMatch[2]);
                this.registerKey(translations, 'zh_Hans', keyFalse, zhMatch[4]);
                edits.push({ start: matchEnd + zhMatch.index, end: matchEnd + zhMatch.index + zhMatch[0].length, text: "" });
            }

            const newCode = `const ${varName} = ${condition} ? t("${keyTrue}") : t("${keyFalse}");`;
            edits.push({ start: matchStart, end: matchEnd, text: newCode });
        }

        return this.applyEdits(content, edits);
    }

    processStaticMessages(content, translations) {
        const regex = /["']?message["']?\s*:\s*(["'])(.*?)\1/g;
        let match;
        const edits = [];

        while ((match = regex.exec(content)) !== null) {
            const [fullMatch, quote, enText] = match;
            if (enText.includes("${")) continue; // Skip templates

            const matchEnd = match.index + fullMatch.length;

            // 查找相邻翻译
            const neighbors = this.findNeighboringTranslations(
                content, 
                matchEnd,
                /,\s*["']?message_RU["']?\s*:\s*(["'])(.*?)\1/,
                /,\s*["']?message_zh["']?\s*:\s*(["'])(.*?)\1/
            );

            // 注册 Key
            const key = this.registerKey(translations, 'en', enText);
            if (neighbors.ruText) this.registerKey(translations, 'ru', key, neighbors.ruText);
            if (neighbors.zhText) this.registerKey(translations, 'zh_Hans', key, neighbors.zhText);

            edits.push({
                start: match.index,
                end: matchEnd,
                text: `message: t(${quote}${key}${quote})`
            });
            edits.push(...neighbors.edits);
        }

        return this.applyEdits(content, edits);
    }

    processTemplateMessages(content, translations) {
        const regex = /["']?message["']?\s*:\s*`([^`]*)`/g;
        let match;
        const edits = [];

        while ((match = regex.exec(content)) !== null) {
            const [fullMatch, rawEnText] = match;
            if (!rawEnText.includes("${")) continue;

            const matchEnd = match.index + fullMatch.length;

            // 查找相邻翻译 (注意这里用 [`'"] 匹配所有类型的引号)
            const neighbors = this.findNeighboringTranslations(
                content,
                matchEnd,
                /,\s*["']?message_RU["']?\s*:\s*[`'"]([^`'"]*)[`'"]/,
                /,\s*["']?message_zh["']?\s*:\s*[`'"]([^`'"]*)[`'"]/
            );

            // 解析模板变量
            let { key: enKey, params, paramMap } = this.parseTemplate(rawEnText);
            
            // 注册 Key
            const finalKey = this.registerKey(translations, 'en', enKey);

            // 处理翻译文本的变量转换
            if (neighbors.ruText) {
                const ruVal = this.convertTemplateToKey(neighbors.ruText, paramMap);
                if (!ruVal.includes("${")) this.registerKey(translations, 'ru', finalKey, ruVal);
            }
            if (neighbors.zhText) {
                const zhVal = this.convertTemplateToKey(neighbors.zhText, paramMap);
                if (!zhVal.includes("${")) this.registerKey(translations, 'zh_Hans', finalKey, zhVal);
            }

            // 生成新代码
            const paramsStr = Object.entries(params).map(([k, v]) => `${k}: ${v}`).join(", ");
            const newCode = `message: t("${finalKey}", { ${paramsStr} })`;

            edits.push({ start: match.index, end: matchEnd, text: newCode });
            edits.push(...neighbors.edits);
        }

        return this.applyEdits(content, edits);
    }

    processParallelAssignments(content, translations) {
        // 匹配 message += "..." 或 varName = "..."
        const regex = /(\w+)\s*(\+?=)\s*([`"'])([\s\S]*?)\3\s*([,;]?)/g;
        let match;
        const edits = [];

        while ((match = regex.exec(content)) !== null) {
            const [fullMatch, varName, op, quote, enText, separator] = match;
            const matchEnd = match.index + fullMatch.length;

            // 构建动态正则来匹配 varName_RU += ...
            const opEscaped = op.replace('+', '\\+');
            const neighbors = this.findNeighboringTranslations(
                content,
                matchEnd,
                new RegExp(`${varName}(?:_ru|_RU)\\s*${opEscaped}\\s*([${quote}])([\\s\\S]*?)\\1\\s*[,;]?`),
                new RegExp(`${varName}(?:_zh|_ZH|_zh_Hans)\\s*${opEscaped}\\s*([${quote}])([\\s\\S]*?)\\1\\s*[,;]?`)
            );

            // 只有当找到了至少一个对应的翻译，或者它是模板字符串时，才尝试迁移，避免误伤普通变量赋值
            if (!neighbors.ruText && !neighbors.zhText && !enText.includes("${")) {
                // 如果只是单纯的变量赋值且没有翻译，这里选择跳过，还是强制转换？
                // 原脚本逻辑是只要找到 message += 且 context 内有 message_RU 就会处理。
                // 这里的逻辑稍微保守一点：如果没有 RU/ZH 且不是模板，可能是普通逻辑代码。
                // 但为了保持原脚本行为，我们只检查是否匹配到了结构。
                // 这里我们假设只要匹配到 pattern 就处理（通常这些文件很规范）。
            }

            // 但通常只有找到翻译对时才认为是需要提取的消息
            if (!neighbors.ruText && !neighbors.zhText && varName !== 'message') {
                continue; 
            }

            let newCode;
            let finalKey;

            if (enText.includes("${")) {
                let { key, params, paramMap } = this.parseTemplate(enText);
                finalKey = this.registerKey(translations, 'en', key);

                if (neighbors.ruText) {
                    const val = this.convertTemplateToKey(neighbors.ruText, paramMap);
                    if (!val.includes("${")) this.registerKey(translations, 'ru', finalKey, val);
                }
                if (neighbors.zhText) {
                    const val = this.convertTemplateToKey(neighbors.zhText, paramMap);
                    if (!val.includes("${")) this.registerKey(translations, 'zh_Hans', finalKey, val);
                }

                const paramsStr = Object.entries(params).map(([k, v]) => `${k}: ${v}`).join(", ");
                newCode = `${varName} ${op} t("${finalKey}"${paramsStr ? `, { ${paramsStr} }` : ''})${separator}`;
            } else {
                finalKey = this.registerKey(translations, 'en', enText);
                if (neighbors.ruText) this.registerKey(translations, 'ru', finalKey, neighbors.ruText);
                if (neighbors.zhText) this.registerKey(translations, 'zh_Hans', finalKey, neighbors.zhText);
                
                newCode = `${varName} ${op} t(${JSON.stringify(finalKey)})${separator}`;
            }

            edits.push({ start: match.index, end: matchEnd, text: newCode });
            edits.push(...neighbors.edits);
        }

        return this.applyEdits(content, edits);
    }

    parseTemplate(text) {
        const params = {};
        const paramMap = {};
        let key = text;
        let argIndex = 0;

        const matches = [];
        const regex = /\$\{([^}]+)\}/g;
        let match;
        
        while ((match = regex.exec(text)) !== null) {
            matches.push({ full: match[0], expr: match[1] });
        }

        for (const m of matches) {
            let paramName = m.expr.split(".").pop().replace(/[^a-zA-Z0-9_]/g, "");
            if (!paramName || params[paramName]) {
                paramName = `arg${argIndex++}`;
            }
            params[paramName] = m.expr;
            const placeholder = `{${paramName}}`;
            paramMap[m.full] = placeholder;
            key = key.replace(m.full, placeholder); // 注意：这里简单替换，如果多次出现相同变量没问题
        }
        return { key, params, paramMap };
    }

    convertTemplateToKey(text, paramMap) {
        let result = text;
        for (const [expr, placeholder] of Object.entries(paramMap)) {
            result = result.split(expr).join(placeholder);
        }
        return result;
    }

    cleanupLegacyKeys(content) {
        const valuePattern = "(?:[^,}\\n`\"']|`[^`]*`|\"[^\"]*\"|'[^']*'|\\([^)]*\\))+";
        const regex = new RegExp(`,\\s*(message_RU|message_zh)\\s*:\\s*${valuePattern}`, "g");
        content = content.replace(regex, "");
        const quotedRegex = new RegExp(`,\\s*["'](message_RU|message_zh)["']\\s*:\\s*${valuePattern}`, "g");
        return content.replace(quotedRegex, "");
    }

    findContextEnd(content, startIndex) {
        let i = startIndex;
        let inString = false;
        let stringChar = '';
        let braceDepth = 0;
        const len = content.length;

        while (i < len) {
            const char = content[i];
            if (inString) {
                if (char === '\\') i++;
                else if (char === stringChar) inString = false;
            } else {
                if (char === '/' && content[i + 1] === '/') {
                    const nextLine = content.indexOf('\n', i);
                    if (nextLine === -1) return len;
                    i = nextLine;
                    continue;
                }
                if (char === '"' || char === "'" || char === '`') {
                    inString = true;
                    stringChar = char;
                } else if (char === '{') {
                    braceDepth++;
                } else if (char === '}') {
                    if (braceDepth === 0) return i;
                    braceDepth--;
                }
            }
            i++;
        }
        return len;
    }

    applyEdits(content, edits) {
        if (edits.length === 0) return content;
        // 去重和排序，避免重叠编辑导致错误
        edits.sort((a, b) => b.start - a.start);
        
        // 简单的重叠检测
        for(let i=0; i<edits.length-1; i++) {
            if(edits[i].start < edits[i+1].end) {
                // 如果发现重叠，跳过较前面的编辑（或者报错）
                // 在这里我们假设正则逻辑正确，不会产生交错重叠
                continue; 
            }
        }

        for (const edit of edits) {
            content = content.substring(0, edit.start) + edit.text + content.substring(edit.end);
        }
        return content;
    }

    saveTranslations(dungeonId, translations) {
        const dungeonDir = path.join(this.i18nDir, dungeonId);
        if (!fs.existsSync(dungeonDir)) fs.mkdirSync(dungeonDir, { recursive: true });

        for (const lang of ["en", "ru", "zh_Hans"]) {
            if (Object.keys(translations[lang]).length > 0) {
                const filePath = path.join(dungeonDir, `${lang}.json`);
                let existing = {};
                if (fs.existsSync(filePath)) {
                    try { existing = JSON.parse(fs.readFileSync(filePath, "utf8")); } catch (e) {}
                }
                // 合并时，新提取的覆盖旧的，或者保留旧的？这里选择新提取的优先
                const merged = { ...existing, ...translations[lang] };
                
                // 按 Key 排序，美观
                const sorted = {};
                Object.keys(merged).sort().forEach(key => sorted[key] = merged[key]);

                fs.writeFileSync(filePath, JSON.stringify(sorted, null, 2), "utf8");
            }
        }
        console.log(`  Saved translations to i18n/${dungeonId}/`);
    }
}

if (require.main === module) {
    const args = process.argv.slice(2);
    const command = args[0];
    const migrator = new MigrationTool(path.join(__dirname, "../..")); 

    switch (command) {
        case "migrate":
            migrator.migrateAll();
            break;
        case "migrate-one":
            if (!args[1]) {
                console.error("Usage: node migrate-to-i18n.js migrate-one <dungeonId>");
                process.exit(1);
            }
            migrator.migrateDungeon(args[1]);
            break;
        default:
            console.log("Usage: node migrate-to-i18n.js [migrate|migrate-one <id>]");
    }
}

module.exports = MigrationTool;