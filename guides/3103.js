// Forbidden Arena [Undying Warlord]
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	let timer1 = null;
	let print_target = true;
	let in_bait = false;
	let gettingserious = false; // ~70% attacks unlocked like Flip Kick Stun

	function back_kick_event(skillid) {
		if ([107, 310].includes(skillid)) { // Bait/Back Flip
			in_bait = true;
			dispatch.setTimeout(() => in_bait = false, 3500);
		}

		if (skillid == 116) { // Haymaker
			if (in_bait) {
				handlers.text({
					sub_type: "message",
					message: "Haymaker", message_zh: "重拳",
					message_RU: "Мощный удар"
				});
			} else { // 116 -> 146
				handlers.text({
					sub_type: "message",
					message: "Haymaker | Back Kick", message_zh: "重拳接后踢",
					message_RU: "Мощный удар | Откид назад"
				});
			}
		}
	}

	function target_attack_event() {
		if (print_target) {
			dispatch.clearTimeout(timer1);
			print_target = false;
			dispatch.setTimeout(() => print_target = true, 5000);

			timer1 = dispatch.setTimeout(() => {
				handlers.text({
					sub_type: "alert",
					message: "Target attacks soon...", message_zh: "即将点名攻击",
					message_RU: "Скоро таргет-атака..."
				});
			}, 65000);
		}
	}

	return {
		"nd-3103-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3103-1000-99": [{ type: "func", func: () => gettingserious = false }],
		"h-3103-1000-70": [{ type: "func", func: () => gettingserious = true }],

		//"s-3103-1000-101-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Punch", message_RU: "Серия ударов", message_zh: "拳击" }],
		"s-3103-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Roundhouse Kick | Stun", message_RU: "Удар с разворота | Стан", message_zh: "回旋踢接眩晕", class_position: "tank", check_func: () => gettingserious },
			{ type: "text", sub_type: "message", message: "Roundhouse Kick", message_RU: "Удар с разворота", message_zh: "回旋踢", class_position: "tank", check_func: () => !gettingserious }
		],
		"s-3103-1000-111-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" }],
		"s-3103-1000-120-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", message_zh: "击倒" }],
		//"s-3103-1000-102-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Combo", message_RU: "Комба", message_zh: "连击" }], // 102 153/154 115/116
		"s-3103-1000-153-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Two Kicks", message_RU: "Два удара", message_zh: "二连踢" }], // 153 108
		//"s-3103-1000-108-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Floor Punch", message_RU: "Удар о землю", message_zh: "捶地" }],
		//"s-3103-1000-127-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Many Kicks", message_RU: "Несколько ударов", message_zh: "多重踢" }],

		"s-3103-1000-121-0": [{ type: "text", sub_type: "message", message: "Flip Kick (Stun)", message_RU: "Удар в воздухе (стан)", message_zh: "翻转踢眩晕" }],

		"qb-3103-1000-31031000": [{ type: "text", sub_type: "message", message: "Bait (Dodge)", message_RU: "Байт (эвейд)", message_zh: "诱导闪避" }],
		// "s-3103-1000-124-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }], // 305 124
		"s-3103-1000-107-0": [{ type: "func", func: back_kick_event, args: [107] }],

		"s-3103-1000-110-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 420, 0, 3000] }
		],
		"s-3103-1000-114-0": [
			{ type: "text", sub_type: "message", message: "Leap (Knockdown)", message_RU: "Прыжок (опрокид)", message_zh: "跳跃击倒" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 240, 0, 2000] }
		],
		//"s-3103-1000-154-0": [{ type: "text", sub_type: "message", message: "Jumping Kick", message_RU: "Удар в прыжке", message_zh: "跳踢" }], // 154 310 116
		// 310 116
		"s-3103-1000-310-0": [
			{ type: "text", sub_type: "message", message: "Back Flip | Haymaker", message_RU: "Сальто назад | Мощный удар", message_zh: "后空翻接重拳" },
			{ type: "func", func: back_kick_event, args: [310] }
		],
		"s-3103-1000-116-0": [{ type: "func", func: back_kick_event, args: [116] }], // Haymaker
		"s-3103-1000-115-0": [{ type: "text", sub_type: "message", message: "Haymaker (Tank)", message_RU: "Мощный удар (танк)", message_zh: "重拳打坦克" }],
		"s-3103-1000-131-0": [{ type: "text", sub_type: "message", message: "Rhythmic Blows", message_RU: "Ураганная серия", message_zh: "节奏打击" }], // 131 132 133
		// 116 146
		"s-3103-1000-146-0": [
			{ type: "text", sub_type: "message", message: "Back Kick", message_RU: "Откид назад", message_zh: "后踢" }, // 116 146
			{ type: "spawn", func: "vector", args: [553, 90, 120, 170, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 120, -170, 600, 0, 3000] }
		],

		// Shield
		"qb-3103-1000-31031006": [{ type: "text", sub_type: "message", message: "Shield!", message_RU: "Щит!", message_zh: "护盾！" }],

		// Target "Ha" attacks 308 31031007 125
		"qb-3103-1000-31031007": [
			{ type: "text", sub_type: "message", message: "Kick (Target)", message_RU: "Удар (таргет)", message_zh: "点名踢", class_position: "tank" },
			{ type: "text", sub_type: "message", message: "Dodge (Target)", message_RU: "Эвейд (таргет) ", message_zh: "点名闪避", class_position: ["heal", "dps"] },
			{ type: "func", func: target_attack_event }
		],
		// "s-3103-1000-125-0": [{ type: "text", sub_type: "message", message: "Kick", message_RU: "Удар", message_zh: "踢" }], // 308 125

		// Donuts
		"qb-3103-1000-31031008": [{ type: "text", sub_type: "message", message: "Donuts: Out > In > Dodge", message_RU: "Бублики: От него > К нему > Эвейд", message_zh: "环形攻击：出进闪" }], // 31031008 303/304 117 155
		"qb-3103-1000-31031009": [{ type: "text", sub_type: "message", message: "Donuts: In > Out > Dodge", message_RU: "Бублики: К нему > От него > Эвейд", message_zh: "环形攻击：进出闪" }], // 31031009 303/304 118 155
		"s-3103-1000-303-0": [
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 250, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 490, 0, 5000] }
		],
		"s-3103-1000-304-0": [
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 250, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 490, 0, 5000] }
		],
		"s-3103-1000-155-0": [{ type: "text", sub_type: "message", delay: 50, message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }],

		// Stun 142 148 129
		"s-3103-1000-142-0": [{ type: "text", sub_type: "message", message: "Stun | Back Wave", message_RU: "Стан | Волна назад", message_zh: "眩晕接后方波" }],
		"s-3103-1000-148-0": [
			{ type: "text", sub_type: "message", delay: 1300, message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" },
			{ type: "spawn", func: "circle", args: [true, 912, 0, -10, 12, 300, 0, 3000] }
		],
		"s-3103-1000-129-0": [
			{ type: "text", sub_type: "message", message: "Back Wave", message_RU: "Волна назад (откид)", message_zh: "后方波" },
			{ type: "spawn", func: "vector", args: [912, 90, 210, 390, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 90, 140, 380, 350, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 90, 70, 370, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 70, -370, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 140, -380, 350, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 210, -390, 300, 0, 2000] }
		],

		// Jump 143-0 143-1
		"qb-3103-1000-31031001": [{ type: "text", sub_type: "message", message: "Bait on res", message_RU: "Байт на рес", message_zh: "诱导复活" }],
		"s-3103-1000-143-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)", message_zh: "跳跃眩晕" }],
		"s-3103-1000-143-1": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 14, 240, 0, 2000] }],

		// AoE 313 314
		"s-3103-1000-313-0": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "AOE", message_zh: "范围攻击" }],
		"s-3103-1000-314-0": [{ type: "text", sub_type: "message", message: "Get Out", message_RU: "Выйти", message_zh: "远离" }],

		// Debuff
		"ae-0-0-31031011": [{ type: "text", sub_type: "alert", message: "Debuff Stack", message_RU: "Дебафф (стаки)", message_zh: "debuff叠加" }],
		"am-3103-1000-31031011": [{ type: "text", sub_type: "alert", message: "Debuff Stack", message_RU: "Дебафф (стаки)", message_zh: "debuff叠加" }],
		"am-3103-1000-31031012": [{ type: "text", sub_type: "alert", message: "Debuff Stack", message_RU: "Дебафф (стаки)", message_zh: "debuff叠加" }]
	};
};