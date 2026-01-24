// Abyssal Prison (Arborea Reborn)
//
// made by HSDN / Yuyuko / Owyn / Bogus

// Arborea changes by Bogus
// feel free to improve :)

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	let thirdboss_colour_to_use = null;
	let thirdboss_counter1 = 0;
	let thirdboss_counter2 = 0;
	let thirdboss_timer1 = null;
	let thirdboss_timer2 = null;
	let boss_enraged = false;
	let boss_below_thirty_five = false;
	let boss_ent = null;

	function right_safe_handler_below(ent) { //s-2814-1000-1111-0//s-2814-1000-2111-0
		// Only below 35%
		if (!boss_below_thirty_five) return;

		if (boss_enraged) {
			// ENRAGED OUT-IN
			handlers.event([
				{ type: "text", sub_type: "message", message: t("Left Swipe - Right Swipe") },
				{ type: "text", sub_type: "message", message: t("IN-OUT") },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
				{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }

			]);
		} else {
			// NOT ENRAGED IN OUT
			handlers.event([
				{ type: "text", sub_type: "message", message: t("Left Swipe - Right Swipe") },
				{ type: "text", sub_type: "message", message: t("IN-OUT") },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
				{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }

			]);

		}
	}

	function right_safe_handler_above(ent) { //s-2814-1000-1111-0//s-2814-1000-2111-0
		// BELOW 35% → ignore this mechanic
		if (boss_below_thirty_five) return;

		// Normal behavior (original content)
		handlers.event([
			{ type: "text", sub_type: "message", message: t("Right safe") },
			{ type: "text", sub_type: "message", message: t("OUT-IN"), delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }

		]);
	}

	function left_safe_handler_above(ent) { //s-2814-1000-1109-0////s-2814-1000-2109-0
		// BELOW 35% → ignore this mechanic
		if (boss_below_thirty_five) return;

		// Normal behavior (original content)
		handlers.event([
			{ type: "text", sub_type: "message", message: t("Left safe") },
			{ type: "text", sub_type: "message", message: t("IN-OUT"), delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		]);
	}

	function left_safe_handler_below(ent) { //s-2814-1000-1109-0////s-2814-1000-2109-0
		// Only below 35%
		if (!boss_below_thirty_five) return;

		if (boss_enraged) {
			// ENRAGED OUT-IN
			handlers.event([
				{ type: "text", sub_type: "message", message: t("Right Swipe - Left Swipe") },
				{ type: "text", sub_type: "message", message: t("OUT-IN") },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
				{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
			]);
		} else {
			// NOT ENRAGED IN OUT
			handlers.event([
				{ type: "text", sub_type: "message", message: t("Right Swipe - Left Swipe") },
				{ type: "text", sub_type: "message", message: t("OUT-IN") },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 2500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
				{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
			]);
		}
	}

	function thirdboss_backattack_event1() {
		dispatch.clearTimeout(thirdboss_timer1);
		thirdboss_counter1++;

		if (thirdboss_counter1 >= 2) {
			handlers.text({ sub_type: "message", message: t("Back Stun") });
		}

		thirdboss_timer1 = dispatch.setTimeout(() => thirdboss_counter1 = 0, 3000);
	}

	function thirdboss_backattack_event2() {
		dispatch.clearTimeout(thirdboss_timer2);
		thirdboss_counter2++;

		if (thirdboss_counter2 >= 2) {
			handlers.text({ sub_type: "message", message: t("Back Stun") });
		}

		thirdboss_timer2 = dispatch.setTimeout(() => thirdboss_counter2 = 0, 3000);
	}

	function thirdboss_cage_event(clockwise, ent) {
		const colour_order = clockwise ? ["red", "yellow", "blue"] : ["blue", "yellow", "red"];
		const colour_offsets = { "red": 0, "yellow": 120, "blue": 240 };

		const colour_messages = {
			"red": { message: t("Red") },
			"yellow": { message: t("Yellow") },
			"blue": { message: t("Blue") }
		};

		if (thirdboss_colour_to_use) {
			handlers.text({
				sub_type: "message",
				message: colour_messages[thirdboss_colour_to_use].message
			});
		}

		for (let i = 0; i < 3; i++) {
			const current_colour = colour_order[(colour_order.indexOf(thirdboss_colour_to_use) + i) % 3];

			handlers.spawn({
				func: "marker",
				args: [false, colour_offsets[current_colour], 150, i * 2600, (i + 1) * 3000, true, null]
			}, ent);
		}
	}

	function spawn_cage_lazers() {
		handlers.event([
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41723, y: -98299, z: 217, w: 1.69 }, tag: "light" },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41347, y: -97969, z: 217, w: 1.69 }, tag: "light" },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41349, y: -98667, z: 217, w: 1.69 }, tag: "light" },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 40980, y: -98303, z: 217, w: 1.69 }, tag: "light" }
		]);
	}

	function spawn_enrage_dependent_throne() {
		if (!boss_ent) return;

		if (boss_enraged) {
			// Enraged Right Side
			handlers.event([
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41082, y: -98303, z: 217, w: 2 }, tag: "light" },
				//{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "text", sub_type: "message", message: t("Right Side") }
			], boss_ent);
		} else {
			// Not enraged  Left Side
			handlers.event([
				//{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41602, y: -98309, z: 217, w: 1.69 }, tag: "light" },
				{ type: "text", sub_type: "message", message: t("Left Side") }
			], boss_ent);
		}
	}

	function spawn_enrage_dependent_entrance() {
		if (!boss_ent) return;

		if (boss_enraged) {
			// Enraged Right Side
			handlers.event([
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41602, y: -98309, z: 217, w: 1.69 }, tag: "light" },
				//{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "text", sub_type: "message", message: t("Right Side") }
			], boss_ent);
		} else {
			// Not enraged  Left Side
			handlers.event([
				//{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 10000, pos: { x: 41082, y: -98303, z: 217, w: 2 }, tag: "light" },
				{ type: "text", sub_type: "message", message: t("Left Side") }
			], boss_ent);
		}
	}

	return {
		"ns-2814-1000": [
			{ type: "func", func: ent => boss_ent = ent },
			{ type: "func", func: () => boss_enraged = false },
			{ type: "func", func: () => boss_below_thirty_five = false }

		],
		"nd-2814-1000": [
			{ type: "func", func: () => boss_ent = null },
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"rb-2814-1000": [{ type: "func", func: () => boss_enraged = true }],
		"re-2814-1000": [{ type: "func", func: () => boss_enraged = false }],
		// debuff Glaze am-2814-1000-428141003 ???

		"s-2814-1000-3101-0": [{ type: "text", sub_type: "message", message: t("Boss Swap RED") }],
		"s-2814-1000-3102-0": [{ type: "text", sub_type: "message", message: t("Boss Swap BLUE") }],
		"s-2814-1000-3103-0": [{ type: "text", sub_type: "message", message: t("[DEBUFF] Closest player") }],
		"s-2814-1000-3104-0": [{ type: "text", sub_type: "message", message: t("[DEBUFF] Furthest player") }],
		"s-2814-1000-3105-0": [{ type: "text", sub_type: "message", message: t("Slow Jump") }],
		"s-2814-1000-3110-0": [{ type: "text", sub_type: "message", message: t("Orbs Mechanic Inverted Start 1") }],
		"s-2814-1000-3111-0": [{ type: "text", sub_type: "message", message: t("Orbs Mechanic Inverted Start 2") }],
		"s-2814-1000-3112-0": [{ type: "text", sub_type: "message", message: t("Orbs Mechanic Inverted Start 3") }],
		"s-2814-1000-1301-0": [{ type: "text", sub_type: "message", message: t("Orbs Mechanic Normal Start 1") }],
		"s-2814-1000-1302-0": [{ type: "text", sub_type: "message", message: t("Orbs Mechanic Normal Start 2") }],
		"s-2814-1000-1303-0": [{ type: "text", sub_type: "message", message: t("Orbs Mechanic Normal Start 3") }],
		//\"s-2814-1000-1304-0\": [{ type: \"text\", sub_type: \"message\", message: \"Orbs Mechanic-Circle Spawn and Attack\" }],
		"s-2814-1000-1201-0": [{ type: "text", sub_type: "message", message: t("INCOMING SWIPE-DONUTS MECHANIC") }],

		// FOR 35% BOSS
		"h-2814-1000-35": [{ type: "func", func: () => boss_below_thirty_five = true }],

		//\"s-2814-1000-3113-0\": [{ type: \"text\", sub_type: \"message\", message: \"Right Swipe\" }],
		//\"s-2814-1000-3114-0\": [{ type: \"text\", sub_type: \"message\", message: \"Left Swipe\" }],
		"s-2814-1000-3115-0": [{ type: "text", sub_type: "message", message: t("Final Cage") }],
		//\"s-2814-1000-3116-0\": [{ type: \"text\", sub_type: \"message\", message: \"Escape\" }],
		//\"s-2814-1000-3117-0\": [{ type: \"text\", sub_type: \"message\", message: \"Await 5s\" }],
		//\"s-2814-1000-3118-0\": [{ type: \"text\", sub_type: \"message\", message: \"Await 10s\" }],
		//\"s-2814-1000-5000-0\": [{ type: \"text\", sub_type: \"message\", message: \"[Antaroth]-DeathSkill\" }],
		//\"s-2814-1000-5001-0\": [{ type: \"text\", sub_type: \"message\", message: \"[Antaroth]-[Corrupted]-Shield Phase\" }],
		//\"s-2814-1000-5002-0\": [{ type: \"text\", sub_type: \"message\", message: \"[Arman]-Frenzy-Stun and Hide Self\" }],

		// FOR 15% BOSS
		"dm-0-0-9206011": [
			{ type: "func", func: spawn_cage_lazers },
			{ type: "text", sub_type: "message", message: t("CAGE LAZERS") }
		],

		"s-2814-1000-1104-0": [{ type: "func", func: thirdboss_backattack_event1 }],
		"s-2814-1000-1102-0": [{ type: "func", func: thirdboss_backattack_event2 }],

		"s-2814-1000-1105-0": [{ type: "text", sub_type: "message", message: t("Target Cage") }],
		"s-2814-1000-1119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],
		"s-2814-1000-1107-0": [{ type: "text", sub_type: "message", message: t("Random Jump") }],
		"s-2814-1000-1107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],

		"s-2814-1000-1109-0": [ //left safe
			{ type: "func", func: left_safe_handler_above },
			{ type: "func", func: left_safe_handler_below }
		],
		"s-2814-1000-1111-0": [ //right safe
			{ type: "func", func: right_safe_handler_above },
			{ type: "func", func: right_safe_handler_below }
		],

		"s-2814-1000-1113-0": [{ type: "text", sub_type: "message", message: t("Front | Back Stun") }],
		"s-2814-1000-1115-0": [{ type: "text", sub_type: "message", message: t("Spin Attack") }],
		"s-2814-1000-1120-0": [{ type: "text", sub_type: "message", message: t("Energy Beam (Slow)") }],
		"s-2814-1000-1204-0": [{ type: "text", sub_type: "message", message: t("Energy Beam (Fast)") }],
		// \"s-2814-1000-1202-0\": [{ type: \"text\", sub_type: \"message\", message: \"Spin or Front | Back Stun\" }],
		"s-2814-1000-1206-0": [{ type: "text", sub_type: "message", message: t("Orbs") }],
		"s-2814-1000-1309-0": [{ type: "text", sub_type: "message", message: t("AoE") }],
		"s-2814-1000-1310-0": [{ type: "text", sub_type: "message", message: t("Puddles") }],
		"s-2814-1000-1311-0": "s-2814-1000-1310-0",
		"s-2814-1000-1312-0": "s-2814-1000-1310-0",
		"s-2814-1000-1313-0": "s-2814-1000-1310-0",
		"s-2814-1000-1314-0": "s-2814-1000-1310-0",
		"s-2814-1000-1315-0": [{ type: "text", sub_type: "message", message: t("Pushback") }],
		"s-2814-1000-1317-0": [{ type: "func", func: thirdboss_cage_event, args: [false], delay: 1000 }],
		"s-2814-1000-1318-0": [{ type: "func", func: thirdboss_cage_event, args: [true], delay: 1000 }],
		"s-2814-1000-1400-0": [{ type: "text", sub_type: "message", message: t("Clones: Beam") }],
		"s-2814-1000-1401-0": [{ type: "text", sub_type: "message", message: t("Clones: Spin") }],
		"s-2814-1000-2104-0": "s-2814-1000-1104-0",
		"s-2814-1000-2102-0": "s-2814-1000-1102-0",
		"s-2814-1000-2105-0": "s-2814-1000-1105-0",
		"s-2814-1000-2119-0": "s-2814-1000-1119-0",
		"s-2814-1000-2107-0": "s-2814-1000-1107-0",
		"s-2814-1000-2107-1": "s-2814-1000-1107-1",
		"s-2814-1000-2109-0": "s-2814-1000-1109-0",
		"s-2814-1000-2111-0": "s-2814-1000-1111-0",
		"s-2814-1000-2113-0": "s-2814-1000-1113-0",
		"s-2814-1000-2115-0": "s-2814-1000-1115-0",
		"s-2814-1000-2120-0": "s-2814-1000-1120-0",
		"s-2814-1000-2204-0": "s-2814-1000-1204-0",
		"s-2814-1000-2202-0": "s-2814-1000-1202-0",
		"s-2814-1000-2206-0": "s-2814-1000-1206-0",

		// ENTRANCE
		"dm-0-0-9206007": [
			{ type: "func", func: spawn_enrage_dependent_entrance },
			{ type: "text", sub_type: "message", message: t("Entrance clones") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 2000 },
			{ type: "text", sub_type: "message", message: t("1"), delay: 1500 },
			{ type: "text", sub_type: "message", message: t("2"), delay: 1000 }
		],
		// THRONE
		"dm-0-0-9206006": [
			{ type: "func", func: spawn_enrage_dependent_throne },
			{ type: "text", sub_type: "message", message: t("Throne clones") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 2000 },
			{ type: "text", sub_type: "message", message: t("1"), delay: 1500 },
			{ type: "text", sub_type: "message", message: t("2"), delay: 1000 }
		],

		"s-2814-1000-1410-0": [{ type: "text", sub_type: "message", message: t("Cage") }],
		"ae-0-0-9203037": [{ type: "func", func: () => thirdboss_colour_to_use = "red" }],
		"ae-0-0-9203038": [{ type: "func", func: () => thirdboss_colour_to_use = "yellow" }],
		"ae-0-0-9203039": [{ type: "func", func: () => thirdboss_colour_to_use = "blue" }]
	};
};