"use strict";

const fs = require("fs");
const path = require("path");

/**
 * i18n Translation Manager
 * 自动扫描并加载 i18n 文件夹中的所有翻译文件
 * 支持按副本ID组织的多语言翻译
 */
class I18nManager {
	constructor(baseDir) {
		this.baseDir = baseDir;
		this.i18nDir = path.join(baseDir, "i18n");
		this.translations = {}; // { dungeonId: { lang: { key: value } } }
		this.supportedLanguages = new Set(["en"]); // 默认支持英文
		this.loadAllTranslations();
	}

	/**
	 * 扫描 i18n 文件夹，加载所有翻译文件
	 */
	loadAllTranslations() {
		if (!fs.existsSync(this.i18nDir)) {
			console.log("[i18n-manager] i18n directory not found, creating...");
			fs.mkdirSync(this.i18nDir, { recursive: true });
			return;
		}

		// 读取所有副本文件夹
		const dungeonDirs = fs.readdirSync(this.i18nDir, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => dirent.name);

		for (const dungeonId of dungeonDirs) {
			const dungeonPath = path.join(this.i18nDir, dungeonId);
			this.translations[dungeonId] = {};

			// 读取该副本下的所有语言文件
			const langFiles = fs.readdirSync(dungeonPath)
				.filter(file => file.endsWith(".json"));

			for (const langFile of langFiles) {
				const lang = path.basename(langFile, ".json"); // 如 "en", "ru", "zh"
				const filePath = path.join(dungeonPath, langFile);

				try {
					const content = fs.readFileSync(filePath, "utf8");
					this.translations[dungeonId][lang] = JSON.parse(content);
					this.supportedLanguages.add(lang);
					console.log(`[i18n-manager] Loaded ${dungeonId}/${lang}.json`);
				} catch (e) {
					console.error(`[i18n-manager] Failed to load ${filePath}:`, e.message);
				}
			}
		}

		console.log(`[i18n-manager] Supported languages: ${Array.from(this.supportedLanguages).join(", ")}`);
	}

	/**
	 * 获取支持的所有语言列表
	 */
	getSupportedLanguages() {
		return Array.from(this.supportedLanguages);
	}

	/**
	 * 创建翻译函数，用于副本脚本中
	 * @param {string} dungeonId - 副本ID（如 "9710"）
	 * @param {string} lang - 当前语言
	 * @returns {function} 翻译函数 t(key, params)
	 */
	createTranslator(dungeonId, lang) {
		const dungeonTranslations = this.translations[dungeonId] || {};
		const langTranslations = dungeonTranslations[lang] || {};

		/**
		 * 翻译函数
		 * @param {string} key - 翻译键（英文原文，可包含 {param} 占位符）
		 * @param {object} params - 参数对象（可选），用于替换占位符
		 * @returns {string} 翻译后的文本
		 */
		return (key, params = null) => {
			let text = key;

			// 1. 获取翻译文本
			if (langTranslations[key]) {
				text = langTranslations[key];
			}

			// 2. 如果有参数，进行替换
			if (params && typeof params === "object") {
				for (const [paramKey, paramValue] of Object.entries(params)) {
					// 替换所有出现的 {paramKey}
					text = text.split(`{${paramKey}}`).join(String(paramValue));
				}
			}

			return text;
		};
	}

	/**
	 * 获取指定副本的翻译数据（用于迁移或导出）
	 * @param {string} dungeonId - 副本ID
	 * @returns {object} 该副本的所有翻译数据
	 */
	getDungeonTranslations(dungeonId) {
		return this.translations[dungeonId] || {};
	}

	/**
	 * 保存翻译数据到文件
	 * @param {string} dungeonId - 副本ID
	 * @param {string} lang - 语言代码
	 * @param {object} translations - 翻译数据对象
	 */
	saveTranslations(dungeonId, lang, translations) {
		const dungeonDir = path.join(this.i18nDir, dungeonId);
		if (!fs.existsSync(dungeonDir)) {
			fs.mkdirSync(dungeonDir, { recursive: true });
		}

		const filePath = path.join(dungeonDir, `${lang}.json`);
		fs.writeFileSync(filePath, JSON.stringify(translations, null, 2), "utf8");
		console.log(`[i18n-manager] Saved ${dungeonId}/${lang}.json`);

		// 重新加载
		if (!this.translations[dungeonId]) {
			this.translations[dungeonId] = {};
		}
		this.translations[dungeonId][lang] = translations;
		this.supportedLanguages.add(lang);
	}

	/**
	 * 热加载单个翻译文件（用于 Weblate 推送后自动更新）
	 * @param {string} dungeonId - 副本ID
	 * @param {string} lang - 语言代码
	 */
	reloadTranslation(dungeonId, lang) {
		const filePath = path.join(this.i18nDir, dungeonId, `${lang}.json`);
		if (fs.existsSync(filePath)) {
			try {
				const content = fs.readFileSync(filePath, "utf8");
				if (!this.translations[dungeonId]) {
					this.translations[dungeonId] = {};
				}
				this.translations[dungeonId][lang] = JSON.parse(content);
				this.supportedLanguages.add(lang);
				console.log(`[i18n-manager] Reloaded ${dungeonId}/${lang}.json`);
				return true;
			} catch (e) {
				console.error(`[i18n-manager] Failed to reload ${filePath}:`, e.message);
				return false;
			}
		}
		return false;
	}
}

module.exports = I18nManager;
