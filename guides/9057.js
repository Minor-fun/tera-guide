// Akeron's Inferno (Hard)
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	let mech_enable = true;

	return {
		// 1 BOSS
		"nd-457-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1001-1104-0": [{ type: "text", sub_type: "message", message: t("Right Hand (Push)") }],
		"s-457-1001-1117-0": [{ type: "text", sub_type: "message", message: t("Kick (Smash)") }],
		"s-457-1001-1118-0": [{ type: "text", sub_type: "message", message: t("Random Jump") }],
		"s-457-1001-1116-0": [{ type: "text", sub_type: "message", message: t("Jumps (Tank)") }],
		"s-457-1001-1107-0": [{ type: "text", sub_type: "message", message: t("Front") }],
		"s-457-1001-1206-0": [{ type: "text", sub_type: "message", message: t("Jump Back") }],
		"s-457-1001-1109-0": [{ type: "text", sub_type: "message", message: t("Front AoE") }],
		"s-457-1001-1108-0": [{ type: "text", sub_type: "message", message: t("Random Jump") }],
		"s-457-1001-2104-0": "s-457-1001-1104-0",
		"s-457-1001-2117-0": "s-457-1001-1117-0",
		"s-457-1001-2118-0": "s-457-1001-1118-0",
		"s-457-1001-2116-0": "s-457-1001-1116-0",
		"s-457-1001-2107-0": "s-457-1001-1107-0",
		"s-457-1001-2206-0": "s-457-1001-1206-0",
		"s-457-1001-2109-0": "s-457-1001-1109-0",
		"s-457-1001-2108-0": "s-457-1001-1108-0",

		// 2 BOSS
		"nd-457-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1002-1105-0": [{ type: "text", sub_type: "message", message: t("Fire Breath") }],
		"s-457-1002-1108-0": [{ type: "text", sub_type: "message", message: t("Fire Bombs") }],
		"s-457-1002-1109-0": [{ type: "text", sub_type: "message", message: t("Swim + Back Attack") }],
		"s-457-1002-1206-0": [{ type: "text", sub_type: "message", message: t("Jump + Random Target") }],
		"s-457-1002-1204-0": [{ type: "text", sub_type: "message", message: t("Large AoE"), delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 630, 3000, 4000] }
		],
		"s-457-1002-1107-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-457-1002-1106-1": [{ type: "text", sub_type: "message", message: t("AoE + Side Flames"), delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 3000, 4000] }
		],
		"s-457-1002-1112-0": [{ type: "text", sub_type: "message", message: t("Target Fireball") }],
		"s-457-1002-2105-0": "s-457-1002-1105-0",
		"s-457-1002-2108-0": "s-457-1002-1108-0",
		"s-457-1002-2109-0": "s-457-1002-1109-0",
		"s-457-1002-2206-0": "s-457-1002-1206-0",
		"s-457-1002-2204-0": "s-457-1002-1204-0",
		"s-457-1002-2107-0": "s-457-1002-1107-0",
		"s-457-1002-2106-1": "s-457-1002-1106-1",
		"s-457-1002-2112-0": "s-457-1002-1112-0",

		// 3 BOSS
		"nd-457-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1003-1105-0": [{ type: "text", sub_type: "message", message: t("AoE") }],
		"s-457-1003-1203-0": [{ type: "text", sub_type: "message", message: t("Spin Cut Attack") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 100, 4000] }
		],
		"s-457-1003-1110-0": [{ type: "text", sub_type: "message", message: t("Poison (Circle)") }],
		"s-457-1003-2105-0": "s-457-1003-1105-0",
		"s-457-1003-2203-0": "s-457-1003-1203-0",
		"s-457-1003-2110-0": "s-457-1003-1110-0",

		// 4 BOSS
		"nd-457-1004": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-457-1004-99": [{ type: "func", func: () => mech_enable = true }],
		"h-457-1004-20": [{ type: "func", func: () => mech_enable = false }],
		"s-457-1004-1105-0": [{ type: "text", sub_type: "message", message: t("Frontal Hit") }],
		"s-457-1004-1106-0": [
			{ type: "text", sub_type: "message", message: t("Random Shot") },
			{ type: "spawn", func: "vector", args: [912, 459, 120, 12, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 251, 100, -13, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 360, 0, 0, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 250, 70, -6, 1150, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 460, 70, 6, 1150, 0, 3000] }
		],
		"s-457-1004-1107-0": [
			{ type: "text", sub_type: "message", message: t("Random Whip") },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 900, 0, 2000] }
		],
		"s-457-1004-1108-0": [{ type: "text", sub_type: "message", message: t("Earth Line") }],
		"s-457-1004-1111-0": [{ type: "text", sub_type: "message", message: t("Stomp Combo") }],
		"s-457-1004-3108-0": [{ type: "text", sub_type: "message", message: t("Dodge") }],
		"s-457-1004-3105-0": [{ type: "text", sub_type: "message", message: t("AoE Attack") }],
		"s-457-1004-3106-0": [{ type: "text", sub_type: "message", message: t("Donut AoE") }],
		"s-457-1004-3103-0": [{ type: "text", sub_type: "message", message: t("AoE Stomp") }],
		"s-457-1004-4201-0": [{ type: "text", sub_type: "message", message: t("Lava") },
			{ type: "text", sub_type: "message", message: t("Safe Circles"), delay: 1500 },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -83453, y: 100168, z: 3389 } },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -83453, y: 100168, z: 3389, w: -2.36 }, ownerName: "SAFE", message: t("SAFE") },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -83463, y: 99177, z: 3389 } },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -83463, y: 99177, z: 3389, w: 2.38 }, ownerName: "SAFE", message: t("SAFE") },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -84461, y: 99186, z: 3389 } },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -84461, y: 99186, z: 3389, w: 0.80 }, ownerName: "SAFE", message: t("SAFE") },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 12000, pos: { x: -84452, y: 100173, z: 3389 } },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 12000, pos: { x: -84452, y: 100173, z: 3389, w: -0.79 }, ownerName: "SAFE", message: t("SAFE") }
		],
		"qb-457-405-457016": [{ type: "text", sub_type: "message", message: t("SHIELD") }],
		"qb-457-1004-457003": [{ type: "text", sub_type: "notification", message: t("Kill Minions"), check_func: () => mech_enable }],
		"s-457-1004-2105-0": "s-457-1004-1105-0",
		"s-457-1004-2106-0": "s-457-1004-1106-0",
		"s-457-1004-2107-0": "s-457-1004-1107-0",
		"s-457-1004-2108-0": "s-457-1004-1108-0",
		"s-457-1004-2111-0": "s-457-1004-1111-0"
	};
};