// Grotto of Lost Souls
//
// made by michengs / HSDN / Calvary

module.exports = (dispatch, handlers, guide, lang) => {

	let color = 0;
	let debuff = 0;
	let print_wave = true;

	const is_mt = dispatch._mod.connection.metadata.serverList[dispatch._mod.serverId].name.includes("MT");

	return {
		// 1 BOSS
		"nd-782-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-782-1000-106-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Heavy", message_RU: "Тяжелый удар", message_zh: "重击" }],
		"s-782-1000-107-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message: "Pushback", message_RU: "Откид назад", message_zh: "击退" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Pushback (Kaia)", message_RU: "Откид назад (кайа)", message_zh: "击退开套盾" },
			{ type: "spawn", func: "vector", args: [553, 90, 30, 140, 600, 1000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 30, -140, 600, 1000, 2000] }
		],
		"s-782-1000-108-0": [
			{ type: "text", sub_type: "message", message: "Bait Front (Flying)", message_RU: "Байт вперед (подлёт)", message_zh: "诱导前方飞天" }
		],
		"s-782-1000-108-1": [
			{ type: "spawn", func: "vector", args: [553, 90, 140, 5, 620, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 355, 620, 0, 1500] }
		],
		"s-782-1000-109-0": [{ type: "text", sub_type: "message", message: "Rocks (Small)", message_RU: "Камни (малые)", message_zh: "小落石" }],
		"s-782-1000-110-0": [{ type: "text", sub_type: "message", message: "Rocks (Large)", message_RU: "Камни (большие)", message_zh: "大落石" }],
		"s-782-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Stun (Dodge)", message_RU: "Стан (эвейд)", message_zh: "眩晕闪避", delay: 1500 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 50, null, 350, 1500, 2000] }
		],
		"s-782-1000-113-0": [{ type: "text", sub_type: "message", message: "Thorns (Bleed)", message_RU: "Колючки (кровоток)", message_zh: "荆棘带流血" }],
		"s-782-1000-116-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ", message_zh: "范围攻击" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 2000 }
		],
		"s-782-1000-301-0": [
			{ type: "text", sub_type: "message", message: "Flower Stuns", message_RU: "Оглушающие цветы", message_zh: "眩晕花" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 2000 }
		],
		"s-782-1000-307-0": [{ type: "text", sub_type: "message", message: "Cage (Don't move)", message_RU: "Клетка (не двигаться)", message_zh: "牢笼别动" }],
		// Flowers mech
		"ab-782-1003-78200161": [
			{ type: "text", sub_type: "message", message: "Green", message_RU: "Зеленый", message_zh: "绿色" },
			{ type: "func", func: () => color = 1 }
		],
		"ab-782-1003-78200162": [
			{ type: "text", sub_type: "message", message: "Violet", message_RU: "Фиолетовый", message_zh: "紫色" },
			{ type: "func", func: () => color = 2 }
		],
		"ae-0-0-78200148": [{ type: "func", func: () => debuff = 1 }], // green
		"ae-0-0-78200149": [{ type: "func", func: () => debuff = 2 }], // violet
		"s-782-1000-201-0": [{ type: "text", sub_type: "alert", message: "Change Debuff", message_RU: "Сменить дебаф", message_zh: "交换debuff", check_func: () => debuff !== 0 && color !== debuff, delay: 5000 }],
		"s-782-1000-309-0": [
			{ type: "text", sub_type: "message", message: "One Flower", message_RU: "Один цветок", message_zh: "一朵花" },
			{ type: "text", sub_type: "alert", message: "Dodge the flower!", message_RU: "Заэвейдить цветок!", message_zh: "躲开花！", check_func: () => color === debuff, delay: 1500 }
		],
		"s-782-1000-310-0": [
			{ type: "text", sub_type: "message", message: "Two Flowers", message_RU: "Два цветка", message_zh: "两朵花" },
			{ type: "text", sub_type: "alert", message: "Dodge ONE flower!", message_RU: "Заэвейдить один цветок!", message_zh: "躲开一朵花！", check_func: () => color !== debuff, delay: 1500 }
		],
		"s-782-1000-312-0": [
			{ type: "text", sub_type: "message", message: "Break Golden Flower", message_RU: "Разбить золотой цветок", message_zh: "打破金花" },
			{ type: "text", sub_type: "alert", message: "Dodge the Flower!", message_RU: "Заэвейдить цветок!", message_zh: "躲开花！", check_func: () => color === debuff, delay: 1500 }
		],
		"s-782-1000-308-0": [
			{ type: "func", func: () => color = 0 },
			{ type: "func", func: () => debuff = 0 }
		],

		// 2 BOSS
		"nd-782-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-782-2000-105-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Кувырок", message_zh: "翻滚" }],
		"s-782-2000-108-0": [{ type: "text", sub_type: "message", message: "Dodge. Shot Forward", message_RU: "Эвейд. Выстрел вперед", message_zh: "闪避接前方射击", delay:  500 }],
		"s-782-2000-109-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_RU: "Волна вперед", message_zh: "前方波" }],
		"s-782-2000-112-0": [{ type: "text", sub_type: "message", message: "Kick Forward", message_RU: "Удар вперед", message_zh: "前踢" }],
		"s-782-2000-113-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_RU: "Стан (АоЕ)", message_zh: "范围眩晕" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 310, 0, 3000] }
		],
		"s-782-2000-114-0": [
			{ type: "text", sub_type: "message", message: "Get In", message_RU: "К нему", message_zh: "靠近" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 600, 0, 5000] }
		],
		"s-782-2000-116-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_RU: "Передняя | Задняя", message_zh: "前方接背后" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 180, 0, 90, 500, 0, 5000] }
		],
		"s-782-2000-117-0": "s-782-2000-116-0",
		"s-782-2000-301-0": [
			{ type: "text", sub_type: "message", message: "Get Out | Dodge", message_RU: "От него | Эвейд", message_zh: "出去接闪避" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 3700 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-782-2000-302-0": [
			{ type: "text", sub_type: "message", message: "Get In | Dodge", message_RU: "К нему | Эвейд", message_zh: "进来接闪避" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 3700 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-782-2000-307-0": [{ type: "text", sub_type: "message", message: "Target", message_RU: "Таргет", message_zh: "点名" }],
		"s-782-2000-307-2": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }],

		// 3 BOSS
		"nd-782-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-782-3000-99": [{ type: "func", func: () => print_wave = true }],
		"h-782-3000-80": [{ type: "text", sub_type: "message", message: "80%", message_RU: "80%", message_zh: "百分之八十", check_func: () => !is_mt }],
		"h-782-3000-70": [{ type: "text", sub_type: "message", message: "70%", message_RU: "70%", message_zh: "百分之七十", check_func: () => is_mt }],
		"s-782-3000-109-0": [{ type: "text", sub_type: "message", message: "Front Throw (Target)", message_RU: "Удар вперед (таргет)", message_zh: "点名前方投掷" }],
		"s-782-3000-134-0": [{ type: "text", sub_type: "message", message: "Front Throw (Target)", message_RU: "Удар вперед (таргет)", message_zh: "点名前方投掷" }],
		"s-782-3000-118-0": [{ type: "text", sub_type: "message", message: "Front Triple", message_RU: "Передняя комба", message_zh: "前方三连" }],
		"s-782-3000-143-0": [
			{ type: "text", sub_type: "message", message: "Left Rear", message_RU: "Слева сзади", message_zh: "左后方" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 330, null, 280, 0, 3000] }
		],
		"s-782-3000-145-0": "s-782-3000-143-0",
		"s-782-3000-144-0": [
			{ type: "text", sub_type: "message", message: "Right Rear", message_RU: "Справа сзади", message_zh: "右后方" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 330, null, 280, 0, 3000] }
		],
		"s-782-3000-147-0": "s-782-3000-144-0",
		"s-782-3000-146-0": [
			{ type: "text", sub_type: "message", message: "Pulses Left", message_RU: "Бублики слева", message_zh: "左侧脉冲" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, is_mt ? 3200 : 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-782-3000-154-0": [
			{ type: "text", sub_type: "message", message: "Pulses Left", message_RU: "Бублики слева", message_zh: "左侧脉冲" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, is_mt ? 3200 : 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-782-3000-148-0": [
			{ type: "text", sub_type: "message", message: "Pulses Right", message_RU: "Бублики справа", message_zh: "右侧脉冲" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, is_mt ? 3200 : 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-782-3000-155-0": [
			{ type: "text", sub_type: "message", message: "Pulses Right", message_RU: "Бублики справа", message_zh: "右侧脉冲" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, is_mt ? 3200 : 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-782-3000-161-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_RU: "Вперед | Назад", message_zh: "前方接背后" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-782-3000-162-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_RU: "Вперед | Назад", message_zh: "前方接背后" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-782-3000-213-0": [{ type: "text", sub_type: "message", message: "Tail", message_RU: "Хвост", message_zh: "甩尾" }],
		"s-782-3000-215-0": [{ type: "text", sub_type: "message", message: "Tail (Combo)", message_RU: "Хвост (комба)", message_zh: "甩尾连击" }],
		"s-782-3000-139-0": [
			{ type: "text", sub_type: "message", message: "Wave + Wing (Left Safe)", message_RU: "Волна (лево сейф)", message_zh: "波加翅膀左边安全", check_func: () => print_wave },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-782-3000-139-1": "s-782-3000-139-0",
		"s-782-3000-139-2": "s-782-3000-139-0",
		"s-782-3000-150-0": "s-782-3000-139-0", //
		"s-782-3000-150-1": "s-782-3000-139-0",
		"s-782-3000-150-2": "s-782-3000-139-0",
		"s-782-3000-141-0": [
			{ type: "text", sub_type: "message", message: "Wave + Wing (Right Safe)", message_RU: "Волна (право сейф)", message_zh: "波加翅膀右边安全", check_func: () => print_wave },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-782-3000-141-1": "s-782-3000-141-0",
		"s-782-3000-141-2": "s-782-3000-141-0",
		"s-782-3000-152-0": "s-782-3000-141-0", //
		"s-782-3000-152-1": "s-782-3000-141-0",
		"s-782-3000-152-2": "s-782-3000-141-0",
		"s-782-3000-300-0": [
			{ type: "text", sub_type: "message", message: "3" },
			{ type: "text", sub_type: "message", delay:  400, message: "2" },
			{ type: "text", sub_type: "message", delay:  800, message: "1" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Dodge! (Awakening 1)", message_RU: "Эвейд! (Пробуждение 1)", message_zh: "闪避！觉醒一！" }
		], // <80%
		"s-782-3000-360-0": [{ type: "text", sub_type: "message", message: "Dodge! (Explosion)", message_RU: "Эвейд! (взрыв)", message_zh: "闪避！爆炸！" }],
		"s-782-3000-351-0": [
			{ type: "text", sub_type: "message", message: "Stones", message_RU: "Камни", message_zh: "石头" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 2000 },
			{ type: "text", sub_type: "message", message: "Line up to the plate", message_RU: "Выстроиться к плите", message_zh: "站到石板上", delay: 4000 },
			{ type: "text", sub_type: "message", message: "Kaia!", message_RU: "Кайа!", message_zh: "套盾！", delay: 9500 }
		]
	};
};