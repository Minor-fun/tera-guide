// Abyssal Prison (Arborea Reborn)
//
// made by HSDN / Yuyuko / Owyn / Bogus

// Arborea changes by Bogus
// feel free to improve :)

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	let thirdboss_colour_to_use = null;
	let thirdboss_counter = 0;
	let thirdboss_timer = null;

	function thirdboss_backattack_event() {
		dispatch.clearTimeout(thirdboss_timer);
		thirdboss_counter++;

		if (thirdboss_counter >= 2) {
			handlers.text({ sub_type: "message", message: t("Back Stun") });
		}

		thirdboss_timer = dispatch.setTimeout(() => thirdboss_counter = 0, 3000);
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

	return {
		"nd-2814-1000-0": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//debuff Glaze am-2814-1000-428141003 ???

		"s-2814-1000-3101-0": [{ type: "text", sub_type: "message", message: t("Boss Swap RED") }],
		"s-2814-1000-3102-0": [{ type: "text", sub_type: "message", message: t("Boss Swap BLUE") }],
		"s-2814-1000-3103-0": [{ type: "text", sub_type: "message", message: t("[DEBUFF] Closest player") }],
		"s-2814-1000-3104-0": [{ type: "text", sub_type: "message", message: t("[DEBUFF] Furthest player") }],
		"s-2814-1000-3105-0": [{ type: "text", sub_type: "message", message: t("Slow Jump") }],
		"s-2814-1000-1201-0": [{ type: "text", sub_type: "message", message: t("INCOMING SWIPE-DONUTS MECHANIC") }],

		//FOR 35% BOSS
		"h-2814-1000-35": [{ type: "text", sub_type: "message", message: t("REMEMBER DOUBLE SWIPE BEFORE DONUTS NOW") }],
		"s-2814-1000-3113-0": [{ type: "text", sub_type: "message", message: t("Right Swipe") }],
		"s-2814-1000-3114-0": [{ type: "text", sub_type: "message", message: t("Left Swipe") }],

		"s-2814-1000-1104-0": [{ type: "func", func: thirdboss_backattack_event }],
		"s-2814-1000-1105-0": [{ type: "text", sub_type: "message", message: t("Target Cage") }],
		"s-2814-1000-1119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],
		"s-2814-1000-1107-0": [{ type: "text", sub_type: "message", message: t("Random Jump") }],
		"s-2814-1000-1107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],
		"s-2814-1000-1109-0": [
			{ type: "text", sub_type: "message", message: t("Left safe") },
			{ type: "text", sub_type: "message", message: t("Inward (player In > Out)"), delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],
		"s-2814-1000-1111-0": [
			{ type: "text", sub_type: "message", message: t("Right safe") },
			{ type: "text", sub_type: "message", message: t("Outward (player Out > In)"), delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],
		"s-2814-1000-1113-0": [{ type: "text", sub_type: "message", message: t("Front | Back Stun") }],
		"s-2814-1000-1115-0": [{ type: "text", sub_type: "message", message: t("Spin Attack") }],
		"s-2814-1000-1120-0": [{ type: "text", sub_type: "message", message: t("Energy Beam (Slow)") }],
		"s-2814-1000-1204-0": [{ type: "text", sub_type: "message", message: t("Energy Beam (Fast)") }],
		// "s-2814-1000-1202-0": [{ type: "text", sub_type: "message", message: "Spin or Front | Back Stun", message_RU: "Круговая или передний | Задний" }],
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

		"dm-0-0-9206007": [{ type: "text", sub_type: "message", message: t("Iframe and Entrance clones") },
		{ type: "text", sub_type: "message", message: t("1"), delay: 3000 },
		{ type: "text", sub_type: "message", message: t("2"), delay: 2000 },
		{ type: "text", sub_type: "message", message: t("3"), delay: 1000 },
		{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41612, y: -98299, z: 217, w: 3.13 }, ownerName: "ENTRANCE", message: "i love guide" },
		{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41589, y: -98738, z: 217, w: 3.13 }, ownerName: "ENTRANCE", message: "i love guide" },
		{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41607, y: -97869, z: 217, w: 3.13 }, ownerName: "ENTRANCE", message: "i love guide" }
		],
		"dm-0-0-9206006": [{ type: "text", sub_type: "message", message: t("Iframe and Throne clones") },
		{ type: "text", sub_type: "message", message: t("1"), delay: 3000 },
		{ type: "text", sub_type: "message", message: t("2"), delay: 2000 },
		{ type: "text", sub_type: "message", message: t("3"), delay: 1000 },
		{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41120, y: -98205, z: 217, w: -0.18 }, ownerName: "THRONE", message: "i love guide" },
		{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41098, y: -98517, z: 217, w: -0.18 }, ownerName: "THRONE", message: "i love guide" },
		{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41109, y: -97859, z: 217, w: -0.18 }, ownerName: "THRONE", message: "i love guide" },
		{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41106, y: -98808, z: 217, w: -0.18 }, ownerName: "THRONE", message: "i love guide" }

		],
		"s-2814-1000-1410-0": [{ type: "text", sub_type: "message", message: t("Cage") }],
		"ae-0-0-9203037": [{ type: "func", func: () => thirdboss_colour_to_use = "red" }],
		"ae-0-0-9203038": [{ type: "func", func: () => thirdboss_colour_to_use = "yellow" }],
		"ae-0-0-9203039": [{ type: "func", func: () => thirdboss_colour_to_use = "blue" }]
	};
};