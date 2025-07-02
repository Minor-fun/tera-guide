// Escape from Balder's Refuge
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-620-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-620-1000-107-0": [{ type: "text", sub_type: "message", message: "Attack (Back)", message_RU: "Атака (задняя)", message_zh: "背后攻击" }],
		"s-620-1000-115-0": [{ type: "text", sub_type: "message", message: "Fireballs", message_RU: "Шары", message_zh: "火球" }],
		"s-620-1000-127-0": [
			{ type: "text", sub_type: "message", message: "Jump Back", message_RU: "Прыжок назад", message_zh: "后跳" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 376, 12, 232, 0, 6750] }
		],
		"s-620-1000-120-0": [{ type: "text", sub_type: "message", message: "Fire Wave", message_RU: "Волна", message_zh: "火焰波" }],
		"s-620-1000-121-0": [{ type: "text", sub_type: "message", message: "Repel (Dodge)", message_RU: "Откид (эвейд)", message_zh: "击退闪避" }],
		"s-620-1000-119-0": [{ type: "text", sub_type: "message", message: "Explosion | In", message_RU: "Взрыв | К нему", message_zh: "爆炸靠近" }],
		"s-620-1000-108-0": [{ type: "text", sub_type: "message", message: "Attack (Back)", message_RU: "Атака (задняя)", message_zh: "背后攻击" }],
		"s-620-1000-103-0": [{ type: "text", sub_type: "message", message: "Stun Frontal", message_RU: "Передний стан", message_zh: "前方眩晕" }],
		"s-620-1000-209-0": [{ type: "text", sub_type: "message", message: "Back to Middle + Fireballs", message_RU: "Возарат + Шары", message_zh: "回中间加火球" }],
		"s-620-1000-125-0": [{ type: "text", sub_type: "message", message: "Fireballs", message_RU: "Шары", message_zh: "火球" }],

		"s-620-1001-303-0": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ", message_zh: "范围攻击" }],
		"s-620-1002-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1003-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1004-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1005-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],

		"s-620-1000-129-0": [{ type: "text", sub_type: "message", message: "Fireballs", message_RU: "Шары", message_zh: "火球" }],
		"s-620-1000-106-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Случайный прыжок", message_zh: "随机跳跃眩晕" }]
	};
};