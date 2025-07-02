// Timescape (Hard)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = ES;

	const third_boss_sun_w = -2;
	const third_boss_daemon_w = 0;
	const third_boss_goddess_w = 2;
	let third_boss_wall_w = null;
	let third_boss_small_w = null;
	let third_boss_middle_w = null;
	let third_boss_large_w = null;
	let third_boss_small_game_id = null;
	let third_boss_middle_game_id = null;
	let third_boss_large_game_id = null;

	function w_to_deg(radians) {
		if (radians == 0) return 0;
		if (radians == 2) return 120;
		if (radians == -2) return 240;
	}

	function calc_step(a, b, reverse = false) {
		if (a === b) return 0;
		let diff = w_to_deg(b) - w_to_deg(a);
		if (diff <= 0) diff += 360;
		if (reverse) return diff > 120 ? 1 : 2;
		return diff > 120 ? 2 : 1;
	}

	function third_boss_wall_announce() {
		const small = calc_step(third_boss_small_w, third_boss_wall_w);
		const middle = calc_step(third_boss_middle_w, third_boss_wall_w, true);
		const large = calc_step(third_boss_large_w, third_boss_wall_w);
		if (small + middle + large === 0) {
			handlers.text({
				sub_type: "notification",
				message: "Set", message_zh: "设置",
				message_RU: "Установлено",
				speech: false
			});
		} else {
			handlers.text({
				sub_type: "notification",
				message: `Small: ${small}, Middle: ${middle}, Large: ${large}`,
				message_RU: `Малый: ${small}, Средний: ${middle}, Большой: ${large}`,
				message_zh: `小: ${small}, 中: ${middle}, 大: ${large}`,
				speech: false
			});
		}
	}

	dispatch.hook("S_SPAWN_NPC", "*", e => {
		if (e.templateId === 243) {
			third_boss_wall_w = third_boss_sun_w;
			handlers.event([
				{ type: "text", sub_type: "alert", message: "Wall Change (Sun)", message_RU: "Смена печати (Солнце)", message_zh: "墙壁变换太阳" },
				{ type: "func", func: third_boss_wall_announce, delay: 2000 }
			]);
		}
		if (e.templateId === 244) {
			third_boss_wall_w = third_boss_daemon_w;
			handlers.event([
				{ type: "text", sub_type: "alert", message: "Wall Change (Demon)", message_RU: "Смена печати (Демон)", message_zh: "墙壁变换恶魔" },
				{ type: "func", func: third_boss_wall_announce, delay: 2000 }
			]);
		}
		if (e.templateId === 245) {
			third_boss_wall_w = third_boss_goddess_w;
			handlers.event([
				{ type: "text", sub_type: "alert", message: "Wall Change (Goddess)", message_RU: "Смена печати (Богиня)", message_zh: "墙壁变换女神" },
				{ type: "func", func: third_boss_wall_announce, delay: 2000 }
			]);
		}
		if (e.templateId === 301) {
			third_boss_small_game_id = e.gameId;
			third_boss_small_w = parseInt(e.w);
		}
		if (e.templateId === 302) {
			third_boss_middle_game_id = e.gameId;
			third_boss_middle_w = parseInt(e.w);
		}
		if (e.templateId === 303) {
			third_boss_large_game_id = e.gameId;
			third_boss_large_w = parseInt(e.w);
		}
	});

	dispatch.hook("S_CREATURE_ROTATE", "*", e => {
		dispatch.setTimeout(() => {
			if (e.gameId === third_boss_small_game_id) {
				third_boss_small_w = parseInt(e.w);
				third_boss_wall_announce();
			}
			if (e.gameId === third_boss_middle_game_id) {
				third_boss_middle_w = parseInt(e.w);
				third_boss_wall_announce();
			}
			if (e.gameId === third_boss_large_game_id) {
				third_boss_large_w = parseInt(e.w);
				third_boss_wall_announce();
			}
		}, e.time + 100);
	});

	return {
		// Boss 1 (phase 1)
		"nd-456-401": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-456-401-104-0": [
			{ type: "text", sub_type: "message", message: "Bomb", message_RU: "Бомба", message_zh: "炸弹" },
			{ type: "text", sub_type: "warning", message: "(1)", message_RU: "(1)", message_zh: "一", speech: false, delay: 550 },
			{ type: "text", sub_type: "warning", message: "(2)", message_RU: "(2)", message_zh: "二", speech: false, delay: 1300 },
			{ type: "text", sub_type: "warning", message: "(3)", message_RU: "(3)", message_zh: "三", speech: false, delay: 2050 },
			{ type: "text", sub_type: "message", message: "(4) Dodge!", message_RU: "(4) Эвейд!", message_zh: "四，闪避！", delay: 2800 }
		],
		"s-456-1001-107-0": [{ type: "text", sub_type: "alert", message: "Shot", message_RU: "Выстрел", message_zh: "射击" }],

		"s-456-403-106-0": [{ type: "text", sub_type: "alert", message: "Circle", message_RU: "Круг", message_zh: "圆圈" }],
		"s-456-1001-103-0": [{ type: "text", sub_type: "alert", message: "Tail", message_RU: "Хвост", message_zh: "甩尾" }],
		"s-456-1001-101-0": [{ type: "text", sub_type: "alert", message: "Hit", message_RU: "Удар", message_zh: "打击" }],
		"s-456-1001-112-0": [{ type: "text", sub_type: "message", message: "Rotate", message_RU: "Разворот", message_zh: "旋转" }],
		"s-456-1001-113-0": "s-456-1001-112-0",
		"s-456-1001-111-0": [{ type: "text", sub_type: "message", message: "Flight", message_RU: "Взлет", message_zh: "飞天" }],
		"qb-456-1001-456020": [{ type: "text", sub_type: "message", message: "Give stun", message_RU: "Дать стан", message_zh: "晕王" }],

		// Boss 1 (phase 2)
		"nd-456-413": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-456-413-104-0": [
			{ type: "text", sub_type: "message", message: "Bomb", message_RU: "Бомба", message_zh: "炸弹" },
			{ type: "text", sub_type: "warning", message: "(1)", message_RU: "(1)", message_zh: "一", speech: false, delay: 550 },
			{ type: "text", sub_type: "warning", message: "(2)", message_RU: "(2)", message_zh: "二", speech: false, delay: 1300 },
			{ type: "text", sub_type: "warning", message: "(3)", message_RU: "(3)", message_zh: "三", speech: false, delay: 2050 },
			{ type: "text", sub_type: "message", message: "(4) Dodge!", message_RU: "(4) Эвейд!", message_zh: "四，闪避！", delay: 2800 }
		],
		"s-456-414-104-0": "s-456-413-104-0",
		"s-456-415-104-0": "s-456-413-104-0",
		"s-456-416-104-0": "s-456-413-104-0",
		"s-456-1000-107-0": [{ type: "text", sub_type: "alert", message: "Shot", message_RU: "Выстрел", message_zh: "射击" }],
		"ab-456-1000-905685": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Регресс", message_zh: "驱散", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", message_zh: "驱散", class_position: "mystic" }
		],

		"s-456-1000-103-0": "s-456-1001-103-0",
		"s-456-1000-101-0": "s-456-1001-101-0",
		"s-456-1000-112-0": "s-456-1001-112-0",
		"s-456-1000-113-0": "s-456-1001-112-0",
		"s-456-1000-111-0": "s-456-1001-111-0",
		"dm-456-1000-456001": "qb-456-1001-456020",

		// Boss 2
		"nd-456-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-456-1002-102-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-456-1002-103-0": [{ type: "text", sub_type: "message", message: "Combo", message_RU: "Комба", message_zh: "连击" }],
		"s-456-1002-104-0": [{ type: "text", sub_type: "message", message: "Shot (target)", message_RU: "Выстрел (таргет)", message_zh: "点名射击" }],
		"s-456-1002-107-0": [{ type: "text", sub_type: "message", message: "Many Pokes", message_RU: "Серия ударов", message_zh: "多重戳刺" }],
		"s-456-1002-110-0": [{ type: "text", sub_type: "message", message: "Clap", message_RU: "Удар вперед", message_zh: "拍手" }],
		"s-456-1002-111-0": [{ type: "text", sub_type: "message", message: "Front | Jump Back", message_RU: "Удар вперед | Прыжок назад", message_zh: "前方攻击接后跳" }],
		"s-456-1002-212-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_RU: "Прыжок назад", message_zh: "后跳" }],
		"s-456-1002-314-0": [{ type: "text", sub_type: "alert", message: "Lay Back", message_RU: "Кувырок назад", message_zh: "后躺" }],
		"s-456-1002-315-0": [{ type: "text", sub_type: "alert", message: "Lay Front", message_RU: "Кувырок вперед", message_zh: "前躺" }],
		"s-456-1002-319-0": [{ type: "text", sub_type: "alert", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" }],
		"s-456-1002-3110-0": [{ type: "text", sub_type: "message", message: "Breath", message_RU: "Дыхание", message_zh: "吐息" }],
		"s-456-1002-3113-0": [{ type: "text", sub_type: "message", message: "AOE (Give stun)", message_RU: "АОЕ (Дать стан)", message_zh: "范围攻击晕王", delay: 4000 }],

		// Boss 3
		"nd-456-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ab-456-1003-905607": [
			{ type: "text", sub_type: "message", message: "Cleanse + Plague of Exhaustion", message_RU: "Клинс + регресс", message_zh: "净化加驱散", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Cleanse + Regression", message_RU: "Клинс + регресс", message_zh: "净化加驱散", class_position: "mystic" }
		],
		"s-456-1003-3101-0": [
			{ type: "text", sub_type: "message", message: "Take a Circle", message_RU: "Взять бублик", message_zh: "吃圈", check_func: () => third_boss_wall_w !== third_boss_middle_w },
			{ type: "text", sub_type: "message", message: "Don't Take a Circle", message_RU: "Не брать бублик", message_zh: "别吃圈", check_func: () => third_boss_wall_w === third_boss_middle_w }
		],
		"s-756-1003-103-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 340, 0, 5000] }
		],
		"s-456-1003-104-0": [{ type: "text", sub_type: "message", message: "Clap", message_RU: "Удар вперед", message_zh: "拍手" }],
		"s-456-1003-105-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Вперед", message_zh: "前方攻击" }],
		"s-456-1003-105-1": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Назад", message_zh: "背后攻击" }],
		"s-456-1003-107-0": [{ type: "text", sub_type: "message", message: "Swipe", message_RU: "Откид", message_zh: "横扫" }],
		"s-456-1003-108-0": [{ type: "text", sub_type: "message", message: "Swipe", message_RU: "Откид", message_zh: "横扫" }],
		"s-456-1003-109-0": [{ type: "text", sub_type: "message", message: "Breath (target)", message_RU: "Дыхание (таргет)", message_zh: "点名吐息" }],
		"s-456-1003-111-0": [{ type: "text", sub_type: "message", message: "Leash (target)", message_RU: "Притяжка (таргет)", message_zh: "点名拉人" }],
		"s-456-1003-3104-0": [{ type: "text", sub_type: "message", message: "Cage", message_RU: "Клетка", message_zh: "牢笼" }], // 456016
		"s-456-1003-3108-0": [{ type: "text", sub_type: "message", message: "Waves", message_RU: "Волны", message_zh: "冲击波" }],
		"qb-456-1003-456015": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ", message_zh: "范围攻击" }], // 3103
		"qb-456-1003-456017": [{ type: "text", sub_type: "message", message: "Give Stun", message_RU: "Дать стан", message_zh: "晕王" }] // 3102
	};
};