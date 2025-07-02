// Velik's Hold (Hard)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// 1 boss
		"nd-980-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-980-1000-102-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_RU: "Стан (танк)", message_zh: "眩晕坦克" }],
		"s-980-1000-103-0": [{ type: "text", sub_type: "message", message: "Frontal Hits", message_RU: "Передние удары", message_zh: "前方连击" }],
		"s-980-1000-104-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" }],
		"s-980-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Left", message_RU: "Откид влево", message_zh: "向左推" }],
		"s-980-1000-110-0": [{ type: "text", sub_type: "message", message: "Push Right", message_RU: "Откид вправо", message_zh: "向右推" }],
		"s-980-1000-112-0": [{ type: "text", sub_type: "message", message: "Jump Forward", message_RU: "Прыжок вперед", message_zh: "前跳" }],
		"s-980-1000-113-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_RU: "Прыжок назад", message_zh: "后跳" }],
		"s-980-1000-114-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Полоса назад", message_zh: "后方直线" }],
		"s-980-1000-115-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_RU: "Волна вперед", message_zh: "前方波" }],
		"s-980-1000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }],
		"s-980-1000-202-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)", message_zh: "跳跃眩晕" }],
		"s-980-1000-108-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 2000 }],
		"s-980-1000-302-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" }],
		"s-980-1000-302-1": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 2000] }],
		"s-980-1001-302-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 4000] }],

		// 2 boss
		"nd-980-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-980-2000-105-0": [{ type: "text", sub_type: "message", message: "Heavy Front Attack", message_RU: "Мощный удар вперед", message_zh: "前方重击" }],
		"s-980-2000-106-0": [{ type: "text", sub_type: "message", message: "Flame Ray (Target)", message_RU: "Полоса (таргет)", message_zh: "点名火焰射线" }],
		"s-980-2000-106-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 500 }],
		"s-980-2000-107-0": [{ type: "text", sub_type: "message", message: "Whip", message_RU: "Кнут", message_zh: "鞭打" }],
		"s-980-2000-107-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1000 }],
		"s-980-2000-108-0": [{ type: "text", sub_type: "message", message: "Front Attack (Stun)", message_RU: "Удар вперед (стан)", message_zh: "前方攻击眩晕" }],
		"s-980-2000-301-0": [{ type: "text", sub_type: "message", message: "Jump (Target)", message_RU: "Прыжок (таргет)", message_zh: "点名跳跃" }],
		"s-980-2000-301-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1000 }],
		"s-980-2000-302-0": [{ type: "text", sub_type: "message", message: "AOE (Stand behind a stone)", message_RU: "АОЕ (встать за камень)", message_zh: "范围攻击躲石头后" }],
		"s-980-2000-303-0": [{ type: "text", sub_type: "message", message: "Circles", message_RU: "Круги", message_zh: "圆圈" }],
		"s-980-2000-304-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-980-2000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1000 }],
		"s-980-2001-326-0": [{ type: "spawn", func: "marker", args: [false, 180, 250, 0, 6000, true, null] }], // stone marker

		// 3 boss
		"nd-980-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-980-3000-104-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_RU: "Удар вперед", message_zh: "前方攻击" }],
		"s-980-3000-105-0": [{ type: "text", sub_type: "message", message: "Push Front", message_RU: "Откид вперед", message_zh: "前方推击" }],
		"s-980-3000-109-0": [{ type: "text", sub_type: "message", message: "Double Front Attack", message_RU: "Двойной удар вперед", message_zh: "二连前方攻击" }],
		"s-980-3000-110-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_RU: "Волна вперед", message_zh: "前方波" }],
		"s-980-3000-111-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Кувырок", message_zh: "翻滚" }],
		"s-980-3000-112-0": [{ type: "text", sub_type: "message", message: "Target (Front | Back)", message_RU: "Таргет (Передняя | Задняя)", message_zh: "点名前或后" }],
		"s-980-3000-112-2": [
			{ type: "text", sub_type: "message", message: "Side", message_RU: "В сторону", message_zh: "侧面" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 75, 800, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 800, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 255, 800, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 285, 800, 0, 2000] }
		],
		"s-980-3000-113-0": [{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид назад", message_zh: "击退" }],
		"s-980-3000-114-0": "s-980-3000-113-0",
		"s-980-3000-115-0": [{ type: "text", sub_type: "message", message: "Charging", message_RU: "Зарядка", message_zh: "蓄力" }],
		"s-980-3000-301-0": [{ type: "text", sub_type: "message", message: "Get Out | Get In", message_RU: "От него | К нему", message_zh: "出去再进来" }],
		"s-980-3000-302-0": [{ type: "text", sub_type: "message", message: "Get In", message_RU: "К нему", message_zh: "靠近" }],
		"s-980-3000-304-0": [{ type: "text", sub_type: "message", message: "Shot (Target)", message_RU: "Выстрел (таргет)", message_zh: "点名射击" }],
		"s-980-3000-304-3": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }],
		"s-980-3000-306-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ", message_zh: "范围攻击" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 4500 }
		],
		"s-980-3000-307-0": "s-980-3000-306-0",
		"s-980-3000-308-0": [
			{ type: "text", sub_type: "message", message: "AOE (Flying)", message_RU: "АОЕ (подлёт)", message_zh: "飞天范围攻击" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 4500 }
		],
		"s-980-3000-309-0": [
			{ type: "text", sub_type: "message", message: "Jump (Pushback)", message_RU: "Прыжок (откид)", message_zh: "跳跃击退" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 2200 }
		],
		"qb-980-3000-980206": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", message_zh: "驱散", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", message_zh: "驱散", class_position: "mystic" }
		]
	};
};