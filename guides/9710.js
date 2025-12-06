// Broken Prison
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"s-710-1000-102-0": [{ type: "text", sub_type: "message", message: t("Pushback (Kaia)") }],
		"s-710-1000-105-0": [{ type: "text", sub_type: "message", message: t("Bait (DoT)") }],
		"s-710-1000-113-0": [{ type: "text", sub_type: "message", message: t("DoT - Out") }],
		"s-710-1000-119-0": [{ type: "text", sub_type: "message", message: t("Stun") }],
		"s-710-1000-303-0": [{ type: "text", sub_type: "message", message: t("Mechanics") }],
		"s-710-1000-304-0": [
			{ type: "text", sub_type: "message", message: t("Plague of Exhaustion"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Regression"), class_position: "mystic" }
		],

		// 2 BOSS
		"s-710-2000-102-0": [{ type: "text", sub_type: "message", message: t("Stun") }],
		"s-710-2000-110-0": [{ type: "text", sub_type: "message", message: t("Cleanse") }],
		"s-710-2000-111-0": [{ type: "text", sub_type: "message", message: t("Stun") }],
		"s-710-2000-115-0": [{ type: "text", sub_type: "message", message: t("Damage - Stun") }],
		"s-710-2000-116-0": [{ type: "text", sub_type: "message", message: t("Bait") }],
		"s-710-2000-118-0": [{ type: "text", sub_type: "message", message: t("Laser 360") }],

		// 3 BOSS
		"s-710-3000-302-0": [{ type: "text", sub_type: "message", message: t("Keep BLUE") }],
		"s-710-3000-301-0": [{ type: "text", sub_type: "message", message: t("Stand at the portal") }],
		"s-710-3000-106-0": [{ type: "text", sub_type: "message", message: t("Back attack") }],
		"s-710-3000-102-0": [{ type: "text", sub_type: "message", message: t("Spin (Kaia)") }],
		"s-710-3000-110-0": [{ type: "text", sub_type: "message", message: t("Get Out") }],
		"s-710-3000-205-0": [{ type: "text", sub_type: "message", message: t("Mechanics") }],
		"s-710-3000-107-0": [{ type: "text", sub_type: "message", message: t("Back attack") }],
		"s-710-3000-109-0": [{ type: "text", sub_type: "message", message: t("Spin (Kaia)") }],
		"s-710-3000-111-0": [{ type: "text", sub_type: "message", message: t("Get In") }],
		"s-710-3000-115-0": [{ type: "text", sub_type: "message", message: t("Bait attack") }]
	};
};