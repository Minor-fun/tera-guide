"use strict";

const DefaultSettings = {
	"enabled": true,
	"stream": false,
	"lNotice": false,
	"gNotice": false,
	"spawnObject": true,
	"speech": {
		"enabled": false,
		"rate": 2,
		"volume": 100,
		"gender": "female"
	},
	"cc": [
		"</font><font color=\"#ffff00\">"
	],
	"language": "auto",
	"dungeons": {},
	"debug": {
		"chat": true,
		"all": false,
		"s": false,
		"e": false,
		"am": false,
		"ae": false,
		"ab": false,
		"ar": false,
		"ad": false,
		"h": false,
		"ns": false,
		"nd": false,
		"rb": false,
		"re": false,
		"dm": false,
		"qb": false
	},
	"onlineTTS": {
		"enabled": false,
		"apiKey": "",
		"voices": {},
		"defaultVoice": "",
		"rate": 1
	}
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
	if (from_ver === undefined) return { ...DefaultSettings, ...settings };
	else if (from_ver === null) return DefaultSettings;
	else {
		from_ver = Number(from_ver);
		to_ver = Number(to_ver);

		if (from_ver + 0.01 < to_ver) {
			settings = MigrateSettings(from_ver, from_ver + 0.01, settings);
			return MigrateSettings(from_ver + 0.01, to_ver, settings);
		}

		const oldsettings = settings;
		settings = Object.assign(DefaultSettings, {});

		to_ver = Math.round(to_ver * 100) / 100;

		switch (to_ver) {
			case 1.12:
				for (const option in oldsettings) {
					if (option === "dungeons" && Array.isArray(oldsettings[option])) {
						settings[option] = {};
						for (const element of oldsettings[option]) {
							const id = element.id;
							delete element.id;
							settings[option][id] = element;
						}
						continue;
					} else
						settings[option] = oldsettings[option];
				}
				return settings;

			case 1.13:
				remove(["dbg.json", "lib.js", "dispatch.js", "voice/index.js", "voice"]);
				break;

			case 1.14:
				oldsettings["debug"] = settings["debug"];
				break;

			case 1.15:
				for (const option in oldsettings) {
					if (option === "speaks")
						settings["speech"]["enabled"] = oldsettings["speaks"];
					else if (option === "rate")
						settings["speech"]["rate"] = parseInt(oldsettings["rate"]);
					else
						settings[option] = oldsettings[option];
				}
				return settings;
				
			case 1.16:
				if (!oldsettings.onlineTTS) {
					settings.onlineTTS = DefaultSettings.onlineTTS;
				} else {
					const oldOnlineTTS = oldsettings.onlineTTS;
					settings.onlineTTS = {
						"enabled": oldOnlineTTS.enabled || false,
						"apiKey": oldOnlineTTS.apiKey || "",
						"voices": oldOnlineTTS.voices || {},
						"defaultVoice": oldOnlineTTS.defaultVoice || "",
						"rate": oldOnlineTTS.rate || 1
					};
				}
				break;
		}

		for (const option in oldsettings) {
			if (settings[option] !== undefined)
				settings[option] = oldsettings[option];
		}

		return settings;
	}

	function remove(files) {
		const fs = require("fs"), path = require("path");
		try {
			for (const file of files) {
				const filePath = path.join(__dirname, file);
				if (fs.existsSync(filePath)) {
					if (fs.lstatSync(filePath).isDirectory())
						fs.rmdirSync(filePath);
					else
						fs.unlinkSync(filePath);
				}
			}
		} catch (e) {}
	}
};