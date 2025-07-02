// Akeron's Inferno
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"nd-757-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-757-1001-1104-0": [{ type: "text", sub_type: "message", message_RU: "Правая рука (откид)", message_zh: "右手推", message: "Right Hand (Push)" }],
		"s-757-1001-1117-0": [{ type: "text", sub_type: "message", message_RU: "Удар", message_zh: "踢加重砸", message: "Kick (Smash)" }],
		"s-757-1001-1118-0": [{ type: "text", sub_type: "message", message_RU: "Случайный прыжок", message_zh: "随机跳跃眩晕", message: "Random Jump" }],
		"s-757-1001-1116-0": [{ type: "text", sub_type: "message", message_RU: "Прыжки (танк)", message_zh: "跳坦克", message: "Jumps (Tank)" }],
		"s-757-1001-1107-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message_zh: "前方攻击", message: "Front" }],
		"s-757-1001-1206-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок назад", message_zh: "后跳", message: "Jump Back" }],
		"s-757-1001-1109-0": [{ type: "text", sub_type: "message", message_RU: "Переднее АоЕ", message_zh: "前方范围攻击", message: "Front AoE" }],
		"s-757-1001-1108-0": [{ type: "text", sub_type: "message", message_RU: "Случайный прыжок", message_zh: "随机跳跃眩晕", message: "Random Jump" }],
		"s-757-1001-2104-0": "s-757-1001-1104-0",
		"s-757-1001-2117-0": "s-757-1001-1117-0",
		"s-757-1001-2118-0": "s-757-1001-1118-0",
		"s-757-1001-2116-0": "s-757-1001-1116-0",
		"s-757-1001-2107-0": "s-757-1001-1107-0",
		"s-757-1001-2206-0": "s-757-1001-1206-0",
		"s-757-1001-2109-0": "s-757-1001-1109-0",
		"s-757-1001-2108-0": "s-757-1001-1108-0",

		// 2 BOSS
		"nd-757-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-757-1002-1105-0": [{ type: "text", sub_type: "message", message_RU: "Огненное дыхание", message_zh: "火焰吐息", message: "Fire Breath" }],
		"s-757-1002-1108-0": [{ type: "text", sub_type: "message", message_RU: "Огненные бомбы (спереди)", message_zh: "火焰炸弹", message: "Fire Bombs" }],
		"s-757-1002-1109-0": [{ type: "text", sub_type: "message", message_RU: "Плавание + Задняя", message_zh: "游动加背后攻击", message: "Swim + Back Attack" }],
		"s-757-1002-1206-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + Случайная атака", message_zh: "跳跃加随机点名", message: "Jump + Random Target" }],
		"s-757-1002-1204-0": [{ type: "text", sub_type: "message", message_RU: "Большое АоЕ", message_zh: "大范围攻击", message: "Large AoE", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 630, 3000, 4000] }
		],
		"s-757-1002-1107-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message_zh: "翻滚", message: "Spin" }],
		"s-757-1002-1106-1": [{ type: "text", sub_type: "message", message_RU: "АоЕ + Пламя", message_zh: "范围攻击加侧面火焰", message: "AoE + Side Flames", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 3000, 4000] }
		],
		"s-757-1002-1112-0": [{ type: "text", sub_type: "message", message_RU: "Огненные шары (таргет)", message_zh: "点名火球", message: "Target Fireball" }],
		"s-757-1002-2105-0": "s-757-1002-1105-0",
		"s-757-1002-2108-0": "s-757-1002-1108-0",
		"s-757-1002-2109-0": "s-757-1002-1109-0",
		"s-757-1002-2206-0": "s-757-1002-1206-0",
		"s-757-1002-2204-0": "s-757-1002-1204-0",
		"s-757-1002-2107-0": "s-757-1002-1107-0",
		"s-757-1002-2106-1": "s-757-1002-1106-1",
		"s-757-1002-2112-0": "s-757-1002-1112-0",

		// 3 BOSS
		"nd-757-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-757-1003-1105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message_zh: "范围攻击", message: "AoE" }],
		"s-757-1003-1203-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message_zh: "旋转切割", message: "Spin Cut Attack" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 100, 4000] }
		],
		"s-757-1003-1110-0": [{ type: "text", sub_type: "message", message_RU: "Яд (круг)", message_zh: "毒圈", message: "Poison (Circle)" }],
		"s-757-1003-2105-0": "s-757-1003-1105-0",
		"s-757-1003-2203-0": "s-757-1003-1203-0",
		"s-757-1003-2110-0": "s-757-1003-1110-0",

		// 4 BOSS
		"nd-757-1004": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-757-1004-1105-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message_zh: "前方打击", message: "Frontal Hit" }],
		"s-757-1004-1106-0": [{ type: "text", sub_type: "message", message_RU: "Случайный выстрел", message_zh: "随机射击", message: "Random Shot" }],
		"s-757-1004-1107-0": [{ type: "text", sub_type: "message", message_RU: "Случайный кнут", message_zh: "随机鞭打", message: "Random Whip" }],
		"s-757-1004-1108-0": [{ type: "text", sub_type: "message", message_RU: "Безопасные круги", message_zh: "地裂线", message: "Earth Line" }],
		"s-757-1004-1111-0": [{ type: "text", sub_type: "message", message_RU: "Линия земли", message_zh: "跺脚连击", message: "Stomp Combo" }],
		"s-757-1004-3108-0": [{ type: "text", sub_type: "message", message_RU: "Эвейд", message_zh: "闪避", message: "Dodge" }],
		"s-757-1004-3105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ атака", message_zh: "范围攻击", message: "AoE Attack" }],
		"s-757-1004-3106-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ бублик", message_zh: "环形范围攻击", message: "Donut AoE" }],
		"s-757-1004-3103-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ удар", message_zh: "范围跺脚", message: "AoE Stomp" }],
		"s-757-1004-4201-0": [{ type: "text", sub_type: "message", message_RU: "Лава", message_zh: "岩浆", message: "Lava" }],
		"qb-757-405-457016": [{ type: "text", sub_type: "message", message_RU: "ЩИТ", message_zh: "护盾", message: "SHIELD" }],
		"s-757-1004-2105-0": "s-757-1004-1105-0",
		"s-757-1004-2106-0": "s-757-1004-1106-0",
		"s-757-1004-2107-0": "s-757-1004-1107-0",
		"s-757-1004-2108-0": "s-757-1004-1108-0",
		"s-757-1004-2111-0": "s-757-1004-1111-0"
	};
};