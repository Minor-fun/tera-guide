// Escape from Balder's Refuge
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang, t) => {
	return {
		"nd-620-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-620-1000-107-0": [{ type: "text", sub_type: "message", message: t("Attack (Back)") }],
		"s-620-1000-115-0": [{ type: "text", sub_type: "message", message: t("Fireballs") }],
		"s-620-1000-127-0": [
			{ type: "text", sub_type: "message", message: t("Jump Back") },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 376, 12, 232, 0, 6750] }
		],
		"s-620-1000-120-0": [{ type: "text", sub_type: "message", message: t("Fire Wave") }],
		"s-620-1000-121-0": [{ type: "text", sub_type: "message", message: t("Repel (Dodge)") }],
		"s-620-1000-119-0": [{ type: "text", sub_type: "message", message: t("Explosion | In") }],
		"s-620-1000-108-0": [{ type: "text", sub_type: "message", message: t("Attack (Back)") }],
		"s-620-1000-103-0": [{ type: "text", sub_type: "message", message: t("Stun Frontal") }],
		"s-620-1000-209-0": [{ type: "text", sub_type: "message", message: t("Back to Middle + Fireballs") }],
		"s-620-1000-125-0": [{ type: "text", sub_type: "message", message: t("Fireballs") }],

		"s-620-1001-303-0": [{ type: "text", sub_type: "message", message: t("AOE") }],
		"s-620-1002-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1003-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1004-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1005-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],

		"s-620-1000-129-0": [{ type: "text", sub_type: "message", message: t("Fireballs") }],
		"s-620-1000-106-0": [{ type: "text", sub_type: "message", message: t("Random Jump") }]
	};
};