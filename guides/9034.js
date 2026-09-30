// Dreadspire
//
// Server selector implementation

function requireNoCache(moduleFile) {
	delete require.cache[require.resolve(moduleFile)];
	return require(moduleFile);
}

function checkServerName(mod, serverName) {
	return mod.serverList[mod.serverId].name.includes(serverName) ||
		Object.values(mod.serverList).some(server => server.name.includes(serverName));
}

module.exports = (dispatch, handlers, guide, lang, t) => {
	let guideFile = "./9034_vanilla";
	let translationId = "9034_vanilla";

	if (checkServerName(dispatch._mod, "Asura")) {
		guideFile = "./9034_asura";
		translationId = "9034_asura";
	}

	// Switch translator to specific version if available
	if (dispatch._mod.i18nManager) {
		const langKey = lang && lang.language ? lang.language : "en";
		const translatedName = dispatch._mod.i18nManager.getTranslation(translationId, "@dungeon", langKey);
		t = dispatch._mod.i18nManager.createTranslator(translatedName ? translationId : "9034", langKey);

		const dungeonName = translatedName ||
			dispatch._mod.i18nManager.getTranslation("9034", "@dungeon", langKey) ||
			dispatch._mod.i18nManager.getTranslation(translationId, "@dungeon", "en");
		if (dungeonName && guide && guide.settings) guide.settings.name = dungeonName;
	}

	return requireNoCache(guideFile)(dispatch, handlers, guide, lang, t);
};
