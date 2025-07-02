// RK-9 Kennel
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-735-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-735-1000-104-0": [{ type: "text", sub_type: "message", message: "Front Clip", message_RU: "Передний зажим", message_zh: "前方夹击" }],
		"s-735-1000-108-0": [{ type: "text", sub_type: "message", message: "Get Out", message_RU: "От него", message_zh: "远离" }], // крутилка
		"s-735-1000-111-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_RU: "Удар назад + вперед", message_zh: "后加前" }],
		"s-735-1000-112-0": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Удар назад", message_zh: "背后攻击" }],
		"s-735-1000-304-0": [{ type: "text", sub_type: "message", message: "Out", message_RU: "От него", message_zh: "远离" }],
		"s-735-1000-305-0": [{ type: "text", sub_type: "message", message: "In", message_RU: "К нему", message_zh: "靠近" }],
		"s-735-1000-306-0": [{ type: "text", sub_type: "message", message: "Bombs", message_RU: "Бомбы", message_zh: "炸弹" }],
		"s-735-1000-307-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Стяжка", message_zh: "拉人" }],
		"s-735-1000-309-0": [
			{ type: "text", sub_type: "message", message: "Four Missile", message_RU: "Запуск 4 ракет", message_zh: "四连导弹" },
			{ type: "text", sub_type: "message", delay: 6000, message: "5", message_RU: "5", message_zh: "五" },
			{ type: "text", sub_type: "message", delay: 7000, message: "4", message_RU: "4", message_zh: "四" },
			{ type: "text", sub_type: "message", delay: 8000, message: "3", message_RU: "3", message_zh: "三" },
			{ type: "text", sub_type: "message", delay: 9000, message: "2", message_RU: "2", message_zh: "二" },
			{ type: "text", sub_type: "message", delay: 10000, message: "1", message_RU: "1", message_zh: "一" },
			{ type: "text", sub_type: "message", delay: 11000, message: "Jump", message_RU: "Прыгай!", message_zh: "跳跃" }
		],

		// 2 BOSS
		"nd-735-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-735-2000-102-0": [
			{ type: "text", sub_type: "message", message: "Pizza Cutter", message_RU: "Пила", message_zh: "扇形切割" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 300, 12, 228, 0, 3000] }
		],
		"s-735-2000-105-0": [
			{ type: "text", sub_type: "message", message: "360", message_RU: "Крутилка (откид)", message_zh: "360度攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 278, 0, 4000] }
		],
		"s-735-2000-108-0": [
			{ type: "text", sub_type: "message", message: "Back Swipe", message_RU: "Откид назад", message_zh: "背后横扫" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 240, 380, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 120, 380, 0, 2000] }
		],
		"s-735-2000-301-0": [{ type: "text", sub_type: "message", message: "Throwing Orb", message_RU: "Бомба", message_zh: "投掷炸弹" }],
		"s-735-2000-304-0": [
			{ type: "text", sub_type: "message", message: "Get Out", message_RU: "От него", message_zh: "远离" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 0, 4000] }
		],
		"s-735-2007-201-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],
		"s-735-2007-306-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],
		"s-735-2007-307-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 500, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 500, 0, 4000] }
		],

		// 3 BOSS
		"nd-735-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-735-3000-116-0": [
			{ type: "text", sub_type: "message", message: "Right Safe", message_RU: "Справа сейф", message_zh: "右边安全" },
			{ type: "spawn", func: "marker", args: [false, 160, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 340, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "point", args: [553, 120, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 130, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 140, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 150, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 160, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 170, 210, 180, 290, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 300, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 310, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 320, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 330, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 340, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 350, 210, 0, 290, 0, 3000] }
		],
		"s-735-3000-117-0": [
			{ type: "text", sub_type: "message", message: "Left Safe", message_RU: "Слева сейф", message_zh: "左边安全" },
			{ type: "spawn", func: "marker", args: [false, 20, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 200, 300, 0, 3000, true, null] },
			{ type: "spawn", func: "vector", args: [553, 10, 210, 0, 290, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 20, 210, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 30, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 40, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 50, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 60, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 240, 250, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 230, 240, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 220, 230, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 210, 220, 0, 3000] },
			{ type: "spawn", func: "point", args: [553, 200, 210, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 190, 210, 180, 290, 0, 3000] }
		],
		"s-735-3000-118-0": "s-735-3000-117-0",
		"s-735-3000-119-0": "s-735-3000-116-0",
		"s-735-3000-125-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Удар вперед", message_zh: "前方攻击" }],
		"s-735-3000-126-0": [{ type: "text", sub_type: "message", message: "Front | Back", message_RU: "Удар вперед | Удар назад", message_zh: "前方接背后" }],
		"s-735-3000-127-0": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Удар назад", message_zh: "背后攻击" }],
		"s-735-3000-128-0": [
			{ type: "text", sub_type: "message", message: "Combo | Back Wave", message_RU: "Комба | Конус назад", message_zh: "连击接后方波" },
			{ type: "spawn", func: "vector", args: [553, 180, 40, 120, 1200, 2000, 3000] },
			{ type: "spawn", func: "vector", args: [553, 180, 40, 240, 1200, 2000, 3000] }
		],
		"s-735-3000-129-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }],
		"s-735-3000-305-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 300, 0, 7000] }],
		"s-735-3000-321-0": [{ type: "text", sub_type: "message", message: "Shield!", message_RU: "Щит!", message_zh: "护盾！" }],
		"s-735-3001-308-0": [
			{ type: "text", sub_type: "message", message: "Bait!", message_RU: "Байт!", message_zh: "诱导！" },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 270, 300, 0, 2000] }
		],
		// Radar
		"qb-735-3000-735312": [{ type: "text", sub_type: "message", message: "!!! Radar !!!", message_RU: "!!! Радар !!!", message_zh: "雷达！！！" }],
		"s-735-3000-324-0": [
			{ type: "text", sub_type: "message", message: "Out", message_RU: "От него", message_zh: "远离" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 250, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 200, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 14, 150, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 18, 100, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 50, 50, 0, 3000] }
		],
		"s-735-3000-325-0": [
			{ type: "text", sub_type: "message", message: "In", message_RU: "К нему", message_zh: "靠近" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		]
	};
};