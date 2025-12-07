// Bathysmal Rise
//
// made by michengs / Emilia-s2

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"s-754-1000-1101-0": [{ type: "text", sub_type: "message", message: t("Left") }],
		"s-754-1000-1102-0": [{ type: "text", sub_type: "message", message: t("Right") }],
		"s-754-1000-1103-0": [{ type: "text", sub_type: "message", message: t("Head Slam!") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 200, 12, 275, 0, 4000] }
		],
		"s-754-1000-1105-0": [{ type: "text", sub_type: "message", message: t("Get In") }],
		"s-754-1000-1106-0": [{ type: "text", sub_type: "message", message: t("Random Circle") }],
		"s-454-1000-1108-0": [{ type: "text", sub_type: "message", message: t("Left Side") }],
		"s-454-1000-1109-0": [{ type: "text", sub_type: "message", message: t("Right Side") }],
		"s-754-1000-2101-0": "s-754-1000-1101-0",
		"s-754-1000-2102-0": "s-754-1000-1102-0",
		"s-754-1000-2103-0": "s-754-1000-1103-0",
		"s-754-1000-2105-0": "s-754-1000-1105-0",
		"s-754-1000-2106-0": "s-754-1000-1106-0",
		"s-454-1000-2108-0": "s-454-1000-1108-0",
		"s-454-1000-2109-0": "s-454-1000-1109-0",
		"s-754-1000-3101-0": [{ type: "text", sub_type: "message", message: t("Rocks Destroyed") }],
		"s-754-1000-3103-0": [{ type: "text", sub_type: "message", message: t("Knock Down Boss") }],

		// 2 BOSS
		//"s-754-1001-1101-0": [{ type: "text", sub_type: "message", message: t("Frontal Attack") }],
		//"s-754-1001-1102-0": [{ type: "text", sub_type: "message", message: t("Back Flip (Fast)") }],
		"s-754-1001-1104-0": [{ type: "text", sub_type: "message", message: t("Frontal Spin!") }],
		"s-754-1001-1105-0": [{ type: "text", sub_type: "message", message: t("Tail") }],
		"s-754-1001-1108-0": [{ type: "text", sub_type: "message", message: t("Random Poison") }],
		"s-754-1001-1109-0": [{ type: "text", sub_type: "message", message: t("Pull + Poison") },
			{ type: "text", sub_type: "message", "delay": 1500, message: t("Flash") }
		],
		"s-754-1001-1110-0": [{ type: "text", sub_type: "message", message: t("Spin! (Slow)") }],
		"s-754-1001-1113-0": [{ type: "text", sub_type: "message", message: t("Slime Puddle") }],
		"s-754-1001-1111-0": [{ type: "text", sub_type: "message", message: t("Spin Lunge Attack") }],
		//"s-754-1001-2101-0": "s-754-1001-1101-0",
		//"s-754-1001-2102-0": "s-754-1001-1102-0",
		"s-754-1001-2104-0": "s-754-1001-1104-0",
		"s-754-1001-2105-0": "s-754-1001-1105-0",
		"s-754-1001-2108-0": "s-754-1001-1108-0",
		"s-754-1001-2110-0": "s-754-1001-1110-0",
		"s-754-1001-2109-0": "s-754-1001-1109-0",
		"s-754-1001-2113-0": "s-754-1001-1113-0",
		"s-754-1001-2111-0": "s-754-1001-1111-0",

		"s-754-1001-3103-0": [{ type: "text", sub_type: "message", message: t("Knock Down Boss") }],
		"s-754-1001-3105-0": [{ type: "text", sub_type: "message", message: t("Poison") }],
		"s-754-1001-3102-0": [{ type: "text", sub_type: "message", message: t("Big Jump + Wave") }],
		"s-754-403-1101-0": [{ type: "text", sub_type: "message", message: t("Water Wall (Breake)") },
			{ type: "spawn", func: "marker", args: [false, 500, 180, 100, 9000] }
		],

		// 3 BOSS
		"s-754-1002-1102-0": [{ type: "text", sub_type: "message", message: t("Frontal Attack") }],
		"s-754-1002-1104-0": [{ type: "text", sub_type: "message", message: t("Donut (In)") }],
		"s-754-1002-1107-0": [{ type: "text", sub_type: "message", message: t("Back Hit! (Fast)") }],
		"s-754-1002-1108-0": [{ type: "text", sub_type: "message", message: t("Back Hit") }],
		"s-754-1002-1112-0": [{ type: "text", sub_type: "message", message: t("Jump (Fast)") }],
		"s-754-1002-1106-0": [{ type: "text", sub_type: "message", message: t("Left Attack") }],
		"s-754-1002-1110-0": [{ type: "text", sub_type: "message", message: t("Gear Sweep") }],
		"s-754-1002-2102-0": "s-754-1002-1102-0",
		"s-754-1002-2104-0": "s-754-1002-1104-0",
		"s-754-1002-2107-0": "s-754-1002-1107-0",
		"s-754-1002-2108-0": "s-754-1002-1108-0",
		"s-754-1002-2112-0": "s-754-1002-1112-0",
		"s-754-1002-2106-0": "s-754-1002-1106-0",
		"s-754-1002-2110-0": "s-754-1002-1110-0",

		"s-754-1002-3105-0": [{ type: "text", sub_type: "message", message: t("Get In") }],
		"s-754-1002-3117-0": [{ type: "text", sub_type: "message", message: t("In - Out - In") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 290, 0, 10000] }
		],
		"s-754-1002-3106-0": [{ type: "text", sub_type: "message", message: t("Cut Completed (Get Out)") }],
		"s-754-1002-3113-0": [{ type: "text", sub_type: "message", message: t("BREAKE SHIELD") }],

		"s-754-1002-3119-0": [{ type: "text", sub_type: "message", message: t("Wave Attack (Go Center)") }],
		"qb-754-1002-754001": [{ type: "text", sub_type: "alert", message: t("Electric Ball") },
			{ type: "text", sub_type: "alert", "delay": 45000, message: t("Electric Ball Ready") }
		],
		// Special attacks
		"s-754-100-1101-0": [
			// { type: "text", sub_type: "notification", message: t("Ball (Stay Away)") },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 100, 3000] }
		]
	};
};