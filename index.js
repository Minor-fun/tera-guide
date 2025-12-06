"use strict";

const path = require("path");
const I18nManager = require("./lib/i18n-manager");

module.exports.NetworkMod = function (mod) {
	try {
		// 初始化 i18n 管理器
		const i18nManager = new I18nManager(__dirname);
		const supportedLanguages = i18nManager.getSupportedLanguages();

		// 将 i18n 管理器注入到 mod 对象中，供 tera-guide-core 使用
		mod.i18nManager = i18nManager;

		mod.require["tera-guide-core"].load(mod, {
			languages: supportedLanguages, // 自动检测支持的语言
			colors: { gui: {}, general: {} }, // color settings
			command: ["guide"], // module command
			chat_name: "Guide", // set chat author name for notices
		});
	} catch (e) {
		mod.error("Warning!\nDepended module \"tera-guide-core\" needed for TERA-Guide is not installed!\nPlease download and install: https://github.com/hsdn/tera-guide-core\n");
		throw e;
	}
};