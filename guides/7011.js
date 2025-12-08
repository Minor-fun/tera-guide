// Shadow of the Gutrends
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang, t) => {
	return {
		"nd-622-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-622-1000-206-0": [{ type: "text", sub_type: "message", message: t("Jump Back") }],
		"s-622-1000-108-1": [{ type: "text", sub_type: "message", message: t("Jump Forward") }],
		"s-622-1000-120-0": [
			{ type: "text", sub_type: "message", message: t("Right Hand"), class_position: "tank" },
			{ type: "text", sub_type: "message", message: t("Left Hand"), class_position: "heal" },
			{ type: "text", sub_type: "message", message: t("Left Hand"), class_position: "dps" }
		],
		"s-622-1000-119-0": [
			{ type: "text", sub_type: "message", message: t("Left Hand"), class_position: "tank" },
			{ type: "text", sub_type: "message", message: t("Right Hand"), class_position: "heal" },
			{ type: "text", sub_type: "message", message: t("Right Hand"), class_position: "dps" }
		],
		"s-622-1000-107-0": [
			{ type: "text", sub_type: "message", message: t("Stun Frontal") },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] }, // 85
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] }, // 380
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] } // 380
		],
		"s-622-1000-124-0": [{ type: "text", sub_type: "message", message: t("Circles (Horizontal)") }],
		"s-622-1000-123-0": [{ type: "text", sub_type: "message", message: t("Circles (Vertical)") }],
		"s-622-1000-117-0": [{ type: "text", sub_type: "message", message: t("Kicks") }],
		"am-622-1000-622001": [{ type: "text", sub_type: "message", message: t("Circles (Target)") }],
		"qb-622-1000-622004": [{ type: "text", sub_type: "message", message: t("Explosive Waves") }]
	};
};