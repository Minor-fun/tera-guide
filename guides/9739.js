// Red Refuge
//
// made by multarix

module.exports = (dispatch, handlers, guide, lang, t) => {
	return {
		// 1 BOSS
		"nd-739-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-739-1000-105-0": [{ type: "text", sub_type: "message", message: t("Turn + Breath") }],
		"s-739-1000-308-0": [
			{ type: "text", sub_type: "message", message: t("In > Out") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] }
		],
		"s-739-1000-308-1": [{ type: "text", sub_type: "message", message: t("Out") }],
		"s-739-1000-112-0": [{ type: "text", sub_type: "message", message: t("Back Spray") }],
		"s-739-1000-107-0": [{ type: "text", sub_type: "message", message: t("Jump") }],
		"s-739-1000-306-0": [
			{ type: "text", sub_type: "message", message: t("Out > In") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] }
		],
		"s-739-1000-306-1": [{ type: "text", sub_type: "message", message: t("In") }],

		// 2 BOSS
		"nd-739-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-739-2000-105-0": [
			{ type: "text", sub_type: "message", message: t("360") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 510, 0, 2500] }
		],
		"s-739-2000-113-0": [{ type: "text", sub_type: "message", message: t("Stun") }],
		"s-739-2000-108-0": [
			{ type: "text", sub_type: "message", message: t("Cleanse"), class_position: "heal" },
			{ type: "text", sub_type: "message", message: t("Spin"), class_position: ["tank", "dps"] }
		],
		"s-739-2000-115-0": [
			{ type: "text", sub_type: "message", message: t("Whirlwind") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 360, 0, 6500] }
		],
		"s-739-2000-119-0": [{ type: "text", sub_type: "message", message: t("Front") }],
		"s-739-2000-120-0": [{ type: "text", sub_type: "message", message: t("Back") }],
		"s-739-2000-303-0": [
			{ type: "text", sub_type: "message", message: t("Whip") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1650 }
		],

		// 3 BOSS
		"nd-739-3001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-739-3001-30": [{ type: "text", sub_type: "message", message: t("Reveal soon...") }],
		"s-739-3001-201-0": [
			{ type: "text", sub_type: "message", message: t("Stun (Pushback)") },
			{ type: "text", sub_type: "message", delay: 1000, message: t("3") },
			{ type: "text", sub_type: "message", delay: 2000, message: t("2") },
			{ type: "text", sub_type: "message", delay: 3000, message: t("1") },
			{ type: "text", sub_type: "message", delay: 4000, message: t("Dodge!") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 5000] }
		],
		"s-739-3001-107-0": [{ type: "text", sub_type: "message", message: t("Many Hits") }],
		"s-739-3001-112-0": [{ type: "text", sub_type: "message", message: t("Target") }],
		"s-739-3001-115-0": [
			{ type: "text", sub_type: "message", message: t("Incoming Stun") },
			{ type: "text", sub_type: "message", delay: 1800, message: t("Dodge!") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-739-3001-118-0": [{ type: "text", sub_type: "message", message: t("Scratching") }],
		"s-739-3001-164-0": [{ type: "text", sub_type: "message", message: t("Counter Attack (bleed)") }],
		"s-739-3001-167-0": [{ type: "text", sub_type: "message", message: t("Many Hits") }],
		"s-739-3001-172-0": "s-739-3001-112-0",
		"s-739-3001-301-0": "s-739-3001-112-0",
		"s-739-3001-302-0": "s-739-3001-112-0",
		"s-739-3001-170-0": [
			{ type: "text", sub_type: "message", message: t("Turn + Pushback") },
			{ type: "text", sub_type: "message", message: t("Pushback"), delay: 2700 }
		],
		"s-739-3001-175-0": [
			{ type: "text", sub_type: "message", message: t("Incoming Stun") },
			{ type: "text", sub_type: "message", delay: 1800, message: t("Dodge!") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-739-3001-177-0": [{ type: "text", sub_type: "message", message: t("Backstab") }],
		"s-739-3001-178-0": [{ type: "text", sub_type: "message", message: t("Scratching (bleed)") }],
		"s-739-3001-203-0": [{ type: "text", sub_type: "message", message: t("Phantom x3 (bleed)") }],
		"s-739-3001-207-0": [{ type: "text", sub_type: "message", message: t("Phantom x5 (bleed)") }],
		"s-739-3001-213-0": [{ type: "text", sub_type: "message", message: t("Reveal | Phantom (bleed)") }],
		"s-739-3001-212-0": [{ type: "text", sub_type: "message", message: t("Flash") }]
	};
};