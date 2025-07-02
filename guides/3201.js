// Gossamer Vault (Hard)
//
// made by michengs / ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	let boss = null;

	return {
		// 1 BOSS
		"nd-3201-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//"s-3201-1000-103-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Dodge", message_RU: "Эвейд!", message_zh: "闪避" }],
		"s-3201-1000-104-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Stun attack", message_RU: "Стан!", message_zh: "快速眩晕攻击" }],
		"s-3201-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Полоса", message_zh: "背后攻击" },
			{ type: "text", sub_type: "message", delay: 2250, message: "Pull", message_RU: "Откид", message_zh: "拉人" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 3000] }
		],
		"s-3201-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Back Wave", message_RU: "Волна назад", message_zh: "后方波" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 3000] }
		],
		//"s-3201-1000-112-0": [{ type: "text", sub_type: "message", message: "Left + Right", message_RU: "Лево + Право", message_zh: "左右连击" }],
		"s-3201-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Jump (Slow)", message_RU: "Прыжок", message_zh: "慢速跳跃" },
			{ type: "text", sub_type: "message", delay: 1500, message: "Pull", message_RU: "Камень", message_zh: "拉人" }
		],
		"s-3201-1000-118-0": [
			{ type: "text", sub_type: "message", message: "Jump (Slow)", message_RU: "Прыжок", message_zh: "慢速跳跃" },
			{ type: "text", sub_type: "message", delay: 1500, message: "Pull", message_RU: "Камень", message_zh: "拉人" }
		],
		"s-3201-1000-119-0": [
			{ type: "text", sub_type: "message", delay: 1000, message: "Back + Front", message_RU: "Вперед + Назад", message_zh: "后加前" },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }
		],
		//"s-3201-1000-121-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Right", message_RU: "Право", message_zh: "向右击退" }],
		//"s-3201-1000-122-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Left", message_RU: "Лево", message_zh: "向左击退" }],
		"s-3201-1000-124-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Stun attack", message_RU: "Стан (фаст)", message_zh: "快速眩晕攻击" }],
		"s-3201-1000-127-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message: "Back", message_RU: "Полоса (фаст)", message_zh: "背后攻击" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Back", message_RU: "Полоса (фаст)", message_zh: "背后攻击" },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 3000] }
		],
		//"s-3201-1000-128-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Triple Attack", message_RU: "Комба", message_zh: "三重攻击" }],
		"s-3201-1000-131-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message: "Back Wave", message_RU: "Волна назад (фаст)", message_zh: "后方波" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Back Wave", message_RU: "Волна назад (фаст)", message_zh: "后方波" },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 3000] }
		],
		//"s-3201-1000-132-0": [{ type: "text", sub_type: "message", message: "Left + Right", message_RU: "Лево + Право (фаст)", message_zh: "左右连击" }],
		"s-3201-1000-133-0": [{ type: "text", sub_type: "message", delay: 500, message: "Jump (Fast)", message_RU: "Прыжок (фаст)", message_zh: "快速跳跃" }],
		"s-3201-1000-138-0": [{ type: "text", sub_type: "message", delay: 500, message: "Jump P (Fast)", message_RU: "Прыжок (фаст)", message_zh: "快速跳跃" }],
		"s-3201-1000-139-0": [
			{ type: "text", sub_type: "message", message: "Back + Front (Fast)", message_RU: "Вперед + Назад (фаст)", message_zh: "后前连击快" },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }
		],
		"s-3201-1000-143-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message: "Left > Right", message_RU: "Слева > Справа", message_zh: "左再右" },
			{ type: "text", class_position: "dps", sub_type: "message", message: "Right > Left", message_RU: "Справа > Слева", message_zh: "右再左" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Right > Left", message_RU: "Справа > Слева", message_zh: "右再左" },
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2715, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2800, 4175, true, null] }, // 6
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] } // 7
		],
		"s-3201-1000-145-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message: "Left > Right", message_RU: "Слева > Справа", message_zh: "左再右" },
			{ type: "text", class_position: "dps", sub_type: "message", message: "Right > Left", message_RU: "Справа > Слева", message_zh: "右再左" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Right > Left", message_RU: "Справа > Слева", message_zh: "右再左" },
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }, // 7
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2000, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2500, 5000, true, null] } // 6
		],
		"s-3201-1000-148-0": [
			{ type: "text", sub_type: "message", message: "Right Hand (Flying)", message_RU: "Правая рука (подлёт)", message_zh: "右手飞天攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 20, 150, 10, 320, 0, 4000] }
		],
		"s-3201-1000-149-0": [
			{ type: "text", sub_type: "message", message: "Left Hand (Flying)", message_RU: "Левая рука (подлёт)", message_zh: "左手飞天攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 340, 150, 10, 320, 0, 4000] }
		],
		"s-3201-1000-151-0": [{ type: "text", sub_type: "message", message: "Stun Attack", message_RU: "Стан!", message_zh: "眩晕攻击" }],
		"s-3201-1000-305-0": [{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Pizza", message_zh: "披萨" }],
		"s-3201-1000-311-0": [
			{ type: "text", sub_type: "message", message: "Slow", message_RU: "Мёд", message_zh: "慢速" },
			{ type: "text", sub_type: "message", delay: 4000, message: "Pull", message_RU: "Откид!", message_zh: "拉人" }
		],
		"s-3201-1000-312-0": [
			{ type: "text", sub_type: "message", message: "Fast", message_RU: "Мёд (фаст)", message_zh: "快速" },
			{ type: "text", sub_type: "message", delay: 2000, message: "Pull", message_RU: "Откид!", message_zh: "拉人" }
		],
		"s-3201-1000-313-0": [
			{ type: "text", sub_type: "message", message: "Circles (Slow)", message_RU: "Кольцо", message_zh: "慢速圆圈" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3201-1000-314-0": [
			{ type: "text", sub_type: "message", message: "Circles (Fast)", message_RU: "Кольцо (фаст)", message_zh: "快速圆圈" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],

		// 2 BOSS
		"ns-3201-2000": [{ type: "func", func: () => boss = null }],
		"nd-3201-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"am-3201-320126-32010224": [
			{ type: "func", func: () => boss = 1 },
			{ type: "text", delay: 52000, sub_type: "notification", message: "True Debuff in 5 seconds", message_RU: "Правда через 5 сек.", message_zh: "五秒后真debuff" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 1, func: () => boss = null },
				{ type: "text", check_func: () => boss === 1, sub_type: "message", message_RU: "Смена дебаффа", message_zh: "debuff重置", message: "Debuff reload" }
			] }
		],
		"am-3201-2000-32010220": [
			{ type: "func", func: () => { boss = 0; } },
			{ type: "text", delay: 52000, sub_type: "notification", message: "False Debuff in 5 seconds", message_RU: "Ложь через 5 сек.", message_zh: "五秒后假debuff" },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 0, func: () => boss = null },
				{ type: "text", check_func: () => boss === 0, sub_type: "message", message_RU: "Смена дебаффа", message_zh: "debuff重置", message: "Debuff reload" }
			] }
		],
		"am-3201-320121-32010222": [{ type: "text", sub_type: "notification", message: "Spike in 5 seconds", message_RU: "Шип через 5 сек.", message_zh: "五秒后地刺" }],
		"h-3201-2000-81": [{ type: "text", sub_type: "message", message: "80%", message_RU: "Дебафф", message_zh: "百分之八十" }],
		"h-3201-2000-76": [{ type: "text", sub_type: "message", message: "75%", message_RU: "Камни", message_zh: "百分之七十五" }],
		"s-3201-2000-108-0": [{ type: "text", sub_type: "message", message: "Back Attack!", message_RU: "Откид назад!", message_zh: "背后攻击！" }],
		"s-3201-2000-150-0": [{ type: "text", sub_type: "message", message: "Phantom", message_RU: "Фантом", message_zh: "幻影" }],
		"s-3201-2000-228-0": [
			{ type: "text", sub_type: "message", message: "Team Up", message_RU: "Камни (вместе)!!!", message_zh: "集合！" },
			{ type: "text", sub_type: "message", delay: 3500, message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }
		],
		"s-3201-2000-230-0": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "AOE!!", message_zh: "范围攻击" }],

		"s-3201-2000-231-0": [
			{ type: "text", sub_type: "message", message: "Out Safe", message_RU: "От него", message_zh: "外面安全" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-232-0": [{ type: "text", sub_type: "message", message: "In Safe", message_RU: "К нему", message_zh: "里面安全" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3201-2000-236-0": [{ type: "text", sub_type: "message", message: "Counter Attack (Bait)", message_RU: "Конус вперед (байт)", message_zh: "诱导反击" }],
		"s-3201-2000-238-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_RU: "От него > К нему", message_zh: "远离再靠近" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-239-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_RU: "К нему > От него", message_zh: "靠近再远离" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		]
	};
};