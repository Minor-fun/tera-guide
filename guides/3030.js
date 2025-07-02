// Commander's Residence
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {

	let print_stun = true;

	return {
		// Maknakh
		"nd-3030-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-1000-114-0": [{ type: "text", sub_type: "message", message: "Push (Repel)", message_RU: "Откид", message_zh: "击退" }],
		"s-3030-1000-303-0": [{ type: "text", sub_type: "message", message: "Meteors AOE", message_RU: "Метеоры (АОЕ)", message_zh: "陨石范围攻击" }],
		"s-3030-1000-120-0": [{ type: "text", sub_type: "message", message: "Push Front", message_RU: "Откид вперед", message_zh: "前方推击" }],
		"s-3030-1000-104-0": [{ type: "text", sub_type: "message", message: "Fire Front", message_RU: "Передний огонь", message_zh: "前方火焰" }],
		"s-3030-1000-113-0": [{ type: "text", sub_type: "message", message: "Circle AOE Front", message_RU: "Передний АОЕ круг", message_zh: "前方圆形范围" }],
		"s-3030-1000-108-0": [{ type: "text", sub_type: "message", message: "Frontal Thorns", message_RU: "Передние шипы", message_zh: "前方荆棘" }],
		"s-3030-1000-305-0": [{ type: "text", sub_type: "message", message: "Circle AOE Front", message_RU: "Передний АОЕ круг", message_zh: "前方圆形范围" }],
		"s-3030-1000-301-0": [{ type: "text", sub_type: "message", message: "Hit Frontal | Stun", message_RU: "Передний удар | Стан", message_zh: "前方攻击接眩晕" }],
		"s-3030-1000-307-0": [{ type: "text", sub_type: "message", message: "Tail Stun", message_RU: "Хвост (стан)", message_zh: "甩尾眩晕" }],
		"s-3030-1000-112-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-3030-1000-105-0": [{ type: "text", sub_type: "message", message: "Front Fire", message_RU: "Передний огонь", message_zh: "前方火焰" }],
		"am-3030-1000-99000580": [{ type: "text", sub_type: "message", message: "Hit Thorns", message_RU: "Шипы", message_zh: "荆棘攻击" }],

		// LB-1
		"nd-3030-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-2000-309-0": [
			{ type: "text", sub_type: "message", message: "AOE circles | Stun", message_RU: "АОЕ круги | Стан", message_zh: "圆形范围接眩晕", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 4000 }
		],
		"s-3030-2000-105-0": [
			{ type: "text", sub_type: "message", message: "Laser Frontal (Stun)", message_RU: "Лазер (стан)", message_zh: "前方激光眩晕", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 15000 }
		],
		"s-3030-2000-103-0": [{ type: "text", sub_type: "message", message: "Hit Frontal", message_RU: "Передний удар", message_zh: "前方攻击" }],
		"s-3030-2000-101-0": [{ type: "text", sub_type: "message", message: "Claws Front", message_RU: "Когти", message_zh: "前方爪击" }],
		"s-3030-2000-104-0": [{ type: "text", sub_type: "message", message: "Front Attack | Stun", message_RU: "Атака спереди | Стан", message_zh: "前方攻击接眩晕" }],
		"s-3030-2000-112-0": [{ type: "text", sub_type: "message", message: "Attack Behind (Fire)", message_RU: "Атака сзади (огонь)", message_zh: "背后火焰攻击" }],
		"s-3030-2000-305-0": [{ type: "text", sub_type: "message", message: "Circles AOE", message_RU: "Круги АОЕ", message_zh: "圆形范围攻击" }],
		"s-3030-2000-109-0": [{ type: "text", sub_type: "message", message: "Laser Back | Stun", message_RU: "Лазер назад | Стан", message_zh: "背后激光接眩晕" }],
		"s-3030-2000-301-0": [{ type: "text", sub_type: "message", message: "Turn Debuff", message_RU: "Разворот (дебаф)", message_zh: "转身debuff" }]
	};
};