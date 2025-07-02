// Rift"s Edge (10-Person)
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"nd-750-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-750-1001-1102-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 375, 0, 3300] }
		],
		"s-750-1001-1115-0": [
			{ type: "text", sub_type: "message", message: "Floor", message_RU: "Атака в пол", message_zh: "地面攻击" },
			{ type: "spawn", func: "vector", args: [553, 50, 75, 0, 700, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, -50, 75, 0, 700, 0, 1400] }
		],
		"s-750-1001-1116-1": [
			{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" },
			{ type: "spawn", func: "vector", args: [553, 90, 125, 0, 1200, 0, 1600] },
			{ type: "spawn", func: "vector", args: [553, 270, 125, 0, 1200, 0, 1600] }
		],
		"s-750-1001-2102-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 375, 0, 2900] }
		],
		"s-750-1001-2115-0": [
			{ type: "text", sub_type: "message", message: "Floor", message_RU: "Атака в пол", message_zh: "地面攻击" },
			{ type: "spawn", func: "vector", args: [553, 25, 75, 0, 700, 0, 1200] },
			{ type: "spawn", func: "vector", args: [553, -25, 75, 0, 700, 0, 1200] }
		],
		"s-750-1001-2116-1": [
			{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" },
			{ type: "spawn", func: "vector", args: [553, 90, 125, 0, 1200, 0, 1600] },
			{ type: "spawn", func: "vector", args: [553, 270, 125, 0, 1200, 0, 1600] }
		],

		// 2 BOSS
		"nd-750-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-750-1002-1113-0": [{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Три откида", message_zh: "三重击退" }],
		"s-750-1002-2113-0": [{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Три откида", message_zh: "三重击退" }],
		"s-750-1002-1114-0": [{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Три откида", message_zh: "三重击退" }],
		"s-750-1002-2114-0": [{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Три откида", message_zh: "三重击退" }],
		"s-750-1002-1115-0": [{ type: "text", sub_type: "message", message: "Flying Attack", message_RU: "Летающая атака", message_zh: "飞天攻击" }],
		"s-750-1002-2115-0": [{ type: "text", sub_type: "message", message: "Flying Attack", message_RU: "Летающая атака", message_zh: "飞天攻击" }],
		"s-750-1002-1116-0": [{ type: "text", sub_type: "message", message: "A swarm of bees", message_RU: "Рой пчел", message_zh: "蜂群" }],
		"s-750-1002-2116-0": [{ type: "text", sub_type: "message", message: "A swarm of bees", message_RU: "Рой пчел", message_zh: "蜂群" }],
		"s-750-1002-1117-0": [{ type: "text", sub_type: "message", message: "Rise (Kaia)", message_RU: "Взлет (Кайя)", message_zh: "上升开套盾" }],
		"s-750-1002-2117-0": [{ type: "text", sub_type: "message", message: "Rise (Kaia)", message_RU: "Взлет (Кайя)", message_zh: "上升开套盾" }],
		"s-750-1002-1205-0": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", message_zh: "驱散", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", message_zh: "驱散", class_position: "mystic" }
		],
		"s-750-1002-1210-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" }],
		"s-750-1002-2210-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" }],

		// 3 BOSS
		"nd-750-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-750-1003-1107-2": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" }],
		"s-750-1003-2107-2": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" }],
		"s-750-1003-1115-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" }],
		"s-750-1003-2115-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" }],
		"s-750-1003-1313-0": [
			{ type: "text", sub_type: "message", message: "Column", message_RU: "Колонна", message_zh: "石柱" },
			{ type: "text", sub_type: "message", delay: 8000, message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }
		],
		"s-750-1003-1315-0": [
			{ type: "text", sub_type: "message", message: "Break Shield", message_RU: "Сломать щит", message_zh: "破盾", class_position: ["tank", "dps"] },
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", message_zh: "驱散", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", message_zh: "驱散", class_position: "mystic" }
		]
	};
};