// Dreadspire VALKYTEQ
//
// made by TristanPW

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	// FIRST FLOOR

	let knockbackCounter = 0;
	let knockbackTimer = null;

	function knockback_firstfloor() {
		dispatch._mod.clearTimeout(knockbackTimer);
		knockbackCounter++;

		if (knockbackCounter === 2) {
			handlers.text({ type: "text", sub_type: "message", message: t("KNOCKBACK"), speech: true });
			knockbackCounter = 0;
		}

		knockbackTimer = dispatch._mod.setTimeout(() => knockbackCounter = 0, 5000);
	}


	// THIRD FLOOR

	const PizzaA = {
		offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8],
		distance: 200
	};

	const PizzaB = {
		offsets: [-0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
		distance: 200
	};

	const PizzaC = {
		offsets: [-0.26, 1.29, 2.9, -1.84],
		distance: 200
	};

	const CounterPizzaC = {
		offsets: [0.24, 2.33, -2.88, -0.8, 0.79, 1.83, -2.34, -1.3],
		distance: 200
	};

	const Inner = {
		offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8, -0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
		distance: 275
	};

	const Outer = {
		offsets: [0.24, 1.29, 2.33, -2.88, -1.84, -0.8, -0.26, 0.79, 1.83, 2.9, -2.34, -1.3],
		distance: 150
	};

	PizzaA.counter = PizzaB;
	PizzaB.counter = PizzaA;
	PizzaC.counter = CounterPizzaC;
	Inner.counter = Outer;
	Outer.counter = Inner;

	const Mechanics = {
		1122: {
			order: [PizzaA, Inner, Outer, PizzaB, PizzaC],
			delays: [0, 1000, 2000, 3000, 4000]
		},
		1123: {
			order: [PizzaB, PizzaA, Outer, Inner, PizzaC],
			delays: [200, 1200, 2200, 3200, 4200]
		},
		1124: {
			order: [Inner, PizzaB, PizzaA, Outer, PizzaC],
			delays: [0, 1000, 2000, 3000, 4000]
		},
		1127: {
			order: [PizzaA, PizzaB, Inner, Outer, PizzaC],
			delays: [200, 1200, 2200, 3200, 4200]
		}
	};

	const debuffs_thirdfloor = [false, false, false, false, false]; // False = Blue (Avoid Hit), True = Red (Take Hit)

	function cage_mechanic_thirdfloor(id, _, event, entity) {
		const mechanic = Mechanics[id];

		if (mechanic && entity.stage == 0) {
			let flower_id = 559;

			// eslint-disable-next-line guard-for-in
			for (const i in mechanic.order) {
				const pattern = !debuffs_thirdfloor[i] ? mechanic.order[i] : mechanic.order[i].counter;

				for (const offset of pattern.offsets) {
					handlers.event([{ "type": "spawn",
						"id": flower_id,
						"delay": mechanic.delays[i],
						"sub_delay": mechanic.delays[i] + 1900,
						"distance": pattern.distance,
						"offset": offset
					}]);
				}
				flower_id = flower_id == 559 ? 556 : 559;
			}
		}
	}

	function cage_set_debuff(id, bool) {
		debuffs_thirdfloor[id] = bool;
	}


	// FIFTH FLOOR

	let fifth_debuff = null;


	// SIXTH FLOOR

	function sixth_regress() {
		handlers.text({ sub_type: "notification", message: t("Plague/Regress") });
		// handlers.text({ sub_type: "alert", message: t("Plague/Regress"), delay: 0 });
		handlers.text({ sub_type: "warning", message: t("Plague/Regress") });
		handlers.text({ sub_type: "message", message: t("Plague/Regress") });
		// handlers.text({ sub_type: "alert", message: t("Plague/Regress") });
		// handlers.text({ sub_type: "warning", message: t("Plague/Regress") });
		// handlers.text({ sub_type: "message", message: t("Plague/Regress") });
		// handlers.text({ sub_type: "speech", message: t("Plague/Regress") });
	}


	// SEVENTH FLOOR

	let seventh_fifty = false;

	function seventh_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: t("Debuffs > Circles > Bombs")
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: t("Debuffs > Bombs > Circles")
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: t("Circles > Bombs > Debuffs")
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: t("Circles > Debuffs > Bombs")
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: t("Bombs > Debuffs > Circles")
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: t("Bombs > Circles > Debuffs")
					});
				}
				break;
		}
	}

	function seventh_spawn_tables() {
		handlers.event([
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 2.8, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 3.46, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.12, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.75, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.38, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.97, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 6.58, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.2, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.8, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 8.44, "ownerName": "SAFE SPOT", message: t("SAFE") }
		]);
	}

	// Lasers mech
	const lasers_markers_seventhfloor = [];
	const inverted_lasers_markers_seventhfloor = [];
	const sign_offsets_seventhfloor = [-0.32, -0.94, -1.57, -2.2, -2.83, 2.83, 2.2, 1.57, 0.94, 0.32];

	for (const offset of sign_offsets_seventhfloor) {
		const event = {
			"type": "spawn",
			"sub_type": "build_object",
			"id": 1,
			"sub_delay": 4000,
			"distance": 450,
			"ownerName": "SAFE SPOT",
			message: t("SAFE"),
			"offset": offset
		};

		lasers_markers_seventhfloor.push(event);
		inverted_lasers_markers_seventhfloor.push(event);
	}

	for (let distance = 175; distance <= 425; distance += 25) {
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 0
		});
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 1.25
		});
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 2.5
		});
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": -2.5
		});
		lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": -1.25
		});

		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 0.62
		});
		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 1.87
		});
		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": 3.12
		});
		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": -1.88
		});
		inverted_lasers_markers_seventhfloor.push({
			"type": "spawn",
			"id": 603,
			"sub_delay": 4000,
			"distance": distance,
			"offset": -0.63
		});
	}


	return {
		// FIRST FLOOR

		"nd-9034-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Clone Mechanic
		// "h-2800-1000-99": [{"type": "text","sub_type": "notification",message: t("BlackJacka  is looking after you") }],
		"ab-2800-1000-90340105": [{ type: "text", sub_type: "message", message: t("STUN IT") }],
		// Backstep + Knockback
		// "s-2800-1000-212-0": [{type: "text", sub_type: "message", message: t("BACKSTEP + KNOCKBACK")}],
		// "s-2800-1000-304-0": [{type: "text", sub_type: "message", message: t("STUN")},
		// { type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 250, 0, 1500] }],
		"s-2800-1000-1102-0": [{ type: "text", sub_type: "message", message: t("Running") },
			{ type: "func", func: knockback_firstfloor.bind(null) }],
		"s-2800-1000-1105-0": [{ type: "text", sub_type: "message", message: t("KNOCKBACK") }],
		"s-2800-1000-1108-0": [{ type: "text", sub_type: "message", message: t("KNOCKBACK") }],
		"s-2800-1000-1203-0": [{ type: "text", sub_type: "message", message: t("Sleep") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 250, 0, 3500] }],
		"s-2800-1000-1304-0": [{ type: "text", sub_type: "message", message: t("BACKSTEP + KNOCKBACK") }],
		"s-2800-1000-2102-0": "s-2800-1000-1102-0",
		"s-2800-1000-2105-0": "s-2800-1000-1105-0",
		"s-2800-1000-2108-0": "s-2800-1000-1108-0",
		"s-2800-1000-2203-0": "s-2800-1000-1203-0",
		"s-2800-1000-2304-0": "s-2800-1000-1304-0",


		// SECOND FLOOR

		// "s-2800-2000-101-0": [{type: "text", sub_type: "message", message: t("SMASH COMING")}],
		"s-2800-2000-1102-0": [{ type: "text", sub_type: "message", message: t("SPIN") }],
		"s-2800-2000-1107-0": [{ type: "text", sub_type: "message", message: t("BACK") }],
		"s-2800-2000-1108-0": [{ type: "text", sub_type: "message", message: t("FRONT") }],
		"s-2800-2000-1109-0": [{ type: "text", sub_type: "message", message: t("BACK SPIN") }],
		"s-2800-2000-1110-0": [{ type: "text", sub_type: "message", message: t("OUT") }],
		"s-2800-2000-1119-0": [{ type: "text", sub_type: "message", message: t("Pull") }],
		"s-2800-2000-1122-0": [{ type: "text", sub_type: "message", message: t("IN") }],
		"s-2800-2000-1306-0": [{ type: "text", sub_type: "message", message: t("Run away") }],
		"s-2800-2000-2102-0": "s-2800-2000-1102-0",
		"s-2800-2000-2107-0": "s-2800-2000-1107-0",
		"s-2800-2000-2108-0": "s-2800-2000-1108-0",
		"s-2800-2000-2109-0": "s-2800-2000-1109-0",
		"s-2800-2000-2110-0": "s-2800-2000-1110-0",
		"s-2800-2000-2119-0": "s-2800-2000-1119-0",
		"s-2800-2000-2122-0": "s-2800-2000-1122-0",
		"s-2800-2000-2306-0": "s-2800-2000-1306-0",


		// THIRD FLOOR

		// Cage Mechanic
		"s-2800-3000-1122-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1122) }],
		"s-2800-3000-1123-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1123) }],
		"s-2800-3000-1124-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1124) }],
		"s-2800-3000-1127-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1127) }],
		"ae-0-0-90340306": [{ "type": "func", "func": cage_set_debuff.bind(0, true) }],
		"ae-0-0-90340307": [{ "type": "func", "func": cage_set_debuff.bind(0, false) }],
		"ae-0-0-90340308": [{ "type": "func", "func": cage_set_debuff.bind(1, true) }],
		"ae-0-0-90340309": [{ "type": "func", "func": cage_set_debuff.bind(1, false) }],
		"ae-0-0-90340310": [{ "type": "func", "func": cage_set_debuff.bind(2, true) }],
		"ae-0-0-90340311": [{ "type": "func", "func": cage_set_debuff.bind(2, false) }],
		"ae-0-0-90340312": [{ "type": "func", "func": cage_set_debuff.bind(3, true) }],
		"ae-0-0-90340313": [{ "type": "func", "func": cage_set_debuff.bind(3, false) }],
		"ae-0-0-90340314": [{ "type": "func", "func": cage_set_debuff.bind(4, true) }],
		"ae-0-0-90340315": [{ "type": "func", "func": cage_set_debuff.bind(4, false) }],
		"s-2800-3000-1106-0": [{ type: "text", sub_type: "message", message: t("Kick back!") }],
		"s-2800-3000-1108-0": [{ type: "text", sub_type: "message", message: t("Kick forward!") }],
		"s-2800-3000-1112-0": [{ type: "text", sub_type: "message", message: t("To the boss") }], //
		"s-2800-3000-1130-0": [
			{ type: "text", sub_type: "message", message: t("LEFT SWIPE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 200, "offset": 2.3, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 200, "offset": 1, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 200, "offset": 2.3 },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 200, "offset": 1 }
		],
		"s-2800-3000-1131-0": [
			{ type: "text", sub_type: "message", message: t("RIGHT SWIPE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 200, "offset": -2.3, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 200, "offset": -1, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 200, "offset": -2.3 },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 200, "offset": -1 }
		],
		"s-2800-3000-1134-0": [{ type: "text", sub_type: "message", message: t("DEBUFF") }], //
		"s-2800-3000-1502-0": [{ type: "text", sub_type: "message", message: t("FORCED CAGE") }], //
		"ns-2800-3004": [{ type: "text", sub_type: "message", message: t("Kill mobs") }],
		"s-2800-3000-2106-0": "s-2800-3000-1106-0",
		"s-2800-3000-2108-0": "s-2800-3000-1108-0",
		"s-2800-3000-2112-0": "s-2800-3000-1112-0",
		"s-2800-3000-2130-0": "s-2800-3000-1130-0",
		"s-2800-3000-2131-0": "s-2800-3000-1131-0",
		"s-2800-3000-2134-0": "s-2800-3000-1134-0",
		"s-2800-3000-2502-0": "s-2800-3000-1502-0",


		// FOURTH FLOOR

		"s-2800-4000-1102-0": [{ type: "text", sub_type: "message", message: t("From boss - to boss") }],
		"s-2800-4000-1103-0": [{ type: "text", sub_type: "message", message: t("To the boss") }],
		"s-2800-4000-1107-0": [{ type: "text", sub_type: "message", message: t("Under the tank, then under the dd") }],
		"s-2800-4000-1108-0": [
			{ type: "text", sub_type: "message", message: t("Lines") },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 175, 300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 90, -20, -175, 300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 5, 300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 90, -20, -5, 300, 0, 4000] }
		],
		"s-2800-4000-1109-1": [{ type: "text", sub_type: "message", message: t("Beam") }],
		"s-2800-4000-1109-2": [{ type: "text", sub_type: "message", message: t("Dodge") }],
		"s-2800-4000-1205-0": [{ type: "text", sub_type: "message", message: t("Beam in a circle") }],
		"s-2800-4000-1206-0": [{ type: "text", sub_type: "message", message: t("Beam forward, left, right") }],
		"ns-2800-4001": [{ type: "text", sub_type: "message", message: t("Kill mobs") }],
		"s-2800-4000-2102-0": "s-2800-4000-1102-0",
		"s-2800-4000-2103-0": "s-2800-4000-1103-0",
		"s-2800-4000-2107-0": "s-2800-4000-1107-0",
		"s-2800-4000-2108-0": "s-2800-4000-1108-0",
		"s-2800-4000-2109-1": "s-2800-4000-1109-1",
		"s-2800-4000-2109-2": "s-2800-4000-1109-2",
		"s-2800-4000-2205-0": "s-2800-4000-1205-0",
		"s-2800-4000-2206-0": "s-2800-4000-1206-0",


		// FIFTH FLOOR

		"h-2800-5000-85": [{ "type": "text", "sub_type": "notification", message: t("85%... Big Jump + mob ") }],
		"h-2800-5000-55": [{ "type": "text", "sub_type": "notification", message: t("55%... Big Jump + mob ") }],
		"h-2800-5000-25": [{ "type": "text", "sub_type": "notification", message: t("25%... Big Jump + mob ") }],
		"h-2800-5000-10": [{ "type": "text", "sub_type": "notification", message: t("10%... Big Jump + mob ") }],
		"s-2800-5000-1103-0": [
			{ type: "text", sub_type: "message", message: t("Tail") },
			{ type: "spawn", func: "semicircle", args: [140, 260, 553, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 260, 500, 0, 2000] }
		],
		"s-2800-5000-1104-0": [
			{ type: "text", sub_type: "message", message: t("Ice Storm DOTs") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 5000] }
		],
		"s-2800-5000-1105-0":	[
			{ type: "text", sub_type: "message", message: t("Fire Bombs") },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 500, 10, 125, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 500, 10, 125, 0, 3250] },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 500, 10, 125, 0, 3500] },
			{ type: "spawn", func: "circle", args: [false, 553, 235, 500, 10, 125, 0, 3750] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 500, 10, 125, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 500, 10, 125, 0, 4250] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 500, 10, 125, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 500, 10, 125, 0, 4750] },
			{ type: "spawn", func: "circle", args: [false, 493, 0, 0, 0, 250, 0, 4750] }
		],
		"s-2800-5000-1107-0": [
			{ type: "text", sub_type: "message", message: t("Change") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 50, 0, 250, 0, 3000] }
		],
		"s-2800-5000-1118-0": [{ type: "text", sub_type: "message", message: t("Big Jump + mobs") }],
		"s-2800-5000-1118-2": [{ type: "text", sub_type: "message", message: t("Dodge") }],
		"s-2800-5000-1120-0": [
			{ type: "text", sub_type: "message", message: t("Stun + reclining") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 150, 0, 680, 0, 7000] }
		],
		"s-2800-5000-1124-0": [{ type: "text", sub_type: "message", message: t("Jump") }],
		"s-2800-5000-1127-0": [{ type: "text", sub_type: "message", message: t("DEBUFF") }],
		"ns-2800-5002": [
			{ type: "text", sub_type: "message", message: t("Kill your mob(fire)"), check_func: () => fifth_debuff === "blue" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 0, 30000, true, null], tag: "mob1", check_func: () => fifth_debuff === "blue" }
		],
		"ns-2800-5003": [
			{ type: "text", sub_type: "message", message: t("Kill your mob(ice)"), check_func: () => fifth_debuff === "red" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 0, 30000, true, null], tag: "mob2", check_func: () => fifth_debuff === "red" }
		],
		"nd-2800-5002": [{ type: "despawn_all", tag: "mob1" }],
		"nd-2800-5003": [{ type: "despawn_all", tag: "mob2" }],
		"s-2800-5000-2103-0": "s-2800-5000-1103-0",
		"s-2800-5000-2104-0": "s-2800-5000-1104-0",
		"s-2800-5000-2105-0": "s-2800-5000-1105-0",
		"s-2800-5000-2107-0": "s-2800-5000-1107-0",
		"s-2800-5000-2118-0": "s-2800-5000-1118-0",
		"s-2800-5000-2118-2": "s-2800-5000-1118-2",
		"s-2800-5000-2120-0": "s-2800-5000-1120-0",
		"s-2800-5000-2124-0": "s-2800-5000-1124-0",
		"s-2800-5000-2127-0": "s-2800-5000-1127-0",
		// Debuff tracker
		"am-2800-5000-90340501": [
			{ type: "text", sub_type: "message", message: t("Ice is taken") },
			{ type: "func", "func": () => fifth_debuff = "red" }
		],
		"am-2800-5000-90340502": [
			{ type: "text", sub_type: "message", message: t("Fire is taken") },
			{ type: "func", "func": () => fifth_debuff = "blue" }
		],
		"am-2800-5000-90340503": [{ type: "func", "func": () => fifth_debuff = null }],
		// Mob Wave Attack
		"s-2800-5002-1106-0": [{ type: "spawn", func: "vector", args: [553, 120, 30, 10, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 120, -30, -10, 450, 0, 4000] }],
		"s-2800-5003-1101-0": "s-2800-5002-1106-0",
		"s-2800-5002-2106-0": "s-2800-5002-1106-0",
		"s-2800-5003-2101-0": "s-2800-5002-1106-0",


		// SIXTH FLOOR

		"qb-2800-6000-434601": [{ type: "func", func: sixth_regress.bind(null) }],
		"s-2800-6000-1101-0": [
			{ type: "text", sub_type: "message", message: t("Blow from the ground") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1000 }
		],
		"s-2800-6000-1103-0": [
			{ type: "text", sub_type: "message", message: t("Impact") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 425, 0, 3000] }
		],
		"s-2800-6000-1104-0": [
			{ type: "text", sub_type: "message", message: t("Impact") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 0, 3000] }
		],
		"s-2800-6000-1106-0": [
			{ type: "text", sub_type: "message", message: t("Series + Impact") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 3000, 2000] }
		],
		"s-2800-6000-1107-0": [{ type: "text", sub_type: "message", message: t("Boms") }],
		"s-2800-6000-1109-0": [
			{ type: "text", sub_type: "message", message: t("1 strike") },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 3000, "distance": 350, "offset": 2.6, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 3000, "distance": 350, "offset": 2.6 }
		],
		"s-2800-6000-1110-0": [
			{ type: "text", sub_type: "message", message: t("2 strikes") },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 3000, "distance": 350, "offset": 2.6, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 3000, "distance": 350, "offset": 2.6 }
		],
		"s-2800-6000-1111-0": [{ type: "text", sub_type: "message", message: t("Left kick") }],
		"s-2800-6000-1112-0": [{ type: "text", sub_type: "message", message: t("Right kick") }],
		"s-2800-6000-1113-0": [{ type: "text", sub_type: "message", message: t("Laser") }],
		"s-2800-6000-1113-1": [{ type: "text", sub_type: "message", message: t("Dodge") }],
		"s-2800-6000-1133-0": [
			{ type: "text", sub_type: "message", message: t("Strike") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-2800-6000-1134-0": [
			{ type: "text", sub_type: "message", message: t("Impact") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-2800-6000-2101-0": "s-2800-6000-1101-0",
		"s-2800-6000-2103-0": "s-2800-6000-1103-0",
		"s-2800-6000-2104-0": "s-2800-6000-1104-0",
		"s-2800-6000-2106-0": "s-2800-6000-1106-0",
		"s-2800-6000-2107-0": "s-2800-6000-1107-0",
		"s-2800-6000-2109-0": "s-2800-6000-1109-0",
		"s-2800-6000-2110-0": "s-2800-6000-1110-0",
		"s-2800-6000-2111-0": "s-2800-6000-1111-0",
		"s-2800-6000-2112-0": "s-2800-6000-1112-0",
		"s-2800-6000-2113-0": "s-2800-6000-1113-0",
		"s-2800-6000-2113-1": "s-2800-6000-1113-1",
		"s-2800-6000-2133-0": "s-2800-6000-1133-0",
		"s-2800-6000-2134-0": "s-2800-6000-1134-0",


		// SEVENTH FLOOR

		// Lasers + Mechanic
		// "s-2800-7000-901-0": [{"type": "text","sub_type": "notification",message: t("DEBUFF (CLOSEST)")}].concat(lasers_markers_seventhfloor),
		// "s-2800-7000-902-0": [{"type": "text","sub_type": "notification",message: t("DEBUFF (FURTHEST)")}].concat(inverted_lasers_markers_seventhfloor),
		// "s-2800-7000-903-0": [{"type": "text","sub_type": "notification",message: t("GATHER + CLEANSE")}].concat(lasers_markers_seventhfloor),
		// "s-2800-7000-904-0": [{"type": "text","sub_type": "notification",message: t("GATHER + NO CLEANSE")}].concat(inverted_lasers_markers_seventhfloor),
		// "s-2800-7000-905-0": [{"type": "text","sub_type": "notification",message: t("SPREAD")}].concat(lasers_markers_seventhfloor),
		// "s-2800-7000-906-0": [{"type": "text","sub_type": "notification",message: t("GATHER")}].concat(inverted_lasers_markers_seventhfloor),
		"nd-2800-7000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-2800-7000-99": [{ type: "func", func: () => seventh_fifty = false }],
		"h-2800-7000-50": [{ type: "func", func: () => seventh_fifty = true }],
		"dm-0-0-90340703": [{ type: "func", func: seventh_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-90340704": [{ type: "func", func: seventh_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-90340705": [{ type: "func", func: seventh_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-2800-7000-1105-0": [
			{ type: "text", sub_type: "message", message: t("Discarding") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -95, 850, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 95, 850, 0, 3000] }
		],
		"s-2800-7000-1136-0": [{ type: "text", sub_type: "message", message: t("Claw") }],
		"s-2800-7000-1110-0": [{ type: "text", sub_type: "message", message: t("Claw") }],
		"s-2800-7000-1129-0": [{ type: "text", sub_type: "message", message: t("IN") }],
		"s-2800-7000-1130-0": [
			{ type: "text", sub_type: "message", message: t("Shield Strike") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 130, 0, 270, 0, 2500] }
		],
		"s-2800-7000-1132-0": [
			{ type: "text", sub_type: "message", message: t("AOE Shield") },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 3000] }
		],
		"s-2800-7000-1133-0": [
			{ type: "text", sub_type: "message", message: t("AOE Shield") },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 6000] }
		],
		"s-2800-7000-1135-0": [{ type: "text", sub_type: "message", message: t("IN") }],
		"s-2800-7000-1240-0": [
			{ type: "text", sub_type: "message", message: t("Donuts") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 380, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 520, 0, 6000] }
		],
		"s-2800-7000-1401-0": [{ type: "text", sub_type: "message", message: t("Plague/Regress") }],
		"s-2800-7000-1402-0": [{ type: "text", sub_type: "message", message: t("Sleep") }],
		"s-2800-7000-1701-0": [{ type: "text", sub_type: "message", message: t("Back + front") }],
		//
		"s-2800-7000-1113-0": [{ type: "text", sub_type: "message", message: t("Bait") }],
		"s-2800-7000-1151-0": [{ type: "text", sub_type: "message", message: t("Attention stun") }],
		"s-2800-7000-1152-0": [
			{ type: "text", sub_type: "message", message: t("Stun + Back") },
			{ type: "spawn", func: "semicircle", args: [110, 250, 553, 0, 0, null, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 70, -1000, 70, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 290, -1000, -70, 1000, 0, 6000] }
		],
		"s-2800-7000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }],
		"s-2800-7000-1140-0": [
			{ type: "text", sub_type: "message", message: t("Donuts") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 380, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 520, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 700, 0, 6000] }
		],
		"s-2800-7000-1154-0": [
			{ "type": "text", "sub_type": "message", message: t("OUT + IN") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-2800-7000-1155-0": [
			{ "type": "text", "sub_type": "message", message: t("IN + OUT") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-2800-7000-1142-0": [
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 2.8, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 3.46, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.12, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.75, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.38, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.97, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 6.58, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.2, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.8, "ownerName": "SAFE SPOT", message: t("SAFE") },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 8.44, "ownerName": "SAFE SPOT", message: t("SAFE") }
		],
		"s-2800-7000-1143-0": "s-2800-7000-1142-0",
		"s-2800-7000-1910-0": [{ type: "func", func: seventh_spawn_tables.bind(null) }],
		"s-2800-7000-1901-0": [
			{ type: "text", sub_type: "message", message: t("(Debuffs) Closest") },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1902-0": [
			{ type: "text", sub_type: "message", message: t("(Debuffs) Farthest") },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1903-0": [
			{ type: "text", sub_type: "message", message: t("(Bombs) Gather + Cleanse") },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1904-0": [
			{ type: "text", sub_type: "message", message: t("(Bombs) Gather + No cleanse") },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1905-0": [
			{ type: "text", sub_type: "message", message: t("(Circles) Spread") },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1906-0": [
			{ type: "text", sub_type: "message", message: t("(Circles) Gather") },
			{ type: "func", func: seventh_spawn_tables.bind(null) }
		],
		"s-2800-7000-1144-0": [
			{ "type": "text", "sub_type": "message", message: t("OUT") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-2800-7000-1145-0": [
			{ "type": "text", "sub_type": "message", message: t("IN") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-2800-7000-2105-0": "s-2800-7000-1105-0",
		"s-2800-7000-2136-0": "s-2800-7000-1136-0",
		"s-2800-7000-2110-0": "s-2800-7000-1110-0",
		"s-2800-7000-2129-0": "s-2800-7000-1129-0",
		"s-2800-7000-2130-0": "s-2800-7000-1130-0",
		"s-2800-7000-2132-0": "s-2800-7000-1132-0",
		"s-2800-7000-2133-0": "s-2800-7000-1133-0",
		"s-2800-7000-2135-0": "s-2800-7000-1135-0",
		"s-2800-7000-2401-0": "s-2800-7000-1401-0",
		"s-2800-7000-2402-0": "s-2800-7000-1402-0",
		"s-2800-7000-2701-0": "s-2800-7000-1701-0",
		"s-2800-7000-2113-0": "s-2800-7000-1113-0",
		"s-2800-7000-2151-0": "s-2800-7000-1151-0",
		"s-2800-7000-2152-0": "s-2800-7000-1152-0",
		"s-2800-7000-2138-0": "s-2800-7000-1138-0",
		"s-2800-7000-2140-0": "s-2800-7000-1140-0",
		"s-2800-7000-2154-0": "s-2800-7000-1154-0",
		"s-2800-7000-2155-0": "s-2800-7000-1155-0",
		"s-2800-7000-2240-0": "s-2800-7000-1240-0",
		"s-2800-7000-2142-0": "s-2800-7000-1142-0",
		"s-2800-7000-2143-0": "s-2800-7000-1143-0",
		"s-2800-7000-2901-0": "s-2800-7000-1901-0",
		"s-2800-7000-2902-0": "s-2800-7000-1902-0",
		"s-2800-7000-2903-0": "s-2800-7000-1903-0",
		"s-2800-7000-2904-0": "s-2800-7000-1904-0",
		"s-2800-7000-2905-0": "s-2800-7000-1905-0",
		"s-2800-7000-2144-0": "s-2800-7000-1144-0",
		"s-2800-7000-2145-0": "s-2800-7000-1145-0",


		// EIGHTH FLOOR

		"s-2800-8000-1102-0": [
			{ type: "text", sub_type: "message", message: t("Pull in 5 sec") },
			{ type: "text", sub_type: "message", message: t("Pull"), delay: 4500 }
		],
		"s-2800-8000-2102-0": [
			{ type: "text", sub_type: "message", message: t("Pull in 5 sec") },
			{ type: "text", sub_type: "message", message: t("Pull"), delay: 3500 }
		],
		"s-2800-8000-1101-0": [
			{ type: "text", sub_type: "message", message: t("Soon AOE") },
			{ type: "text", sub_type: "message", message: t("AOE"), delay: 4500 }
		],
		"s-759-1003-2101-0": [
			{ type: "text", sub_type: "message", message: t("Soon AOE") },
			{ type: "text", sub_type: "message", message: t("AOE"), delay: 3500 }
		],
		"s-2800-8000-2110-0": [
			{ type: "text", sub_type: "message", message: t("Clover") },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],
		"s-2800-8000-1110-0": [
			{ type: "text", sub_type: "message", message: t("Clover") },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		]
	};
};