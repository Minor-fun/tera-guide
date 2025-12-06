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
				handlers.text({ sub_type: "notification", message: t("Snowball on you") });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: t("Snowball on {name}", { name: member.name })
					});
				} else {
					handlers.text({ sub_type: "message", message: t("Snowball") });
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
				handlers.text({ sub_type: "notification", message: t("Eye on you") });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: t("Eye on {name}", { name: member.name })
					});
				} else {
					handlers.text({ sub_type: "message", message: t("Eye") });
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
			{ type: "text", sub_type: "message", message: t("Close - IN"), check_func: () => stack === 0 },
			{ type: "text", sub_type: "message", message: t("Close - OUT"), check_func: () => stack !== 0 },
			{ type: "text", sub_type: "alert", message: t("Soon to give stun..."), delay: 2000 }
		],
		"qb-3206-1000-32061002": [
			{ type: "text", sub_type: "message", message: t("Furthest - OUT"), check_func: () => stack === 0 },
			{ type: "text", sub_type: "message", message: t("Furthest - IN"), check_func: () => stack !== 0 },
			{ type: "text", sub_type: "alert", message: t("Soon to give stun..."), delay: 2000 }
		],

		"s-3206-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 1400 }
		],
		"s-3206-1000-105-0": [{ type: "text", sub_type: "message", message: t("Knockback Spin (Kaia)"), check_func: () => combo_start === true }],
		"s-3206-1000-106-0": [
			{ type: "text", sub_type: "message", message: t("Knockback") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 350, 0, 3000] }
		],

		"s-3206-1000-109-0": [
			{ type: "text", sub_type: "message", message: t("Jump (Knockdown)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 150, 10, 300, 0, 2500] }
		],
		"s-3206-1000-111-0": [{ type: "text", sub_type: "message", message: t("Knockdown (Dodge)"), class_position: "tank" }],
		"s-3206-1000-201-0": [{ type: "text", sub_type: "message", message: t("Front (Dodge)"), class_position: "tank" }],
		"s-3206-1000-202-0": [{ type: "text", sub_type: "message", message: t("Front AoE") }],
		"s-3206-1000-203-0": [{ type: "text", sub_type: "message", message: t("Front AoE + Wave") }],
		"s-3206-1000-205-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-3206-1000-206-0": [{ type: "text", sub_type: "message", message: t("Spin (Bleed)") }],
		"s-3206-1000-207-0": [{ type: "text", sub_type: "message", message: t("Spin (Bleed)") }],
		"s-3206-1000-209-0": [
			{ type: "text", sub_type: "message", message: t("Give Stun! (Knockdown)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3206-1000-210-0": [
			{ type: "text", sub_type: "message", message: t("Give Stun! (Knockdown)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3206-1000-211-0": [{ type: "text", sub_type: "message", message: t("Push") }],
		"s-3206-1000-212-0": [{ type: "text", sub_type: "message", message: t("Somersault") }],
		"s-3206-1000-215-0": [{ type: "text", sub_type: "message", message: t("Somersault") }],
		"s-3206-1000-507-0": [{ type: "text", sub_type: "message", message: t("Leash | Jump (Knockdown)") }],
		"s-3206-1000-508-0": [
			{ type: "text", sub_type: "message", message: t("Donuts (Out > In)") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-509-0": [
			{ type: "text", sub_type: "message", message: t("Donuts (In > Out)") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-516-0": [
			{ type: "text", sub_type: "message", message: t("Donuts Fast (Out > In)") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-517-0": [
			{ type: "text", sub_type: "message", message: t("Donuts Fast (In > Out)") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-512-0": [{ type: "text", sub_type: "message", message: t("Turn | Spin") }],
		"s-3206-1004-506-0": [{ type: "text", sub_type: "message", message: t("Wave") }],
		"s-3206-1000-522-0": [{ type: "text", sub_type: "message", message: t("Bait on distant") }],
		"s-3206-1000-523-0": [{ type: "text", sub_type: "message", message: t("Bait on resurrect") }],
		"s-3206-1000-513-0": [
			{ type: "text", sub_type: "message", message: t("Plague of Exhaustion"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Regression"), class_position: "mystic" }
		],
		"s-3206-1000-514-0": "s-3206-1000-513-0",

		"s-3206-1000-502-0": [{ type: "text", sub_type: "message", message: t("Unleash") }],
		"s-3206-1000-518-0": [{ type: "text", sub_type: "message", message: t("Unleash") }],
		"s-3206-1000-519-0": [{ type: "text", sub_type: "message", message: t("Unleash") }],
		"s-3206-1000-306-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-3206-1000-309-0": [{ type: "text", sub_type: "message", message: t("Front") }],
		"s-3206-1000-311-0": [{ type: "text", sub_type: "message", message: t("Evade!"), delay: 150 }],
		"s-3206-1000-321-0": [{ type: "text", sub_type: "message", message: t("AoE") }],
		"s-3206-1000-324-0": [{ type: "text", sub_type: "message", message: t("AoE") }]
	};
};