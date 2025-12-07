// Kezzel's Gorge
//
// Made by Multarix

module.exports = (dispatch, handlers, guide, lang, t) => {
	return {
		"nd-453-999": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-453-999-103-0": [{ type: "text", sub_type: "message", message: t("Smash (Left)") }],
		"s-453-999-104-0": [{ type: "text", sub_type: "message", message: t("Smash (Right)") }],
		"s-453-999-105-0": [
			{ type: "text", sub_type: "message", message: t("Rock Smash"), class_position: "tank" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 210, 14, 190, 0, 3000] }
		],
		"s-453-999-106-0": [
			{ type: "text", sub_type: "message", message: t("Blast") },
			{ type: "text", sub_type: "message", message: t("Dodge!"), delay: 2000 }
		],
		"s-453-999-107-0": [{ type: "text", sub_type: "message", message: t("Whip") }],
		"s-453-999-116-0": [{ type: "text", sub_type: "message", message: t("Shield") }],
		"s-453-999-119-0": [
			{ type: "text", sub_type: "message", message: t("Kaia's Shield"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Thrall of Protection"), class_position: "mystic" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 500, 0, 6000] }
		],
		"s-453-999-120-0": [
			{ type: "text", sub_type: "message", message: t("AoE Waves") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 14, 200, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 390, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 590, 0, 7000] }
		]
	};
};