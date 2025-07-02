// Antaroth's Abyss
//
// made by HSDN / Yuyuko / Owyn

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let secondboss_mech_counter = 0;
	let thirdboss_counter = 0;
	let thirdboss_timer = null;

	function secondboss_stacks_event() {
		secondboss_mech_counter++;

		handlers.text({ sub_type: "notification", message: `${secondboss_mech_counter} stack`, message_RU: `Стак ${secondboss_mech_counter}`, message_zh: `层数 ${secondboss_mech_counter}`, speech: false });

		if (secondboss_mech_counter >= 5) {
			secondboss_mech_counter = 0;
		}
	}

	function thirdboss_backattack_event() {
		dispatch.clearTimeout(thirdboss_timer);
		thirdboss_counter++;

		if (thirdboss_counter >= 2) {
			handlers.text({ sub_type: "message", message: "Back Stun", message_RU: "Задний", message_zh: "背后眩晕" });
		}

		thirdboss_timer = dispatch.setTimeout(() => thirdboss_counter = 0, 3000);
	}

	return {
		// 1 BOSS
		"nd-720-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-720-1000-1117-0": [{ type: "text", sub_type: "message", message: "In > Out", message_RU: "К нему > От него", message_zh: "靠近再远离" }],
		"s-720-1000-1116-0": [{ type: "text", sub_type: "message", message: "Out > In", message_RU: "От него > К нему", message_zh: "远离再靠近" }],
		"s-720-1000-1109-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Откид назад", message_zh: "后方直线" }],
		"s-720-1000-1300-0": [{ type: "text", sub_type: "message", delay: 600, message: "Dodge!", message_RU: "Эвейд!", message_zh: "闪避！" }],
		"s-720-1000-2117-0": "s-720-1000-1117-0",
		"s-720-1000-2116-0": "s-720-1000-1116-0",
		"s-720-1000-2109-0": "s-720-1000-1109-0",
		"s-720-1000-2220-0": "s-720-1000-1220-0",
		"qb-720-1000-7201000": [{ type: "text", sub_type: "message", message: "Flying", message_RU: "Подлет", message_zh: "飞天" }],

		// 2 BOSS
		"nd-720-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-720-2000-99": [{ type: "func", func: () => secondboss_mech_counter = 0 }],
		"s-720-2000-1104-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Прыжок (стан)", message_zh: "随机跳跃眩晕" }],
		"s-720-2000-1105-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Удар назад", message_zh: "后方直线" }],
		"s-720-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Spin Attack", message_RU: "Крутилка", message_zh: "旋转攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-720-2000-1108-0": [{ type: "text", sub_type: "message", message: "Target Swing", message_RU: "Таргет", message_zh: "点名挥击" }],
		"s-720-2000-1110-0": [
			{ type: "text", sub_type: "message", message: "Stun Attack", message_RU: "Передний стан", message_zh: "眩晕攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 175, 10, 260, 0, 5000] }
		],
		"s-720-2000-1111-0": [
			{ type: "text", sub_type: "message", message: "Left Slash", message_RU: "Левая полоса", message_zh: "左斜劈" },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 6, 302, 270, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 176, 502, 270, 200, 0, 2000] }
		],
		"s-720-2000-1112-0": [
			{ type: "text", sub_type: "message", message: "Right Slash", message_RU: "Правая полоса", message_zh: "右斜劈" },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 354, 302, 90, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 184, 502, 90, 200, 0, 2000] }
		],
		"s-720-2000-1113-0": "s-720-2000-1111-0",
		"s-720-2000-1114-0": "s-720-2000-1112-0",
		"s-720-2000-2104-0": "s-720-2000-1104-0",
		"s-720-2000-2105-0": "s-720-2000-1105-0",
		"s-720-2000-2106-0": "s-720-2000-1106-0",
		"s-720-2000-2108-0": "s-720-2000-1108-0",
		"s-720-2000-2110-0": "s-720-2000-1110-0",
		"s-720-2000-2111-0": "s-720-2000-1111-0",
		"s-720-2000-2112-0": "s-720-2000-1112-0",
		"s-720-2000-2113-0": "s-720-2000-1111-0",
		"s-720-2000-2114-0": "s-720-2000-1112-0",
		"s-720-2000-3116-0": [{ type: "text", sub_type: "message", message: "Circles", message_RU: "Круги", message_zh: "圆圈" }],
		"s-720-2000-3119-0": [{ type: "text", sub_type: "message", message: "Red: Out safe", message_RU: "Красный: Наружу сейф", message_zh: "红色外面安全" }],
		"s-720-2000-3220-0": [{ type: "text", sub_type: "message", message: "Blue: In safe", message_RU: "Синий: Внутрь сейф", message_zh: "蓝色里面安全" }],
		//
		"dm-0-0-7202000": [{ type: "func", func: secondboss_stacks_event }],

		// 3 BOSS
		"nd-720-3000-0": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-720-3000-1104-0": [{ type: "func", func: thirdboss_backattack_event }],
		"s-720-3000-1119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],
		"s-720-3000-1107-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Прыжок (стан)", message_zh: "随机跳跃眩晕" }],
		"s-720-3000-1107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],
		"s-720-3000-1109-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Лево", message_zh: "向左击退" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] }
		],
		"s-720-3000-1111-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Право", message_zh: "向右击退" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] }
		],
		"s-720-3000-1113-0": [{ type: "text", sub_type: "message", message: "Front | Back Stun", message_RU: "Передний | Задний", message_zh: "前方接背后眩晕" }],
		"s-720-3000-1115-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_RU: "Круговая", message_zh: "旋转攻击" }],
		"s-720-3000-1120-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_RU: "Волна (медленно)", message_zh: "慢速能量波" }],
		"s-720-3000-1204-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Fast)", message_RU: "Волна (быстро)", message_zh: "快速能量波" }],
		"s-720-3000-1206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_RU: "Шары", message_zh: "宝珠" }],
		"s-720-3000-1309-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ", message_zh: "范围攻击" }],
		"s-720-3000-1310-0": [{ type: "text", sub_type: "message", message: "Puddles", message_RU: "Лужи", message_zh: "毒圈" }],
		"s-720-3000-1311-0": "s-720-3000-1310-0",
		"s-720-3000-1312-0": "s-720-3000-1310-0",
		"s-720-3000-1313-0": "s-720-3000-1310-0",
		"s-720-3000-1314-0": "s-720-3000-1310-0",
		"s-720-3000-1315-0": [{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид (кайа)", message_zh: "击退" }],
		"s-720-3000-1400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_RU: "Копии: волны", message_zh: "分身光线" }],
		"s-720-3000-1401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_RU: "Копии: круговые", message_zh: "分身旋转" }],
		"s-720-3000-2104-0": "s-720-3000-1104-0",
		"s-720-3000-2105-0": "s-720-3000-1105-0",
		"s-720-3000-2119-0": "s-720-3000-1119-0",
		"s-720-3000-2107-0": "s-720-3000-1107-0",
		"s-720-3000-2107-1": "s-720-3000-1107-1",
		"s-720-3000-2109-0": "s-720-3000-1109-0",
		"s-720-3000-2111-0": "s-720-3000-1111-0",
		"s-720-3000-2113-0": "s-720-3000-1113-0",
		"s-720-3000-2115-0": "s-720-3000-1115-0",
		"s-720-3000-2120-0": "s-720-3000-1120-0",
		"s-720-3000-2204-0": "s-720-3000-1204-0",
		"s-720-3000-2202-0": "s-720-3000-1202-0",
		"s-720-3000-2206-0": "s-720-3000-1206-0"
	};
};