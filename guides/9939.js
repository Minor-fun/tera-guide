// Red Refuge (Hard)
//
// made by multarix

module.exports = (dispatch, handlers, guide, lang) => {
	let first_boss_debuff = false;

	return {
		// 1 BOSS
		"nd-939-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-939-1000-105-0": [{ type: "text", sub_type: "message", message: t("Turn + Breath") }],
		"die": [{ type: "func", func: () => { first_boss_debuff = false; } }],
		"ar-0-0-93910005": [{ type: "func", func: () => first_boss_debuff = false }],
		"ae-0-0-93910005": [{ type: "func", func: () => first_boss_debuff = true }],
		"s-939-93910-305-0": [
			{ type: "text", sub_type: "message", message: t("Enter the big circle"), check_func: () => first_boss_debuff },
			{ type: "text", sub_type: "message", message: t("Exit the big circle"), check_func: () => !first_boss_debuff }
		],
		"s-939-93911-305-0": "s-939-93910-305-0",
		"s-939-93912-305-0": "s-939-93910-305-0",
		"s-939-93913-305-0": "s-939-93910-305-0",
		"s-939-93914-305-0": "s-939-93910-305-0",
		"s-939-1000-308-0": [
			{ type: "text", sub_type: "message", message: t("In > Out") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] },
			{ type: "text", sub_type: "message", message: t("Out"), delay: 3900 }
		],
		"s-939-1000-112-0": [{ type: "text", sub_type: "message", message: t("Back Spray") }],
		"s-939-1000-120-0": "s-939-1000-112-0",
		"s-939-1000-113-0": [{ type: "text", sub_type: "message", message: t("Back Spray + Fire Wave") }],
		"s-939-1000-115-0": [{ type: "text", sub_type: "message", message: t("Front Spray + Fire Wave") }],
		"s-939-1000-107-0": [{ type: "text", sub_type: "message", message: t("Jump") }],
		"s-939-1000-117-0": [{ type: "text", sub_type: "message", message: t("Jump + Spin") }],
		"s-939-1000-119-0": [{ type: "text", sub_type: "message", message: t("Many Hits") }],
		"s-939-1000-306-0": [
			{ type: "text", sub_type: "message", message: t("Out > In") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] },
			{ type: "text", sub_type: "message", message: t("In"), delay: 3700 }
		],

		// 2 BOSS
		"nd-939-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-939-2000-105-0": [
			{ type: "text", sub_type: "message", message: t("360") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 510, 0, 2500] }
		],
		"s-939-2000-113-0": [{ type: "text", sub_type: "message", message: t("Stun") }],
		"s-939-2000-108-0": [
			{ type: "text", sub_type: "message", message: t("Cleanse"), class_position: "heal" },
			{ type: "text", sub_type: "message", message: t("Spin"), class_position: ["tank", "dps"] }
		],
		"s-939-2000-115-0": [
			{ type: "text", sub_type: "message", message: t("Whirlwind") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 360, 0, 6500] }
		],
		"s-939-2000-119-0": [{ type: "text", sub_type: "message", message: t("Front") }],
		"s-939-2000-120-0": [{ type: "text", sub_type: "message", message: t("Back") }],
		"s-939-2000-303-0": [
			{ type: "text", sub_type: "message", message: t("Whip") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1650 }
		],
		"s-939-2000-304-0": [
			{ type: "text", sub_type: "message", message: t("Pull") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1650 }
		],

		// 3 BOSS
		"nd-939-3001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-939-3001-30": [{ type: "text", sub_type: "message", message: t("Reveal soon...") }],
		"s-939-3001-201-0": [
			{ type: "text", sub_type: "message", message: t("Stun (Pushback)") },
			{ type: "text", sub_type: "message", delay: 1000, message: t("3") },
			{ type: "text", sub_type: "message", delay: 2000, message: t("2") },
			{ type: "text", sub_type: "message", delay: 3000, message: t("1") },
			{ type: "text", sub_type: "message", delay: 4000, message: t("Dodge!") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 5000] }
		],
		"s-939-3001-107-0": [{ type: "text", sub_type: "message", message: t("Many Hits") }],
		"s-939-3001-112-0": [{ type: "text", sub_type: "message", message: t("Target") }],
		"s-939-3001-115-0": [
			{ type: "text", sub_type: "message", message: t("Incoming Stun") },
			{ type: "text", sub_type: "message", delay: 1600, message: t("Dodge!") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-939-3001-118-0": [{ type: "text", sub_type: "message", message: t("Scratching") }],
		"s-939-3001-164-0": [{ type: "text", sub_type: "message", message: t("Counter Attack (bleed)") }],
		"s-939-3001-167-0": [{ type: "text", sub_type: "message", message: t("Many Hits") }],
		"s-939-3001-172-0": "s-939-3001-112-0",
		"s-939-3001-301-0": "s-939-3001-112-0",
		"s-939-3001-302-0": "s-939-3001-112-0",
		"s-939-3001-170-0": [
			{ type: "text", sub_type: "message", message: t("Turn + Pushback") },
			{ type: "text", sub_type: "message", message: t("Pushback"), delay: 2700 }
		],
		"s-939-3001-175-0": [
			{ type: "text", sub_type: "message", message: t("Incoming Stun") },
			{ type: "text", sub_type: "message", delay: 1600, message: t("Dodge!") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-939-3001-177-0": [{ type: "text", sub_type: "message", message: t("Backstab") }],
		"s-939-3001-178-0": [{ type: "text", sub_type: "message", message: t("Scratching (bleed)") }],
		"s-939-3001-203-0": [{ type: "text", sub_type: "message", message: t("Phantom x3 (bleed)") }],
		"s-939-3001-207-0": [{ type: "text", sub_type: "message", message: t("Phantom x5 (bleed)") }],
		"s-939-3001-213-0": [{ type: "text", sub_type: "message", message: t("Reveal | Phantom (bleed)") }],
		"s-939-3001-212-0": [{ type: "text", sub_type: "message", message: t("Flash") }]
	};
};