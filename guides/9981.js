﻿// Velik's Sanctuary (Hard)
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_fifty = false;

	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца", message_zh: "披萨" },
				{ type: "spawn", func: "marker", args: [false, one * 45 + 68, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 45, 750, 0, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 90, 750, 0, 5000] },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 330, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, two * 45 + 68, 300, 7000, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 45, 750, 7000, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 90, 750, 7000, 5000] }
			]);
		}
	}

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs", message_zh: "debuff>闪电>炸弹",
						message_RU: "ДКБ"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles", message_zh: "debuff>炸弹>闪电",
						message_RU: "ДБК"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs", message_zh: "闪电>炸弹>debuff",
						message_RU: "КБД"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs", message_zh: "闪电>debuff>炸弹",
						message_RU: "КДБ"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles", message_zh: "炸弹>debuff>闪电",
						message_RU: "БДК"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs", message_zh: "炸弹>闪电>debuff",
						message_RU: "БКД"
					});
				}
				break;
		}
	}

	return {
		// 1 BOSS
		"nd-981-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-981-1000-1111-0": [{ type: "text", sub_type: "message", message: "Back 360", message_RU: "Задняя 360", message_zh: "背后三百六十度" }],
		"s-981-1000-1401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", message_zh: "向右击退" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-1000-1402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", message_zh: "向左击退" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-1000-1301-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ", message_zh: "范围攻击" },
			{ type: "text", sub_type: "message", message: "Dodge! (Go to the safe)", message_RU: "Эвейд! (отойти в сейф зону)", message_zh: "闪避！去安全区！", delay: 1000 }
		],
		"s-981-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" }],
		"s-981-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_RU: "Взлет", message_zh: "飞天" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-981-1000-1308-0": [{ type: "text", sub_type: "message", message: "OUT", message_RU: "Наружу", message_zh: "远离" }],
		"s-981-1000-1309-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "Внутрь", message_zh: "靠近" }],
		"s-981-1000-1112-0": [{ type: "text", sub_type: "message", message_RU: "Рывок назад", message_zh: "向后冲刺", message: "Back Move" }],
		"s-981-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_RU: "Передняя + AOE", message_zh: "前方加范围攻击" }],
		"s-981-1000-1114-0": [
			{ type: "text", sub_type: "message", message_RU: "Таргет", message_zh: "点名攻击", message: "Target Attack" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-981-1000-1115-0": [{ type: "text", sub_type: "message", delay: 3200, message_RU: "Эвейд", message_zh: "闪避", message: "Dodge" }], // dodge circle
		"s-981-1000-1117-0": [{ type: "text", sub_type: "message", delay: 5200, message_RU: "Эвейд", message_zh: "闪避", message: "Dodge" }], // dodge circles
		"s-981-1000-2111-0": "s-981-1000-1111-0",
		"s-981-1000-2112-0": "s-981-1000-1112-0",
		"s-981-1000-2113-0": "s-981-1000-1113-0",
		"s-981-1000-2114-0": "s-981-1000-1114-0",
		"s-981-1000-2115-0": "s-981-1000-1115-0",
		"s-981-1000-2117-0": "s-981-1000-1117-0",
		"qb-981-1000-98103": [{ type: "text", sub_type: "message", message: "Lead circle to the stone", message_RU: "Отвести круг к пилону", message_zh: "带圈去石柱" }],
		"qb-981-1000-98106": [{ type: "text", sub_type: "message", message: "Lead circles to the stone", message_RU: "Отвести круги к пилону", message_zh: "带圈去石柱" }],

		// 2 BOSS
		"nd-981-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Cage Mechanic
		"s-981-2000-1501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_RU: "Идентификация", message_zh: "鉴定" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-981-2000-1138-0": [ // T1
			{ type: "event", delay: 6700, args: [
				{ type: "text", sub_type: "notification", message: "Out > In > Side > Side", message_RU: "Наружу > Внутрь > В сторону > В сторону", message_zh: "外内侧侧" },
				// x6 normal + in circle
				{ type: "spawn", func: "marker", args: [false, 15, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 0, 3000, true, null] },
				// out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 1500, true, null] },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 4500, 1000, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 5500, 2000, true, null] }
			] }
		],
		"s-981-2000-1139-0": [ // T2
			{ type: "event", delay: 7700, args: [
				{ type: "text", sub_type: "notification", message: "Side > In > Out > Side", message_RU: "В сторону > Внутрь > Наружу > В сторону", message_zh: "侧内外侧" },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 0, 1500, true, null] },
				// x6 normal
				{ type: "spawn", func: "marker", args: [false, 15, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 1500, 1500, true, null] },
				// out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 1500, true, null] },
				// in circle
				{ type: "spawn", func: "marker", args: [false, 15, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 4500, 1500, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 270, 6000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 6000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 6000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 6000, 1500, true, null] }
			] }
		],
		"s-981-2000-1140-0": [ // T1
			{ type: "event", delay: 6700, args: [
				{ type: "text", sub_type: "notification", message: "Out > In > Side > Side", message_RU: "Наружу > Внутрь > В сторону > В сторону", message_zh: "外内侧侧" },
				// in circle
				{ type: "spawn", func: "marker", args: [false, 45, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 0, 1500, true, null] },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 1500, 1500, true, null] },
				// x6 normal + out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 2500, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 5500, 2000, true, null] }
			] }
		],
		"s-981-2000-1141-0": [ // T2
			{ type: "event", delay: 7700, args: [
				{ type: "text", sub_type: "notification", message: "Out > Side > Side > In", message_RU: "Наружу > В сторону > В сторону > Внутрь", message_zh: "外侧侧内" },
				// x6 normal
				{ type: "spawn", func: "marker", args: [false, 15, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 0, 1500, true, null] },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 1500, 1500, true, null] },
				// in circle
				{ type: "spawn", func: "marker", args: [false, 75, 270, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 3000, 1500, true, null] },
				// out circle + x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 4500, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 4500, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 4500, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 4500, 3000, true, null] }
			] }
		],
		//
		"s-981-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний", message_zh: "背后攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 14, 270, 0, 2600] }
		],
		"s-981-2000-1108-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний", message_zh: "前方攻击" }],
		"s-981-2000-1110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_RU: "Рыыок назад", message_zh: "向后冲刺" }],
		"s-981-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_RU: "Круговая", message_zh: "旋转攻击" }],
		"s-981-2000-1114-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Притяжка", message_zh: "拉人" }],
		"s-981-2000-1115-0": [{ type: "text", sub_type: "message", message: "Circles", message_RU: "Круги", message_zh: "圆圈" }],
		"s-981-2000-1115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 150 }],
		"s-981-2000-1117-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-981-2000-1130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", message_zh: "向左击退" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", message_zh: "向右击退" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1134-0": [
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_RU: "Ближний + АоЕ", message_zh: "内圈加范围攻击" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-981-2000-1134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-981-2000-1136-0": [{ type: "text", sub_type: "message", message: "Donut", message_RU: "Бублик", message_zh: "环形攻击" }],
		"s-981-2000-1202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_RU: "Бросок цели", message_zh: "投掷目标" }],
		"s-981-2000-1205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_RU: "Бросок цели", message_zh: "投掷目标" }],
		"s-981-2000-1206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_RU: "Копье (таргет)", message_zh: "点名长矛" }],
		"s-981-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_RU: "Байт (таргет)", message_zh: "诱导点名" }],
		"s-981-2000-1302-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1600 }],
		"s-981-2000-1502-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ", message_zh: "范围攻击" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-981-2000-1503-0": [{ type: "text", sub_type: "message", message: "Target Lockon", message_RU: "Захват цели", message_zh: "锁定目标" }],
		"s-981-2000-1504-0": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_RU: "Призыв мобов", message_zh: "召唤小怪" }],
		//
		"s-981-2000-2106-0": "s-981-2000-1106-0",
		"s-981-2000-2108-0": "s-981-2000-1108-0",
		"s-981-2000-2110-0": "s-981-2000-1110-0",
		"s-981-2000-2111-0": "s-981-2000-1111-0",
		"s-981-2000-2114-0": "s-981-2000-1114-0",
		"s-981-2000-2115-0": "s-981-2000-1115-0",
		"s-981-2000-2115-1": "s-981-2000-1115-1",
		"s-981-2000-2117-0": "s-981-2000-1117-0",
		"s-981-2000-2130-0": "s-981-2000-1130-0",
		"s-981-2000-2131-0": "s-981-2000-1131-0",
		"s-981-2000-2134-0": "s-981-2000-1134-0",
		"s-981-2000-2134-1": "s-981-2000-1134-1",
		"s-981-2000-2136-0": "s-981-2000-1136-0",
		// Pizza Mechanic
		"s-981-927-1301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-981-927-1302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-981-927-1303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-981-927-1307-0": [{ type: "func", func: secondboss_floor_event, args: [1, 6] }],
		"s-981-927-1308-0": [{ type: "func", func: secondboss_floor_event, args: [3, 6] }],
		"s-981-927-1309-0": [{ type: "func", func: secondboss_floor_event, args: [6, 3] }],
		"s-981-927-1310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-981-927-1311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-981-927-1312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-981-927-1313-0": [{ type: "func", func: secondboss_floor_event, args: [1, 6] }],
		"s-981-927-1314-0": [{ type: "func", func: secondboss_floor_event, args: [3, 6] }],
		"s-981-927-1315-0": [{ type: "func", func: secondboss_floor_event, args: [6, 3] }],
		//
		"qb-981-4000-9981046": [{ type: "text", sub_type: "notification", message: "First: (Debuffs) Closest", message_RU: "[ДКБ] Первая: дебафф (ближние)", message_zh: "第一轮debuff最近的" }], // Thank you... for this release...
		"qb-981-4000-9981047": [{ type: "text", sub_type: "notification", message: "First: (Circles) Spread", message_RU: "[КБД] Первая: круги (отдельно)", message_zh: "第一轮圈散开" }], // Beware the... red lightning...
		"qb-981-4000-9981048": [{ type: "text", sub_type: "notification", message: "First: (Bombs) Gather + Cleanse", message_RU: "[БДК] Первая: бомбы (вместе + клинс)", message_zh: "第一轮炸弹集合净化" }], // Beware the mark... of Lakan...

		// 3 BOSS
		"nd-981-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-981-3000-99": [{ type: "func", func: () => thirdboss_fifty = false }],
		"h-981-3000-50": [{ type: "func", func: () => thirdboss_fifty = true }],
		"dm-0-0-9981043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-9981044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-9981045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-981-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_RU: "Дебафф (ближние)", message_zh: "debuff点最近的" }],
		"s-981-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_RU: "Дебафф (дальние)", message_zh: "debuff点最远的" }],
		"s-981-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_RU: "Бомбы (вместе!) + клинс", message_zh: "炸弹集合加净化" }],
		"s-981-3000-1302-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + No cleanse", message_RU: "Бомбы (вместе!) + без клинса", message_zh: "炸弹集合不净化" }],
		"s-981-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Circles) Spread", message_RU: "Круги (отдельно!)", message_zh: "圈散开" }],
		"s-981-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Circles) Gather", message_RU: "Круги (вместе!)", message_zh: "圈集合" }],
		"s-981-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_RU: "Когти", message_zh: "爪击" }],
		"s-981-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_RU: "Наружу", message_zh: "远离" }],
		"s-981-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "Внутрь", message_zh: "靠近" }],
		"s-981-3000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики", message_zh: "环形攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }
		],
		"s-981-3000-1140-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики", message_zh: "环形攻击" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 195, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 345, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 515, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 40, 8, 670, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 6, 830, 0, 4500] }
		],
		"s-981-3000-2140-0": "s-981-3000-1140-0",
		"s-981-3000-1146-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики", message_zh: "环形攻击" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 195, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 345, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 515, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 40, 8, 670, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 6, 830, 0, 4500] }
		],
		"s-981-3000-1401-0": [
			{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Регресс!!", message_zh: "驱散" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 15, 175, 1000, 7000] }
		],
		"s-981-3000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_RU: "Слип!!", message_zh: "睡眠！" }],
		"s-981-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + front", message_RU: "Назад + Вперед", message_zh: "背后加前方" }],
		//
		"s-981-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт", message_zh: "诱导" }],
		"s-981-3000-1151-0": [{ type: "text", sub_type: "message", message: "Attention stun", message_RU: "Стан", message_zh: "注意击晕" }],
		"s-981-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_RU: "Стан + Откид назад", message_zh: "眩晕加背后击退" }],
		"s-981-3000-1152-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1900 }],
		"s-981-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-981-3000-2113-0": "s-981-3000-1113-0",
		"s-981-3000-2151-0": "s-981-3000-1151-0",
		"s-981-3000-2152-0": "s-981-3000-1152-0",
		"s-981-3000-2152-1": "s-981-3000-1152-1",
		"s-981-3000-2138-0": "s-981-3000-1138-0"
	};
};