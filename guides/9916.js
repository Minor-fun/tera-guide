// Sky Cruiser Endeavor (Hard)
//
// made by michengs / HSDN / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let counter = 0;
	let counter1_date = null;
	let prev_back_attack = 0;
	let prev_date = 0;

	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 1500;

			if (is_one_back) {
				handlers.text({
					sub_type: "message",
					message_RU: "360",
					message: "360",
					message_zh: "360度攻击"
				});
			}
		}
		dispatch.setTimeout(() => back_print = false, 3500);
	}


	function boss_backattack_event_new(curr, ent) {
		let start = new Date();
		let tmp = prev_date;
		prev_date = start;

		let time_diff = start - tmp;

		let prev = prev_back_attack;
		prev_back_attack = curr;

		let back_combo_time_diff = 5000;
		if (counter1_date != null) {
			back_combo_time_diff = start - counter1_date;
		}

		if (prev == 1106 && curr == 1103 && time_diff < 1000) {
			handlers.text({
				sub_type: "message",
				message_RU: "360",
				message: "360",
				message_zh: "360度攻击"
			});
		} else if (prev === 1103 && curr === 1105 && time_diff < 1000) {
			counter = 1;
			counter1_date = new Date();
		} else if (prev === 1105 && curr === 1106 && counter === 1 && time_diff < 1500 && back_combo_time_diff < 1500) {
			counter = 2;
		} else if (prev === 1106 && curr === 1108 && counter == 2 && time_diff < 1000 && back_combo_time_diff < 2000) {
			handlers.text({
				sub_type: "message",
				message_RU: "2x360",
				message: "2x360", message_zh: "二连旋转"
			});
		} else {
			counter = 0;
			counter1_date = null;
		}
	}

	function reset_backevent() {
		back_print = false;
		back_time = 0;
		end_back_time = 0;
		is_one_back = false;
		counter = 0;
		counter1_date = null;
		prev_back_attack = 0;
		prev_date = 0;
	}

	return {
		// Mini BOSS 1
		"qb-916-91660-916045": [{ type: "text", sub_type: "message", message_RU: "Случайный выстрел", message_zh: "随机射击", message: "Random Shot" }],
		"s-916-91660-1304-0": [
			{ type: "spawn", func: "vector", args: [912, 370, 50, 8, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 350, 50, -8, 1900, 0, 3000] }
		],
		"s-916-91660-1304-1": [
			{ type: "spawn", func: "vector", args: [912, 370, 50, 8, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 350, 50, -8, 1900, 0, 3000] }
		],
		"s-916-91650-1102-0": [{ type: "text", sub_type: "message", message_RU: "Стан АоЕ", message_zh: "范围眩晕", message: "AoE Stun" }],
		"s-916-91650-1104-0": [{ type: "text", sub_type: "message", message_RU: "Случайная цель (стан)", message_zh: "随机点名眩晕", message: "Random Target (Stun)" },
			{ type: "spawn", func: "semicircle", args: [-33, 38, 912, 0, 0, 8, 550, 0, 3500] }, //1
			{ type: "spawn", func: "semicircle", args: [-30, 35, 912, 0, 0, 8, 500, 0, 3500] }, //1
			{ type: "spawn", func: "semicircle", args: [59, 116, 912, -22, 210, 8, 480, 0, 3500] }, //2
			{ type: "spawn", func: "semicircle", args: [65, 120, 912, -17, 210, 8, 410, 0, 3500] }, //2
			{ type: "spawn", func: "semicircle", args: [-110, -55, 912, 30, 200, 8, 500, 0, 3500] }, //3
			{ type: "spawn", func: "semicircle", args: [-110, -55, 912, 30, 200, 8, 450, 0, 3500] }//3
		],
		"s-916-91650-1105-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + Удар головой (таргет)", message_zh: "跳跃加头槌点名", message: "Jump + Headbutt on Target" }],
		"s-916-91650-1106-0": [{ type: "text", sub_type: "message", message_RU: "Удар головой (таргет)", message_zh: "点名头槌", message: "Headbutt (Target)" }],
		"s-916-91650-2102-0": "s-916-91650-1102-0",
		"s-916-91650-2104-0": "s-916-91650-1104-0",
		"s-916-91650-2105-0": "s-916-91650-1105-0",
		"s-916-91650-2106-0": "s-916-91650-1106-0",

		// Mini BOSS 2
		"ns-916-91606": [
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 57046, y: 129715, z: 2370, w: -1.08 }, ownerName: "AIM LASER", message: "LASER", message_zh: "激光" }, //1
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 57046, y: 129715, z: 2370, w: -1.08 } }, //1
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 58360, y: 129712, z: 2370, w: -2.09 }, ownerName: "AIM LASER", message: "LASER", message_zh: "激光" }, //2
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 58360, y: 129712, z: 2370, w: -2.09 } }, //2
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 58361, y: 126912, z: 2370, w: 2.00 }, ownerName: "AIM LASER", message: "LASER", message_zh: "激光" }, //3
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 58361, y: 126912, z: 2370, w: 2.00 } }, //3
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 57048, y: 126914, z: 2370, w: 1.06 }, ownerName: "AIM LASER", message: "LASER", message_zh: "激光" }, //4
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 57048, y: 126914, z: 2370, w: 1.06 } }, //4
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 59088, y: 127837, z: 2370, w: 2.76 }, ownerName: "AIM LASER", message: "LASER", message_zh: "激光" }, //4 esquerda atras
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 59088, y: 127837, z: 2370, w: 2.76 } }, //4 esquerda atras
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 56343, y: 127836, z: 2370, w: 0.39 }, ownerName: "AIM LASER", message: "LASER", message_zh: "激光" }, //4 direita atras
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 56343, y: 127836, z: 2370, w: 0.39 } }, //4 direita atras
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 56339, y: 128908, z: 2370, w: -0.38 }, ownerName: "AIM LASER", message: "LASER", message_zh: "激光" }, //4 direita frente
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 56339, y: 128908, z: 2370, w: -0.38 } }, //4 direita frente
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 59087, y: 128907, z: 2370, w: -2.75 }, ownerName: "AIM LASER", message: "LASER", message_zh: "激光" }, //4 esquerda frente
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 59087, y: 128907, z: 2370, w: -2.75 } }//4 esquerda frente
		],
		"s-916-91606-1304-0": [{ type: "text", sub_type: "message", message_RU: "ЛАЗЕР", message_zh: "随机激光", message: "Random Laser " },
			{ type: "text", sub_type: "notification", message_RU: "Скоро лазер...", message_zh: "准备随机激光", message: "Random Laser soon...", delay: 55000 }
		],
		"s-916-91606-1102-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message_zh: "翻滚", message: "Spin" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, -15, 15, 280, 0, 2500] }
		],
		"s-916-91606-1106-0": [{ type: "text", sub_type: "message", message_RU: "Передняя комба (таргет)", message_zh: "前方连击点名", message: "Frontal Combo (Target)" },
			{ type: "spawn", func: "circle", args: [false, 553, -30, 200, 18, 160, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 553, -10, 230, 15, 210, 2000, 2000] },
			{ type: "spawn", func: "circle", args: [false, 413, 50, 50, 15, 160, 2000, 2000] }
		],
		"s-916-91606-1107-0": [{ type: "text", sub_type: "message", message_RU: "Несколько ударов (таргет)", message_zh: "多段攻击点名", message: "Many Hits (Target)" }],
		"s-916-91606-1302-0": [{ type: "text", sub_type: "message", message_RU: "Лазер (ЗАЩИТА)", message_zh: "激光保护", message: "Laser (PROTECT)" },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 900, 0, 4000] }
		],
		"s-916-91606-1304-1": [{ type: "text", sub_type: "message", message_RU: "Эвейд", message_zh: "闪避", message: "Dodge", delay: 150 }],
		"s-916-91606-1305-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message_zh: "范围攻击", message: "AoEs" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 210, 22, 140, 0, 3000] }, //1 front
			{ type: "spawn", func: "circle", args: [false, 553, 0, -230, 22, 140, 0, 3000] }, //2 back
			{ type: "spawn", func: "circle", args: [false, 553, 90, -230, 22, 140, 0, 2000] }, //3 left
			{ type: "spawn", func: "circle", args: [false, 553, 270, -230, 22, 140, 0, 2000] }, //4 right
			{ type: "spawn", func: "circle", args: [false, 553, 315, 360, 14, 220, 1000, 3000] }, //1 front left big
			{ type: "spawn", func: "circle", args: [false, 553, 135, 360, 14, 220, 1000, 3000] }, //2 back right big
			{ type: "spawn", func: "circle", args: [false, 553, 45, 360, 14, 220, 1000, 2000] }, //3 front right big
			{ type: "spawn", func: "circle", args: [false, 553, 225, 360, 14, 220, 1000, 3000] }//4 back left big
		],
		"s-916-91606-2102-0": "s-916-91606-1102-0",
		"s-916-91606-2106-0": "s-916-91606-1106-0",
		"s-916-91606-2107-0": "s-916-91606-1107-0",
		"s-916-91606-2105-0": "s-916-91606-1105-0",
		"qb-916-91606-916027": [{ type: "text", sub_type: "message", message_RU: "Таргет (откид)", message_zh: "点名击退", message: "Target (Push)" }],
		"s-916-91606-1301-0": [
			{ type: "spawn", func: "semicircle", args: [338, 385, 553, 0, 0, 5, 600, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 459, 60, 20, 550, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 251, 55, -21, 550, 0, 2000] }
		],
		"qb-916-91606-916007": [{ type: "text", sub_type: "message", message_RU: "(ВМЕСТЕ)", message_zh: "集合", message: "GATHER" }],

		// Boss 3
		"nd-916-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{type: "func", func: reset_backevent}
		],
		"h-916-1000-94": [{ type: "text", sub_type: "message", message: "94%", message_zh: "百分之九十四", message_RU: "94%" }],
		"h-916-1000-49": [{ type: "text", sub_type: "message", message: "49%", message_zh: "百分之四十九", message_RU: "49%" }],
		"s-916-1000-1112-0": [{ type: "text", sub_type: "message", message_RU: "Рывок назад", message_zh: "向后冲刺", message: "Back Move" }],
		"s-916-1000-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-916-1000-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-916-1000-1106-0": [{ type: "func", func: boss_backattack_event_new, args: [1106] }],
		"s-916-1000-1105-0": [{ type: "func", func: boss_backattack_event_new, args: [1105] }],
		"s-916-1000-1103-0": [{ type: "func", func: boss_backattack_event_new, args: [1103] }],
		"s-916-1000-1108-0": [{ type: "func", func: boss_backattack_event_new, args: [1108] }],
		"s-916-1000-1114-0": [
			{ type: "text", sub_type: "message", message_RU: "Таргет", message_zh: "点名攻击", message: "Target Attack" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-916-1000-1115-0": [
			{ type: "text", sub_type: "message", message: "3", message_zh: "三" },
			{ type: "text", sub_type: "message", delay: 1000, message: "2", message_zh: "二" },
			{ type: "text", sub_type: "message", delay: 2000, message: "1", message_zh: "一" },
			{ type: "text", sub_type: "message", delay: 3200, message_RU: "Эвейд", message_zh: "闪避", message: "Dodge" }
		],
		"s-916-1000-1117-0": [{ type: "text", sub_type: "message", message_RU: "Удар вперед", message_zh: "前方攻击", message: "Front" }],
		"s-916-1000-1118-0": [
			{ type: "text", sub_type: "message", message_RU: "Передний разрез | Эвейд", message_zh: "前方斩接闪避", message: "Frontal Cut | Dodge" },
			{ type: "spawn", func: "semicircle", args: [0, 60, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 55, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 340, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [300, 360, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [305, 360, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [310, 360, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [315, 360, 553, 0, 0, 10, 340, 0, 2000] }
		],
		"s-916-1000-1302-0": [
			{ type: "text", sub_type: "message", message_RU: "АоЕ", message_zh: "范围攻击", message: "AOE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-916-1000-2101-0": "s-916-1000-1101-0",
		"s-916-1000-2102-0": "s-916-1000-1102-0",
		"s-916-1000-2103-0": "s-916-1000-1103-0",
		"s-916-1000-2105-0": "s-916-1000-1105-0",
		"s-916-1000-2106-0": "s-916-1000-1106-0",
		"s-916-1000-2108-0": "s-916-1000-1108-0",
		"s-916-1000-2112-0": "s-916-1000-1112-0",
		"s-916-1000-1303-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message_zh: "旋转攻击", message: "Spin Attack" }],
		"s-916-1000-1801-0": [{ type: "text", sub_type: "message", message_RU: "Стан", message_zh: "咆哮眩晕", message: "Incoming Stun" }],
		"s-916-1000-1401-0": [{ type: "text", sub_type: "message", message_RU: "Правый", message_zh: "向右击退", message: "Right" },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1500] }
		],
		"s-916-1000-1402-0": [{ type: "text", sub_type: "message", message_RU: "Левый", message_zh: "向左击退", message: "Left" },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1500] }
		],
		"s-916-1000-1301-0":  [{ type: "text", sub_type: "message", message_RU: "вопль", message_zh: "尖叫", message: "Scream" }],
		"s-916-1000-1311-0":  [{ type: "text", sub_type: "message", message_RU: "Внутренний", message_zh: "内圈", message: "Inner" }],
		"s-916-1000-1308-0":  [{ type: "text", sub_type: "message", message_RU: "Внутренний", message_zh: "内圈", message: "Inner" }],
		"s-916-1000-2114-0": "s-916-1000-1114-0",
		"s-916-1000-2115-0": "s-916-1000-1115-0",
		"s-916-1000-2117-0": "s-916-1000-1117-0",
		"s-916-1000-2118-0": "s-916-1000-1118-0",
		"s-916-1000-2401-0": "s-916-1000-1401-0",
		"s-916-1000-2402-0": "s-916-1000-1402-0"
	};
};