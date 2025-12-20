"use strict";

const fs = require("fs");
const path = require("path");

/**
 * i18n Translation Manager
 * Scans and loads translation files organized by dungeon ID
 */
class I18nManager {
	constructor(baseDir) {
		this.baseDir = baseDir;
		this.i18nDir = path.join(baseDir, "i18n");
		this.translations = {}; // { dungeonId: { lang: { key: value } } }
		this.supportedLanguages = new Set(["en"]);
		this.loadAllTranslations();
	}

	loadAllTranslations() {
		if (!fs.existsSync(this.i18nDir)) {
			fs.mkdirSync(this.i18nDir, { recursive: true });
			return;
		}

		const dungeonDirs = fs.readdirSync(this.i18nDir, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => dirent.name);

		for (const dungeonId of dungeonDirs) {
			const dungeonPath = path.join(this.i18nDir, dungeonId);
			this.translations[dungeonId] = {};

			const langFiles = fs.readdirSync(dungeonPath)
				.filter(file => file.endsWith(".json"));

			for (const langFile of langFiles) {
				const lang = path.basename(langFile, ".json").toLowerCase();
				const filePath = path.join(dungeonPath, langFile);

				try {
					const content = fs.readFileSync(filePath, "utf8");
					this.translations[dungeonId][lang] = JSON.parse(content);
					this.supportedLanguages.add(lang);
				} catch (e) {
					// Skip invalid files
				}
			}
		}
	}

	getSupportedLanguages() {
		return Array.from(this.supportedLanguages);
	}

	/**
	 * Get translation for a specific key
	 * @param {string} dungeonId
	 * @param {string} key - English original text
	 * @param {string} lang - Target language
	 * @returns {string|null}
	 */
	getTranslation(dungeonId, key, lang) {
		const dungeonTranslations = this.translations[dungeonId] || {};
		const langTranslations = dungeonTranslations[lang] || {};
		
		if (langTranslations[key]) return langTranslations[key];
		
		// Try case-insensitive match
		const normalize = s => s.replace(/\s+/g, '').toLowerCase();
		const target = normalize(key);
		const match = Object.keys(langTranslations).find(k => normalize(k) === target);
		return match ? langTranslations[match] : null;
	}

	/**
	 * Create translator function for dungeon scripts
	 * @param {string} dungeonId
	 * @param {string} lang
	 * @returns {function} t(key, params)
	 */
	createTranslator(dungeonId, lang) {
		const langTranslations = (this.translations[dungeonId] || {})[lang] || {};

		return (key, params = null) => {
			let text = langTranslations[key];
			
			if (!text) {
				// Try case-insensitive match
				const normalize = s => s.replace(/\s+/g, '').toLowerCase();
				const target = normalize(key);
				const match = Object.keys(langTranslations).find(k => normalize(k) === target);
				text = match ? langTranslations[match] : key;
			}

			// Replace {param} placeholders
			if (params && typeof params === "object") {
				for (const [paramKey, paramValue] of Object.entries(params)) {
					text = text.split(`{${paramKey}}`).join(String(paramValue));
				}
			}

			// Return String object with metadata for TTS
			const result = new String(text);
			result.__key = key;
			result.__hasParams = params !== null && Object.keys(params || {}).length > 0;
			return result;
		};
	}
}

module.exports = I18nManager;
