// Crimson Killing Grounds
//
// made by HSDN / Kuroine / Minghan / Vampic

module.exports = (dispatch, handlers, guide, lang) => {

	const { player } = dispatch.require.library;

	let combo_start = false;

	let stack = 0;
	let stackTimer = null;

	function stack_add_event() {
		stack++;
		dispatch.clearTimeout(stackTimer);
		stackTimer = dispatch.setTimeout(() => stack = 0, 86000);
	}

	function stack_remove_event() {
		dispatch.clearTimeout(stackTimer);
		stack = 0;
	}

	dispatch.hook("S_USER_EFFECT", 1, event => {
		if (event.circle == 3 && event.operation == 1) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Snowball on you", message_RU: "Снежок на тебе", message_zh: "雪球点你" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Snowball on ${member.name}`,
						message_RU: `Снежок на ${member.name}`,
						message_zh: `雪球点 ${member.name}`
					});
				} else {
					handlers.text({ sub_type: "message", message: "Snowball", message_RU: "Снежок", message_zh: "雪球" });
				}
			}
			handlers.marker({ id: event.target, color: "yellow", sub_delay: 1000000 });
		} else if (event.circle == 3 && event.operation == 2) {
			handlers.marker_remove_all({ delay: 1000 });
		}
	});

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 32060024) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Eye on you", message_RU: "Глазик на тебе", message_zh: "眼睛点你" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Eye on ${member.name}`,
						message_RU: `Глазик на ${member.name}`,
						message_zh: `眼睛点 ${member.name}`
					});
				} else {
					handlers.text({ sub_type: "message", message: "Eye", message_RU: "Глазик", message_zh: "眼睛" });
				}
			}
		}
	});

	return {
		"nd-3206-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "marker_remove_all" },
			{ type: "func", func: stack_remove_event }
		],
		"ns-3206-1000": [
			{ type: "spawn", func: "marker", args: [false, 3, -700, 100, 60000000, false, ["Giant", "Giant Direction"]] },
			{ type: "func", func: stack_remove_event }
		],

		"die": [{ type: "func", func: stack_remove_event }],

		"am-3206-1000-32060007": [{ type: "func", func: stack_add_event }],
		"ar-3206-1000-32060007": [{ type: "func", func: stack_remove_event }],

		"qb-3206-1000-32061001": [
			{ type: "text", sub_type: "message", message: "Close - IN", message_RU: "Ближние - к нему", message_zh: "近的靠近", check_func: () => stack === 0 },
			{ type: "text", sub_type: "message", message: "Close - OUT", message_RU: "Ближние - от него", message_zh: "近的远离", check_func: () => stack !== 0 },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_RU: "Скоро давать стан...", message_zh: "准备打断", delay: 2000 }
		],
		"qb-3206-1000-32061002": [
			{ type: "text", sub_type: "message", message: "Furthest - OUT", message_RU: "Дальние - от него", message_zh: "远的远离", check_func: () => stack === 0 },
			{ type: "text", sub_type: "message", message: "Furthest - IN", message_RU: "Дальние - к нему", message_zh: "远的靠近", check_func: () => stack !== 0 },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_RU: "Скоро давать стан...", message_zh: "准备打断", delay: 2000 }
		],

		"s-3206-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 1400 }
		],
		"s-3206-1000-105-0": [{ type: "text", sub_type: "message", message: "Knockback Spin (Kaia)", message_RU: "Оборот (Кайа)", message_zh: "旋转击退开套盾", check_func: () => combo_start === true }],
		"s-3206-1000-106-0": [
			{ type: "text", sub_type: "message", message: "Knockback", message_RU: "Откид", message_zh: "击退" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 350, 0, 3000] }
		],

		"s-3206-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_RU: "Прыжок (опрокид)", message_zh: "跳跃击倒" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 150, 10, 300, 0, 2500] }
		],
		"s-3206-1000-111-0": [{ type: "text", sub_type: "message", message: "Knockdown (Dodge)", message_RU: "Опрокид (эвейд)", message_zh: "击倒闪避", class_position: "tank" }],
		"s-3206-1000-201-0": [{ type: "text", sub_type: "message", message: "Front (Dodge)", message_RU: "Удар вперед (эвейд)", message_zh: "前方攻击闪避", class_position: "tank" }],
		"s-3206-1000-202-0": [{ type: "text", sub_type: "message", message: "Front AoE", message_RU: "Переднее АоЕ", message_zh: "前方范围攻击" }],
		"s-3206-1000-203-0": [{ type: "text", sub_type: "message", message: "Front AoE + Wave", message_RU: "Переднее АоЕ + волна", message_zh: "前方范围加冲击波" }],
		"s-3206-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" }],
		"s-3206-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_RU: "Крутилка (кровоток)", message_zh: "旋转带流血" }],
		"s-3206-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_RU: "Крутилка (кровоток)", message_zh: "旋转带流血" }],
		"s-3206-1000-209-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_RU: "Дать стан! (опрокид)", message_zh: "晕王！" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3206-1000-210-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_RU: "Дать стан! (опрокид)", message_zh: "晕王！" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3206-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_RU: "Откид", message_zh: "击退" }],
		"s-3206-1000-212-0": [{ type: "text", sub_type: "message", message: "Somersault", message_RU: "Кувырок", message_zh: "翻滚" }],
		"s-3206-1000-215-0": [{ type: "text", sub_type: "message", message: "Somersault", message_RU: "Кувырок", message_zh: "翻滚" }],
		"s-3206-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash | Jump (Knockdown)", message_RU: "Притяжка | Прыжок (опрокид)", message_zh: "拉人接跳跃击倒" }],
		"s-3206-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Donuts (Out > In)", message_RU: "Бублики (от него > к нему)", message_zh: "环形攻击出再进" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In > Out)", message_RU: "Бублики (к нему > от него)", message_zh: "环形攻击进再出" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-516-0": [
			{ type: "text", sub_type: "message", message: "Donuts Fast (Out > In)", message_RU: "Бублики быстрые (от него > к нему)", message_zh: "快速环形出再进" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-517-0": [
			{ type: "text", sub_type: "message", message: "Donuts Fast (In > Out)", message_RU: "Бублики быстрые (к нему > от него)", message_zh: "快速环形进再出" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-512-0": [{ type: "text", sub_type: "message", message: "Turn | Spin", message_RU: "Разворот | Крутилка", message_zh: "转身接旋转" }],
		"s-3206-1004-506-0": [{ type: "text", sub_type: "message", message: "Wave", message_RU: "Волна", message_zh: "冲击波" }],
		"s-3206-1000-522-0": [{ type: "text", sub_type: "message", message: "Bait on distant", message_RU: "Байт на дальнего", message_zh: "诱导最远的" }],
		"s-3206-1000-523-0": [{ type: "text", sub_type: "message", message: "Bait on resurrect", message_RU: "Байт на рес", message_zh: "诱导复活" }],
		"s-3206-1000-513-0": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", message_zh: "驱散", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", message_zh: "驱散", class_position: "mystic" }
		],
		"s-3206-1000-514-0": "s-3206-1000-513-0",

		"s-3206-1000-502-0": [{ type: "text", sub_type: "message", message: "Unleash", message_RU: "Бешенство", message_zh: "狂暴" }],
		"s-3206-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_RU: "Бешенство", message_zh: "狂暴" }],
		"s-3206-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_RU: "Бешенство", message_zh: "狂暴" }],
		"s-3206-1000-306-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_zh: "翻滚" }],
		"s-3206-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Удар вперед", message_zh: "前方攻击" }],
		"s-3206-1000-311-0": [{ type: "text", sub_type: "message", message: "Evade!", message_RU: "Эвейд!", message_zh: "闪避！", delay: 150 }],
		"s-3206-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ", message_zh: "范围攻击" }],
		"s-3206-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ", message_zh: "范围攻击" }]
	};
};