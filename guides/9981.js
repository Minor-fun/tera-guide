// Velik's Sanctuary (Hard)
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
	let guideFile = "./9981_vanilla";
	let translationId = "9981_vanilla";

	if (checkServerName(dispatch._mod, "Asura")) {
		guideFile = "./9981_asura";
		translationId = "9981_asura";
	}

	// Switch translator to specific version if available
	if (dispatch._mod.i18nManager) {
		const langKey = lang && lang.language ? lang.language : "en";
		t = dispatch._mod.i18nManager.createTranslator(translationId, langKey);

		const dungeonName = dispatch._mod.i18nManager.getTranslation(translationId, "@dungeon", langKey) ||
			dispatch._mod.i18nManager.getTranslation(translationId, "@dungeon", "en");
		if (dungeonName && guide && guide.settings) guide.settings.name = dungeonName;
	}

	return requireNoCache(guideFile)(dispatch, handlers, guide, lang, t);
};
