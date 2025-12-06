// Aesir's End - HM (Guide)
// V1.2
//
// made by MissMeowMeow (Amy)

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-2802-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-2802-1000-90": [{ type: "text", sub_type: "notification", message: t("Shield Soon") }],
		"h-2802-1000-60": [{ type: "text", sub_type: "notification", message: t("Shield Soon") }],
		"h-2802-1000-30": [{ type: "text", sub_type: "notification", message: t("Shield Soon") }],
		"h-2802-1000-8": [{ type: "text", sub_type: "notification", message: t("D P S ! ? !") }],
		"s-2802-1000-103-0": [{ type: "text", sub_type: "message", message: t("Knockdown"), class_position: "tank" }],
		"s-2802-1000-105-0": [{ type: "text", sub_type: "message", message: t("Multi-hit Stun"), class_position: "tank" }],
		"s-2802-1000-106-0": [{ type: "text", sub_type: "message", message: t("Double Spin") }],
		"s-2802-1000-107-0": [{ type: "text", sub_type: "message", message: t("Tank Buster (Slow)"), class_position: "tank" }],
		"s-2802-1000-108-0": [{ type: "text", sub_type: "message", message: t("Tank Buster (Fast)"), class_position: "tank" }],
		"s-2802-1000-109-0": [{ type: "text", sub_type: "message", message: t("Jump - Dodge") }],
		"s-2802-1000-110-0": [{ type: "text", sub_type: "message", message: t("Pull (Jump Soon)") }],
		"s-2802-1000-111-0": [{ type: "text", sub_type: "message", message: t("Res bait (Stun)") }],
		"s-2802-1000-112-0": [{ type: "text", sub_type: "message", message: t("AOE Soon") }],
		"s-2802-1000-113-0": [{ type: "text", sub_type: "message", message: t("AOE Stun") }],
		"s-2802-1000-301-0": [
			{ type: "text", sub_type: "message", message: t("Shield"), class_position: ["dps", "tank"] },
			{ type: "text", sub_type: "message", message: t("Shield - Plague"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Shield - Regress"), class_position: "mystic" }
		],
		"s-2802-1000-303-0": [{ type: "text", sub_type: "message", message: t("You Suck!?") }],
		"s-2802-1000-304-0": [{ type: "text", sub_type: "message", message: t("You Suck!?") }],
		"s-2802-1000-305-0": [{ type: "text", sub_type: "message", message: t("Monkeys") }],
		"s-2802-1000-306-0": [
			{ type: "text", sub_type: "message", message: t("Donuts Go Out-In") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 650, 0, 5000] }
		],
		"s-2802-1000-307-0": [
			{ type: "text", sub_type: "message", message: t("Range Bait (Double Jump)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 650, 0, 2500] }
		],
		"s-2802-1000-308-0": [{ type: "text", sub_type: "message", message: t("AOE Soon") }],
		"s-2802-1000-309-0": [
			{ type: "text", sub_type: "message", message: t("Turn (Dodge)") },
			{ type: "spawn", func: "circle", delay: 700, args: [false, 553, 0, 0, null, 800, 0, 3500] }
		],
		"s-2802-1000-310-0": [{ type: "text", sub_type: "message", message: t("Slow Stomp - Dodge") }],
		"s-2802-1000-313-0": [{ type: "text", sub_type: "message", message: t("Wide Area - Dodge") }]
	};
};