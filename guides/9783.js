// Dark Reach Citadel
//
// made by ITunk / HSDN / FrostSigil

module.exports = (dispatch, handlers, guide, lang) => {
	let firstboss_prepare_stun = false;
	let secondboss_show_book_notify = true;
	let secondboss_game_id_for_book = null;
	let secondboss_red_book_loc = null;
	let secondboss_blue_book_loc = null;
	let secondboss_green_book_loc = null;

	function closest(nums, num) {
		return nums.reduce((prev, curr) => (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev));
	}

	dispatch.hook("S_NPC_LOCATION", "*", e => {
		if (!secondboss_show_book_notify || e.gameId !== secondboss_game_id_for_book) return;

		const books = [
			e.loc.angleTo(secondboss_red_book_loc), // Red book
			e.loc.angleTo(secondboss_blue_book_loc), // Blue book
			e.loc.angleTo(secondboss_green_book_loc) // Green book
		];

		const book = books.indexOf(closest(books, e.w));

		switch (book) {
			case 0: // Red -> Blue
				handlers.alias({ id: "ab-783-2000-78300222" });
				break;
			case 1: // Blue -> Green
				handlers.alias({ id: "ab-783-2000-78300223" });
				break;
			case 2: // Green -> Red
				handlers.alias({ id: "ab-783-2000-78300224" });
				break;
		}

		secondboss_show_book_notify = false;
		secondboss_game_id_for_book = null;
	});

	return {
		// 1 BOSS
		"nd-783-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-783-1008": [{ type: "text", sub_type: "message", message: "Take Balls", message_RU: "Взять сферы", message_zh: "吃球" }],
		"s-783-1000-101-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Кувырок (стан)", message_zh: "晕", check_func: () => firstboss_prepare_stun }],
		"s-783-1000-102-0": [
			{ type: "func", func: () => firstboss_prepare_stun = true },
			{ type: "func", func: () => firstboss_prepare_stun = false, delay: 2700 }
		],
		"s-783-1000-104-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-783-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Back", message_RU: "Откид назад", message_zh: "后退" }],
		"s-783-1000-119-0": [{ type: "text", sub_type: "message", message: "Dodge (Heavy Attack)", message_RU: "Эвейд (тяжелый удар)", message_zh: "闪避重击", delay: 300 }],
		"s-783-1000-127-0": [{ type: "text", sub_type: "message", message: "Many Attack", message_RU: "Серия ударов", message_zh: "多段攻击" }],
		"s-783-1000-128-0": [{ type: "text", sub_type: "message", message: "Lazer", message_RU: "Луч", message_zh: "激光" }],
		"s-783-1000-130-0": "s-783-1000-128-0",
		"s-783-1000-301-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1900 }],
		"s-783-1000-304-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Стяжка", message_zh: "拉人" }],
		"s-783-1000-305-0": [{ type: "text", sub_type: "message", message: "Triple Laser (Together)", message_RU: "Тройной лазер (собраться)", message_zh: "三重激光集合" }],

		// 2 BOSS
		"nd-783-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-783-2001": [ // Red book
			{ type: "func", func: ent => secondboss_red_book_loc = ent.loc },
			{ type: "func", func: () => secondboss_show_book_notify = true }
		],
		"ns-783-2002": [ // Blue book
			{ type: "func", func: ent => secondboss_blue_book_loc = ent.loc },
			{ type: "func", func: () => secondboss_show_book_notify = true }
		],
		"ns-783-2003": [ // Green book
			{ type: "func", func: ent => secondboss_green_book_loc = ent.loc },
			{ type: "func", func: () => secondboss_show_book_notify = true }
		],
		"ab-783-2000-78300222": [ // Red
			{ type: "event", check_func: () => secondboss_show_book_notify, args: [
				{ type: "text", sub_type: "message", message: "Take Blue Book", message_RU: "Взять синюю книгу", message_zh: "拿蓝书" },
				{ type: "text", sub_type: "notification", message: "Take [c=#7777ff]Blue[/c] Book", message_RU: "Взять [c=#7777ff]синюю[/c] книгу", message_zh: "拿蓝书", speech: false },
				{ type: "func", func: () => secondboss_show_book_notify = false }
			] }
		],
		"ab-783-2000-78300223": [ // Blue
			{ type: "event", check_func: () => secondboss_show_book_notify, args: [
				{ type: "text", sub_type: "message", message: "Take Green Book", message_RU: "Взять зеленую книгу", message_zh: "拿绿书" },
				{ type: "text", sub_type: "notification", message: "Take [c=#77ff77]Green[/c] Book", message_RU: "Взять [c=#77ff77]зеленую[/c] книгу", message_zh: "拿绿书", speech: false },
				{ type: "func", func: () => secondboss_show_book_notify = false }
			] }
		],
		"ab-783-2000-78300224": [ // Green
			{ type: "event", check_func: () => secondboss_show_book_notify, args: [
				{ type: "text", sub_type: "message", message: "Take Red Book", message_RU: "Взять красную книгу", message_zh: "拿红书" },
				{ type: "text", sub_type: "notification", message: "Take [c=#ff7777]Red[/c] Book", message_RU: "Взять [c=#ff7777]красную[/c] книгу", message_zh: "拿红书", speech: false },
				{ type: "func", func: () => secondboss_show_book_notify = false }
			] }
		],
		"s-783-2000-105-0": [{ type: "text", sub_type: "message", message: "Whip (Dodge)", message_RU: "Хлыст (эвейд)", message_zh: "鞭打闪避" }],
		"s-783-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack (Dodge)", message_RU: "Удар вперед (эвейд)", message_zh: "前方攻击闪避" }],
		"s-783-2000-112-0": [{ type: "text", sub_type: "message", message: "Push Back (Right)", message_RU: "Откид назад правой", message_zh: "右后推" }],
		"s-783-2000-114-0": [{ type: "text", sub_type: "message", message: "Ground Hit (Dodge)", message_RU: "Удар в землю (эвейд)", message_zh: "捶地闪避" }],
		"s-783-2000-115-0": [{ type: "text", sub_type: "message", message: "Push Back (Left)", message_RU: "Откид назад левой", message_zh: "左后推" }],
		"s-783-2000-119-0": [{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_RU: "Прыжок (эвейд)", message_zh: "跳跃闪避" }],
		"s-783-2000-120-0": [{ type: "text", sub_type: "message", message: "Front Attack | Push Back", message_RU: "Удар вперед | Откид назад", message_zh: "前方攻击接后推" }],
		"s-783-2000-206-0": [{ type: "func", func: ent => secondboss_game_id_for_book = ent.gameId }], // prepare to take the book
		"s-783-2000-316-0": [{ type: "text", sub_type: "message", message: "Fire AOE", message_RU: "Огненное АОЕ", message_zh: "火焰范围攻击" }],
		"s-783-2000-306-0": [
			{ type: "text", sub_type: "message", message: "Dodge | Out", message_RU: "Эвейд | От него", message_zh: "闪避再远离" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, -50, null, 375, 0, 5000] }
		],
		"s-783-2000-317-0": [{ type: "text", sub_type: "message", message: "Water AOE", message_RU: "Водяное АОЕ", message_zh: "水范围攻击" }],
		"s-783-2000-318-0": [
			{ type: "text", sub_type: "message", message: "Dodge (Get out)", message_RU: "Эвейд (отбежать)", message_zh: "闪避出去" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, -50, null, 700, 0, 7000] }
		],
		"s-783-2000-324-0": [{ type: "text", sub_type: "message", message: "Dodge (Pull)", message_RU: "Эвейд (притяжка)", message_zh: "闪避拉人", delay: 2400 }],

		// 3 BOSS
		"nd-783-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-783-3000-106-0": [{ type: "text", sub_type: "message", message: "Push (Tank)", message_RU: "Откид (танк)", message_zh: "推坦克" }],
		"s-783-3000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_RU: "Удар вперед (стан)", message_zh: "前方投掷眩晕" }],
		"s-783-3000-113-0": [{ type: "text", sub_type: "message", message: "Push Back", message_RU: "Откид назад", message_zh: "后退" }],
		"s-783-3000-114-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_RU: "Байт (таргет)", message_zh: "诱导点名" }],
		"s-783-3000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)", message_zh: "背后投掷眩晕" },
			{ type: "spawn", func: "circle", args: [true, 553, 205, 410, null, 220, 0, 2000] }
		],
		"s-783-3000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)", message_zh: "背后投掷眩晕" },
			{ type: "spawn", func: "circle", args: [true, 553, 155, 410, null, 220, 0, 2000] }
		],
		"s-783-3000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_RU: "Удар (таргет)", message_zh: "点名投掷" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-783-3000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-783-3000-124-0": [{ type: "text", sub_type: "message", message: "AoE (Dodge)", message_RU: "АоЕ (эвейд)", message_zh: "范围攻击闪避" }],
		"s-783-3000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_RU: "Удар | Передний стан", message_zh: "打击接前方眩晕" }],
		"s-783-3000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_RU: "Передний стан", message_zh: "前方眩晕" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-783-3000-127-0": [
			{ type: "text", sub_type: "message", message: "Back Hit", message_RU: "Удар назад", message_zh: "背后攻击" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 350, null, 380, 0, 2000] }
		],
		"s-783-3000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_RU: "Кувырок | Удар назад", message_zh: "翻滚接背后攻击" }],
		"s-783-3000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_RU: "Удар назад (кровоток)", message_zh: "背后攻击带流血" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-783-3000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_RU: "Передняя комба", message_zh: "前方连击" }],
		"s-783-3000-301-0": [
			{ type: "text", sub_type: "message", message: "Thorns (Target)", message_RU: "Шипы х5", message_zh: "五连荆棘" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 2200 }
		],
		"s-783-3000-303-0": [
			{ type: "text", sub_type: "message", message: "Right Safe", message_RU: "Право сейф", message_zh: "右边安全" },
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 4000, true, null] }
		],
		"s-783-3000-306-0": [
			{ type: "text", sub_type: "message", message: "Left Safe", message_RU: "Лево сейф", message_zh: "左边安全" },
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 4000, true, null] }
		],
		"s-783-3000-309-0": [{ type: "text", sub_type: "message", message: "Debuff!!!", message_RU: "Дебафф!!!", message_zh: "debuff！" }],
		"s-783-3000-315-0": [
			{ type: "text", sub_type: "message", message: "Dodge | Out", message_RU: "Эвейд | От него", message_zh: "闪避再远离" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 0, null, 400, 0, 6000] }
		],
		"s-783-3003-411-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 3000] }]
	};
};