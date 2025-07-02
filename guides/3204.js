// Catalepticon (Hard)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_count = 0;

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 32040001)
			handlers.marker({ id: event.target, color: "yellow", sub_delay: 1000000 });
	});

	return {
		"ns-3204-1000": [{ type: "func", func: () => combo_count = 0 }],
		"nd-3204-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "marker_remove_all" }
		],

		"qb-3204-1000-32041000": [
			{ type: "text", sub_type: "message", message: "Arrows", message_RU: "Стрелки", message_zh: "箭头" },
			{ type: "func", func: () => combo_count = 0 }
		],
		"qb-3204-1000-32042000": [{ type: "text", sub_type: "message", message: "Arrows + Line", message_RU: "Стрелки + полоса", message_zh: "箭头加直线" }],
		"qb-3204-1000-32042006": [
			{ type: "text", sub_type: "message", message: "Cage", message_RU: "Клетка", message_zh: "牢笼" },
			{ type: "text", sub_type: "alert", message: "Cage soon...", message_RU: "Скоро клетка...", message_zh: "准备牢笼", delay: 100000 }
		],
		"qb-3204-1000-32042009": [
			{ type: "text", sub_type: "message", message: "Skeletons", message_RU: "Скелеты", message_zh: "骷髅" },
			{ type: "text", sub_type: "alert", message: "Skeletons soon...", message_RU: "Скоро скелеты...", message_zh: "准备骷髅", delay: 220000 }
		],

		"h-3204-1000-90": [{ type: "text", sub_type: "message", message: "90%", message_RU: "90%", message_zh: "百分之九十" }],
		"h-3204-1000-75": [{ type: "text", sub_type: "message", message: "75%", message_RU: "75%", message_zh: "百分之七十五" }],
		"h-3204-1000-40": [{ type: "text", sub_type: "message", message: "40%", message_RU: "40%", message_zh: "百分之四十" }],

		"s-3204-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_RU: "Стан (АОЕ)", message_zh: "范围眩晕" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -50, 10, 380, 0, 2000] }
		],
		"s-3204-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Line Forward + Side Lines", message_RU: "Полоса вперед + полосы по бокам", message_zh: "前方加两侧直线" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 1000 }
		],
		"s-3204-1000-110-0": [
			{ type: "text", sub_type: "message", message: "Target + Wave", message_RU: "Таргет + волна", message_zh: "点名加冲击波" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -500, 10, 350, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 120, 500, 0, 2000], delay: 1500 },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 240, 500, 0, 2000], delay: 1500 },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 2500 }
		],
		"s-3204-1000-112-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_RU: "Волна вперед", message_zh: "前方波" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 70, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 290, 500, 0, 2000] }
		],
		"s-3204-1000-114-0": [{ type: "text", sub_type: "message", message: "Inner + Outer AOEs", message_RU: "Внутреннее + внешнее АОЕ", message_zh: "内圈加外圈范围" }],
		"s-3204-1000-116-0": [
			{ type: "text", sub_type: "message", message: "Line Forward", message_RU: "Полоса вперед", message_zh: "前方直线" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] }
		],
		"s-3204-1000-119-0": [{ type: "text", sub_type: "message", message: "Two Strikes", message_RU: "Два удара", message_zh: "二连击" }],
		"s-3204-1000-120-0": [
			{ type: "text", sub_type: "message", message: "Two Strikes + Stun (AOE)", message_RU: "Два удара + стан (АОЕ)", message_zh: "二连击加范围眩晕" },
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_RU: "Стан (АОЕ)", message_zh: "范围眩晕", delay: 1500 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -100, 10, 700, 0, 2500], delay: 1500 }
		],
		"s-3204-1000-123-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Круговая", message_zh: "翻滚" }],
		"s-3204-1000-125-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_RU: "Стан (танк)", message_zh: "眩晕坦克" }],
		"s-3204-1000-127-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца", message_zh: "披萨" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3204-1000-128-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца", message_zh: "披萨" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3204-1000-148-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца", message_zh: "披萨" },
			{ type: "spawn", func: "marker", args: [false, 150, 150, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 340, 150, 0, 2000, true, null], delay: 1500 }
		],
		"s-3204-1000-156-0": [{ type: "text", sub_type: "message", message: "Get Skulls", message_RU: "Черепа", message_zh: "吃骷髅头" }],
		"s-3204-1000-157-0": [
			{ type: "text", sub_type: "message", message: "3 seconds", message_RU: "3 секунды", message_zh: "三秒" },
			{ type: "text", sub_type: "message", message: "Gather!", message_RU: "Собраться!", message_zh: "集合！", delay: 2000 }],
		"s-3204-1000-158-0": [
			{ type: "text", sub_type: "message", message: "6 seconds", message_RU: "6 секунд", message_zh: "六秒" },
			{ type: "text", sub_type: "message", message: "Gather!", message_RU: "Собраться!", message_zh: "集合！", delay: 5000 }
		],
		"s-3204-1000-159-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ", message_zh: "范围攻击" },
			{ type: "marker_remove_all", delay: 3000 }
		]
	};
};