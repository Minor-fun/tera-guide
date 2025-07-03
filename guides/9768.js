// Shadow Sanguinary
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let thirdboss_print_combo = true;
	let thirdboss_print_bait = true;
	let thirdboss_combo_count = 0;
	let thirdboss_combo_last_128 = null;
	let thirdboss_combo_last_129 = null;

	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца", message_zh: "披萨" },
				{ type: "spawn", func: "marker", args: [false, one * 45 - 22, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 - 45, 750, 0, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45, 750, 0, 5000] },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 330, 0, 7000] },
				{ type: "spawn", func: "marker", args: [false, two * 45 - 22, 300, 8000, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 - 45, 750, 8000, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45, 750, 8000, 5000] }
			]);
		}
	}

	return {
		// 1 BOSS
		"nd-768-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-768-1000-102-0": [{ type: "text", sub_type: "message", message: "Turn Attack", message_RU: "Разворот", message_zh: "转身攻击" }],
		"s-768-1000-106-0": [{ type: "text", sub_type: "message", message: "Three Combo", message_RU: "Тройная комба", message_zh: "三重连击" }],
		"s-768-1000-107-0": [{ type: "text", sub_type: "message", message: "Front Combo", message_RU: "Передняя комба", message_zh: "前方连击" }],
		"s-768-1000-301-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_RU: "Волна вперед", message_zh: "前方波" }],
		"s-768-1000-304-0": [{ type: "text", sub_type: "message", message: "Strike (Target)", message_RU: "Выстрел (таргет)", message_zh: "点名攻击" }],
		"s-768-1000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 700 }],
		"s-768-1000-305-0": [{ type: "text", sub_type: "message", message: "8 explosions", message_RU: "Серия взрывов", message_zh: "八连爆" }],
		"s-768-1000-306-0": [{ type: "text", sub_type: "message", message: "Stones", message_RU: "Пилоны", message_zh: "石头" }], // 306 -> 307

		// 2 BOSS
		"nd-768-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-768-2000-101-0": [{ type: "text", sub_type: "message", message: "Fireball", message_RU: "Огненный шар", message_zh: "火球" }],
		"s-768-2000-102-0": [{ type: "text", sub_type: "message", message: "Drain", message_RU: "Разряд", message_zh: "吸取" }],
		"s-768-2000-103-0": [{ type: "text", sub_type: "message", message: "Explosion", message_RU: "Взрыв", message_zh: "爆炸" }],
		"s-768-2000-104-0": [{ type: "text", sub_type: "message", message: "Dark Frame", message_RU: "Удар вперед", message_zh: "前方攻击" }],
		"s-768-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_RU: "Передняя", message_zh: "前方攻击" }],
		"s-768-2000-111-0": [{ type: "text", sub_type: "message", message: "360", message_RU: "Крутилка" }], // 114 -> 111
		"s-768-2000-112-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Задняя", message_zh: "后方直线" }],
		"s-768-2000-117-0": [{ type: "text", sub_type: "message", message: "Laser (Target)", message_RU: "Лазер (таргет)", message_zh: "点名激光" }],
		"s-768-2000-117-2": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 600 }],
		"s-768-2000-118-0": [{ type: "text", sub_type: "message", message: "Laser", message_RU: "Лазер", message_zh: "激光" }],
		"s-768-2000-307-0": [{ type: "text", sub_type: "message", message: "Donut", message_RU: "Бублик", message_zh: "环形攻击" }],
		"s-768-2000-501-0": [{ type: "text", sub_type: "message", message: "Charging", message_RU: "Зарядка", message_zh: "蓄力" }],
		"s-768-2000-301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-768-2000-302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-768-2000-303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-768-2000-304-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 1-4-2-3-5
		"s-768-2000-305-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 4-2-5-1-3
		"s-768-2000-306-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 5-1-4-3-2
		"s-768-2000-310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-768-2000-311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-768-2000-312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],

		// 3 BOSS
		"nd-768-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//
		"s-768-3000-101-0": [
			{ type: "event", check_func: () => thirdboss_print_combo, args: [
				{ type: "text", sub_type: "message", message: "Combo soon", message_RU: "Скоро комба", message_zh: "准备连击" },
				{ type: "func", func: () => thirdboss_print_combo = false },
				{ type: "func", func: () => thirdboss_print_combo = true, delay: 12000 }
			] }
		],
		"s-768-3000-102-0": "s-768-3000-101-0",
		//
		"s-768-3000-128-0": [ // 128 -> 106/130
			{ type: "text", sub_type: "message", message: "Back/Left", message_RU: "Задний/Откид влево", message_zh: "背后或左侧", check_func: () => thirdboss_combo_last_128 === null },
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний", message_zh: "背后攻击", check_func: () => thirdboss_combo_last_128 === 130 },
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", message_zh: "向左击退", check_func: () => thirdboss_combo_last_128 === 106 }
		],
		"s-768-3000-129-0": [ // 129 -> 108/131
			{ type: "text", sub_type: "message", message: "Front/Right", message_RU: "Передний/Откид вправо", message_zh: "前方或右侧", check_func: () => thirdboss_combo_last_129 === null },
			{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний", message_zh: "前方攻击", check_func: () => thirdboss_combo_last_129 === 131 },
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", message_zh: "向右击退", check_func: () => thirdboss_combo_last_129 === 108 }
		],
		"s-768-3000-130-0": [ // 128 -> 130
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", message_zh: "向左击退", check_func: () => thirdboss_combo_last_128 === null },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_128 = 130;
			} }
		],
		"s-768-3000-105-0": [ // 130 -> 105
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-768-3000-106-0": [ // 128 -> 106
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний", message_zh: "背后攻击", check_func: () => thirdboss_combo_last_128 === null },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 12, 270, 0, 2600] },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_128 = 106;
			} }
		],
		"s-768-3000-131-0": [ // 129 -> 131
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", message_zh: "向右击退", check_func: () => thirdboss_combo_last_129 === null },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_129 = 131;
			} }
		],
		"s-768-3000-107-0": [ // 131 -> 107
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-768-3000-108-0": [ // 129 -> 108
			{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний", message_zh: "前方攻击", check_func: () => thirdboss_combo_last_129 === null },
			{ type: "func", func: () => {
				thirdboss_combo_count++;
				thirdboss_combo_last_129 = 108;
			} }
		],
		"s-768-3000-109-0": "s-768-3000-106-0",
		//
		"s-768-3000-110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_RU: "Рывок назад", message_zh: "向后冲刺" }],
		"s-768-3000-111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_RU: "Круговая", message_zh: "旋转攻击" }],
		"s-768-3000-114-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Притяжка", message_zh: "拉人" }], // 114 -> 111
		"s-768-3000-115-0": [{ type: "text", sub_type: "message", message: "Circles", message_RU: "Круги", message_zh: "圆圈" }], // 202/205 -> 115
		"s-768-3000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 150 }],
		"s-768-3000-117-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }], // 503 -> 117
		"s-768-3000-134-0": [ // qb 468052 -> 134
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_RU: "Ближний + АоЕ", message_zh: "内圈加范围攻击" },
			{ type: "text", sub_type: "message", message: "Get Debuff", message_RU: "Взять стак", message_zh: "吃debuff", class_position: "heal", delay: 2000 },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-768-3000-134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-768-3000-136-0": [{ type: "text", sub_type: "message", message: "Donut", message_RU: "Бублик", message_zh: "环形攻击" }], // 135 -> 136
		"s-768-3000-202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_RU: "Бросок цели", message_zh: "投掷目标" }], // 503 -> 201 -> 202
		"s-768-3000-205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_RU: "Бросок цели", message_zh: "投掷目标" }], // 503 -> 117 -> 203 -> 204 -> 205
		"s-768-3000-206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_RU: "Копье (таргет)", message_zh: "点名长矛" }], // 206 -> 207
		"s-768-3000-302-0": [
			{ type: "text", sub_type: "message", message: "Bait (Target)", message_RU: "Байт (таргет)", message_zh: "诱导点名" },
			{ type: "func", func: () => {
				thirdboss_combo_count = 0;
				thirdboss_combo_last_128 = null;
				thirdboss_combo_last_129 = null;
			} }
		],
		"s-768-3000-302-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1600 }],
		"s-768-3000-501-0": [
			{ type: "text", sub_type: "message", message: "Cage", message_RU: "Клетка", message_zh: "牢笼" }
		],
		"s-768-3000-502-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ", message_zh: "范围攻击" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-768-3000-503-0": [{ type: "text", sub_type: "message", message: "Target Lockon", message_RU: "Захват цели", message_zh: "锁定目标" }], // qb 468050 -> 503
		"s-768-3000-504-0": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_RU: "Призыв мобов", message_zh: "召唤小怪" }],
		// "s-768-3000-508-0": [{ type: "text", sub_type: "message", message: "Buff", message_zh: "增益" }],
		"dm-0-0-9768013": [
			{ type: "text", sub_type: "notification", message: "Ready to Shield", message_RU: "Готовность ломать щит", message_zh: "准备破盾", speech: false },
			{ type: "text", sub_type: "alert", message: "Ready to Shield", message_RU: "Готовность ломать щит", message_zh: "准备破盾" }
		],
		//
		"give_bait": [
			{ type: "event", check_func: () => thirdboss_print_bait, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_RU: "Дать байт", message_zh: "去诱导", class_position: "heal" },
				{ type: "func", func: () => thirdboss_print_bait = false },
				{ type: "func", func: () => thirdboss_print_bait = true, delay: 6000 }
			] }
		],
		"give_bait_combo": [
			{ type: "event", check_func: () => thirdboss_combo_count >= 3, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_RU: "Дать байт", message_zh: "去诱导", class_position: "heal" },
				{ type: "func", func: () => {
					thirdboss_combo_count = 0;
					thirdboss_combo_last_128 = null;
					thirdboss_combo_last_129 = null;
				} }
			] }
		],
		"e-768-3000-101": "give_bait",
		"e-768-3000-102": "give_bait",
		"e-768-3000-105": "give_bait_combo", // left
		"e-768-3000-106": "give_bait_combo", // back
		"e-768-3000-107": "give_bait_combo", // right
		"e-768-3000-108": "give_bait_combo", // front
		"e-768-3000-111": "give_bait", // 360 attack
		"e-768-3000-114": "give_bait", // pull
		"e-768-3000-115": "give_bait", // circles
		"e-768-3000-117": "give_bait", // jump
		"e-768-3000-202": "give_bait", // target throw
		"e-768-3000-205": "give_bait", // target throw
		"e-768-3000-207": "give_bait", // pike
		"s-768-3000-122-2": "give_bait", // core pattern 1
		"s-768-3000-123-2": "give_bait", // core pattern 2
		"s-768-3000-124-2": "give_bait", // core pattern 3
		"s-768-3000-127-2": "give_bait", // core pattern 4
		"e-768-3000-136": "give_bait", // donut
		"s-768-3000-506-1": "give_bait" // dissipation
	};
};