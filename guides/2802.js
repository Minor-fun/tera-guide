// Aesir's End - HM (Guide)
// V1.2
//
// made by MissMeowMeow (Amy)

module.exports = (dispatch, handlers, guide, lang) => {

	let print_stun = true;
	const { HIGHLIGHT_ITEM } = module.parent.exports.spawn;

	return {
		"nd-2802-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-2802-1000-90": [{ type: "text", sub_type: "notification", message: "Shield Soon", message_RU: "", message_zh: "即将破盾" }],
		"h-2802-1000-60": [{ type: "text", sub_type: "notification", message: "Shield Soon", message_RU: "", message_zh: "即将破盾" }],
		"h-2802-1000-30": [{ type: "text", sub_type: "notification", message: "Shield Soon", message_RU: "", message_zh: "即将破盾" }],
		"h-2802-1000-8": [{ type: "text", sub_type: "notification", message: "D P S ! ? !", message_RU: "", message_zh: "输出 ! ? !" }],
		"s-2802-1000-103-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "", message_zh: "击倒", class_position: "tank" }],
		"s-2802-1000-105-0": [{ type: "text", sub_type: "message", message: "Multi-hit Stun", message_RU: "", message_zh: "多段击晕", class_position: "tank" }],
		"s-2802-1000-106-0": [{ type: "text", sub_type: "message", message: "Double Spin", message_RU: "", message_zh: "双旋转" }],
		"s-2802-1000-107-0": [{ type: "text", sub_type: "message", message: "Tank Buster (Slow)", message_RU: "", message_zh: "破防攻击(慢)", class_position: "tank" }],
		"s-2802-1000-108-0": [{ type: "text", sub_type: "message", message: "Tank Buster (Fast)", message_RU: "", message_zh: "破防攻击(快)", class_position: "tank" }],
		"s-2802-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump - Dodge", message_RU: "", message_zh: "跳跃 - 躲避" }],
		"s-2802-1000-110-0": [{ type: "text", sub_type: "message", message: "Pull (Jump Soon)", message_RU: "", message_zh: "拉人 (即将跳跃)" }],
		"s-2802-1000-111-0": [{ type: "text", sub_type: "message", message: "Res bait (Stun)", message_RU: "", message_zh: "复活诱饵 (晕眩)" }],
		"s-2802-1000-112-0": [{ type: "text", sub_type: "message", message: "AOE Soon", message_RU: "", message_zh: "即将AOE" }],
		"s-2802-1000-113-0": [{ type: "text", sub_type: "message", message: "AOE Stun", message_RU: "", message_zh: "AOE晕眩" }],
		"s-2802-1000-301-0": [
			{ type: "text", sub_type: "message", message: "Shield", message_RU: "", message_zh: "盾牌", class_position: ["dps" , "tank"]},
			{ type: "text", sub_type: "message", message: "Shield - Plague", message_RU: "", message_zh: "祭祀，解buff", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Shield - Regress", message_RU: "", message_zh: "元素，解buff", class_position: "mystic" }
		],

		"s-2802-1000-303-0": [{ type: "text", sub_type: "message", message: "You Suck!?", message_RU: "", message_zh: "boss暴走" }],
		"s-2802-1000-304-0": [{ type: "text", sub_type: "message", message: "You Suck!?", message_RU: "", message_zh: "boss暴走" }],
		"s-2802-1000-305-0": [{ type: "text", sub_type: "message", message: "Monkeys", message_RU: "", message_zh: "全体击飞" }],

		"s-2802-1000-306-0": [
			{ type: "text", sub_type: "message", message: "Donuts Go Out-In", message_RU: "", message_zh: "甜甜圈 外-内" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 650, 0, 5000] }
		],

		"s-2802-1000-307-0": [
			{ type: "text", sub_type: "message", message: "Range Bait (Double Jump)", message_RU: "", message_zh: "远程诱饵 (双跳)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 650, 0, 2500] }
		],
		
		"s-2802-1000-308-0": [{ type: "text", sub_type: "message", message: "AOE Soon", message_RU: "", message_zh: "即将AOE" }],
		
		"s-2802-1000-309-0": [
			{ type: "text", sub_type: "message", message: "Turn (Dodge)", message_RU: "", message_zh: "转身 (躲避)" },
			{ type: "spawn", func: "circle", delay: 700, args: [false, 553, 0, 0, null, 800, 0, 3500] },
		],

		"s-2802-1000-310-0": [{ type: "text", sub_type: "message", message: "Slow Stomp - Dodge", message_RU: "", message_zh: "慢踩踏 - 躲避" }],
		"s-2802-1000-313-0": [{ type: "text", sub_type: "message", message: "Wide Area - Dodge", message_RU: "", message_zh: "大范围 - 躲避" }],

	};
};