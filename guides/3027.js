// Forbidden Arena [Hagufna]
//
// made by michengs / HSDN

/* eslint-disable no-multi-spaces */

module.exports = (dispatch, handlers, guide, lang, t) => {
	const { HIGHLIGHT_ITEM } = module.parent.exports.spawn;

	let shield_timer1 = null;
	let shield_timer2 = null;
	let print_shield = true;
	let print_hp = true;
	let is_hp_74_39 = false;

	function shield_event() {
		dispatch.clearTimeout(shield_timer1);
		dispatch.clearTimeout(shield_timer2);

		shield_timer1 = dispatch.setTimeout(() => {
			if (!is_hp_74_39) {
				handlers.text({
					sub_type: "message",
					message: t("Shield in 5 seconds!")
				});
			}
		}, 85000);

		shield_timer2 = dispatch.setTimeout(() => {
			if (!is_hp_74_39) {
				handlers.text({
					sub_type: "message",
					message: t("Shield in 15 seconds!")
				});
			}
		}, 75000);
	}

	function boss_hp_event(hp) {
		if ([74, 39].includes(hp)) {
			if (print_hp) {
				dispatch.clearTimeout(shield_timer1);
				dispatch.clearTimeout(shield_timer2);
				print_hp = false;
				is_hp_74_39 = true;
				dispatch.setTimeout(() => print_hp = true, 15000);
			}
		}
		if ([89, 59, 29].includes(hp)) { // до щита
			if (print_shield) {
				print_shield = false;
				is_hp_74_39 = false;
				dispatch.setTimeout(() => print_shield = true, 15000);

				handlers.text({
					sub_type: "alert",
					message: t("Ready for Shield")
				});
			}
		}
	}

	return {
		"nd-3027-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3027-1000-89": [{ type: "func", func: boss_hp_event, args: [89] }],
		"h-3027-1000-59": [{ type: "func", func: boss_hp_event, args: [59] }],
		"h-3027-1000-29": [{ type: "func", func: boss_hp_event, args: [29] }],
		"h-3027-1000-74": [{ type: "func", func: boss_hp_event, args: [74] }],
		"h-3027-1000-39": [{ type: "func", func: boss_hp_event, args: [39] }],

		//"s-3027-1001-255-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 3000, 0, 5000] }],  //0
		//"s-3027-1002-256-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 3000, 0, 5000] }],  //60
		//"s-3027-1003-257-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 3000, 0, 5000] }],  //0
		//"s-3027-1004-258-0": [{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 3000, 0, 5000] }],  //60

		"s-3027-1000-108-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Strike (Slow)") }], // 101 121 122 -> 108
		//"s-3027-1000-355-0": [{ type: "text", sub_type: "message", message: t("Eviscerate") }],                                 // 102 121 103 -> 355 -> 114
		"s-3027-1000-135-0": [{ type: "text", sub_type: "message", message: t("Strike (Slow)") }],                         //         104 -> 135 -> 130
		"s-3027-1000-111-0": [{ type: "text", sub_type: "message", message: t("Stun | Strike") }],                              //         104 -> 111 -> 130
		"s-3027-1000-112-0": [{ type: "text", sub_type: "message", message: t("Back Jump | Strike") }],                 //     121 102 -> 112 -> 130

		// прыжок
		"s-3027-1000-116-0": [
			{ type: "text", sub_type: "message", message: t("Jump") }
		],
		"s-3027-1000-116-1": [
			{ type: "text", sub_type: "message", message: t("Dodge") },
			{ type: "spawn", func: "circle", args: [true, 912, 0, 110, 8, 480, 0, 3000] }
		],

		// 3 оборота -> прыжок (145 -> 139 -> 140)
		"s-3027-1000-145-0": [{ type: "text", sub_type: "message", message: t("3x360 | Jump") }],
		"s-3027-1000-139-0": [{ type: "text", sub_type: "message", delay: 1000, message: t("Jump") }],
		"s-3027-1000-140-0": [
			{ type: "text", sub_type: "message", message: t("Dodge") },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 110, 8, 480, 0, 3000] }
		],

		// 109 -> 402 -> 130
		"s-3027-1000-109-0": [{ type: "text", sub_type: "message", message: t("Forward Jump") }],
		"s-3027-1000-402-0": [{ type: "text", sub_type: "message", message: t("Jump") }],

		// 136 -> 144 -> 130
		"s-3027-1000-136-0": [{ type: "text", sub_type: "message", message: t("2x360 | Strike") }],
		"s-3027-1000-144-0": [{ type: "text", sub_type: "message", message: t("Strike") }],

		// 134 -> 147
		"s-3027-1000-134-0": [{ type: "text", sub_type: "message", message: t("Turn around | Back") }],
		"s-3027-1000-134-1": [{ type: "text", sub_type: "message", message: t("Back") }],
		"s-3027-1000-147-0": [{ type: "text", sub_type: "message", message: t("Strike") }],

		// 142 -> 143 114 130
		"s-3027-1000-142-0": [{ type: "text", sub_type: "message", message: t("2x360 | Strike") }],
		"s-3027-1000-143-0": [{ type: "text", sub_type: "message", message: t("Strike") }],

		"s-3027-1000-141-0": [{ type: "text", sub_type: "message", message: t("2x360 | Eviscerate") }], // 141 -> 146 114 130
		"s-3027-1000-146-0": [{ type: "text", sub_type: "message", message: t("Eviscerate | Strike") }],      // 146 ->         114 -> 130

		// стяжка -> бублики (350 -> 302)
		"s-3027-1000-350-0": [
			{ type: "text", sub_type: "message", message: t("Red: Donuts (Out > In)") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 240, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 480, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 3, 950, 0, 5000] },
			{ type: "spawn", func: "item", args: [HIGHLIGHT_ITEM, 0, 0, 3800, 1000] },
			{ type: "text", sub_type: "message", delay: 3800, message: t("In") },
			{ type: "spawn", func: "marker", args: [false, 180, 100, 3800, 1000, false, ["CENTER", "IN"]] },
			{ type: "spawn", func: "marker", args: [false, 0, 100, 3800, 1000, false, ["CENTER", "IN"]] },
			{ type: "spawn", func: "marker", args: [false, 90, 100, 3800, 1000, false, ["CENTER", "IN"]] },
			{ type: "spawn", func: "marker", args: [false, 270, 100, 3800, 1000, false, ["CENTER", "IN"]] },
			{ type: "text", sub_type: "alert", delay: 58000, message: t("Mechanics soon...") }
		],
		// стяжка -> волна (357 -> 110)
		"s-3027-1000-357-0": [
			{ type: "text", sub_type: "message", message: t("Purple: Get Out") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 500, 2000, 5000] },
			{ type: "text", sub_type: "alert", delay: 58000, message: t("Mechanics soon...") }
		],

		//"s-3027-1000-114-0": [{ type: "text", sub_type: "message", message: t("Eviscerate (slow)") }],
		//"s-3027-1000-130-0": [{ type: "text", sub_type: "message", message: t("Target") }],
		"s-3027-1000-151-0": [{ type: "text", sub_type: "message", message: t("Back teleport | Strike") }], // 151 149 148 -> 130
		"s-3027-1000-149-1": [{ type: "text", sub_type: "message", message: t("Back teleport (Target)") }],
		"s-3027-1000-117-0": [{ type: "text", sub_type: "message", message: t("Teleport (Target)") }],         //         117 -> 130
		"s-3027-1000-356-0": [{ type: "text", sub_type: "message", message: t("Teleport (Target)") }],         //         356 -> 147
		"s-3027-1000-148-1": [{ type: "text", sub_type: "message", message: t("Teleport (Target)") }],

		"s-3027-1000-351-0": [
			{ type: "text", sub_type: "message", message: t("Shield!") },
			{ type: "func", func: shield_event }
		],
		"s-3027-1000-401-0": [
			{ type: "text", sub_type: "message", message: t("30% AOE!") },
			{ type: "text", sub_type: "message", delay: 1600, message: t("Dodge!") }
		]
	};
};