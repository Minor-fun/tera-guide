// Red Refuge (Hard)
//
// made by multarix

module.exports = (dispatch, handlers, guide, lang) => {
	let first_boss_debuff = false;

	return {
		// 1 BOSS
		"nd-939-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-939-1000-105-0": [{ type: "text", sub_type: "message", message: "Turn + Breath", message_RU: "Поворот + дыхание", message_zh: "转身加吐息" }],
		"die": [{ type: "func", func: () => { first_boss_debuff = false; } }],
		"ar-0-0-93910005": [{ type: "func", func: () => first_boss_debuff = false }],
		"ae-0-0-93910005": [{ type: "func", func: () => first_boss_debuff = true }],
		"s-939-93910-305-0": [
			{ type: "text", sub_type: "message", message: "Enter the big circle", message_RU: "Зайти в большой круг", message_zh: "进大圈", check_func: () => first_boss_debuff },
			{ type: "text", sub_type: "message", message: "Exit the big circle", message_RU: "Выйти из большого круга", message_zh: "出大圈", check_func: () => !first_boss_debuff }
		],
		"s-939-93911-305-0": "s-939-93910-305-0",
		"s-939-93912-305-0": "s-939-93910-305-0",
		"s-939-93913-305-0": "s-939-93910-305-0",
		"s-939-93914-305-0": "s-939-93910-305-0",
		"s-939-1000-308-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_RU: "К нему > От него", message_zh: "靠近再远离" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] },
			{ type: "text", sub_type: "message", message: "Out", message_RU: "От него", message_zh: "远离", delay: 3900 }
		],
		"s-939-1000-112-0": [{ type: "text", sub_type: "message", message: "Back Spray", message_RU: "Волна назад", message_zh: "背后喷射" }],
		"s-939-1000-120-0": "s-939-1000-112-0",
		"s-939-1000-113-0": [{ type: "text", sub_type: "message", message: "Back Spray + Fire Wave", message_RU: "Волна назад + Огненная волна", message_zh: "背后喷射加火焰波" }],
		"s-939-1000-115-0": [{ type: "text", sub_type: "message", message: "Front Spray + Fire Wave", message_RU: "Волна вперед + Огненная волна", message_zh: "前方喷射加火焰波" }],
		"s-939-1000-107-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-939-1000-117-0": [{ type: "text", sub_type: "message", message: "Jump + Spin", message_RU: "Прыжок + Прокрутка", message_zh: "跳跃加旋转" }],
		"s-939-1000-119-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_RU: "Несколько ударов", message_zh: "多段攻击" }],
		"s-939-1000-306-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_RU: "От него > К нему", message_zh: "远离再靠近" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 7500] },
			{ type: "text", sub_type: "message", message: "In", message_RU: "К нему", message_zh: "靠近", delay: 3700 }
		],

		// 2 BOSS
		"nd-939-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-939-2000-105-0": [
			{ type: "text", sub_type: "message", message: "360", message_RU: "360", message_zh: "360度攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 2500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 510, 0, 2500] }
		],
		"s-939-2000-113-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан", message_zh: "晕" }],
		"s-939-2000-108-0": [
			{ type: "text", sub_type: "message", message: "Cleanse", message_RU: "Клинс", message_zh: "净化", class_position: "heal" },
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚", class_position: ["tank", "dps"] }
		],
		"s-939-2000-115-0": [
			{ type: "text", sub_type: "message", message: "Whirlwind", message_RU: "Вихрь", message_zh: "旋风" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 360, 0, 6500] }
		],
		"s-939-2000-119-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Спереди", message_zh: "前方攻击" }],
		"s-939-2000-120-0": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Сзади", message_zh: "背后攻击" }],
		"s-939-2000-303-0": [
			{ type: "text", sub_type: "message", message: "Whip", message_RU: "Кнут", message_zh: "鞭打" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1650 }
		],
		"s-939-2000-304-0": [
			{ type: "text", sub_type: "message", message: "Pull", message_RU: "Стяжка", message_zh: "拉人" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1650 }
		],

		// 3 BOSS
		"nd-939-3001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-939-3001-30": [{ type: "text", sub_type: "message", message: "Reveal soon...", message_RU: "Скоро разоблачение...", message_zh: "准备现形" }],
		"s-939-3001-201-0": [
			{ type: "text", sub_type: "message", message: "Stun (Pushback)", message_RU: "Рёв (откид)", message_zh: "眩晕击退" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3", message_zh: "三" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2", message_zh: "二" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1", message_zh: "一" },
			{ type: "text", sub_type: "message", delay: 4000, message: "Dodge!", message_RU: "Эвейд!", message_zh: "闪避！" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 5000] }
		],
		"s-939-3001-107-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_RU: "Несколько ударов", message_zh: "多段攻击" }],
		"s-939-3001-112-0": [{ type: "text", sub_type: "message", message: "Target", message_RU: "Таргет", message_zh: "点名" }],
		"s-939-3001-115-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_RU: "Рёв", message_zh: "咆哮眩晕" },
			{ type: "text", sub_type: "message", delay: 1600, message: "Dodge!", message_RU: "Эвейд!", message_zh: "闪避！" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-939-3001-118-0": [{ type: "text", sub_type: "message", message: "Scratching", message_RU: "Крутилка", message_zh: "抓挠" }],
		"s-939-3001-164-0": [{ type: "text", sub_type: "message", message: "Counter Attack (bleed)", message_RU: "Отпрыжка (кровоток)", message_zh: "反击带流血" }],
		"s-939-3001-167-0": [{ type: "text", sub_type: "message", message: "Many Hits", message_RU: "Несколько ударов", message_zh: "多段攻击" }],
		"s-939-3001-172-0": "s-939-3001-112-0",
		"s-939-3001-301-0": "s-939-3001-112-0",
		"s-939-3001-302-0": "s-939-3001-112-0",
		"s-939-3001-170-0": [
			{ type: "text", sub_type: "message", message: "Turn + Pushback", message_RU: "Разворот + Откид", message_zh: "转身加击退" },
			{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид", message_zh: "击退", delay: 2700 }
		],
		"s-939-3001-175-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_RU: "Рёв", message_zh: "咆哮眩晕" },
			{ type: "text", sub_type: "message", delay: 1600, message: "Dodge!", message_RU: "Эвейд!", message_zh: "闪避！" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 630, 0, 4000] }
		],
		"s-939-3001-177-0": [{ type: "text", sub_type: "message", message: "Backstab", message_RU: "Назад + Вперед", message_zh: "后退前冲" }],
		"s-939-3001-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_RU: "Крутилка (кровоток)", message_zh: "旋转带流血" }],
		"s-939-3001-203-0": [{ type: "text", sub_type: "message", message: "Phantom x3 (bleed)", message_RU: "Прыжки x3 (кровоток)", message_zh: "三连幻影带流血" }],
		"s-939-3001-207-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_RU: "Прыжки x5 (кровоток)", message_zh: "五次幻影带流血" }],
		"s-939-3001-213-0": [{ type: "text", sub_type: "message", message: "Reveal | Phantom (bleed)", message_RU: "Разоблачение | Прыжки (кровоток)", message_zh: "现形接幻影带流血" }],
		"s-939-3001-212-0": [{ type: "text", sub_type: "message", message: "Flash", message_RU: "Байт", message_zh: "诱导" }]
	};
};