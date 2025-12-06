// Antaroth's Abyss (Hard)
//
// made by HSDN / Yuyuko / Owyn

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let secondboss_mech_counter = 0;
	let thirdboss_colour_to_use = null;
	let thirdboss_counter = 0;
	let thirdboss_timer = null;

	function secondboss_stacks_event() {
		secondboss_mech_counter++;

		handlers.text({ sub_type: "notification", message: t("{secondboss_mech_counter} stack", { secondboss_mech_counter: secondboss_mech_counter }), speech: false });

		if (secondboss_mech_counter >= 5) {
			secondboss_mech_counter = 0;
		}
	}

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
		// 1 BOSS
		"nd-920-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-920-1000-1117-0": [{ type: "text", sub_type: "message", message: t("In > Out") }],
		"s-920-1000-1116-0": [{ type: "text", sub_type: "message", message: t("Out > In") }],
		"s-920-1000-1109-0": [{ type: "text", sub_type: "message", message: t("Back Attack") }],
		"s-920-1000-1130-0": [{ type: "text", sub_type: "message", message: t("Full > Outer > Inner") }],
		"s-920-1000-1220-0": [
			{ type: "text", sub_type: "message", message: t("AOE") },
			{ type: "text", sub_type: "message", delay: 2900, message: t("Dodge!") }
		],
		"s-920-1000-1300-0": [{ type: "text", sub_type: "message", delay: 600, message: t("Dodge!") }],
		"s-920-1000-2117-0": "s-920-1000-1117-0",
		"s-920-1000-2116-0": "s-920-1000-1116-0",
		"s-920-1000-2109-0": "s-920-1000-1109-0",
		"s-920-1000-2130-0": [{ type: "text", sub_type: "message", message: t("Full > Inner > Outer") }],
		"s-920-1000-2220-0": "s-920-1000-1220-0",
		"qb-920-1000-9201000": [{ type: "text", sub_type: "message", message: t("Flying") }],

		// 2 BOSS
		"nd-920-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-920-2000-99": [{ type: "func", func: () => secondboss_mech_counter = 0 }],
		"h-920-2000-50": [{ type: "text", sub_type: "message", message: t("50%") }],
		"h-920-2000-20": [{ type: "text", sub_type: "message", message: t("20%") }],
		"s-920-2000-1104-0": [{ type: "text", sub_type: "message", message: t("Random Jump") }],
		"s-920-2000-1105-0": [{ type: "text", sub_type: "message", message: t("Back Attack") }],
		"s-920-2000-1106-0": [
			{ type: "text", sub_type: "message", message: t("Spin Attack") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-920-2000-1108-0": [{ type: "text", sub_type: "message", message: t("Target Swing") }],
		"s-920-2000-1110-0": [
			{ type: "text", sub_type: "message", message: t("Stun Attack") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 175, 10, 260, 0, 5000] }
		],
		"s-920-2000-1111-0": [
			{ type: "text", sub_type: "message", message: t("Left Slash") },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 6, 302, 270, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 176, 502, 270, 200, 0, 2000] }
		],
		"s-920-2000-1112-0": [
			{ type: "text", sub_type: "message", message: t("Right Slash") },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 354, 302, 90, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 184, 502, 90, 200, 0, 2000] }
		],
		"s-920-2000-1113-0": "s-920-2000-1111-0",
		"s-920-2000-1114-0": "s-920-2000-1112-0",
		"s-920-2000-2104-0": "s-920-2000-1104-0",
		"s-920-2000-2105-0": "s-920-2000-1105-0",
		"s-920-2000-2106-0": "s-920-2000-1106-0",
		"s-920-2000-2108-0": "s-920-2000-1108-0",
		"s-920-2000-2110-0": "s-920-2000-1110-0",
		"s-920-2000-2111-0": "s-920-2000-1111-0",
		"s-920-2000-2112-0": "s-920-2000-1112-0",
		"s-920-2000-2113-0": "s-920-2000-1111-0",
		"s-920-2000-2114-0": "s-920-2000-1112-0",
		"s-920-2000-3116-0": [{ type: "text", sub_type: "message", message: t("Circles") }],
		"s-920-2000-3119-0": [{ type: "text", sub_type: "message", message: t("Red: Out safe") }],
		"s-920-2000-3220-0": [{ type: "text", sub_type: "message", message: t("Blue: In safe") }],
		//
		"dm-0-0-9202000": [{ type: "func", func: secondboss_stacks_event }],

		// 3 BOSS
		"nd-920-3000-0": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-920-3000-1104-0": [{ type: "func", func: thirdboss_backattack_event }],
		"s-920-3000-1105-0": [{ type: "text", sub_type: "message", message: t("Target Cage") }],
		"s-920-3000-1119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],
		"s-920-3000-1107-0": [{ type: "text", sub_type: "message", message: t("Random Jump") }],
		"s-920-3000-1107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],
		"s-920-3000-1109-0": [
			{ type: "text", sub_type: "message", message: t("Left") },
			{ type: "text", sub_type: "message", message: t("Inward (In > Out)"), delay: 1000 },
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
		"s-920-3000-1111-0": [
			{ type: "text", sub_type: "message", message: t("Right") },
			{ type: "text", sub_type: "message", message: t("Outward (Out > In)"), delay: 1000 },
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
		"s-920-3000-1113-0": [{ type: "text", sub_type: "message", message: t("Front | Back Stun") }],
		"s-920-3000-1115-0": [{ type: "text", sub_type: "message", message: t("Spin Attack") }],
		"s-920-3000-1120-0": [{ type: "text", sub_type: "message", message: t("Energy Beam (Slow)") }],
		"s-920-3000-1204-0": [{ type: "text", sub_type: "message", message: t("Energy Beam (Fast)") }],
		// "s-920-3000-1202-0": [{ type: "text", sub_type: "message", message: t("Spin or Front | Back Stun") }],
		"s-920-3000-1206-0": [{ type: "text", sub_type: "message", message: t("Orbs") }],
		"s-920-3000-1309-0": [{ type: "text", sub_type: "message", message: t("AoE") }],
		"s-920-3000-1310-0": [{ type: "text", sub_type: "message", message: t("Puddles") }],
		"s-920-3000-1311-0": "s-920-3000-1310-0",
		"s-920-3000-1312-0": "s-920-3000-1310-0",
		"s-920-3000-1313-0": "s-920-3000-1310-0",
		"s-920-3000-1314-0": "s-920-3000-1310-0",
		"s-920-3000-1315-0": [{ type: "text", sub_type: "message", message: t("Pushback") }],
		"s-920-3000-1317-0": [{ type: "func", func: thirdboss_cage_event, args: [false], delay: 1000 }],
		"s-920-3000-1318-0": [{ type: "func", func: thirdboss_cage_event, args: [true], delay: 1000 }],
		"s-920-3000-1400-0": [{ type: "text", sub_type: "message", message: t("Clones: Beam") }],
		"s-920-3000-1401-0": [{ type: "text", sub_type: "message", message: t("Clones: Spin") }],
		"s-920-3000-2104-0": "s-920-3000-1104-0",
		"s-920-3000-2105-0": "s-920-3000-1105-0",
		"s-920-3000-2119-0": "s-920-3000-1119-0",
		"s-920-3000-2107-0": "s-920-3000-1107-0",
		"s-920-3000-2107-1": "s-920-3000-1107-1",
		"s-920-3000-2109-0": "s-920-3000-1109-0",
		"s-920-3000-2111-0": "s-920-3000-1111-0",
		"s-920-3000-2113-0": "s-920-3000-1113-0",
		"s-920-3000-2115-0": "s-920-3000-1115-0",
		"s-920-3000-2120-0": "s-920-3000-1120-0",
		"s-920-3000-2204-0": "s-920-3000-1204-0",
		"s-920-3000-2202-0": "s-920-3000-1202-0",
		"s-920-3000-2206-0": "s-920-3000-1206-0",
		"s-920-3000-1410-0": [{ type: "text", sub_type: "message", message: t("Cage") }],
		"ae-0-0-9203037": [{ type: "func", func: () => thirdboss_colour_to_use = "red" }],
		"ae-0-0-9203038": [{ type: "func", func: () => thirdboss_colour_to_use = "yellow" }],
		"ae-0-0-9203039": [{ type: "func", func: () => thirdboss_colour_to_use = "blue" }]
	};
};