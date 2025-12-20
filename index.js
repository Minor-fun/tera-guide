"use strict";

const I18nManager = require("./lib/i18n-manager");

module.exports.NetworkMod = function (mod) {
	try {
		const i18nManager = new I18nManager(__dirname);
		const supportedLanguages = i18nManager.getSupportedLanguages();

		mod.i18nManager = i18nManager;

		mod.require["tera-guide-core"].load(mod, {
			languages: supportedLanguages, 
			colors: { gui: {}, general: {} }, 
			command: ["guide"], 
			chat_name: "Guide",
			// Configure TTS cache to be in the guide plugin folder
			ttsConfig: {
				basePath: __dirname,
				cacheDir: "tts_cache"
			}
		});
	} catch (e) {
		mod.error("Warning!\nDepended module \"tera-guide-core\" needed for TERA-Guide is not installed!\nPlease download and install: https://github.com/hsdn/tera-guide-core\n");
		throw e;
	}
};