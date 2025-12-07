// Velik's Hold (5-Person)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang, t) => {

	return {
		// 1 boss
		"nd-780-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-1000-102-0": [{ type: "text", sub_type: "message", message: t("Stun (Tank)") }],
		"s-780-1000-103-0": [{ type: "text", sub_type: "message", message: t("Frontal Hits") }],
		"s-780-1000-104-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-780-1000-109-0": [{ type: "text", sub_type: "message", message: t("Push Left") }],
		"s-780-1000-110-0": [{ type: "text", sub_type: "message", message: t("Push Right") }],
		"s-780-1000-112-0": [{ type: "text", sub_type: "message", message: t("Jump Forward") }],
		"s-780-1000-113-0": [{ type: "text", sub_type: "message", message: t("Jump Back") }],
		"s-780-1000-114-0": [{ type: "text", sub_type: "message", message: t("Back Attack") }],
		"s-780-1000-115-0": [{ type: "text", sub_type: "message", message: t("Wave Front") }],
		"s-780-1000-115-1": [{ type: "text", sub_type: "message", message: t("Dodge") }],
		"s-780-1000-202-0": [{ type: "text", sub_type: "message", message: t("Jump (Stun)") }],
		"s-780-1000-108-0": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 2800 }],
		"s-780-1000-302-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-780-1000-302-1": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 2000] }],
		"s-780-1001-302-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 4000] }],

		// 2 boss
		"nd-780-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-2000-105-0": [{ type: "text", sub_type: "message", message: t("Heavy Front Attack") }],
		"s-780-2000-106-0": [{ type: "text", sub_type: "message", message: t("Flame Ray (Target)") }],
		"s-780-2000-106-1": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 500 }],
		"s-780-2000-107-0": [{ type: "text", sub_type: "message", message: t("Whip") }],
		"s-780-2000-107-1": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1000 }],
		"s-780-2000-108-0": [{ type: "text", sub_type: "message", message: t("Front Attack (Stun)") }],
		"s-780-2000-301-0": [{ type: "text", sub_type: "message", message: t("Jump (Target)") }],
		"s-780-2000-301-1": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1000 }],
		"s-780-2000-302-0": [{ type: "text", sub_type: "message", message: t("AOE (Stand behind a stone)") }],
		"s-780-2000-303-0": [{ type: "text", sub_type: "message", message: t("Circles") }],
		"s-780-2000-304-0": [{ type: "text", sub_type: "message", message: t("Jump") }],
		"s-780-2000-304-1": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1000 }],
		"s-780-2001-326-0": [{ type: "spawn", func: "marker", args: [false, 180, 250, 0, 6000, true, null] }], // stone marker

		// 3 boss
		"nd-780-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-3000-104-0": [{ type: "text", sub_type: "message", message: t("Front Attack") }],
		"s-780-3000-105-0": [{ type: "text", sub_type: "message", message: t("Push Front") }],
		"s-780-3000-109-0": [{ type: "text", sub_type: "message", message: t("Double Front Attack") }],
		"s-780-3000-110-0": [{ type: "text", sub_type: "message", message: t("Wave Front") }],
		"s-780-3000-111-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-780-3000-112-0": [{ type: "text", sub_type: "message", message: t("Target (Front | Back)") }],
		"s-780-3000-112-2": [{ type: "text", sub_type: "message", message: t("Front | Back") }],
		"s-780-3000-113-0": [{ type: "text", sub_type: "message", message: t("Pushback") }],
		"s-780-3000-114-0": "s-780-3000-113-0",
		"s-780-3000-115-0": [{ type: "text", sub_type: "message", message: t("Charging") }],
		"s-780-3000-301-0": [{ type: "text", sub_type: "message", message: t("Get Out | Get In") }],
		"s-780-3000-302-0": [{ type: "text", sub_type: "message", message: t("Get In") }],
		"s-780-3000-304-0": [{ type: "text", sub_type: "message", message: t("Shot (Target)") }],
		"s-780-3000-304-3": [{ type: "text", sub_type: "message", message: t("Dodge") }],
		"s-780-3000-306-0": [
			{ type: "text", sub_type: "message", message: t("AOE") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 4500 }
		],
		"s-780-3000-307-0": "s-780-3000-306-0",
		"s-780-3000-308-0": [
			{ type: "text", sub_type: "message", message: t("AOE (Flying)") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 4500 }
		],
		"s-780-3000-309-0": [
			{ type: "text", sub_type: "message", message: t("Jump (Pushback)") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 2200 }
		]
	};
};