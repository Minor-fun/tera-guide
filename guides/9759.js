// Forsaken Island (Hard)
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"s-759-1001-1104-0": [{ type: "text", sub_type: "message", message: t("Jump (Stun)") }],
		"s-759-1001-2104-0": [{ type: "text", sub_type: "message", message: t("Jump (Stun)") }],
		"s-759-1001-1106-0": [
			{ type: "text", sub_type: "message", message: t("Spin") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1001-2106-0": [
			{ type: "text", sub_type: "message", message: t("Spin") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1001-3107-0": [
			{ type: "text", sub_type: "message", message: t("Front (Dodge)") },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 1500] }
		],
		"s-759-1001-3101-0": [
			{ type: "text", sub_type: "message", message: t("Out -> In") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 2000] }
		],
		"s-759-1001-3106-0": [
			{ type: "text", sub_type: "message", message: t("In -> Out") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 245, 0, 2000] }
		],

		// 2 BOSS
		"s-759-1002-3101-0": [
			{ type: "text", sub_type: "message", message: t("Push (Dodge)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1002-3102-0": [{ type: "text", sub_type: "message", message: t("Circles x5 (Dodge)") }],
		"s-759-1002-3103-0": [{ type: "text", sub_type: "message", message: t("Circles x5 (Dodge)") }],
		"s-759-1002-3105-0": [{ type: "text", sub_type: "message", message: t("Circle (Dodge)") }],
		"s-759-1002-3104-0": [{ type: "text", sub_type: "message", message: t("AOE (Go to ghost)") }],
		"s-759-1002-3107-0": [{ type: "text", sub_type: "message", message: t("Puddle (Dodge)") }],
		"s-759-1002-3108-0": [{ type: "text", sub_type: "message", message: t("Puddle (Dodge)") }],

		// 3 BOSS
		"s-759-1003-2110-0": [
			{ type: "text", sub_type: "message", message: t("Clover") },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],
		"s-759-1003-1110-0": [
			{ type: "text", sub_type: "message", message: t("Clover") },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],

		"s-759-1003-3108-0": [{ type: "text", sub_type: "message", message: t("Debuff x2") }],
		"s-759-1003-3109-0": [{ type: "text", sub_type: "message", message: t("Carpet") }],

		"s-759-1003-3105-0": [{ type: "text", sub_type: "message", message: t("Circles (Dodge)") }],
		"s-759-1003-3106-0": [{ type: "text", sub_type: "message", message: t("Circles (Dodge)") }],
		"s-759-3000-1102-0": [{ type: "text", sub_type: "message", message: t("Pull") }],

		// Mini-bosses
		// 1 BOSS
		"s-759-1004-1104-0": [{ type: "text", sub_type: "message", message: t("Jump (Stun)") }],
		"s-759-1004-2104-0": [{ type: "text", sub_type: "message", message: t("Jump (Stun)") }],
		"s-759-1004-3107-0": [
			{ type: "text", sub_type: "message", message: t("Front (Dodge)") },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 1500] }
		],
		"s-759-1004-1106-0": [
			{ type: "text", sub_type: "message", message: t("Spin") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1004-2106-0": [
			{ type: "text", sub_type: "message", message: t("Spin") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1004-3101-0": [
			{ type: "text", sub_type: "message", message: t("Out") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 2000] }
		],
		"s-759-1004-3106-0": [
			{ type: "text", sub_type: "message", message: t("In") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 245, 0, 2000] }
		],

		// 2 BOSS
		"s-759-1005-3101-0": [
			{ type: "text", sub_type: "message", message: t("Push (Dodge)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1005-3105-0": [{ type: "text", sub_type: "message", message: t("Circle (Dodge)") }],
		"s-759-1005-3107-0": [{ type: "text", sub_type: "message", message: t("Puddle (Dodge)") }],
		"s-759-1005-3108-0": [{ type: "text", sub_type: "message", message: t("Puddle (Dodge)") }],
		"s-759-1005-3104-0": [{ type: "text", sub_type: "message", message: t("AOE (Go to ghost)") }]
	};
};