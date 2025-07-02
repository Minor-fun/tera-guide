// Broken Prison
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"s-710-1000-102-0": [{ type: "text", sub_type: "message", message: "Pushback (Kaia)", message_RU: "Откид (кайа)", message_zh: "击退开套盾" }],
		"s-710-1000-105-0": [{ type: "text", sub_type: "message", message: "Bait (DoT)", message_RU: "Байт лужа", message_zh: "诱导毒圈" }],
		"s-710-1000-113-0": [{ type: "text", sub_type: "message", message: "DoT - Out", message_RU: "Лужа отвести", message_zh: "带毒圈出去" }],
		"s-710-1000-119-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан", message_zh: "晕" }],
		"s-710-1000-303-0": [{ type: "text", sub_type: "message", message: "Mechanics", message_RU: "Меха", message_zh: "机制" }],
		"s-710-1000-304-0": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/регресс", message_zh: "驱散", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", message_zh: "驱散", class_position: "mystic" }
		],

		// 2 BOSS
		"s-710-2000-102-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан", message_zh: "晕" }],
		"s-710-2000-110-0": [{ type: "text", sub_type: "message", message: "Cleanse", message_RU: "Клинс", message_zh: "净化" }],
		"s-710-2000-111-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан", message_zh: "晕" }],
		"s-710-2000-115-0": [{ type: "text", sub_type: "message", message: "Damage - Stun", message_RU: "Задувка - Стан", message_zh: "伤害接眩晕" }],
		"s-710-2000-116-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт", message_zh: "诱导" }],
		"s-710-2000-118-0": [{ type: "text", sub_type: "message", message: "Laser 360", message_RU: "Лазер 360", message_zh: "三百六十度激光" }],

		// 3 BOSS
		"s-710-3000-302-0": [{ type: "text", sub_type: "message", message: "Keep BLUE", message_RU: "Оставить синий", message_zh: "保留蓝色" }],
		"s-710-3000-301-0": [{ type: "text", sub_type: "message", message: "Stand at the portal", message_RU: "Встать за портал", message_zh: "站传送门后" }],
		"s-710-3000-106-0": [{ type: "text", sub_type: "message", message: "Back attack", message_RU: "Удар назад", message_zh: "背后攻击" }],
		"s-710-3000-102-0": [{ type: "text", sub_type: "message", message: "Spin (Kaia)", message_RU: "Крутилка (кайа)", message_zh: "旋转开套盾" }],
		"s-710-3000-110-0": [{ type: "text", sub_type: "message", message: "Get Out", message_RU: "От него", message_zh: "远离" }],
		"s-710-3000-205-0": [{ type: "text", sub_type: "message", message: "Mechanics", message_RU: "Меха", message_zh: "机制" }],
		"s-710-3000-107-0": [{ type: "text", sub_type: "message", message: "Back attack", message_RU: "Удар назад", message_zh: "背后攻击" }],
		"s-710-3000-109-0": [{ type: "text", sub_type: "message", message: "Spin (Kaia)", message_RU: "Крутилка (кайа)", message_zh: "旋转开套盾" }],
		"s-710-3000-111-0": [{ type: "text", sub_type: "message", message: "Get In", message_RU: "К нему", message_zh: "靠近" }],
		"s-710-3000-115-0": [{ type: "text", sub_type: "message", message: "Bait attack", message_RU: "Байт бросок", message_zh: "诱导攻击" }]
	};
};