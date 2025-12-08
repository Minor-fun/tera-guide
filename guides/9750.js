// Rift"s Edge (10-Person)
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"nd-750-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-750-1001-1102-0": [
			{ type: "text", sub_type: "message", message: t("Spin") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 375, 0, 3300] }
		],
		"s-750-1001-1115-0": [
			{ type: "text", sub_type: "message", message: t("Floor") },
			{ type: "spawn", func: "vector", args: [553, 50, 75, 0, 700, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, -50, 75, 0, 700, 0, 1400] }
		],
		"s-750-1001-1116-1": [
			{ type: "text", sub_type: "message", message: t("Knockdown") },
			{ type: "spawn", func: "vector", args: [553, 90, 125, 0, 1200, 0, 1600] },
			{ type: "spawn", func: "vector", args: [553, 270, 125, 0, 1200, 0, 1600] }
		],
		"s-750-1001-2102-0": [
			{ type: "text", sub_type: "message", message: t("Spin") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 375, 0, 2900] }
		],
		"s-750-1001-2115-0": [
			{ type: "text", sub_type: "message", message: t("Floor") },
			{ type: "spawn", func: "vector", args: [553, 25, 75, 0, 700, 0, 1200] },
			{ type: "spawn", func: "vector", args: [553, -25, 75, 0, 700, 0, 1200] }
		],
		"s-750-1001-2116-1": [
			{ type: "text", sub_type: "message", message: t("Knockdown") },
			{ type: "spawn", func: "vector", args: [553, 90, 125, 0, 1200, 0, 1600] },
			{ type: "spawn", func: "vector", args: [553, 270, 125, 0, 1200, 0, 1600] }
		],

		// 2 BOSS
		"nd-750-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-750-1002-1113-0": [{ type: "text", sub_type: "message", message: t("Discarding") }],
		"s-750-1002-2113-0": [{ type: "text", sub_type: "message", message: t("Discarding") }],
		"s-750-1002-1114-0": [{ type: "text", sub_type: "message", message: t("Discarding") }],
		"s-750-1002-2114-0": [{ type: "text", sub_type: "message", message: t("Discarding") }],
		"s-750-1002-1115-0": [{ type: "text", sub_type: "message", message: t("Flying Attack") }],
		"s-750-1002-2115-0": [{ type: "text", sub_type: "message", message: t("Flying Attack") }],
		"s-750-1002-1116-0": [{ type: "text", sub_type: "message", message: t("A swarm of bees") }],
		"s-750-1002-2116-0": [{ type: "text", sub_type: "message", message: t("A swarm of bees") }],
		"s-750-1002-1117-0": [{ type: "text", sub_type: "message", message: t("Rise (Kaia)") }],
		"s-750-1002-2117-0": [{ type: "text", sub_type: "message", message: t("Rise (Kaia)") }],
		"s-750-1002-1205-0": [
			{ type: "text", sub_type: "message", message: t("Plague of Exhaustion"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Regression"), class_position: "mystic" }
		],
		"s-750-1002-1210-0": [{ type: "text", sub_type: "message", message: t("Knockdown") }],
		"s-750-1002-2210-0": [{ type: "text", sub_type: "message", message: t("Knockdown") }],

		// 3 BOSS
		"nd-750-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-750-1003-1107-2": [{ type: "text", sub_type: "message", message: t("Knockdown") }],
		"s-750-1003-2107-2": [{ type: "text", sub_type: "message", message: t("Knockdown") }],
		"s-750-1003-1115-0": [{ type: "text", sub_type: "message", message: t("Knockdown") }],
		"s-750-1003-2115-0": [{ type: "text", sub_type: "message", message: t("Knockdown") }],
		"s-750-1003-1313-0": [
			{ type: "text", sub_type: "message", message: t("Column") },
			{ type: "text", sub_type: "message", delay: 8000, message: t("Dodge") }
		],
		"s-750-1003-1315-0": [
			{ type: "text", sub_type: "message", message: t("Break Shield"), class_position: ["tank", "dps"] },
			{ type: "text", sub_type: "message", message: t("Plague of Exhaustion"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Regression"), class_position: "mystic" }
		]
	};
};