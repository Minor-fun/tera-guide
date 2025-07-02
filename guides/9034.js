// Dreadspire
//
// made by TristanPW

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	const { entity } = dispatch.require.library;


	// FIRST FLOOR

	let knockbackCounter = 0;
	let knockbackTimer = null;

	function knockback_firstfloor() {
		dispatch._mod.clearTimeout(knockbackTimer);
		knockbackCounter++;

		if (knockbackCounter === 2) {
			handlers.text({ type: "text", sub_type: "message", message: "KNOCKBACK", message_RU: "Будет Отбрасывание", message_zh: "击退", speech: true });
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

	/*
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
					handlers.event([{
						"type": "spawn",
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
	*/


	// FIFTH FLOOR

	let fifth_debuff = null;


	// SIXTH FLOOR

	function sixth_regress() {
		handlers.text({ sub_type: "notification", message: "Plague/Regress", message_RU: "[c=#E904CA]!!!!![/c][c=#E904CA]!!!![/c][c=#39FF33]!!!![/c]!!!!!!![c=#F90531]!!!!!!!!!!![/c] Регресс[c=#39FF33]!![/c][c=#E904CA]!!!!![/c]!!!![c=#0517F9]!!!![/c]!!!!!!![c=#F90531]!!!!!!!!!!![/c]", message_zh: "驱散" });
		handlers.text({ sub_type: "warning", message: "Plague/Regress", message_RU: "Регресс!!", message_zh: "驱散" });
		handlers.text({ sub_type: "message", message: "Plague/Regress", message_RU: "Регресс!!", message_zh: "驱散" });
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
						message: "Debuffs > Circles > Bombs", message_zh: "debuff>闪电>炸弹",
						message_RU: "ДКБ"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles", message_zh: "debuff>炸弹>闪电",
						message_RU: "ДБК"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs", message_zh: "闪电>炸弹>debuff",
						message_RU: "КБД"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs", message_zh: "闪电>debuff>炸弹",
						message_RU: "КДБ"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!seventh_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles", message_zh: "炸弹>debuff>闪电",
						message_RU: "БДК"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs", message_zh: "炸弹>闪电>debuff",
						message_RU: "БКД"
					});
				}
				break;
		}
	}

	function seventh_spawn_tables(is_normal_world, ent) {
		const regularWorld = [
			// dps
			{ type: "spawn", func: "marker", args: [false, 180, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 210, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// tank
			{ type: "spawn", func: "marker", args: [false, -45, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 0, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// general safe spots
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 2.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 3.46, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.12, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.75, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.38, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.97, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 6.58, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.2, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 8.44, "ownerName": "SAFE SPOT", "message": "SAFE" }
		];

		const soulWorld = [
			// dps
			{ type: "spawn", func: "marker", args: [false, 210, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 180, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// tank
			{ type: "spawn", func: "marker", args: [false, 0, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, -45, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// general safe spots
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 2.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 3.46, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.12, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 4.75, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.38, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 5.97, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 6.58, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.2, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 7.8, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 4000, "distance": 525, "offset": 8.44, "ownerName": "SAFE SPOT", "message": "SAFE" }
		];

		if (is_normal_world) {
			handlers.event(regularWorld);
		} else {
			handlers.event(soulWorld);
		}
	}

	let boss_data = null;
	function set_boss_data(ent) {
		boss_data = ent;
	}

	// 8th floor
	let is_eighth_floor = false;
	let carpet_mob_game_id = null;
	let carpet_mob_angle = null;
	let carpet_event_done = false;
	const BackCarpetMarkers = 0;
	const FrontCarpetMarkers = 1;
	const LeftCarpetMarkers = 2;
	const RightCarpetMarkers = 3;
	const CarpetMarkers = [
		[{ type: "text", sub_type: "notification", message: "Back -> Front", message_RU: "Назад -> Спереди", message_zh: "后到前" }],
		[{ type: "text", sub_type: "notification", message: "Front -> Back", message_RU: "Спереди -> Назад", message_zh: "前到后" }],
		[{ type: "text", sub_type: "notification", message: "Left -> Right", message_RU: "Левый -> Правый", message_zh: "左到右" }],
		[{ type: "text", sub_type: "notification", message: "Right -> Left", message_RU: "Правый -> Левый", message_zh: "右到左" }]
	];


	function curse_mob_spawned(ent) {
		const angle = ent.loc.angleTo(boss_data.loc);
		const curse_msg = angle > 0 ? "Curse Left" : "Curse Right";
		const curse_msg_ru = angle > 0 ? "Дебафф Левый" : "Дебафф Правый";
		const curse_msg_zh = angle > 0 ? "左侧诅咒" : "右侧诅咒";
		handlers.text({
			sub_type: "message",
			message: curse_msg,
			message_RU: curse_msg_ru,
			message_zh: curse_msg_zh
		});
	}

	function carpet_mob_spawned(ent) {
		handlers.text({
			sub_type: "message",
			message_RU: "Появился ковровый моб",
			message: "Carpet Mob Spawned", message_zh: "地毯小怪出现",
		});
		carpet_mob_game_id = ent.gameId;
		carpet_mob_angle = ent.loc.angleTo(boss_data.loc);
	}

	function carpet_mob_reset_event() {
		carpet_mob_angle = null;
		carpet_mob_game_id = null;
		carpet_event_done = false;
	}

	dispatch.hook("S_CREATURE_ROTATE", "*", e => {
		if (!is_eighth_floor) return;
		if (e.gameId != carpet_mob_game_id) return;
		if (carpet_event_done) return;
		carpet_event_done = true;
		let pattern = null;
		let angle = e.w.toFixed(5);

		if (carpet_mob_angle > Math.PI / 2 && carpet_mob_angle < Math.PI) {
			// front left
			pattern = angle > 0 ? RightCarpetMarkers : BackCarpetMarkers;
		} else if (carpet_mob_angle > 0 && carpet_mob_angle < Math.PI / 2) {
			// back left
			pattern = angle < -2 ? RightCarpetMarkers : FrontCarpetMarkers;
		} else if (carpet_mob_angle > -Math.PI && carpet_mob_angle < -Math.PI / 2) {
			// front right
			pattern = angle > 1 ? BackCarpetMarkers : LeftCarpetMarkers;
		} else {
			// back right
			pattern = angle > 0 ? FrontCarpetMarkers : LeftCarpetMarkers;
		}

		handlers.event(CarpetMarkers[pattern]);
	});

	// 9th floor darkan

	let secondary_aggro_date = 0;
	let is_ninth_floor = false;
	let ninth_floor_fifty = false;
	dispatch.hook("S_USER_EFFECT", "*", e => {
		if (!is_ninth_floor) return;
		if (e.circle == 3 && e.operation == 1 && e.source == boss_data.gameId) {
			secondary_aggro_date = new Date();
		}
	});

	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let counter = 0;
	let counter1_date = null;

	let prev_back_attack = 0;
	let prev_date = 0;
	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 1500;

			if (is_one_back) {
				handlers.text({
					sub_type: "message",
					message_RU: "360",
					message: "360",
					message_zh: "360"
				});
			}
		}
		dispatch.setTimeout(() => back_print = false, 3500);
	}


	function boss_backattack_event_new(curr, ent) {
		let start = new Date();
		let tmp = prev_date;
		prev_date = start;

		let time_diff = start - tmp;

		let prev = prev_back_attack;
		prev_back_attack = curr;

		let back_combo_time_diff = 5000;
		if (counter1_date != null) {
			back_combo_time_diff = start - counter1_date;
		}

		if (curr == 1103 || curr == 1106) {
			let secondary_time_diff = start - secondary_aggro_date;
			const markers = [
				[
					{ type: "text", sub_type: "message", message_RU: "Левый", message_zh: "向左击退", message: "Left" },
					{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2500, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 2500] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 2500] }
				],
				[
					{ type: "text", sub_type: "message", message_RU: "Правый", message_zh: "向右击退", message: "Right" },
					{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2500, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 2500] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 2500] }
				]
			];

			if (secondary_time_diff < 3000) {
				if (ninth_floor_fifty) {
					let safe_spot_index = curr == 1103 ? 0 : 1;
					handlers.event(markers[safe_spot_index]);
				}
				ninth_secondary_event();
			}
		}

		if (prev == 1106 && curr == 1103 && time_diff < 1000) {
			handlers.text({
				sub_type: "message",
				message_RU: "360",
				message: "360",
				message_zh: "360"
			});
		} else if (prev === 1103 && curr === 1105 && time_diff < 1000) {
			counter = 1;
			counter1_date = new Date();
		} else if (prev === 1105 && curr === 1106 && counter === 1 && time_diff < 1500 && back_combo_time_diff < 1500) {
			counter = 2;
		} else if (prev === 1106 && curr === 1108 && counter == 2 && time_diff < 1000 && back_combo_time_diff < 2000) {
			handlers.text({
				sub_type: "message",
				message_RU: "2x360",
				message: "2x360", message_zh: "二连旋转"
			});
		} else {
			counter = 0;
			counter1_date = null;
		}
	}

	let ninth_triple_swipe_remaining = 0;
	function ninth_new_swipe_event(curr, ent) {
		ninth_triple_swipe_remaining--;
		if (ninth_triple_swipe_remaining > 0) {
			if (curr == 1407) {
				handlers.event([
					{ type: "text", sub_type: "message", message_RU: "Левый", message_zh: "向左击退", message: "Left" },
					{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 1000, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1000] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1000] }
				]);
			} else {
				handlers.event([
					{ type: "text", sub_type: "message", message_RU: "Правый", message_zh: "向右击退", message: "Right" },
					{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 1000, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1000] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1000] }
				]);
			}
		} else {
			// non triple
			if (curr == 1407) {
				handlers.event([
					{ type: "text", sub_type: "message", message_RU: "Левый (Двойной)", message_zh: "左侧双重", message: "Left (Double)" },
					{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 1000, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 2500] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 2500] },
					{ type: "spawn", func: "marker", args: [false, 60, 100, 1000, 1000, true, null] },

				]);
			} else {
				handlers.event([
					{ type: "text", sub_type: "message", message_RU: "Правый (Двойной)", message_zh: "右侧双重", message: "Right (Double)" },
					{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 1000, true, null] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 2500] },
					{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 2500] },
					{ type: "spawn", func: "marker", args: [false, 300, 100, 1000, 1000, true, null] },
				]);
			}

		}
	}

	function ninth_old_swipe_event(curr, ent) {
		if (ninth_triple_swipe_remaining > 0) {
			ninth_triple_swipe_remaining--;
		}
		if (curr == 1401) {
			handlers.event([
				{ type: "text", sub_type: "message", message_RU: "Левый", message_zh: "向左击退", message: "Left" },
				{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 1000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1000] },
				{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1000] }
			]);
		} else {
			handlers.event([
				{ type: "text", sub_type: "message", message_RU: "Правый", message_zh: "向右击退", message: "Right" },
				{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 1000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1000] },
				{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1000] }
			]);
		}
	}

	let triples_timer = null;
	function ninth_triples_event() {
		if (triples_timer != null) {
			dispatch.clearTimeout(triples_timer);
		}

		triples_timer = dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "notification",
				message: "Triples Soon!", message_zh: "准备三连！",
				message_RU: "тройки Скоро!"
			});
		}, 100000);

	}

	let secondary_timer = null;
	function ninth_secondary_event() {
		if (secondary_timer != null) {
			dispatch.clearTimeout(secondary_timer);
		}

		secondary_timer = dispatch.setTimeout(() => {
			if (ninth_floor_fifty) {
				handlers.text({
					sub_type: "notification",
					message: "Secondary Soon!", message_zh: "准备二段！",
					message_RU: "вторичный скоро!"
				});
			}
		}, 45000);

	}
	function reset_backevent() {
		back_print = false;
		back_time = 0;
		end_back_time = 0;
		is_one_back = false;
		counter = 0;
		counter1_date = null;
		prev_back_attack = 0;
		prev_date = 0;

		// reset aggro event
		secondary_aggro_date = 0;
		is_ninth_floor = false;
		ninth_floor_fifty = false;

		if (triples_timer != null) {
			dispatch.clearTimeout(triples_timer);
			triples_timer = null;
		}

		if (secondary_timer != null) {
			dispatch.clearTimeout(secondary_timer);
			secondary_timer = null;
		}


	}


	// 10th floor
	let next_debuff = 0;
	function debuff_event(send_msg, debuff, ent) {
		if (next_debuff === 0) {
			next_debuff = debuff;
		}

		if (send_msg) {
			const debuff_messages = {
				0: { message: "Debuff", message_RU: "Дебаф (бублик)", message_zh: "debuff" },
				2: { message: "Debuff 1, 2", message_RU: "Дебаф (бублик) 1, 2", message_zh: "debuff一二" },
				3: { message: "Debuff 1, 3", message_RU: "Дебаф (бублик) 1, 3", message_zh: "debuff一三" }
			};

			handlers.text({
				sub_type: "notification",
				message: debuff_messages[next_debuff].message,
				message_RU: debuff_messages[next_debuff].message_RU,
				message_zh: debuff_messages[next_debuff].message_zh,
				speech: true
			});

			if (next_debuff !== 0) {
				next_debuff = next_debuff === 2 ? 3 : 2;
			}
		}
	}


	function debuff_removed() {
		if (next_debuff != 0) {
			handlers.text({
				sub_type: "notification",
				message: `next debuff: 1, ${next_debuff}`,
				message_RU: `Следующий Дебаф (бублик): 1, ${next_debuff}`,
				message_zh: `下一个debuff: 1, ${next_debuff}`,
				speech: false
			});
		}

		next_debuff = 0;
	}

	return {
		// FIRST FLOOR

		"nd-434-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
		],
		"ab-434-1000-90340105": [{ type: "text", sub_type: "message", message: "STUN IT", message_RU: "Застанить босса!", message_zh: "晕它！" }],
		"s-434-1000-1102-0": [{ type: "text", sub_type: "message", message: "Running", message_RU: "Пробежка", message_zh: "跑位" },
		{ type: "func", func: knockback_firstfloor.bind(null) }],
		"s-434-1000-1105-0": [{ type: "text", sub_type: "message", message: "Breath", message_RU: "Атака вперед", message_zh: "吐息" }],
		"s-434-1000-1108-0": [{ type: "text", sub_type: "message", message: "KNOCKBACK", message_RU: "Отбрасывание", message_zh: "击退" }],
		"s-434-1000-1203-0": [
			{ type: "text", sub_type: "message", message: "Sleep", message_RU: "Сон!", message_zh: "睡眠！" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 250, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 900, message: "dodge", message_RU: "dodge", message_zh: "闪避" }],
		"s-434-1000-1304-0": [{ type: "text", sub_type: "message", message: "Backstep", message_RU: "Назад + Отбрасывание", message_zh: "后撤击退" }],
		"s-434-1000-2102-0": "s-434-1000-1102-0",
		"s-434-1000-2105-0": "s-434-1000-1105-0",
		"s-434-1000-2108-0": "s-434-1000-1108-0",
		"s-434-1000-2203-0": "s-434-1000-1203-0",
		"s-434-1000-2304-0": "s-434-1000-1304-0",


		// SECOND FLOOR

		"s-434-2000-1102-0": [{ type: "text", sub_type: "message", message: "SPIN", message_RU: "Вращение", message_zh: "旋转" }],
		"s-434-2000-1106-0": [{ type: "text", sub_type: "message", message: "EVADE/Front AOE", message_RU: "Эвейд/Переднее AOE", message_zh: "闪避前方范围攻击" }],
		"s-434-2000-1107-0": [{ type: "text", sub_type: "message", message: "BACK", message_RU: "Стан назад", message_zh: "背后眩晕" }],
		"s-434-2000-1108-0": [{ type: "text", sub_type: "message", message: "FRONT", message_RU: "Атака вперед", message_zh: "前方攻击" }],
		"s-434-2000-1109-0": [{ type: "text", sub_type: "message", message: "Back Spin", message_RU: "Разворот назад Combo", message_zh: "转身后连击" }],
		"s-434-2000-1110-0": [
			{ type: "text", sub_type: "message", message: "OUT", message_RU: "От него", message_zh: "远离" },
			{ type: "text", sub_type: "message", message: "3", delay: 1000 },
			{ type: "text", sub_type: "message", message: "2", delay: 2000 },
			{ type: "text", sub_type: "message", message: "1", delay: 3000 }
		],
		"s-434-2000-1113-0": [{ type: "text", sub_type: "message", message: "Back Combo", message_RU: "Вращение назад", message_zh: "背后连击" }],
		"s-434-2000-1119-0": [{ type: "text", sub_type: "message", message: "PULL", message_RU: "Притяжка + вращение", message_zh: "拉人加旋转" }],
		"s-434-2000-1122-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "К нему", message_zh: "靠近" }],
		"s-434-2000-1306-0": [
			{ type: "text", sub_type: "message", message: "Stand by head", message_RU: "За крокодила", message_zh: "站头旁边" },
			{ type: "text", sub_type: "message", message: "4", delay: 5000 },
			{ type: "text", sub_type: "message", message: "3", delay: 6000 },
			{ type: "text", sub_type: "message", message: "2", delay: 7000 },
			{ type: "text", sub_type: "message", message: "1", delay: 8000 }
		],
		"s-434-2000-2102-0": "s-434-2000-1102-0",
		"s-434-2000-2106-0": "s-434-2000-1106-0",
		"s-434-2000-2107-0": "s-434-2000-1107-0",
		"s-434-2000-2108-0": "s-434-2000-1108-0",
		"s-434-2000-2109-0": "s-434-2000-1109-0",
		"s-434-2000-2110-0": "s-434-2000-1110-0",
		"s-434-2000-2113-0": "s-434-2000-1113-0",
		"s-434-2000-2119-0": "s-434-2000-1119-0",
		"s-434-2000-2122-0": "s-434-2000-1122-0",
		"s-434-2000-2306-0": "s-434-2000-1306-0",


		// THIRD FLOOR

		// Cage Mechanic
		// "s-434-3000-1122-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1122) }],
		// "s-434-3000-1123-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1123) }],
		// "s-434-3000-1124-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1124) }],
		// "s-434-3000-1127-0": [{ "type": "func", "func": cage_mechanic_thirdfloor.bind(1127) }],
		// "ae-0-0-90340306": [{ "type": "func", "func": cage_set_debuff.bind(0, true) }],
		// "ae-0-0-90340307": [{ "type": "func", "func": cage_set_debuff.bind(0, false) }],
		// "ae-0-0-90340308": [{ "type": "func", "func": cage_set_debuff.bind(1, true) }],
		// "ae-0-0-90340309": [{ "type": "func", "func": cage_set_debuff.bind(1, false) }],
		// "ae-0-0-90340310": [{ "type": "func", "func": cage_set_debuff.bind(2, true) }],
		// "ae-0-0-90340311": [{ "type": "func", "func": cage_set_debuff.bind(2, false) }],
		// "ae-0-0-90340312": [{ "type": "func", "func": cage_set_debuff.bind(3, true) }],
		// "ae-0-0-90340313": [{ "type": "func", "func": cage_set_debuff.bind(3, false) }],
		// "ae-0-0-90340314": [{ "type": "func", "func": cage_set_debuff.bind(4, true) }],
		// "ae-0-0-90340315": [{ "type": "func", "func": cage_set_debuff.bind(4, false) }],
		"s-434-3000-1106-0": [{ type: "text", sub_type: "message", message: "back!", message_RU: "Удар назад!", message_zh: "背后！" }],
		"s-434-3000-1108-0": [{ type: "text", sub_type: "message", message: "forward!", message_RU: "Удар вперед!", message_zh: "前方！" }],
		"s-434-3000-1112-0": [{ type: "text", sub_type: "message", message: "To the Boss", message_RU: "К Боссу", message_zh: "靠近王" }],
		"s-434-3000-1130-0": [
			{ type: "text", sub_type: "message", "message": "Right", message_RU: "Удар вправо", message_zh: "右" }, // left swipe
			{ type: "spawn", func: "marker", args: [false, 130, 200, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 200, 0, 2000, true, null] }
		],
		"s-434-3000-1131-0": [
			{ type: "text", sub_type: "message", "message": "Left", message_RU: "Удар влево", message_zh: "左" }, // RIGHT SWIPE
			{ type: "spawn", func: "marker", args: [false, -130, 200, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, -60, 200, 0, 2000, true, null] }
		],
		"s-434-3000-1134-0": [{ type: "text", sub_type: "message", message: "DEBUFF", message_RU: "ДЕБАФ", message_zh: "debuff" }], //
		"s-434-3000-1502-0": [{ type: "text", sub_type: "message", message: "FORCED CAGE", message_RU: "Скоро клетка", message_zh: "即将牢笼" }], //
		"ns-434-3004": [{ type: "text", sub_type: "message", message: "Kill mobs", message_RU: "Убить мобов", message_zh: "清理小怪" }],
		"s-434-3000-2106-0": "s-434-3000-1106-0",
		"s-434-3000-2108-0": "s-434-3000-1108-0",
		"s-434-3000-2112-0": "s-434-3000-1112-0",
		"s-434-3000-2130-0": "s-434-3000-1130-0",
		"s-434-3000-2131-0": "s-434-3000-1131-0",
		"s-434-3000-2134-0": "s-434-3000-1134-0",
		"s-434-3000-2502-0": "s-434-3000-1502-0",


		// FOURTH FLOOR

		"s-434-4000-1102-0": [{ type: "text", sub_type: "message", message: "Out | In", message_RU: "От босса - к боссу", message_zh: "远离再靠近" }],
		"s-434-4000-1103-0": [{ type: "text", sub_type: "message", message: "In | Out", message_RU: "К боссу", message_zh: "靠近再远离" }],
		"s-434-4000-1107-0": [{ type: "text", sub_type: "message", message: "Under the tank, then under the dd", message_RU: "Под танка, затем под мили дд", message_zh: "先坦克后近战" }],
		"s-434-4000-1108-0": [
			{ type: "text", sub_type: "message", message: "Lines", message_RU: "Линии", message_zh: "直线" },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 175, 300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 90, -20, -175, 300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 5, 300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 90, -20, -5, 300, 0, 4000] }
		],
		"s-434-4000-1109-1": [{ type: "text", sub_type: "message", message: "Beam", message_RU: "Луч", message_zh: "光线" }],
		"s-434-4000-1109-2": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }],
		"s-434-4000-1205-0": [{ type: "text", sub_type: "message", message: "Laser", message_RU: "Луч по кругу", message_zh: "激光" }],
		"s-434-4000-1206-0": [{ type: "text", sub_type: "message", message: "Beam forward, left, right", message_RU: "Луч вперед, лево, право", message_zh: "前左右光线" }],
		"ns-434-4001": [{ type: "text", sub_type: "message", message: "Kill mobs", message_RU: "Убить мобов", message_zh: "清理小怪" }],
		"s-434-4000-2102-0": "s-434-4000-1102-0",
		"s-434-4000-2103-0": "s-434-4000-1103-0",
		"s-434-4000-2107-0": "s-434-4000-1107-0",
		"s-434-4000-2108-0": "s-434-4000-1108-0",
		"s-434-4000-2109-1": "s-434-4000-1109-1",
		"s-434-4000-2109-2": "s-434-4000-1109-2",
		"s-434-4000-2205-0": "s-434-4000-1205-0",
		"s-434-4000-1207-0": "s-434-4000-1205-0",
		"s-434-4000-2207-0": "s-434-4000-1205-0",
		"s-434-4000-2206-0": "s-434-4000-1206-0",


		// FIFTH FLOOR

		"h-434-5000-85": [{ "type": "text", "sub_type": "notification", "message": "85%... Big Jump + mob ", "message_RU": "85% Скоро Большой прыжок + мобы", "message_zh": "85%...大跳+小怪" }],
		"h-434-5000-55": [{ "type": "text", "sub_type": "notification", "message": "55%... Big Jump + mob ", "message_RU": "55% Скоро Большой прыжок + мобы", "message_zh": "55%...大跳+小怪" }],
		"h-434-5000-25": [{ "type": "text", "sub_type": "notification", "message": "25%... Big Jump + mob ", "message_RU": "25% Скоро Большой прыжок + мобы", "message_zh": "25%...大跳+小怪" }],
		"h-434-5000-10": [{ "type": "text", "sub_type": "notification", "message": "10%... Big Jump + mob ", "message_RU": "10% Скоро Большой прыжок + мобы", "message_zh": "10%...大跳+小怪" }],
		"s-434-5000-1103-0": [
			{ type: "text", sub_type: "message", message: "Tail", message_RU: "Хвост", message_zh: "甩尾" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 553, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 260, 500, 0, 2000] }
		],
		"s-434-5000-1104-0": [
			{ type: "text", sub_type: "message", message: "Ice Storm DOTs", message_RU: "Ледяные лужи", message_zh: "冰圈" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 5000] }
		],
		"s-434-5000-1105-0": [
			{ type: "text", sub_type: "message", message: "Fire Bombs", message_RU: "Огненные бомбы", message_zh: "火焰炸弹" },
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
		"s-434-5000-1107-0": [
			{ type: "text", sub_type: "message", message: "Change", message_RU: "Смена", message_zh: "交换" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 50, 0, 250, 0, 3000] }
		],
		"s-434-5000-1118-0": [{ type: "text", sub_type: "message", message: "Slow Jump + mobs", message_RU: "Большой прыжок + мобы", message_zh: "慢速跳加小怪" }],
		"s-434-5000-2118-0": [{ type: "text", sub_type: "message", message: "Fast Jump + mobs", message_RU: "Большой прыжок + мобы", message_zh: "快速跳加小怪" }],
		"s-434-5000-1120-0": [
			{ type: "text", sub_type: "message", message: "Stun + reclining", message_RU: "Стан + откид", message_zh: "眩晕加击退" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 150, 0, 680, 0, 7000] }
		],
		"s-434-5000-1124-0": [{ type: "text", sub_type: "message", message: "Slow", message_RU: "Медленный", message_zh: "慢速" }],
		"s-434-5000-2124-0": [{ type: "text", sub_type: "message", message: "Fast", message_RU: "быстрый", message_zh: "快速" }],
		"s-434-5000-1127-0": [{ type: "text", sub_type: "message", message: "DEBUFF", message_RU: "ДЕБАФ", message_zh: "debuff" }],
		"ns-434-5002": [
			{ type: "text", sub_type: "message", message: "Kill your mob(fire)", message_RU: "Убить своего моба(огонь)", message_zh: "打掉你的火怪", check_func: () => fifth_debuff === "blue" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 0, 30000, true, null], tag: "mob1", check_func: () => fifth_debuff === "blue" }
		],
		"ns-434-5003": [
			{ type: "text", sub_type: "message", message: "Kill your mob(ice)", message_RU: "Убить своего моба(лед)", message_zh: "打掉你的冰怪", check_func: () => fifth_debuff === "red" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 0, 30000, true, null], tag: "mob2", check_func: () => fifth_debuff === "red" }
		],
		"nd-434-5002": [{ type: "despawn_all", tag: "mob1" }],
		"nd-434-5003": [{ type: "despawn_all", tag: "mob2" }],
		// Debuff tracker
		"am-434-5000-90340501": [
			{ type: "text", sub_type: "message", message: "Ice is taken", message_RU: "Взят лед", message_zh: "已获得冰" },
			{ type: "func", "func": () => fifth_debuff = "red" }
		],
		"am-434-5000-90340502": [
			{ type: "text", sub_type: "message", message: "Fire is taken", message_RU: "Взят огонь", message_zh: "已获得火" },
			{ type: "func", "func": () => fifth_debuff = "blue" }
		],
		"am-434-5000-90340503": [{ type: "func", "func": () => fifth_debuff = null }],
		// Mob Wave Attack
		"s-434-5002-1106-0": [{ type: "spawn", func: "vector", args: [553, 120, 30, 10, 450, 0, 4000] },
		{ type: "spawn", func: "vector", args: [553, 120, -30, -10, 450, 0, 4000] }],
		"s-434-5003-1101-0": "s-434-5002-1106-0",
		"s-434-5003-2101-0": "s-434-5002-1106-0",
		"s-434-5000-2103-0": "s-434-5000-1103-0",
		"s-434-5000-2104-0": "s-434-5000-1104-0",
		"s-434-5000-2105-0": "s-434-5000-1105-0",
		"s-434-5002-2106-0": "s-434-5002-1106-0",
		"s-434-5000-2107-0": "s-434-5000-1107-0",
		"s-434-5000-2120-0": "s-434-5000-1120-0",
		"s-434-5000-2127-0": "s-434-5000-1127-0",


		// SIXTH FLOOR

		"qb-434-6000-434601": [{ type: "func", func: sixth_regress.bind(null) }],
		"s-434-6000-1101-0": [
			{ type: "text", sub_type: "message", message: "Blow from the ground", message_RU: "Удар из под земли", message_zh: "地底攻击" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1000 }
		],
		"s-434-6000-1103-0": [
			{ type: "text", sub_type: "message", message: "Impact", message_RU: "Удар", message_zh: "冲击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 425, 0, 3000] }
		],
		"s-434-6000-1104-0": [
			{ type: "text", sub_type: "message", message: "Impact", message_RU: "Удар + взмах", message_zh: "冲击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 0, 3000] }
		],
		"s-434-6000-1106-0": [
			{ type: "text", sub_type: "message", message: "Series + Impact", message_RU: "Серия + Удар", message_zh: "连击加冲击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 3000, 2000] }
		],
		"s-434-6000-1107-0": [{ type: "text", sub_type: "message", message: "Boms", message_RU: "Бомба", message_zh: "炸弹" }],
		"s-434-6000-1109-0": [
			{ type: "text", sub_type: "message", message: "1 strike", message_RU: "1 удар", message_zh: "一击" },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 3000, "distance": 350, "offset": 2.6, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 3000, "distance": 350, "offset": 2.6 }
		],
		"s-434-6000-1110-0": [
			{ type: "text", sub_type: "message", message: "2 strikes", message_RU: "2 удара", message_zh: "两连击" },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ "type": "spawn", "sub_type": "build_object", "id": 1, "sub_delay": 3000, "distance": 350, "offset": 2.6, "ownerName": "SAFE SPOT", "message": "SAFE" },
			{ "type": "spawn", "sub_type": "item", "id": 98260, "sub_delay": 3000, "distance": 350, "offset": 2.6 }
		],
		"s-434-6000-1111-0": [{ type: "text", sub_type: "message", message: "Left kick", message_RU: "Удар левой", message_zh: "左踢" }],
		"s-434-6000-1112-0": [{ type: "text", sub_type: "message", message: "Right kick", message_RU: "Удар правой", message_zh: "右踢" }],
		"s-434-6000-1113-0": [{ type: "text", sub_type: "message", message: "Laser", message_RU: "Лазер", message_zh: "激光" }],
		"s-434-6000-1113-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }],
		"s-434-6000-1133-0": [
			{ type: "text", sub_type: "message", message: "Strike", message_RU: "Удар", message_zh: "打击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-434-6000-1134-0": [
			{ type: "text", sub_type: "message", message: "Impact", message_RU: "Удар + взмах", message_zh: "冲击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-434-6000-2101-0": "s-434-6000-1101-0",
		"s-434-6000-2103-0": "s-434-6000-1103-0",
		"s-434-6000-2104-0": "s-434-6000-1104-0",
		"s-434-6000-2106-0": "s-434-6000-1106-0",
		"s-434-6000-2107-0": "s-434-6000-1107-0",
		"s-434-6000-2109-0": "s-434-6000-1109-0",
		"s-434-6000-2110-0": "s-434-6000-1110-0",
		"s-434-6000-2111-0": "s-434-6000-1111-0",
		"s-434-6000-2112-0": "s-434-6000-1112-0",
		"s-434-6000-2113-0": "s-434-6000-1113-0",
		"s-434-6000-2113-1": "s-434-6000-1113-1",
		"s-434-6000-2133-0": "s-434-6000-1133-0",
		"s-434-6000-2134-0": "s-434-6000-1134-0",


		// SEVENTH FLOOR

		// Lasers + Mechanic
		"nd-434-7000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-434-7000-99": [{ type: "func", func: () => seventh_fifty = false }],
		"h-434-7000-50": [{ type: "func", func: () => seventh_fifty = true }],
		"dm-0-0-90340703": [{ type: "func", func: seventh_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-90340704": [{ type: "func", func: seventh_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-90340705": [{ type: "func", func: seventh_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-434-7000-1105-0": [
			{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Откид пятка", message_zh: "三重击退" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -95, 850, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 95, 850, 0, 3000] }
		],
		"s-434-7000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_RU: "Когти", message_zh: "爪击" }],
		"s-434-7000-1110-0": [{ type: "text", sub_type: "message", message: "Claw", message_RU: "Когти", message_zh: "爪击" }],
		"s-434-7000-1129-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "К Боссу!", message_zh: "靠近" }],
		"s-434-7000-1130-0": [
			{ type: "text", sub_type: "message", message: "Shield Strike", message_RU: "Удар щитом", message_zh: "盾击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 130, 0, 270, 0, 2500] }
		],
		"s-434-7000-1132-0": [
			{ type: "text", sub_type: "message", message: "AOE Shield", message_RU: "АОЕ щитом!", message_zh: "盾牌范围攻击！" },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 3000] }
		],
		"s-434-7000-1133-0": [
			{ type: "text", sub_type: "message", message: "AOE Shield", message_RU: "АОЕ щитом!", message_zh: "盾牌范围攻击！" },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 6000] }
		],
		"s-434-7000-1135-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "К Боссу!", message_zh: "靠近" }],
		"s-434-7000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики!", message_zh: "环形攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 380, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 520, 0, 6000] }
		],
		"s-434-7000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Регресс!!", message_zh: "驱散" }],
		"s-434-7000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_RU: "Слип!!", message_zh: "睡眠！" }],
		"s-434-7000-1701-0": [{ type: "text", sub_type: "message", message: "Back + front", message_RU: "Назад + Вперед", message_zh: "背后加前方" }],
		"s-434-7000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт", message_zh: "诱导" }],
		"s-434-7000-1151-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан", message_zh: "晕" }],
		"s-434-7000-1152-0": [
			{ type: "text", sub_type: "message", message: "Stun + Back", message_RU: "Стан + Откид назад", message_zh: "眩晕加背后击退" },
			{ type: "spawn", func: "semicircle", args: [110, 250, 553, 0, 0, null, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 70, -1000, 70, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 290, -1000, -70, 1000, 0, 6000] }
		],
		"s-434-7000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }],
		"s-434-7000-1140-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики!", message_zh: "环形攻击" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 380, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 520, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 700, 0, 6000] }
		],
		"s-434-7000-1154-0": [
			{ "type": "text", "sub_type": "message", "message": "OUT", message_RU: "От него => К нему", message_zh: "远离" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-434-7000-1155-0": [
			{ "type": "text", "sub_type": "message", "message": "IN", message_RU: "К нему => От него", message_zh: "靠近" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-434-7000-1901-0": [ // normal world
			{ type: "text", sub_type: "notification", message: "Debuffs Closest", message_RU: "Дебафф (ближние)", message_zh: "debuff点最近的" },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-434-7000-1902-0": [ // soul world
			{ type: "text", sub_type: "notification", message: "Debuffs Farthest", message_RU: "Дебафф (дальние)", message_zh: "debuff点最远的" },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-434-7000-1903-0": [ // normal world
			{ type: "text", sub_type: "notification", message: "Gather + Cleanse", message_RU: "Бомбы (вместе!) + клинс", message_zh: "集合加净化" },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-434-7000-1904-0": [ // soul world
			{ type: "text", sub_type: "notification", message: "Gather + No cleanse", message_RU: "Бомбы (вместе!) + БЕЗ клинса", message_zh: "集合不净化" },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-434-7000-1905-0": [ // normal world
			{ type: "text", sub_type: "notification", message: "Spread", message_RU: "Круги (отдельно!)", message_zh: "散开" },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-434-7000-1906-0": [ // soul world
			{ type: "text", sub_type: "notification", message: "Gather", message_RU: "Круги (вместе!)", message_zh: "集合" },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-434-7000-1144-0": [
			{ "type": "text", "sub_type": "message", "message": "OUT", message_RU: "От него", message_zh: "远离" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-434-7000-1145-0": [
			{ "type": "text", "sub_type": "message", "message": "IN", message_RU: "К нему", message_zh: "靠近" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-434-7000-2105-0": "s-434-7000-1105-0",
		"s-434-7000-2136-0": "s-434-7000-1136-0",
		"s-434-7000-2110-0": "s-434-7000-1110-0",
		"s-434-7000-2129-0": "s-434-7000-1129-0",
		"s-434-7000-2130-0": "s-434-7000-1130-0",
		"s-434-7000-2132-0": "s-434-7000-1132-0",
		"s-434-7000-2133-0": "s-434-7000-1133-0",
		"s-434-7000-2135-0": "s-434-7000-1135-0",
		"s-434-7000-2401-0": "s-434-7000-1401-0",
		"s-434-7000-2402-0": "s-434-7000-1402-0",
		"s-434-7000-2701-0": "s-434-7000-1701-0",
		"s-434-7000-2113-0": "s-434-7000-1113-0",
		"s-434-7000-2151-0": "s-434-7000-1151-0",
		"s-434-7000-2152-0": "s-434-7000-1152-0",
		"s-434-7000-2138-0": "s-434-7000-1138-0",
		"s-434-7000-2140-0": "s-434-7000-1140-0",
		"s-434-7000-2154-0": "s-434-7000-1154-0",
		"s-434-7000-2155-0": "s-434-7000-1155-0",
		"s-434-7000-2240-0": "s-434-7000-1240-0",
		"s-434-7000-2142-0": "s-434-7000-1142-0",
		"s-434-7000-2143-0": "s-434-7000-1143-0",
		"s-434-7000-2901-0": "s-434-7000-1901-0",
		"s-434-7000-2902-0": "s-434-7000-1902-0",
		"s-434-7000-2903-0": "s-434-7000-1903-0",
		"s-434-7000-2904-0": "s-434-7000-1904-0",
		"s-434-7000-2905-0": "s-434-7000-1905-0",
		"s-434-7000-2144-0": "s-434-7000-1144-0",
		"s-434-7000-2145-0": "s-434-7000-1145-0",


		// EIGHTH FLOOR
		"ns-434-8000": [
			{ type: "func", func: () => is_eighth_floor = true },
			{ type: "func", func: set_boss_data },
		],
		"nd-434-8000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => is_eighth_floor = false },
			{ type: "func", func: () => boss_data = null },
		],
		"ns-434-8100": [{ type: "func", func: curse_mob_spawned }],
		"ns-434-8200": [{ type: "func", func: carpet_mob_spawned }],
		"nd-434-8200": [{ type: "func", func: carpet_mob_reset_event }],
		"qb-434-8000-459006": [{ type: "text", sub_type: "alert", message: "Red Circles", message_RU: "Красные круги", message_zh: "红圈" }],
		"qb-434-8000-434801": [
			{ type: "text", sub_type: "message", message: "Orbs", message_RU: "сферы", message_zh: "宝珠" },
			{ type: "text", sub_type: "message", delay: 10000, message: "Attention Orbs", message_RU: "Сферы внимания", message_zh: "注意宝珠" },
		],
		"s-434-8200-3102-0": [{ type: "text", sub_type: "message", message: "Yellow Circles", message_RU: "Желтые круги", message_zh: "黄圈" }],
		"s-434-8000-1110-0": [
			{ type: "text", sub_type: "message", message: "Lightning", message_RU: "Молния", message_zh: "闪电" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],
		"s-434-8000-2110-0": "s-434-8000-1110-0",

		// 9th FLOOR
		"ns-434-9000": [
			{ type: "func", func: () => is_ninth_floor = true },
			{ type: "func", func: ninth_triples_event },
			{ type: "func", func: ninth_secondary_event },
			{ type: "func", func: set_boss_data },
		],
		"nd-434-9000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: reset_backevent },
			{ type: "func", func: () => boss_data = null },
		],
		"h-434-9000-99": [{ type: "func", func: () => is_ninth_floor = true }],
		"h-434-9000-49": [
			{ type: "text", sub_type: "message", message: "49%", message_RU: "49%", message_zh: "百分之四十九" },
			{ type: "func", func: () => ninth_floor_fifty = true },
			{ type: "text", sub_type: "notification", message: "Triples Soon!", message_RU: "тройки Скоро!", message_zh: "准备三连！", delay: 1000 }
		],
		"dm-0-0-9034901": [
			{ type: "text", sub_type: "message", message: "Triples!", message_RU: "тройки!", message_zh: "三连！" },
			{ type: "func", func: () => ninth_triple_swipe_remaining = 3 },
			{ type: "func", func: ninth_triples_event },
		],
		"s-434-9000-1112-0": [{ type: "text", sub_type: "message", message_RU: "Рывок назад", message_zh: "向后冲刺", message: "Back Move" }],
		"s-434-9000-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-434-9000-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-434-9000-1106-0": [{ type: "func", func: boss_backattack_event_new, args: [1106] }],
		"s-434-9000-1105-0": [{ type: "func", func: boss_backattack_event_new, args: [1105] }],
		"s-434-9000-1103-0": [{ type: "func", func: boss_backattack_event_new, args: [1103] }],
		"s-434-9000-1108-0": [{ type: "func", func: boss_backattack_event_new, args: [1108] }],
		"s-434-9000-1114-0": [
			{ type: "text", sub_type: "message", message_RU: "Таргет", message_zh: "点名攻击", message: "Target Attack" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-434-9000-1115-0": [
			{ type: "text", sub_type: "message", message: "3" },
			{ type: "text", sub_type: "message", delay: 1000, message: "2" },
			{ type: "text", sub_type: "message", delay: 2000, message: "1" },
			{ type: "text", sub_type: "message", delay: 3200, message_RU: "Эвейд", message_zh: "闪避", message: "Dodge" }
		],
		"s-434-9000-1117-0": [{ type: "text", sub_type: "message", message_RU: "Удар вперед", message_zh: "前方攻击", message: "Front" }],
		"s-434-9000-1302-0": [
			{ type: "text", sub_type: "message", message_RU: "АоЕ", message_zh: "范围攻击", message: "AOE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-434-9000-1407-0": [{ type: "func", func: ninth_new_swipe_event, args: [1407] }],
		"s-434-9000-1408-0": [{ type: "func", func: ninth_new_swipe_event, args: [1408] }],
		"s-434-9000-2101-0": "s-434-9000-1101-0",
		"s-434-9000-2102-0": "s-434-9000-1102-0",
		"s-434-9000-2103-0": "s-434-9000-1103-0",
		"s-434-9000-2105-0": "s-434-9000-1105-0",
		"s-434-9000-2106-0": "s-434-9000-1106-0",
		"s-434-9000-2108-0": "s-434-9000-1108-0",
		"s-434-9000-2112-0": "s-434-9000-1112-0",
		"s-434-9000-1303-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message_zh: "旋转攻击", message: "Spin Attack" }],
		"s-434-9000-1401-0": [{ type: "func", func: ninth_old_swipe_event, args: [1401] }],
		"s-434-9000-1402-0": [{ type: "func", func: ninth_old_swipe_event, args: [1402] }],
		"s-434-9000-1301-0": [{ type: "text", sub_type: "message", message_RU: "вопль", message_zh: "尖叫", message: "Scream" }],
		"s-434-9000-2114-0": "s-434-9000-1114-0",
		"s-434-9000-2115-0": "s-434-9000-1115-0",
		"s-434-9000-2117-0": "s-434-9000-1117-0",

		// Manyaa floor 10

		"nd-434-10000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"die": [{ type: "func", func: debuff_removed }],
		"h-434-10000-99": [{ type: "func", func: () => next_debuff = 0 }],
		"s-434-10000-1103-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message_zh: "前方攻击", message: "Frontal Attack" }],
		"s-434-10000-1205-0": [{ type: "text", sub_type: "message", message_RU: "Телепорт", message_zh: "瞬移", message: "Teleport" }],
		"s-434-10000-1102-0": [{ type: "text", sub_type: "message", message_RU: "К нему > От него", message_zh: "靠近再远离", message: "In > Out" }],
		"s-434-10000-1113-0": [{ type: "text", sub_type: "message", message_RU: "Левая рука ", message_zh: "左手攻击", message: "Left Hand Attack" }],
		"s-434-10000-1105-0": [{ type: "text", sub_type: "message", message_RU: "Правая рука ", message_zh: "右手攻击", message: "Right Hand Attack" }],
		"s-434-10000-1112-0": [{ type: "func", func: debuff_event, args: [true, 0] }],
		"s-434-10000-1108-0": [{ type: "text", sub_type: "message", message_RU: "Атака (таргет)", message_zh: "点名攻击", message: "Target Attack" }],
		"s-434-10000-1114-0": [{ type: "text", sub_type: "message", message_RU: "Удар назад", message_zh: "后方直线", message: "Back Attack" }],
		"s-434-10000-1115-0": [{ type: "text", sub_type: "message", message_RU: "Хвост", message_zh: "甩尾", message: "Tail" }],
		"s-434-10000-1111-0": [{ type: "text", sub_type: "message", message_RU: "Хвост вперед", message_zh: "前方攻击", message: "Frontal Attack" }],
		"s-434-10000-1109-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ (таргет)", message_zh: "点名范围攻击", message: "AoE Target" }],
		"s-434-10000-1104-0": [{ type: "text", sub_type: "message", message: "Stomp", message_RU: "Топот", message_zh: "跺脚" }],
		"s-434-10000-1107-0": [{ type: "text", sub_type: "message", message_RU: "Лазер", message_zh: "激光攻击", message: "Laser Attack" },
		{ type: "spawn", func: "vector", args: [912, 360, 985, 180, 950, 0, 2500] },
		{ type: "spawn", func: "vector", args: [912, 369, 995, 180, 950, 0, 2500] },
		{ type: "spawn", func: "vector", args: [912, 351, 995, 180, 950, 0, 2500] }
		],
		"s-434-10000-1106-0": [{ type: "text", sub_type: "message", message_RU: "Бомба (таргет)", message_zh: "点名炸弹", message: "Target Bomb" }],
		"s-434-10000-1204-0": [{ type: "text", sub_type: "message", message_RU: "Большая АоЕ (бежать)", message_zh: "大范围攻击快跑", message: "Big AoE (Run)" },
		{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 550, 0, 4000] }
		],
		"qb-434-10000-427050": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", message_zh: "驱散", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", message_zh: "驱散", class_position: "mystic" }
		],
		"s-434-10000-2205-0": "s-434-10000-1205-0",
		"s-434-10000-2102-0": "s-434-10000-1102-0",
		"s-434-10000-2113-0": "s-434-10000-1113-0",
		"s-434-10000-2105-0": "s-434-10000-1105-0",
		"s-434-10000-2112-0": "s-434-10000-1112-0",
		"s-434-10000-2115-0": "s-434-10000-1115-0",
		"s-434-10000-2111-0": "s-434-10000-1111-0",
		"s-434-10000-2109-0": "s-434-10000-1109-0",
		"s-434-10000-2107-0": "s-434-10000-1107-0",
		"s-434-10000-2106-0": "s-434-10000-1106-0",
		"s-434-10000-2204-0": "s-434-10000-1204-0",
		"s-434-10000-2103-0": "s-434-10000-1103-0",
		"s-434-10000-2114-0": "s-434-10000-1114-0",
		"s-434-10000-2108-0": "s-434-10000-1108-0",
		"s-434-10000-2104-0": "s-434-10000-1104-0",
		"am-434-10000-90341002": [{ type: "func", func: debuff_event, args: [false, 3] }], // hateful thought #2
		"am-434-10000-90341003": [{ type: "func", func: debuff_event, args: [false, 2] }], // desperate thought #3 90341006
		"am-434-10000-90341006": "am-434-10000-90341003",
		"am-434-10000-90341005": "am-434-10000-90341002"
	};
};
