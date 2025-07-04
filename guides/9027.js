// Manaya's Core (Hard)
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let next_debuff = 0;
	function debuff_event(send_msg, debuff, ent) {
		if (next_debuff === 0) {
			next_debuff = debuff;
		}

		if (send_msg) {
			const debuff_messages = {
				0: { message: "Debuff", message_RU: "Дебаф (бублик)", message_zh: "debuff" },
				1: { message: "Debuff 1", message_RU: "Дебаф (бублик) 1", message_zh: "debuff一" },
				2: { message: "Debuff 2", message_RU: "Дебаф (бублик) 2", message_zh: "debuff二" },
				3: { message: "Debuff 3", message_RU: "Дебаф (бублик) 3", message_zh: "debuff三" }
			};

			handlers.text({
				sub_type: "notification",
				message: debuff_messages[next_debuff].message,
				message_RU: debuff_messages[next_debuff].message_RU,
				message_zh: debuff_messages[next_debuff].message_zh,
				speech: true
			});

			if (next_debuff !== 0) {
				next_debuff++;
			}

			if (next_debuff > 3) {
				next_debuff = 1;
			}
		}
	}


	function debuff_removed() {
		if (next_debuff != 0) {
			handlers.text({
				sub_type: "notification",
				message: `next debuff: ${next_debuff}`,
				message_RU: `Следующий Дебаф (бублик): ${next_debuff}`,
				message_zh: `下一个debuff: ${next_debuff}`,
				speech: false
			});
		}

		next_debuff = 0;
	}

	return {
		// 1 BOSS
		"nd-427-42701": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-427-42701-1106-0": [{ type: "text", sub_type: "message", message_RU: "Волна вперед", message_zh: "前方风压", message: "Frontal Wind" }],
		"s-427-42701-1102-0": [{ type: "text", sub_type: "message", message_RU: "Передний разрез", message_zh: "前方斩", message: "Frontal Cut" }],
		"s-427-42701-1104-0": [{ type: "text", sub_type: "message", message_RU: "Передний удар", message_zh: "前方打击", message: "Frontal Hit" }],
		"s-427-42701-1105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message_zh: "范围攻击", message: "AoE" }],
		"s-427-42701-1110-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + АоЕ", message_zh: "跳跃加范围攻击", message: "Jump + AoE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 3000] }
		],
		"s-427-42701-1114-1": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message_zh: "范围攻击", message: "AoE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 110, 12, 250, 0, 2500] }
		],
		"s-427-42701-1112-0": [{ type: "text", sub_type: "message", message_RU: "Передняя АоЕ (большая)", message_zh: "前方大范围攻击", message: "Frontal AoE (Big)" }],
		"s-427-42701-1215-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message_zh: "范围攻击", message: "AoE" }],
		"s-427-42701-1214-0": [{ type: "text", sub_type: "message", message_RU: "Передний разрез + АоЕ", message_zh: "前方斩加范围攻击", message: "Frontal Cut + AoE" }],
		"s-427-42701-1204-0": [{ type: "text", sub_type: "message", message_RU: "Таргет", message_zh: "点名", message: "Target" }],
		"s-427-42701-1121-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + Передний разрез", message_zh: "跳跃加前方斩", message: "Jump + Frontal Cut" }],
		"s-427-42701-2106-0": "s-427-42701-1106-0",
		"s-427-42701-2102-0": "s-427-42701-1102-0",
		"s-427-42701-2104-0": "s-427-42701-1104-0",
		"s-427-42701-2105-0": "s-427-42701-1105-0",
		"s-427-42701-2110-0": "s-427-42701-1110-0",
		"s-427-42701-2114-1": "s-427-42701-1114-1",
		"s-427-42701-2112-0": "s-427-42701-1112-0",
		"s-427-42701-2215-0": "s-427-42701-1215-0",
		"s-427-42701-2214-0": "s-427-42701-1214-0",
		"s-427-42701-2121-0": "s-427-42701-1121-0",
		"s-427-42701-2204-0": "s-427-42701-1204-0",

		// 2 BOSS
		"nd-427-42702": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-427-42702-1104-0": [{ type: "text", sub_type: "message", message_RU: "Лазер", message_zh: "激光", message: "Laser" }],
		"s-427-42702-1109-0": [{ type: "text", sub_type: "message", message_RU: "Удар щита назад", message_zh: "背后盾击", message: "Back Shield Hit" }],
		"s-427-42702-1106-0": [{ type: "text", sub_type: "message", message_RU: "Бомба (таргет)", message_zh: "点名炸弹", message: "Bomb (Target)" }],
		"s-427-42702-1117-0": [{ type: "text", sub_type: "message", message_RU: "Стан + АоЕ", message_zh: "眩晕加范围攻击", message: "Stun + AoE" }],
		"s-427-42702-1118-0": [{ type: "text", sub_type: "message", message_RU: "Стан + Волна", message_zh: "眩晕加冲击波", message: "Stun + Wave" },
			{ type: "text", sub_type: "message", delay: 4600, message_RU: "Эвейд!", message_zh: "闪避！", message: "Dodge!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 3000, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 16, 240, 3000, 3000] }
		],
		"s-427-42702-1112-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок назад", message_zh: "后跳", message: "Jump Backwards" }],

		"dm-0-0-9027004": [{ type: "text", sub_type: "notification", message_RU: "Убить [c=#05a0fa]синих[/c] миньонов", message_zh: "打蓝色小怪", message: "Kill [c=#05a0fa]Blue[/c] Minions" }],
		"dm-0-0-9027005": [{ type: "text", sub_type: "notification", message_RU: "Убить [c=#e82331]красных[/c] миньонов", message_zh: "打红色小怪", message: "Kill [c=#e82331]Red[/c] Minions" }],
		"s-427-42702-2104-0": "s-427-42702-1104-0",
		"s-427-42702-2109-0": "s-427-42702-1109-0",
		"s-427-42702-2106-0": "s-427-42702-1106-0",
		"s-427-42702-2117-0": "s-427-42702-1117-0",
		"s-427-42702-2118-0": "s-427-42702-1118-0",
		"s-427-42702-2112-0": "s-427-42702-1112-0",

		// 3 BOSS
		// Fase 1
		"nd-427-2001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-427-2001-1101-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ стрелы (+)", message_zh: "十字箭头范围", message: "Arrows AoE (+)" },
			{ type: "spawn", func: "vector", args: [553, 120, 100, 176, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 240, 100, -176, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 60, 100, 4, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 300, 100, -4, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 150, -100, 274, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 210, 100, -94, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, -30, -101, 94, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 210, -101, 86, 400, 0, 5000] }
		],
		"s-427-2001-1102-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ стрелы (X)", message_zh: "交叉箭头范围", message: "Arrows AoE (X)" },
			{ type: "spawn", func: "vector", args: [553, 160, 110, 222, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 290, 110, -132, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 110, 110, 48, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 340, 110, 42, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 10, 115, -41, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 260, 115, -49, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 80, 115, 131, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 190, 115, -221, 400, 0, 5000] }
		],
		"s-427-2001-1105-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ стрелы (малая)", message_zh: "小箭头范围", message: "Arrows AoE (Small)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 210, 2000, 4000] }
		],
		"s-427-2001-1103-0": [{ type: "text", sub_type: "message", message_RU: "Волна АоЕ", message_zh: "波形范围攻击", message: "Wave AoE" }],
		"s-427-2001-1111-0": [{ type: "text", sub_type: "message", message_RU: "Стан", message_zh: "晕", message: "Stun" }],
		"s-427-2004-1101-0": [{ type: "text", sub_type: "message", message_RU: "Когти", message_zh: "爪击", message: "Claws" }],
		"s-427-2001-1109-0": [{ type: "text", sub_type: "message", message_RU: "Внутренняя АоЕ", message_zh: "内圈范围攻击", message: "Inner AoE" }],
		"s-427-2001-2101-0": "s-427-2001-1101-0",
		"s-427-2001-2102-0": "s-427-2001-1102-0",
		"s-427-2001-2105-0": "s-427-2001-1105-0",
		"s-427-2001-2111-0": "s-427-2001-1111-0",
		"s-427-2004-2101-0": "s-427-2004-1101-0",
		"s-427-2001-2103-0": "s-427-2001-1103-0",
		"s-427-2001-2109-0": "s-427-2001-1109-0",

		// Fase 2
		"nd-427-2007": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"die": [{ type: "func", func: debuff_removed }],
		"h-427-2007-99": [{ type: "func", func: () => next_debuff = 0 }],
		"s-427-2007-1103-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message_zh: "前方攻击", message: "Frontal Attack" }],
		"s-427-2007-1205-0": [{ type: "text", sub_type: "message", message_RU: "Телепорт", message_zh: "瞬移", message: "Teleport" }],
		"s-427-2007-1102-0": [{ type: "text", sub_type: "message", message_RU: "К нему > От него", message_zh: "靠近再远离", message: "In > Out" }],
		"s-427-2007-1113-0": [{ type: "text", sub_type: "message", message_RU: "Левая рука ", message_zh: "左手攻击", message: "Left Hand Attack" }],
		"s-427-2007-1105-0": [{ type: "text", sub_type: "message", message_RU: "Правая рука ", message_zh: "右手攻击", message: "Right Hand Attack" }],
		"s-427-2007-1112-0": [{ type: "func", func: debuff_event, args: [true, 0] }],
		"s-427-2007-1108-0": [{ type: "text", sub_type: "message", message_RU: "Атака (таргет)", message_zh: "点名攻击", message: "Target Attack" }],
		"s-427-2007-1114-0": [{ type: "text", sub_type: "message", message_RU: "Удар назад", message_zh: "后方直线", message: "Back Attack" }],
		"s-427-2007-1115-0": [{ type: "text", sub_type: "message", message_RU: "Хвост", message_zh: "甩尾", message: "Tail" }],
		"s-427-2007-1111-0": [{ type: "text", sub_type: "message", message_RU: "Хвост вперед", message_zh: "前方攻击", message: "Frontal Attack" }],
		"s-427-2007-1109-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ (таргет)", message_zh: "点名范围攻击", message: "AoE Target" }],
		"s-427-2007-1104-0": [{ type: "text", sub_type: "message", message: "Stomp", message_RU: "Топот", message_zh: "跺脚" }],
		"s-427-2007-1107-0": [{ type: "text", sub_type: "message", message_RU: "Лазер", message_zh: "激光攻击", message: "Laser Attack" },
			{ type: "spawn", func: "vector", args: [912, 360, 985, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 369, 995, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 351, 995, 180, 950, 0, 2500] }
		],
		"s-427-2007-1106-0": [{ type: "text", sub_type: "message", message_RU: "Бомба (таргет)", message_zh: "点名炸弹", message: "Target Bomb" }],
		"s-427-2007-1204-0": [{ type: "text", sub_type: "message", message_RU: "Большая АоЕ (бежать)", message_zh: "大范围攻击快跑", message: "Big AoE (Run)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 550, 0, 4000] }
		],
		"qb-427-2007-427050": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", message_zh: "驱散", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", message_zh: "驱散", class_position: "mystic" }
		],
		"s-427-2007-2205-0": "s-427-2007-1205-0",
		"s-427-2007-2102-0": "s-427-2007-1102-0",
		"s-427-2007-2113-0": "s-427-2007-1113-0",
		"s-427-2007-2105-0": "s-427-2007-1105-0",
		"s-427-2007-2112-0": "s-427-2007-1112-0",
		"s-427-2007-2115-0": "s-427-2007-1115-0",
		"s-427-2007-2111-0": "s-427-2007-1111-0",
		"s-427-2007-2109-0": "s-427-2007-1109-0",
		"s-427-2007-2107-0": "s-427-2007-1107-0",
		"s-427-2007-2106-0": "s-427-2007-1106-0",
		"s-427-2007-2204-0": "s-427-2007-1204-0",
		"s-427-2007-2103-0": "s-427-2007-1103-0",
		"s-427-2007-2114-0": "s-427-2007-1114-0",
		"s-427-2007-2108-0": "s-427-2007-1108-0",
		"s-427-2007-2104-0": "s-427-2007-1104-0",
		"am-427-2007-47702900": [{ type: "func", func: debuff_event, args: [false, 2] }], // greedy thought #1
		"am-427-2007-47703000": [{ type: "func", func: debuff_event, args: [false, 3] }], // hateful thought #2
		"am-427-2007-47703100": [{ type: "func", func: debuff_event, args: [false, 1] }] // desperate thought #3
	};
};