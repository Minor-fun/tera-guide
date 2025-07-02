// Forsaken Island (Hard)
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"s-759-1001-1104-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)", message_zh: "跳跃眩晕" }],
		"s-759-1001-2104-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)", message_zh: "跳跃眩晕" }],
		"s-759-1001-1106-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1001-2106-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1001-3107-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_RU: "Конус (эвейд)", message_zh: "前方攻击闪避" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 1500] }
		],
		"s-759-1001-3101-0": [
			{ type: "text", sub_type: "message", message: "Out -> In", message_RU: "От него -> К нему", message_zh: "出到进" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 2000] }
		],
		"s-759-1001-3106-0": [
			{ type: "text", sub_type: "message", message: "In -> Out", message_RU: "К нему -> От него", message_zh: "进到出" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 245, 0, 2000] }
		],

		// 2 BOSS
		"s-759-1002-3101-0": [
			{ type: "text", sub_type: "message", message: "Push (Dodge)", message_RU: "Откид (эвейд)", message_zh: "击退闪避" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1002-3102-0": [{ type: "text", sub_type: "message", message: "Circles x5 (Dodge)", message_RU: "Круги х5 (эвейд)", message_zh: "五连圈闪避" }],
		"s-759-1002-3103-0": [{ type: "text", sub_type: "message", message: "Circles x5 (Dodge)", message_RU: "Круги х5 (эвейд)", message_zh: "五连圈闪避" }],
		"s-759-1002-3105-0": [{ type: "text", sub_type: "message", message: "Circle (Dodge)", message_RU: "Круг (эвейд)", message_zh: "圈闪避" }],
		"s-759-1002-3104-0": [{ type: "text", sub_type: "message", message: "AOE (Go to ghost)", message_RU: "АОЕ (К призраку)", message_zh: "范围攻击去鬼魂处" }],
		"s-759-1002-3107-0": [{ type: "text", sub_type: "message", message: "Puddle (Dodge)", message_RU: "Лужа (эвейд)", message_zh: "毒圈闪避" }],
		"s-759-1002-3108-0": [{ type: "text", sub_type: "message", message: "Puddle (Dodge)", message_RU: "Лужа (эвейд)", message_zh: "毒圈闪避" }],

		// 3 BOSS
		"s-759-1003-2110-0": [
			{ type: "text", sub_type: "message", message: "Clover", message_RU: "Клевер", message_zh: "三叶草" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],
		"s-759-1003-1110-0": [
			{ type: "text", sub_type: "message", message: "Clover", message_RU: "Клевер", message_zh: "三叶草" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],

		"s-759-1003-3108-0": [{ type: "text", sub_type: "message", message: "Debuff x2", message_RU: "Дебаф х2", message_zh: "二层debuff" }],
		"s-759-1003-3109-0": [{ type: "text", sub_type: "message", message: "Carpet", message_RU: "Ковер", message_zh: "地毯" }],

		"s-759-1003-3105-0": [{ type: "text", sub_type: "message", message: "Circles (Dodge)", message_RU: "Круги (эвейд)", message_zh: "圈闪避" }],
		"s-759-1003-3106-0": [{ type: "text", sub_type: "message", message: "Circles (Dodge)", message_RU: "Круги (эвейд)", message_zh: "圈闪避" }],
		"s-759-3000-1102-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Притяжка", message_zh: "拉人" }],

		// Mini-bosses
		// 1 BOSS
		"s-759-1004-1104-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан) ", message_zh: "跳跃眩晕" }],
		"s-759-1004-2104-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)", message_zh: "跳跃眩晕" }],
		"s-759-1004-3107-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_RU: "Конус (эвейд)", message_zh: "前方攻击闪避" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 1500] }
		],
		"s-759-1004-1106-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1004-2106-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1004-3101-0": [
			{ type: "text", sub_type: "message", message: "Out", message_RU: "От него", message_zh: "远离" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 2000] }
		],
		"s-759-1004-3106-0": [
			{ type: "text", sub_type: "message", message: "In", message_RU: "К нему", message_zh: "靠近" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 245, 0, 2000] }
		],

		// 2 BOSS
		"s-759-1005-3101-0": [
			{ type: "text", sub_type: "message", message: "Push (Dodge)", message_RU: "Откид (эвейд)", message_zh: "击退闪避" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1005-3105-0": [{ type: "text", sub_type: "message", message: "Circle (Dodge)", message_RU: "Круг (эвейд)", message_zh: "圈闪避" }],
		"s-759-1005-3107-0": [{ type: "text", sub_type: "message", message: "Puddle (Dodge)", message_RU: "Лужа (эвейд)", message_zh: "毒圈闪避" }],
		"s-759-1005-3108-0": [{ type: "text", sub_type: "message", message: "Puddle (Dodge)", message_RU: "Лужа (эвейд)", message_zh: "毒圈闪避" }],
		"s-759-1005-3104-0": [{ type: "text", sub_type: "message", message: "AOE (Go to ghost)", message_RU: "АОЕ (К призраку)", message_zh: "范围攻击去鬼魂处" }]
	};
};