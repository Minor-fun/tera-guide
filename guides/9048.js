// Sanctum of the Fire God
//
// made by michengs / Emilia-s2 / HSDN / Vampic / NoobLevelUP

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	const { player } = dispatch.require.library;
	let print_loading = true;
	let print_lasers = true;

	function waves_event() {
		handlers.event([
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 400, 0, 6000] },
			{ type: "text", sub_type: "alert", delay: 60000, message: t("Waves soon...") }
		]);
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 90442502) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: t("Laser on you") });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: t("Laser on {name}", { name: member.name })
					});
				}
			}
		}
	});

	// New Laser
	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 90442503) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: t("Laser on you") });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: t("Laser on {name}", { name: member.name })
					});
				}
			}
		}
	});

	return {
		// PHASE 2
		"nd-448-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-448-2000": [
			{ type: "spawn", func: "marker", args: [false, 0, -700, 100, 60000000, false, ["Throne", "Throne Direction", "王座", "王座方向"]] },
			{ type: "spawn", func: "point", args: [513, 0, 800, 100, 60000000] },
			{ type: "func", func: () => print_loading = true },
			{ type: "func", func: () => print_lasers = true }
		],
		// Not enraged
		"s-448-2000-1101-0": [
			{ type: "text", sub_type: "message", message: t("4 Hit Combo") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 195, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 3000] }
		],
		"s-448-2000-1103-0": [
			{ type: "text", sub_type: "message", message: t("Front (Dodge)") },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-448-2000-1107-0": [{ type: "text", sub_type: "message", message: t("4 Hit (3)") }],

		"s-448-2000-3202-0": [ // After 4 Hit Donuts Enraged
			{ type: "text", sub_type: "message", message: t("IN - OUT ") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 300, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 575, 0, 4000] }
		],

		"s-448-2000-3102-0": [ // After 4 Hit Donuts Non-Rnraged
			{ type: "text", sub_type: "message", message: t("IN - OUT ") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 300, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 575, 0, 4000] }
		],

		"s-448-2000-1108-0": [
			{ type: "text", sub_type: "message", message: t("Back Throw") },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 250, 12, 300, 100, 3000] }
		],
		"s-448-2000-1111-0": [
			{ type: "text", sub_type: "message", message: t("Back") },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 1500, 2000] }
		],
		"s-448-2000-1112-0": [
			{ type: "text", sub_type: "message", message: t("Perfect Defense (Fast)") },
			{ type: "text", sub_type: "message", delay: 1200, message: t("Block") },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-448-2000-1113-0": [{ type: "text", sub_type: "message", message: t("Throw (Bait)") }],
		"s-448-2000-1114-0": [
			{ type: "text", sub_type: "message", message: t("Front Slam") },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-448-2000-1115-0": [{ type: "text", sub_type: "message", delay: 1100, message: t("Dodge") }], // Knockup
		"s-448-2000-1116-0": [
			{ type: "text", sub_type: "message", message: t("Donuts (In)") },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 290, 100, 2000] }
		],
		"s-448-2000-1116-1": [
			{ type: "text", sub_type: "message", message: t("Out > In") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 290, 100, 4000] }
		],
		"s-448-2000-1117-0": [{ type: "text", sub_type: "message", message: t("Jump (Bait)") }],
		"s-448-2000-1118-0": [{ type: "text", sub_type: "message", message: t("Jump (Tank)") }],
		"s-448-2000-1118-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 400, 12, 300, 100, 2000] }],
		"s-448-2000-1119-0": [
			{ type: "text", sub_type: "message", message: t("Left Swipe") },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 100, 2000, true, null] }
		],
		"s-448-2000-1120-0": [
			{ type: "text", sub_type: "message", message: t("Right Swipe") },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 100, 2000, true, null] }
		],
		"s-448-2000-1121-0": [
			{ type: "text", sub_type: "message", message: t("Waves (Left)") },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe", "安全"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe", "安全"]] }
		],
		"s-448-2000-1122-0": [
			{ type: "text", sub_type: "message", message: t("Waves (Left) 3nd fast") },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe", "安全"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe", "安全"]] }
		],
		"s-448-2000-1123-0": [
			{ type: "text", sub_type: "message", message: t("Waves (Left) 2nd fast") },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2500, false, ["safe", "safe", "安全"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2500, false, ["safe", "safe", "安全"]] }
		],
		"s-448-2000-1125-0": [
			{ type: "text", sub_type: "message", message: t("Front | Right Scratch") },
			{ type: "text", sub_type: "message", delay: 1750, message: t("Dodge") },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 2000] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, 175, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, 175, 800, 0, 3500] }
		],
		"s-448-2000-1131-0": [
			{ type: "text", sub_type: "message", message: t("Front | Left Scratch") },
			{ type: "text", sub_type: "message", delay: 1200, message: t("Dodge") },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }
		],
		"s-448-2000-1135-0": [
			{ type: "text", sub_type: "message", message: t("Perfect Defense") },
			{ type: "text", sub_type: "message", delay: 800, message: t("Block") },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-448-2000-1137-0": [
			{ type: "text", sub_type: "message", message: t("Hammer back") },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-448-2000-1138-0": [{ type: "text", sub_type: "message", delay: 900, message: t("Dodge") }], // Knockup (Bait)
		"s-448-2000-1139-0": [{ type: "text", sub_type: "message", delay: 200, message: t("Dodge!") }],
		"s-448-2000-1140-0": [
			{ type: "text", sub_type: "message", message: t("Waves (Right)") },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe", "安全"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe", "安全"]] }
		],
		"s-448-2000-1141-0": [
			{ type: "text", sub_type: "message", message: t("Waves (Right) 3nd fast") },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe", "安全"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe", "安全"]] }
		],
		"s-448-2000-1142-0": [
			{ type: "text", sub_type: "message", message: t("Waves (Right) 2nd fast") },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2500, false, ["safe", "safe", "安全"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2500, false, ["safe", "safe", "安全"]] }
		],
		"s-448-2000-1307-0": [
			{ type: "text", sub_type: "message", message: t("!") },
			{ type: "text", sub_type: "message", delay: 20000, message: t("Last aerolite") }
		],
		"s-448-2000-1308-0": [{ type: "text", sub_type: "message", message: t("Stun (1)") }],
		"s-448-2000-1309-0": [{ type: "text", sub_type: "message", message: t("Stun (2)") }],
		"s-448-2000-1310-0": [{ type: "text", sub_type: "message", message: t("Stun (3)") }],
		"s-448-2000-1311-0": [
			{ type: "text", sub_type: "message", message: t("Wrath (Kaia)") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		"s-448-2000-1312-0": [
			{ type: "text", sub_type: "message", message: t("Wrath (Kaia)") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		// Enraged
		"s-448-2000-2101-0": "s-448-2000-1101-0",
		"s-448-2000-2103-0": "s-448-2000-1103-0",
		"s-448-2000-2107-0": "s-448-2000-1107-0",
		"s-448-2000-2108-0": "s-448-2000-1108-0",
		"s-448-2000-2111-0": "s-448-2000-1111-0",
		"s-448-2000-2112-0": [
			{ type: "text", sub_type: "notification", delay: 1000, message: t("Perfect Defense x2 (Slow)") },
			{ type: "text", sub_type: "notification", delay: 2400, message: t("Block/Dodge") },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-448-2000-2113-0": "s-448-2000-1113-0",
		"s-448-2000-2114-0": "s-448-2000-1114-0",
		"s-448-2000-2115-0": [{ type: "text", sub_type: "message", delay: 100, message: t("Dodge") }], // Knockup
		"s-448-2000-2116-0": "s-448-2000-1116-0",
		"s-448-2000-2116-1": "s-448-2000-1116-1",
		"s-448-2000-2117-0": "s-448-2000-1117-0",
		"s-448-2000-2118-0": "s-448-2000-1118-0",
		"s-448-2000-2118-1": "s-448-2000-1118-1",
		"s-448-2000-2119-0": "s-448-2000-1119-0",
		"s-448-2000-2120-0": "s-448-2000-1120-0",
		"s-448-2000-2121-0": "s-448-2000-1121-0",
		"s-448-2000-2122-0": "s-448-2000-1122-0",
		"s-448-2000-2123-0": "s-448-2000-1123-0",
		"s-448-2000-2125-0": "s-448-2000-1125-0",
		"s-448-2000-2131-0": "s-448-2000-1131-0",
		"s-448-2000-2135-0": [
			{ type: "text", sub_type: "notification", message: t("Perfect Defense x2") },
			{ type: "text", sub_type: "notification", delay: 800, message: t("Block/Dodge") },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-448-2000-2137-0": "s-448-2000-1137-0",
		"s-448-2000-2138-0": [{ type: "text", sub_type: "message", message: t("Dodge") }], // Knockup (Bait)
		"s-448-2000-2139-0": "s-448-2000-1139-0",
		"s-448-2000-2140-0": "s-448-2000-1140-0",
		"s-448-2000-2141-0": "s-448-2000-1141-0",
		"s-448-2000-2142-0": "s-448-2000-1142-0",
		//
		"s-448-2500-1201-0": [
			{ type: "event", check_func: () => print_loading, args: [
				{ type: "text", sub_type: "alert", message: t("Loading lasers...") },
				{ type: "func", func: () => print_loading = false }
			] }
		],
		"s-448-2500-1305-0": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: t("Laser") },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 4000 }
			] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 4000] }
		],
		// New Laser
		"s-448-2502-1201-0": [
			{ type: "event", check_func: () => print_loading, args: [
				{ type: "text", sub_type: "alert", message: t("Loading lasers...") },
				{ type: "func", func: () => print_loading = false }
			] }
		],
		"s-448-2502-1305-0": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: t("Laser") },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 4000 }
			] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 4000] }
		],

		"ab-448-2000-90442303": [{ type: "text", sub_type: "message", message: t("Plague/Regress") }],
		"ab-448-2000-90442304": [
			{ type: "text", sub_type: "notification", message: t("Stun"), speech: false },
			{ type: "text", sub_type: "message", message: t("Stun") }
		]
	};
};