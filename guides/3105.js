// Fusion Laboratory
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	const { player } = dispatch.require.library;
	let print_lasers = true;
	let print_donuts = true;

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 32051007) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ speech: false, sub_type: "notification", message: "Lasers on you", message_RU: "Лазеры на тебе", message_zh: "激光点名" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						speech: false,
						sub_type: "message",
						message: `Lasers on ${member.name}`,
						message_RU: `Лазеры на ${member.name}`,
						message_zh: `激光点名 ${member.name}`
					});
				}
			}
		}
	});

	return {
		"ns-3105-1000": [
			{ type: "func", func: () => print_lasers = true }
		],
		"nd-3105-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"h-3105-1000-80": [{ type: "text", sub_type: "message", message: "80%", message_RU: "80%", message_zh: "百分之八十" }],
		"h-3105-1000-35": [{ type: "text", sub_type: "message", message: "35%", message_RU: "35%", message_zh: "百分之三十五" }],

		"s-3105-1000-101-0": [{ type: "text", sub_type: "message", message: "Front Swing", message_RU: "Удар вперед", message_zh: "前方挥击" }],
		"s-3105-1000-102-0": [
			{ type: "text", sub_type: "message", message: "Disc Throw", message_RU: "Диск", message_zh: "投掷圆盘" },
			{ type: "spawn", func: "vector", args: [553, 270, -27, 187, 210, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, -27, 8, 350, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 10, 350, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 190, 210, 2000, 2000] }
		],
		"s-3105-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_RU: "Стан (АОЕ)", message_zh: "眩晕 (AOE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 280, 100, 3000] }
		],
		"s-3105-1000-108-0": [
			{ type: "text", sub_type: "message", message: "Push (Tank)", message_RU: "Откид (танк)", message_zh: "击退 (坦克)" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 300, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 300, 0, 3000] }
		],
		"s-3105-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Front Laser", message_RU: "Передний лазер", message_zh: "前方激光" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 1000, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 1000, 4000] }
		],
		"s-3105-1000-106-0": [{ type: "text", sub_type: "message", message: "Blades Front", message_RU: "Лезвия вперед", message_zh: "前方刀片" }],
		"s-3105-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Blades Back", message_RU: "Лезвия назад", message_zh: "后方刀片" },
			{ type: "spawn", func: "vector", args: [553, 70, 10, 160, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 290, 10, -160, 350, 0, 3000] }
		],
		"s-3105-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Shot", message_RU: "Выстрел", message_zh: "射击" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 0, 3000] }
		],
		"s-3105-1000-114-0": [
			{ type: "text", sub_type: "message", message: "Back Laser", message_RU: "Задний лазер", message_zh: "后方激光" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 180, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 180, 500, 0, 3000] }
		],
		"s-3105-1000-119-0": [{ type: "text", sub_type: "message", message: "Cut", message_RU: "Разрез", message_zh: "切割" }],
		"s-3105-1000-120-0": [{ type: "text", sub_type: "message", message: "Storm", message_RU: "Шторм", message_zh: "风暴" }],
		"s-3105-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Spin | Back Laser", message_RU: "Крутилка | Задний лазер", message_zh: "旋转 | 后方激光" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 290, 100, 5000] }
		],
		"s-3105-1000-117-0": [{ type: "text", sub_type: "message", message: "Kick", message_RU: "Удар ногой", message_zh: "踢击" }],
		"s-3105-1000-118-0": [{ type: "text", sub_type: "message", message: "Kick (Dodge)", message_RU: "Удар ногой (эвейд)", message_zh: "踢击 (闪避)" }],

		// Donuts combo <80%
		"s-3105-1000-115-0": [
			{ type: "func", func: () => print_donuts = true },
			{ type: "text", sub_type: "message", message: "Outward Donuts (Out > In)", message_RU: "Бублики наружу (от него > к нему)", message_zh: "外圈甜甜圈 (外 > 内)", delay: 200, check_func: () => print_donuts },
			{ type: "event", delay: 1500, check_func: () => print_donuts, args: [
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 330, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 510, 0, 5000], tag: "donuts" }
			] },
			{ type: "text", sub_type: "message", message: "Kaia", message_RU: "Кайа", message_zh: "套盾", delay: 4400, check_func: () => print_donuts }
		],
		"e-3105-1000-115": [
			{ type: "despawn_all", tag: "donuts" },
			{ type: "func", func: () => print_donuts = false }
		],
		"s-3105-1000-116-0": [
			{ type: "func", func: () => print_donuts = true },
			{ type: "text", sub_type: "message", message: "Inward Donuts (In > Out)", message_RU: "Бублики внутрь (к нему > от него)", message_zh: "内圈甜甜圈 (内 > 外)", delay: 200, check_func: () => print_donuts },
			{ type: "event", delay: 1500, check_func: () => print_donuts, args: [
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 330, 0, 5000], tag: "donuts" },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 510, 0, 5000], tag: "donuts" }
			] },
			{ type: "text", sub_type: "message", message: "Kaia", message_RU: "Кайа", message_zh: "套盾", delay: 4400, check_func: () => print_donuts }
		],
		"e-3105-1000-116": [
			{ type: "despawn_all", tag: "donuts" },
			{ type: "func", func: () => print_donuts = false }
		],

		"qb-3105-1000-31051002": [{ type: "text", sub_type: "message", message: "Shield!", message_RU: "Щит!", message_zh: "护盾！" }], // <50%
		"s-3105-1000-123-0": [{ type: "text", sub_type: "message", message: "Break Failure", message_RU: "Щит не пробит", message_zh: "破盾失败" }],

		"qb-3105-1000-31051004": [{ type: "text", sub_type: "message", message: "Bait (Lasers)", message_RU: "Байт (лазеры)", message_zh: "点名 (激光)" }], // range check
		"qb-3105-1000-31051005": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт", message_zh: "点名" }], // get stun
		"qb-3105-1000-31051006": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт", message_zh: "点名" }], // cast ress
		"qb-3105-1000-31051007": [{ type: "text", sub_type: "message", message: "Puddles", message_RU: "Лужи", message_zh: "毒圈" }], // <40%

		// Core mech <35%
		"qb-3105-1000-31051010": [
			{ type: "text", sub_type: "message", message: "LASERS + WAVE", message_RU: "ЛАЗЕРЫ + ВОЛНА", message_zh: "激光 + 波浪" },
			{ type: "text", sub_type: "notification", message: "LASERS + WAVE", message_RU: "ЛАЗЕРЫ + ВОЛНА", message_zh: "激光 + 波浪", speech: false }
		],
		"s-3105-1000-310-0": [{ type: "spawn", func: "marker", args: [false, 0, 0, 0, 8000, true, ["Lasers", "Wave", "激光", "波浪"]] }],
		"s-3105-1000-304-0": [ // red
			{ type: "text", sub_type: "message", message: "Wave (Dodge)", message_RU: "Волна (эвейд)", message_zh: "扩散圈 (闪避)", delay: 100 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_RU: "Дать стан!", message_zh: "给眩晕！", delay: 2000 }
		],
		"s-3105-1000-305-0": [ // blue
			{ type: "text", sub_type: "message", message: "Wave (Dodge)", message_RU: "Волна (эвейд)", message_zh: "扩散圈 (闪避)", delay: 100 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_RU: "Дать стан!", message_zh: "给眩晕！", delay: 2000 }
		],
		"s-3105-1000-121-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ", message_zh: "AOE" }], // red
		"s-3105-1000-122-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ", message_zh: "AOE" }], // blue

		// Lasers <80%
		"qb-3105-1001-31051011": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: "Lasers!", message_RU: "Лазеры!", message_zh: "激光！" },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 16000 }
			] }
		],
		"qb-3105-1002-31051011": "qb-3105-1001-31051011",
		"qb-3105-1003-31051011": "qb-3105-1001-31051011",
		"qb-3105-1004-31051011": "qb-3105-1001-31051011",
		"qb-3105-1005-31051011": "qb-3105-1001-31051011",
		"qb-3105-1006-31051011": "qb-3105-1001-31051011",

		"s-3105-1001-101-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 1000, 3000] }], // laser (basic)
		"s-3105-1002-101-0": "s-3105-1001-101-0",
		"s-3105-1003-101-0": "s-3105-1001-101-0",
		"s-3105-1004-101-0": "s-3105-1001-101-0",
		"s-3105-1005-101-0": "s-3105-1001-101-0",
		"s-3105-1006-101-0": "s-3105-1001-101-0",

		"s-3105-1001-102-0": [{ type: "spawn", func: "vector", args: [520, 0, 0, 0, 1600, 1000, 3000] }], // laser (bait)
		"s-3105-1002-102-0": "s-3105-1001-102-0",
		"s-3105-1003-102-0": "s-3105-1001-102-0",
		"s-3105-1004-102-0": "s-3105-1001-102-0",
		"s-3105-1005-102-0": "s-3105-1001-102-0",
		"s-3105-1006-102-0": "s-3105-1001-102-0",

		"s-3105-1001-103-0": [ // laser (core)
			{ type: "spawn", func: "vector", args: [553, 90, 40, 0, 800, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 40, 0, 800, 0, 6000] }
		],
		"s-3105-1002-103-0": "s-3105-1001-103-0",
		"s-3105-1003-103-0": "s-3105-1001-103-0",
		"s-3105-1004-103-0": "s-3105-1001-103-0",
		"s-3105-1005-103-0": "s-3105-1001-103-0",
		"s-3105-1006-103-0": "s-3105-1001-103-0"
	};
};