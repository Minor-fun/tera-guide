// Forbidden Arena [Nightmare Undying Warlord]
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang, t) => {
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
					message: t("Haymaker")
				});
			} else { // 116 -> 146
				handlers.text({
					sub_type: "message",
					message: t("Haymaker | Back Kick")
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
					message: t("Target attacks soon...")
				});
			}, 65000);
		}
	}

	return {
		"nd-3203-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3203-1000-99": [{ type: "func", func: () => gettingserious = false }],
		"h-3203-1000-70": [{ type: "func", func: () => gettingserious = true }],
		"h-3203-1000-30": [{ type: "text", sub_type: "message", message: t("30%") }],

		//"s-3203-1000-101-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Punch") }],
		"s-3203-1000-113-0": [
			{ type: "text", sub_type: "message", message: t("Roundhouse Kick | Stun"), class_position: "tank", check_func: () => gettingserious },
			{ type: "text", sub_type: "message", message: t("Roundhouse Kick"), class_position: "tank", check_func: () => !gettingserious }
		],
		"s-3203-1000-111-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Knockdown") }],
		"s-3203-1000-120-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Knockdown") }],
		//"s-3203-1000-102-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Combo") }], // 102 153/154 115/116
		"s-3203-1000-153-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Two Kicks") }], // 153 108
		//"s-3203-1000-108-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Floor Punch") }],
		//"s-3203-1000-127-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Many Kicks") }],

		"s-3203-1000-121-0": [{ type: "text", sub_type: "message", message: t("Flip Kick (Stun)") }],

		"qb-3203-1000-32031000": [{ type: "text", sub_type: "message", message: t("Bait (Dodge)") }],
		// "s-3203-1000-124-0": [{ type: "text", sub_type: "message", message: t("Dodge") }], // 305 124
		"s-3203-1000-107-0": [{ type: "func", func: back_kick_event, args: [107] }],

		"s-3203-1000-110-0": [
			{ type: "text", sub_type: "message", message: t("Spin") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 420, 0, 3000] }
		],
		"s-3203-1000-114-0": [
			{ type: "text", sub_type: "message", message: t("Leap (Knockdown)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 240, 0, 2000] }
		],
		//"s-3203-1000-154-0": [{ type: "text", sub_type: "message", message: t("Jumping Kick") }], // 154 310 116
		// 310 116
		"s-3203-1000-310-0": [
			{ type: "text", sub_type: "message", message: t("Back Flip | Haymaker") },
			{ type: "func", func: back_kick_event, args: [310] }
		],
		"s-3203-1000-116-0": [{ type: "func", func: back_kick_event, args: [116] }], // Haymaker
		"s-3203-1000-115-0": [{ type: "text", sub_type: "message", message: t("Haymaker (Tank)") }],
		"s-3203-1000-131-0": [{ type: "text", sub_type: "message", message: t("Rhythmic Blows") }], // 131 132 133
		// 116 146
		"s-3203-1000-146-0": [
			{ type: "text", sub_type: "message", message: t("Back Kick") }, // 116 146
			{ type: "spawn", func: "vector", args: [553, 90, 120, 170, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 120, -170, 600, 0, 3000] }
		],

		// Shield
		"qb-3203-1000-32031006": [{ type: "text", sub_type: "message", message: t("Shield!") }],

		// Target "Ha" attacks 308 32031007 125
		"qb-3203-1000-32031007": [
			{ type: "text", sub_type: "message", message: t("Kick (Target)"), class_position: "tank" },
			{ type: "text", sub_type: "message", message: t("Dodge (Target)"), class_position: ["heal", "dps"] },
			{ type: "func", func: target_attack_event }
		],
		// "s-3203-1000-125-0": [{ type: "text", sub_type: "message", message: t("Kick") }], // 308 125

		// Donuts
		"qb-3203-1000-32031008": [{ type: "text", sub_type: "message", message: t("Donuts: Out > In > Dodge") }], // 32031008 303/304 117 155
		"qb-3203-1000-32031009": [{ type: "text", sub_type: "message", message: t("Donuts: In > Out > Dodge") }], // 32031009 303/304 118 155
		"s-3203-1000-303-0": [
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 250, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 490, 0, 5000] }
		],
		"s-3203-1000-304-0": [
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 7000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 250, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 490, 0, 5000] }
		],
		"s-3203-1000-155-0": [{ type: "text", sub_type: "message", delay: 50, message: t("Dodge") }],

		// Stun 142 148 129
		"s-3203-1000-142-0": [{ type: "text", sub_type: "message", message: t("Stun | Back Wave") }],
		"s-3203-1000-148-0": [
			{ type: "text", sub_type: "message", delay: 1300, message: t("Dodge") },
			{ type: "spawn", func: "circle", args: [true, 912, 0, -10, 12, 300, 0, 3000] }
		],
		"s-3203-1000-129-0": [
			{ type: "text", sub_type: "message", message: t("Back Wave") },
			{ type: "spawn", func: "vector", args: [912, 90, 210, 390, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 90, 140, 380, 350, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 90, 70, 370, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 70, -370, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 140, -380, 350, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 210, -390, 300, 0, 2000] }
		],

		// Jump 143-0 143-1
		"qb-3203-1000-32031001": [{ type: "text", sub_type: "message", message: t("Bait on res") }],
		"s-3203-1000-143-0": [{ type: "text", sub_type: "message", message: t("Jump (Stun)") }],
		"s-3203-1000-143-1": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 14, 240, 0, 2000] }],

		// AoE 313 314
		"s-3203-1000-313-0": [{ type: "text", sub_type: "message", message: t("AOE") }],
		"s-3203-1000-314-0": [{ type: "text", sub_type: "message", message: t("Get Out") }],

		// Explosion 32031003 152 / 135
		"s-3203-1000-152-0": [
			{ type: "text", sub_type: "message", message: t("Explosion (Stun)") },
			{ type: "text", sub_type: "message", delay: 1000, message: t("Dodge") },
			{ type: "spawn", func: "circle", args: [true, 912, 0, 0, 8, 460, 0, 2500] },
			{ type: "text", sub_type: "alert", delay: 58000, message: t("Explosion soon...") }
		],
		"s-3203-1000-135-0": [
			{ type: "text", sub_type: "message", message: t("Explosion (Stun)") },
			{ type: "text", sub_type: "message", delay: 1000, message: t("Dodge") },
			{ type: "spawn", func: "circle", args: [true, 912, 0, 0, 8, 460, 0, 2500] },
			{ type: "text", sub_type: "alert", delay: 58000, message: t("Explosion soon...") }
		],

		// Debuff
		"ae-0-0-32031011": [{ type: "text", sub_type: "alert", message: t("Debuff Stack") }],
		"am-3203-1000-32031011": [{ type: "text", sub_type: "alert", message: t("Debuff Stack") }],
		"am-3203-1000-32031012": [{ type: "text", sub_type: "alert", message: t("Debuff Stack") }]
	};
};