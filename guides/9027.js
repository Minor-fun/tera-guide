// Manaya's Core (Hard)
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	let next_debuff = 0;
	function debuff_event(send_msg, debuff, ent) {
		if (next_debuff === 0) {
			next_debuff = debuff;
		}

		if (send_msg) {
			const debuff_messages = {
				0: { message: t("Debuff") },
				1: { message: t("Debuff 1") },
				2: { message: t("Debuff 2") },
				3: { message: t("Debuff 3") }
			};

			handlers.text({
				sub_type: "notification",
				message: debuff_messages[next_debuff].message,
				speech: true
			});

			if (next_debuff !== 0) {
				next_debuff++;
			}

			if (next_debuff > 3) {
				next_debuff = 1;
			}
		}
	}


	function debuff_removed() {
		if (next_debuff != 0) {
			handlers.text({
				sub_type: "notification",
				message: t("next debuff: {next_debuff}", { next_debuff: next_debuff }),
				speech: false
			});
		}

		next_debuff = 0;
	}

	return {
		// 1 BOSS
		"nd-427-42701": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-427-42701-1106-0": [{ type: "text", sub_type: "message", message: t("Frontal Wind") }],
		"s-427-42701-1102-0": [{ type: "text", sub_type: "message", message: t("Frontal Cut") }],
		"s-427-42701-1104-0": [{ type: "text", sub_type: "message", message: t("Frontal Hit") }],
		"s-427-42701-1105-0": [{ type: "text", sub_type: "message", message: t("AoE") }],
		"s-427-42701-1110-0": [{ type: "text", sub_type: "message", message: t("Jump + AoE") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 400, 0, 3000] }
		],
		"s-427-42701-1114-1": [{ type: "text", sub_type: "message", message: t("AoE") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 110, 12, 250, 0, 2500] }
		],
		"s-427-42701-1112-0": [{ type: "text", sub_type: "message", message: t("Frontal AoE (Big)") }],
		"s-427-42701-1215-0": [{ type: "text", sub_type: "message", message: t("AoE") }],
		"s-427-42701-1214-0": [{ type: "text", sub_type: "message", message: t("Frontal Cut + AoE") }],
		"s-427-42701-1204-0": [{ type: "text", sub_type: "message", message: t("Target") }],
		"s-427-42701-1121-0": [{ type: "text", sub_type: "message", message: t("Jump + Frontal Cut") }],
		"s-427-42701-2106-0": "s-427-42701-1106-0",
		"s-427-42701-2102-0": "s-427-42701-1102-0",
		"s-427-42701-2104-0": "s-427-42701-1104-0",
		"s-427-42701-2105-0": "s-427-42701-1105-0",
		"s-427-42701-2110-0": "s-427-42701-1110-0",
		"s-427-42701-2114-1": "s-427-42701-1114-1",
		"s-427-42701-2112-0": "s-427-42701-1112-0",
		"s-427-42701-2215-0": "s-427-42701-1215-0",
		"s-427-42701-2214-0": "s-427-42701-1214-0",
		"s-427-42701-2121-0": "s-427-42701-1121-0",
		"s-427-42701-2204-0": "s-427-42701-1204-0",

		// 2 BOSS
		"nd-427-42702": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-427-42702-1104-0": [{ type: "text", sub_type: "message", message: t("Laser") }],
		"s-427-42702-1109-0": [{ type: "text", sub_type: "message", message: t("Back Shield Hit") }],
		"s-427-42702-1106-0": [{ type: "text", sub_type: "message", message: t("Bomb (Target)") }],
		"s-427-42702-1117-0": [{ type: "text", sub_type: "message", message: t("Stun + AoE") }],
		"s-427-42702-1118-0": [{ type: "text", sub_type: "message", message: t("Stun + Wave") },
			{ type: "text", sub_type: "message", delay: 4600, message: t("Dodge!") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 3000, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 16, 240, 3000, 3000] }
		],
		"s-427-42702-1112-0": [{ type: "text", sub_type: "message", message: t("Jump Backwards") }],

		"dm-0-0-9027004": [{ type: "text", sub_type: "notification", message: t("Kill [c=#05a0fa]Blue[/c] Minions") }],
		"dm-0-0-9027005": [{ type: "text", sub_type: "notification", message: t("Kill [c=#e82331]Red[/c] Minions") }],
		"s-427-42702-2104-0": "s-427-42702-1104-0",
		"s-427-42702-2109-0": "s-427-42702-1109-0",
		"s-427-42702-2106-0": "s-427-42702-1106-0",
		"s-427-42702-2117-0": "s-427-42702-1117-0",
		"s-427-42702-2118-0": "s-427-42702-1118-0",
		"s-427-42702-2112-0": "s-427-42702-1112-0",

		// 3 BOSS
		// Fase 1
		"nd-427-2001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-427-2001-1101-0": [{ type: "text", sub_type: "message", message: t("Arrows AoE (+)") },
			{ type: "spawn", func: "vector", args: [553, 120, 100, 176, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 240, 100, -176, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 60, 100, 4, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 300, 100, -4, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 150, -100, 274, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 210, 100, -94, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, -30, -101, 94, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 210, -101, 86, 400, 0, 5000] }
		],
		"s-427-2001-1102-0": [{ type: "text", sub_type: "message", message: t("Arrows AoE (X)") },
			{ type: "spawn", func: "vector", args: [553, 160, 110, 222, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 290, 110, -132, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 110, 110, 48, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 340, 110, 42, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 10, 115, -41, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 260, 115, -49, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 80, 115, 131, 400, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 190, 115, -221, 400, 0, 5000] }
		],
		"s-427-2001-1105-0": [{ type: "text", sub_type: "message", message: t("Arrows AoE (Small)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 210, 2000, 4000] }
		],
		"s-427-2001-1103-0": [{ type: "text", sub_type: "message", message: t("Wave AoE") }],
		"s-427-2001-1111-0": [{ type: "text", sub_type: "message", message: t("Stun") }],
		"s-427-2004-1101-0": [{ type: "text", sub_type: "message", message: t("Claws") }],
		"s-427-2001-1109-0": [{ type: "text", sub_type: "message", message: t("Inner AoE") }],
		"s-427-2001-2101-0": "s-427-2001-1101-0",
		"s-427-2001-2102-0": "s-427-2001-1102-0",
		"s-427-2001-2105-0": "s-427-2001-1105-0",
		"s-427-2001-2111-0": "s-427-2001-1111-0",
		"s-427-2004-2101-0": "s-427-2004-1101-0",
		"s-427-2001-2103-0": "s-427-2001-1103-0",
		"s-427-2001-2109-0": "s-427-2001-1109-0",

		// Fase 2
		"nd-427-2007": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"die": [{ type: "func", func: debuff_removed }],
		"h-427-2007-99": [{ type: "func", func: () => next_debuff = 0 }],
		"s-427-2007-1103-0": [{ type: "text", sub_type: "message", message: t("Frontal Attack") }],
		"s-427-2007-1205-0": [{ type: "text", sub_type: "message", message: t("Teleport") }],
		"s-427-2007-1102-0": [{ type: "text", sub_type: "message", message: t("In > Out") }],
		"s-427-2007-1113-0": [{ type: "text", sub_type: "message", message: t("Left Hand Attack") }],
		"s-427-2007-1105-0": [{ type: "text", sub_type: "message", message: t("Right Hand Attack") }],
		"s-427-2007-1112-0": [{ type: "func", func: debuff_event, args: [true, 0] }],
		"s-427-2007-1108-0": [{ type: "text", sub_type: "message", message: t("Target Attack") }],
		"s-427-2007-1114-0": [{ type: "text", sub_type: "message", message: t("Back Attack") }],
		"s-427-2007-1115-0": [{ type: "text", sub_type: "message", message: t("Tail") }],
		"s-427-2007-1111-0": [{ type: "text", sub_type: "message", message: t("Frontal Attack") }],
		"s-427-2007-1109-0": [{ type: "text", sub_type: "message", message: t("AoE Target") }],
		"s-427-2007-1104-0": [{ type: "text", sub_type: "message", message: t("Stomp") }],
		"s-427-2007-1107-0": [{ type: "text", sub_type: "message", message: t("Laser Attack") },
			{ type: "spawn", func: "vector", args: [912, 360, 985, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 369, 995, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 351, 995, 180, 950, 0, 2500] }
		],
		"s-427-2007-1106-0": [{ type: "text", sub_type: "message", message: t("Target Bomb") }],
		"s-427-2007-1204-0": [{ type: "text", sub_type: "message", message: t("Big AoE (Run)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 550, 0, 4000] }
		],
		"qb-427-2007-427050": [
			{ type: "text", sub_type: "message", message: t("Plague of Exhaustion"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Regression"), class_position: "mystic" }
		],
		"s-427-2007-2205-0": "s-427-2007-1205-0",
		"s-427-2007-2102-0": "s-427-2007-1102-0",
		"s-427-2007-2113-0": "s-427-2007-1113-0",
		"s-427-2007-2105-0": "s-427-2007-1105-0",
		"s-427-2007-2112-0": "s-427-2007-1112-0",
		"s-427-2007-2115-0": "s-427-2007-1115-0",
		"s-427-2007-2111-0": "s-427-2007-1111-0",
		"s-427-2007-2109-0": "s-427-2007-1109-0",
		"s-427-2007-2107-0": "s-427-2007-1107-0",
		"s-427-2007-2106-0": "s-427-2007-1106-0",
		"s-427-2007-2204-0": "s-427-2007-1204-0",
		"s-427-2007-2103-0": "s-427-2007-1103-0",
		"s-427-2007-2114-0": "s-427-2007-1114-0",
		"s-427-2007-2108-0": "s-427-2007-1108-0",
		"s-427-2007-2104-0": "s-427-2007-1104-0",
		"am-427-2007-47702900": [{ type: "func", func: debuff_event, args: [false, 2] }], // greedy thought #1
		"am-427-2007-47703000": [{ type: "func", func: debuff_event, args: [false, 3] }], // hateful thought #2
		"am-427-2007-47703100": [{ type: "func", func: debuff_event, args: [false, 1] }] // desperate thought #3
	};
};