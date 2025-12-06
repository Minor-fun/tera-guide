// Bathysmal Rise (Hard)
//
// made by michengs / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"s-454-1000-1101-0": [{ type: "text", sub_type: "message", message: t("Left") }],
		"s-454-1000-1102-0": [{ type: "text", sub_type: "message", message: t("Right") }],
		"s-454-1000-1103-0": [{ type: "text", sub_type: "message", message: t("Head Slam!") }, //
			{ type: "spawn", func: "circle", args: [false, 553, 0, 200, 12, 275, 0, 4000] }
		],
		"s-454-1000-1104-0": [{ type: "text", sub_type: "message", message: t("Spin get out (Slow)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 200, 0, 5000] }
		],
		"s-454-1000-1105-0": [{ type: "text", sub_type: "message", message: t("Get In") }],
		"s-454-1000-1106-0": [{ type: "text", sub_type: "message", message: t("Random Circle") }], //
		"s-454-1000-1107-0": [{ type: "text", sub_type: "message", message: t("Action Turtle") }],
		"s-454-1000-1108-0": [{ type: "text", sub_type: "message", message: t("left side") }],
		"s-454-1000-1109-0": [{ type: "text", sub_type: "message", message: t("right side") }],
		"s-454-1000-1201-0": [{ type: "text", sub_type: "message", message: t("Body Slam!") }],
		"s-454-1000-1202-0": [{ type: "text", sub_type: "message", message: t("Turtles Summon") }],
		"s-454-1000-1203-0": [{ type: "text", sub_type: "message", message: t("Dizzy, Jump") }],
		"s-454-1000-1204-0": [{ type: "text", sub_type: "message", message: t("Turtle Mode Reminder") }],
		"s-454-1000-1205-0": [{ type: "text", sub_type: "message", message: t("Scape Turtle") }],
		"s-454-1000-1206-0": [{ type: "text", sub_type: "message", message: t("Acid Atmosphere") }],
		"s-454-1000-2101-0": "s-454-1000-1101-0",
		"s-454-1000-2102-0": "s-454-1000-1102-0",
		"s-454-1000-2103-0": "s-454-1000-1103-0",
		"s-454-1000-2104-0": "s-454-1000-1104-0",
		"s-454-1000-2105-0": "s-454-1000-1105-0",
		"s-454-1000-2106-0": "s-454-1000-1106-0",
		"s-454-1000-2107-0": "s-454-1000-1107-0",
		"s-454-1000-2108-0": "s-454-1000-1108-0",
		"s-454-1000-2109-0": "s-454-1000-1109-0",
		"s-454-1000-2201-0": "s-454-1000-1201-0",
		"s-454-1000-2202-0": "s-454-1000-1202-0",
		"s-454-1000-2203-0": "s-454-1000-1203-0",
		"s-454-1000-2204-0": "s-454-1000-1204-0",
		"s-454-1000-2205-0": "s-454-1000-1205-0",
		"s-454-1000-2206-0": "s-454-1000-1206-0",
		"s-454-1000-3101-0": [{ type: "text", sub_type: "message", message: t("Rocks Destroyed") }],
		"s-454-1000-3102-0": [{ type: "text", sub_type: "message", message: t("Random Acid Puke") }], //
		"s-454-1000-3103-0": [{ type: "text", sub_type: "message", message: t("Knock Down Boss") }],
		"s-454-1000-3104-0": [{ type: "text", sub_type: "message", message: t("BREAKE SHIELD!") }],

		// 2 BOSS
		//"s-454-1001-1101-0": [{ type: "text", sub_type: "message", message: t("Frontal Attack") }],
		//"s-454-1001-1102-0": [{ type: "text", sub_type: "message", message: t("Back Flip (Fast)") }],
		"s-454-1001-1104-0": [{ type: "text", sub_type: "message", message: t("Frontal Spin!") }],
		"s-454-1001-1105-0": [{ type: "text", sub_type: "message", message: t("Tail") }],
		"s-454-1001-1108-0": [{ type: "text", sub_type: "message", message: t("Random Poison") }],
		"s-454-1001-1109-0": [{ type: "text", sub_type: "message", message: t("Pull + Poison") },
			{ type: "text", sub_type: "message", "delay": 1500, message: t("Flash") }
		],
		"s-454-1001-1110-0": [{ type: "text", sub_type: "message", message: t("Spin! (Slow)") }],
		"s-454-1001-1113-0": [{ type: "text", sub_type: "message", message: t("Slime Puddle") }],
		"s-454-1001-1111-0": [{ type: "text", sub_type: "message", message: t("Spin Lunge Attack") }],
		//"s-454-1001-2101-0": "s-454-1001-1101-0",
		//"s-454-1001-2102-0": "s-454-1001-1102-0",
		"s-454-1001-2104-0": "s-454-1001-1104-0",
		"s-454-1001-2105-0": "s-454-1001-1105-0",
		"s-454-1001-2108-0": "s-454-1001-1108-0",
		"s-454-1001-2110-0": "s-454-1001-1110-0",
		"s-454-1001-2109-0": "s-454-1001-1109-0",
		"s-454-1001-2113-0": "s-454-1001-1113-0",
		"s-454-1001-2111-0": "s-454-1001-1111-0",
		"s-454-1001-3103-0": [{ type: "text", sub_type: "message", message: t("Knock Down Boss") }],
		"s-454-1001-3105-0": [{ type: "text", sub_type: "message", message: t("Poison") }],
		"s-454-1001-3102-0": [{ type: "text", sub_type: "message", message: t("Big Jump + Wave") }],
		"s-454-403-1101-0": [{ type: "text", sub_type: "message", message: t("Water Wall (Breake)") },
			{ type: "spawn", func: "marker", args: [false, 500, 180, 100, 9000] }
		],

		// 3BOSS
		"s-454-1002-1102-0": [{ type: "text", sub_type: "message", message: t("Frontal Attack") }],
		"s-454-1002-1103-0": [{ type: "text", sub_type: "message", message: t("Random Target") }],
		"s-454-1002-1104-0": [{ type: "text", sub_type: "message", message: t("Donut (In)") }],
		"s-454-1002-1107-0": [{ type: "text", sub_type: "message", message: t("Back Hit! (Fast)") }],
		"s-454-1002-1108-0": [{ type: "text", sub_type: "message", message: t("Back Hit") }],
		"s-454-1002-1112-0": [{ type: "text", sub_type: "message", message: t("Jump (Fast)") }],
		"s-454-1002-1106-0": [{ type: "text", sub_type: "message", message: t("Left Attack") }],
		"s-454-1002-1110-0": [{ type: "text", sub_type: "message", message: t("Gear Sweep") }],
		"s-454-1002-2102-0": "s-454-1002-1102-0",
		"s-454-1002-2103-0": "s-454-1002-1103-0",
		"s-454-1002-2104-0": "s-454-1002-1104-0",
		"s-454-1002-2107-0": "s-454-1002-1107-0",
		"s-454-1002-2108-0": "s-454-1002-1108-0",
		"s-454-1002-2112-0": "s-454-1002-1112-0",
		"s-454-1002-2106-0": "s-454-1002-1106-0",
		"s-454-1002-2110-0": "s-454-1002-1110-0",
		"s-454-1002-3105-0": [{ type: "text", sub_type: "message", message: t("Get In") }],
		"s-454-1002-3117-0": [{ type: "text", sub_type: "message", message: t("In") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 290, 0, 10000] },
			{ type: "text", sub_type: "message", message: t("Out"), delay: 3500 },
			{ type: "text", sub_type: "message", message: t("In"), delay: 5500 }
		],
		"s-454-1002-3110-0": [{ type: "text", sub_type: "message", message: t("Pizza") },
			{ type: "spawn", func: "marker", args: [false, 30, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 330, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 0, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 120, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 180, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 240, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 30, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 330, 201, 4000, 6000, true, null] }
		],
		"s-454-1002-3106-0": [{ type: "text", sub_type: "message", message: t("Cut Completed (Get Out)") }],
		"s-454-1002-3113-0": [{ type: "text", sub_type: "message", message: t("BREAKE SHIELD!") }],
		"s-454-1002-3115-0": [{ type: "text", sub_type: "message", message: t("25% Blast Mode") }],
		"s-454-1002-3119-0": [{ type: "text", sub_type: "message", message: t("Wave Attack (Go Center)") }],
		"qb-454-1002-454001": [{ type: "text", sub_type: "alert", message: t("Electric Ball") },
			{ type: "text", sub_type: "alert", "delay": 45000, message: t("Electric Ball Ready") }
		],
		// Special attacks
		"qb-454-402-454008": [{ type: "text", sub_type: "message", message: t("Water Wave Attack") },
			{ type: "text", sub_type: "notification", "delay": 70000, message: t("Water Wave Attack Soon") },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 1300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 1300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 1300, 0, 4000] }
		],
		"qb-454-1000-454012": [{ type: "text", sub_type: "message", message: t("Fix the SLATE") }],
		"dm-0-0-905420": [{ type: "text", sub_type: "message", message: t("Water Wall Check") }],
		"s-454-100-1101-0": [
			// { type: "text", sub_type: "notification", message: t("Ball (Stay Away)") },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 100, 3000] }
		],
		"s-454-106-3101-0": [{ type: "text", sub_type: "message", message: t("1") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000] }
		],
		"s-454-107-3102-0": [{ type: "text", sub_type: "message", message: t("2") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000] }
		],
		"s-454-108-3103-0": [{ type: "text", sub_type: "message", message: t("3") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000] }
		],
		"s-454-109-3104-0": [{ type: "text", sub_type: "message", message: t("4") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000] }
		]
	};
};