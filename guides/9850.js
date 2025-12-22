// Withering Dreadspire
//
// made by TristanPW / Calvary / vathsq / Vampic

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	// 1st challenge
	function sixth_regress() {
		handlers.text({ sub_type: "notification", message: t("Plague/Regress") });
		handlers.text({ sub_type: "warning", message: t("Plague/Regress") });
		handlers.text({ sub_type: "message", message: t("Plague/Regress") });
	}


	// 2nd challenge
	function seventh_spawn_tables(is_normal_world, ent) {
		const regularWorld = [
			// dps
			{ type: "spawn", func: "marker", args: [false, 180, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 210, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// tank
			{ type: "spawn", func: "marker", args: [false, -45, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 0, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// general safe spots
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 2.8, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 3.46, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 4.12, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 4.75, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 5.38, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 5.97, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 6.58, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 7.2, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 7.8, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 8.44, ownerName: "SAFE SPOT", message: t("SAFE") }
		];

		const soulWorld = [
			// dps
			{ type: "spawn", func: "marker", args: [false, 210, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 180, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// tank
			{ type: "spawn", func: "marker", args: [false, 0, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, -45, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// general safe spots
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 2.8, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 3.46, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 4.12, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 4.75, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 5.38, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 5.97, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 6.58, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 7.2, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 7.8, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 8.44, ownerName: "SAFE SPOT", message: t("SAFE") }
		];

		if (is_normal_world) {
			handlers.event(regularWorld);
		} else {
			handlers.event(soulWorld);
		}
	}

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

	// 4th challenge
	let boss_enraged = false;
	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let counter = 0;
	let counter1_date = null;
	let prev_back_attack = 0;
	let prev_date = 0;
	let attack_360 = false;

	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 2000;

			if (is_one_back) {
				handlers.text({
					sub_type: "message",
					message: t("360")
				});
			}
		}

		dispatch.setTimeout(() => back_print = false, 3500);
	}

	function boss_backattack_event_new(curr, ent) {
		const start = new Date();
		const tmp = prev_date;
		prev_date = start;

		const time_diff = start - tmp;
		const prev = prev_back_attack;

		prev_back_attack = curr;

		let back_combo_time_diff = 5000;
		if (counter1_date != null) {
			back_combo_time_diff = start - counter1_date;
		}

		if (prev === 1106 && curr === 1103 && time_diff < 1500) {
			handlers.text({
				sub_type: "message",
				message: t("360")
			});
		} else if (prev === 1103 && curr === 1105 && time_diff < 1500) {
			counter = 1;
			counter1_date = new Date();
		} else if (prev === 1105 && curr === 1106 && counter === 1 && time_diff < 2000 && back_combo_time_diff < 2000) {
			counter = 2;
		} else if (prev === 1106 && curr === 1108 && counter === 2 && time_diff < 1500 && back_combo_time_diff < 2500) {
			attack_360 = true;
			handlers.text({
				sub_type: "message",
				message: t("2x360")
			});
		} else {
			counter = 0;
			counter1_date = null;
		}
	}

	let first_fifty = false;
	let prev_attack = 0;
	let triple_swipe_remaining = 0;

	function first_swipe_event(skillid, ent) {
		let double = "";
		if ((first_fifty || attack_360) && triple_swipe_remaining === 0) {
			double = t("(Double)");
			if (attack_360) {
				attack_360 = false;
			}
		}

		if (triple_swipe_remaining > 0) {
			triple_swipe_remaining--;
		}

		// 1401 non-enraged
		const rightSafe = [
			{ type: "text", sub_type: "message", message: t("Right {double}", { double: double }) },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		];
		// 1402 non-enraged
		const leftSafe = [
			{ type: "text", sub_type: "message", message: t("Left {double}", { double: double }) },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		];

		if (skillid === 1401) {
			if (boss_enraged) {
				handlers.event(leftSafe);
			} else {
				handlers.event(rightSafe);
			}
		} else if (!boss_enraged) {
			handlers.event(leftSafe);
		} else {
			handlers.event(rightSafe);
		}
	}

	let triples_timer = null;

	function first_triples_event() {
		if (triples_timer != null) {
			dispatch.clearTimeout(triples_timer);
		}

		triples_timer = dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "notification",
				message: t("Triples Soon!")
			});
		}, 55000);
	}

	let last_donut_msg = null;

	function first_fly_mech(skillid) {
		const safe_enraged_markers = [
			{ type: "spawn", func: "vector", args: [548, 0, 0, 0, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 60, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 120, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 180, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 240, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 300, 750, 0, 1500] }
		];
		const safe_unenraged_markers = [
			{ type: "spawn", func: "vector", args: [548, 0, 0, 30, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 90, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 150, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 210, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 270, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 330, 750, 0, 1500] }
		];

		if (!first_fifty) {
			if (prev_attack === 1113) {
				// Donuts
				handlers.event([
					{ type: "text", sub_type: "message", message: t("Donuts") },
					{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
				]);
			} else if (boss_enraged) {
				handlers.event(safe_enraged_markers);
				handlers.text({ sub_type: "notification", message: t("Pizza + Enraged") });
			} else {
				handlers.event(safe_unenraged_markers);
				handlers.text({ sub_type: "notification", message: t("Pizza + Un enraged") });
			}
		} else {
			handlers.event([{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }]);

			if (boss_enraged) {
				handlers.event(safe_enraged_markers);
			} else {
				handlers.event(safe_unenraged_markers);
			}

			if ((skillid === 1308 || skillid === 1309) && last_donut_msg == null) {
				last_donut_msg = skillid === 1308 ? t("last: IN") : t("last: OUT");
				handlers.event([{ type: "text", sub_type: "notification", message: last_donut_msg, delay: 1000 }]);
				dispatch.setTimeout(() => last_donut_msg = null, 7500);
			}
		}
		prev_attack = 0;
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

		boss_enraged = false;
		triple_swipe_remaining = 0;
		attack_360 = false;
		first_fifty = false;
		prev_attack = 0;
	}

	// 5th challenge
	let next_debuff = 0;
	function debuff_event(send_msg, debuff, ent) {
		if (next_debuff === 0) {
			next_debuff = debuff;
		}

		if (send_msg) {
			const debuff_messages = {
				0: { message: t("Debuff") },
				2: { message: t("Debuff 1, 2") },
				3: { message: t("Debuff 1, 3") }
			};

			handlers.text({
				sub_type: "notification",
				message: debuff_messages[next_debuff].message,
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
				message: t("next debuff: 1, {next_debuff}", { next_debuff: next_debuff }),
				speech: false
			});
		}

		next_debuff = 0;
	}

	return {
		// 1st challenge
		"nd-850-6000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-850-6002": [{ type: "text", sub_type: "message", message: t("Shard") }],
		"qb-850-6000-434601": [{ type: "func", func: sixth_regress.bind(null) }],
		"s-850-6000-1101-0": [
			{ type: "text", sub_type: "message", message: t("Blow from the ground") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1000 }
		],
		"s-850-6000-1103-0": [
			{ type: "text", sub_type: "message", message: t("Impact") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 425, 0, 3000] }
		],
		"s-850-6000-1104-0": [
			{ type: "text", sub_type: "message", message: t("Impact") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 0, 3000] }
		],
		"s-850-6000-1106-0": [
			{ type: "text", sub_type: "message", message: t("Series + Impact") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 2500, 2000] }
		],
		"s-850-6000-1107-0": [{ type: "text", sub_type: "message", message: t("Boms") }],
		"s-850-6000-1109-0": [
			{ type: "text", sub_type: "message", message: t("1 strike") },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 3000, distance: 350, offset: 2.6, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "item", id: 98260, sub_delay: 3000, distance: 350, offset: 2.6 }
		],
		"s-850-6000-1110-0": [
			{ type: "text", sub_type: "message", message: t("2 strikes") },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 3000, distance: 350, offset: 2.6, ownerName: "SAFE SPOT", message: t("SAFE") },
			{ type: "spawn", sub_type: "item", id: 98260, sub_delay: 3000, distance: 350, offset: 2.6 }
		],
		"s-850-6000-1111-0": [{ type: "text", sub_type: "message", message: t("Left kick") }],
		"s-850-6000-1112-0": [{ type: "text", sub_type: "message", message: t("Right kick") }],
		"s-850-6000-1113-0": [{ type: "text", sub_type: "message", message: t("Laser") }],
		"s-850-6000-1113-1": [{ type: "text", sub_type: "message", message: t("Dodge") }],
		"s-850-6000-1133-0": [
			{ type: "text", sub_type: "message", message: t("Strike") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-850-6000-1134-0": [
			{ type: "text", sub_type: "message", message: t("Impact") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-850-6000-2101-0": "s-850-6000-1101-0",
		"s-850-6000-2103-0": "s-850-6000-1103-0",
		"s-850-6000-2104-0": "s-850-6000-1104-0",
		"s-850-6000-2106-0": "s-850-6000-1106-0",
		"s-850-6000-2107-0": "s-850-6000-1107-0",
		"s-850-6000-2109-0": "s-850-6000-1109-0",
		"s-850-6000-2110-0": "s-850-6000-1110-0",
		"s-850-6000-2111-0": "s-850-6000-1111-0",
		"s-850-6000-2112-0": "s-850-6000-1112-0",
		"s-850-6000-2113-0": "s-850-6000-1113-0",
		"s-850-6000-2113-1": "s-850-6000-1113-1",
		"s-850-6000-2133-0": "s-850-6000-1133-0",
		"s-850-6000-2134-0": "s-850-6000-1134-0",

		// 2nd challenge
		"nd-850-7000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-850-7000-99": [{ type: "func", func: () => seventh_fifty = false }],
		"h-850-7000-50": [{ type: "func", func: () => seventh_fifty = true }],
		"dm-0-0-90340703": [{ type: "func", func: seventh_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-90340704": [{ type: "func", func: seventh_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-90340705": [{ type: "func", func: seventh_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-850-7000-1105-0": [
			{ type: "text", sub_type: "message", message: t("Discarding") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -95, 850, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 95, 850, 0, 3000] }
		],
		"s-850-7000-1136-0": [{ type: "text", sub_type: "message", message: t("Claw") }],
		"s-850-7000-1110-0": [{ type: "text", sub_type: "message", message: t("Claw") }],
		"s-850-7000-1129-0": [{ type: "text", sub_type: "message", message: t("IN") }],
		"s-850-7000-1130-0": [
			{ type: "text", sub_type: "message", message: t("Shield Strike") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 130, 0, 270, 0, 2500] }
		],
		"s-850-7000-1132-0": [
			{ type: "text", sub_type: "message", message: t("AOE Shield") },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 3000] }
		],
		"s-850-7000-1133-0": [
			{ type: "text", sub_type: "message", message: t("AOE Shield") },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 6000] }
		],
		"s-850-7000-1135-0": [{ type: "text", sub_type: "message", message: t("IN") }],
		"s-850-7000-1240-0": [
			{ type: "text", sub_type: "message", message: t("Donuts") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 360, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 520, 0, 6000] }
		],
		"s-850-7000-1401-0": [{ type: "text", sub_type: "message", message: t("Plague/Regress") }],
		"s-850-7000-1402-0": [{ type: "text", sub_type: "message", message: t("Sleep") }],
		"s-850-7000-1701-0": [{ type: "text", sub_type: "message", message: t("Back + front") }],
		"s-850-7000-1113-0": [{ type: "text", sub_type: "message", message: t("Bait") }],
		"s-850-7000-1151-0": [{ type: "text", sub_type: "message", message: t("Stun") }],
		"s-850-7000-1152-0": [
			{ type: "text", sub_type: "message", message: t("Stun + Back") },
			{ type: "spawn", func: "semicircle", args: [110, 250, 553, 0, 0, null, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 70, -1000, 70, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 290, -1000, -70, 1000, 0, 6000] }
		],
		"s-850-7000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }],
		"s-850-7000-1140-0": [
			{ type: "text", sub_type: "message", message: t("Donuts") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 360, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 520, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 680, 0, 6000] }
		],
		"s-850-7000-1154-0": [
			{ type: "text", sub_type: "message", message: t("OUT") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-850-7000-1155-0": [
			{ type: "text", sub_type: "message", message: t("IN") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-850-7000-1901-0": [ // normal world
			{ type: "text", sub_type: "notification", message: t("Debuffs Closest") },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-850-7000-1902-0": [ // soul world
			{ type: "text", sub_type: "notification", message: t("Debuffs Farthest") },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-850-7000-1903-0": [ // normal world
			{ type: "text", sub_type: "notification", message: t("Gather + Cleanse") },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-850-7000-1904-0": [ // soul world
			{ type: "text", sub_type: "notification", message: t("Gather + No cleanse") },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-850-7000-1905-0": [ // normal world
			{ type: "text", sub_type: "notification", message: t("Spread") },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-850-7000-1906-0": [ // soul world
			{ type: "text", sub_type: "notification", message: t("Gather") },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-850-7000-1144-0": [
			{ type: "text", sub_type: "message", message: t("OUT") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-850-7000-1145-0": [
			{ type: "text", sub_type: "message", message: t("IN") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-850-7000-2105-0": "s-850-7000-1105-0",
		"s-850-7000-2136-0": "s-850-7000-1136-0",
		"s-850-7000-2110-0": "s-850-7000-1110-0",
		"s-850-7000-2129-0": "s-850-7000-1129-0",
		"s-850-7000-2130-0": "s-850-7000-1130-0",
		"s-850-7000-2132-0": "s-850-7000-1132-0",
		"s-850-7000-2133-0": "s-850-7000-1133-0",
		"s-850-7000-2135-0": "s-850-7000-1135-0",
		"s-850-7000-2401-0": "s-850-7000-1401-0",
		"s-850-7000-2402-0": "s-850-7000-1402-0",
		"s-850-7000-2701-0": "s-850-7000-1701-0",
		"s-850-7000-2113-0": "s-850-7000-1113-0",
		"s-850-7000-2151-0": "s-850-7000-1151-0",
		"s-850-7000-2152-0": "s-850-7000-1152-0",
		"s-850-7000-2138-0": "s-850-7000-1138-0",
		"s-850-7000-2140-0": "s-850-7000-1140-0",
		"s-850-7000-2154-0": "s-850-7000-1154-0",
		"s-850-7000-2155-0": "s-850-7000-1155-0",
		"s-850-7000-2240-0": "s-850-7000-1240-0",
		"s-850-7000-2142-0": "s-850-7000-1142-0",
		"s-850-7000-2143-0": "s-850-7000-1143-0",
		"s-850-7000-2901-0": "s-850-7000-1901-0",
		"s-850-7000-2902-0": "s-850-7000-1902-0",
		"s-850-7000-2903-0": "s-850-7000-1903-0",
		"s-850-7000-2904-0": "s-850-7000-1904-0",
		"s-850-7000-2905-0": "s-850-7000-1905-0",
		"s-850-7000-2144-0": "s-850-7000-1144-0",
		"s-850-7000-2145-0": "s-850-7000-1145-0",

		// 3rd challenge
		"nd-850-88516": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-850-88516-1103-0": [{ type: "text", sub_type: "message", message: t("Front") }],
		"s-850-88516-1104-0": [{ type: "text", sub_type: "message", message: t("Stun (AoE)") }],
		"s-850-88516-1105-0": [
			{ type: "text", sub_type: "message", message: t("Lasers") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 2700 }
		],
		"s-850-88516-1106-0": [
			{ type: "text", sub_type: "message", message: t("Push") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1400 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 220, 0, 2000] }
		],
		"s-850-88516-1107-0": [{ type: "text", sub_type: "message", message: t("Disc Left") }],
		"s-850-88516-1108-0": [{ type: "text", sub_type: "message", message: t("Disc Right") }],
		"s-850-88516-1109-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-850-88516-1301-0": [{ type: "text", sub_type: "message", message: t("Target") }],
		"s-850-88516-1303-0": [{ type: "text", sub_type: "message", message: t("Back") }],
		"dm-0-0-9885238": [{ type: "text", sub_type: "message", message: t("Clones") }],
		"s-850-88516-2103-0": "s-850-88516-1103-0",
		"s-850-88516-2104-0": "s-850-88516-1104-0",
		"s-850-88516-2105-0": [
			{ type: "text", sub_type: "message", message: "Lasers", message_RU: "Лазеры" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 2200 }
		],
		"s-850-88516-2106-0": "s-850-88516-1106-0",
		"s-850-88516-2107-0": "s-850-88516-1107-0",
		"s-850-88516-2108-0": "s-850-88516-1108-0",
		"s-850-88516-2109-0": "s-850-88516-1109-0",

		// 4th challenge
		"ns-850-8504000": [{ type: "func", func: () => boss_enraged = false }],
		"nd-850-8504000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: reset_backevent }
		],
		"rb-850-8504000": [{ type: "func", func: () => boss_enraged = true }],
		"re-850-8504000": [{ type: "func", func: () => boss_enraged = false }],
		"h-850-8504000-49": [
			{ type: "text", sub_type: "message", message: t("49%") },
			{ type: "func", func: () => first_fifty = true }
		],
		"s-850-8504000-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-850-8504000-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-850-8504000-1106-0": [{ type: "func", func: boss_backattack_event_new, args: [1106] }],
		"s-850-8504000-1105-0": [{ type: "func", func: boss_backattack_event_new, args: [1105] }],
		"s-850-8504000-1103-0": [{ type: "func", func: boss_backattack_event_new, args: [1103] }],
		"s-850-8504000-1108-0": [{ type: "func", func: boss_backattack_event_new, args: [1108] }],
		"s-850-8504000-1401-0": [{ type: "func", func: first_swipe_event, args: [1401] }],
		"s-850-8504000-1402-0": [{ type: "func", func: first_swipe_event, args: [1402] }],
		"s-850-8504000-1303-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-850-8504000-1304-0": [
			{ type: "func", func: first_fly_mech, args: [1304] },
			{ type: "text", sub_type: "message", message: t("Donuts | Pizza"), check_func: () => first_fifty }
		],
		"s-850-8504000-1308-0": [
			{ type: "func", func: first_fly_mech, args: [1308], check_func: () => first_fifty },
			{ type: "text", sub_type: "message", message: t("OUT") },
			{ type: "spawn", func: "marker", args: [false, 75, 370, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 165, 370, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 255, 370, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 345, 370, 0, 1000, true, null] }
		], // out
		"s-850-8504000-1309-0": [
			{ type: "func", func: first_fly_mech, args: [1309], check_func: () => first_fifty },
			{ type: "text", sub_type: "message", message: t("IN") },
			{ type: "spawn", func: "marker", args: [false, 75, 100, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 165, 100, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 255, 100, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 345, 100, 0, 1000, true, null] }],
		"s-850-8504000-1310-0": [
			{ type: "spawn", func: "marker", args: [false, 30, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 330, 200, 0, 1000, true, null] }],
		"s-850-8504000-1311-0": [
			{ type: "spawn", func: "marker", args: [false, 0, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 120, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 180, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 240, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 200, 0, 1000, true, null] }],
		"s-850-8504000-1313-0": [
			{ type: "text", sub_type: "message", message: t("3") },
			{ type: "text", sub_type: "message", delay: 550, message: t("2") },
			{ type: "text", sub_type: "message", delay: 1100, message: t("1") },
			{ type: "text", sub_type: "message", delay: 1700, message: t("Dodge") }
		],
		"s-850-8504000-1111-0": [{ type: "func", func: () => prev_attack = 1111 }],
		"s-850-8504000-1113-0": [
			{ type: "text", sub_type: "message", message: t("Front | AoEs") },
			{ type: "spawn", func: "semicircle", args: [0, 60, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 55, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 340, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [300, 360, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [305, 360, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [310, 360, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [315, 360, 553, 0, 0, 10, 340, 0, 2000] },
			{ type: "func", func: () => prev_attack = 1113 }
		],
		"s-850-8504000-1114-0": [
			{ type: "text", sub_type: "message", message: t("Bait on res") },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-850-8504000-1115-0": [{ type: "text", sub_type: "message", delay: 2500, message: t("Dodge") }], // dodge circle
		"s-850-8504000-1117-0": [{ type: "text", sub_type: "message", delay: 4500, message: t("Dodge") }], // dodge circles
		"s-850-8504000-2111-0": "s-850-8504000-1111-0",
		"s-850-8504000-2112-0": "s-850-8504000-1112-0",
		"s-850-8504000-2113-0": "s-850-8504000-1113-0",
		"s-850-8504000-2114-0": "s-850-8504000-1114-0",
		"s-850-8504000-2115-0": "s-850-8504000-1115-0",
		"s-850-8504000-2117-0": "s-850-8504000-1117-0",
		"s-850-8504000-2101-0": "s-850-8504000-1101-0",
		"s-850-8504000-2102-0": "s-850-8504000-1102-0",
		"s-850-8504000-2103-0": "s-850-8504000-1103-0",
		"s-850-8504000-2105-0": "s-850-8504000-1105-0",
		"s-850-8504000-2106-0": "s-850-8504000-1106-0",
		"s-850-8504000-2108-0": "s-850-8504000-1108-0",
		"qb-850-8504000-98103": [{ type: "text", sub_type: "message", message: t("Lead circle to the stone") }],
		"qb-850-8504000-98106": [{ type: "text", sub_type: "message", message: t("Lead circles to the stone") }],
		"dm-0-0-9981005": [
			{ type: "text", sub_type: "message", message: t("Triples!") },
			{ type: "func", func: () => triple_swipe_remaining = 3 },
			{ type: "func", func: first_triples_event }
		],

		// 5th challenge
		"nd-850-10000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		die: [{ type: "func", func: debuff_removed }],
		"h-850-10000-99": [{ type: "func", func: () => next_debuff = 0 }],
		"s-850-10000-1103-0": [{ type: "text", sub_type: "message", message: t("Frontal Attack") }],
		"s-850-10000-1205-0": [{ type: "text", sub_type: "message", message: t("Teleport") }],
		"s-850-10000-1102-0": [{ type: "text", sub_type: "message", message: t("In > Out") }],
		"s-850-10000-1113-0": [{ type: "text", sub_type: "message", message: t("Left Hand Attack") }],
		"s-850-10000-1105-0": [{ type: "text", sub_type: "message", message: t("Right Hand Attack") }],
		"s-850-10000-1112-0": [{ type: "func", func: debuff_event, args: [true, 0] }],
		"s-850-10000-1108-0": [{ type: "text", sub_type: "message", message: t("Target Attack") }],
		"s-850-10000-1114-0": [{ type: "text", sub_type: "message", message: t("Back Attack") }],
		"s-850-10000-1115-0": [{ type: "text", sub_type: "message", message: t("Tail") }],
		"s-850-10000-1111-0": [{ type: "text", sub_type: "message", message: t("Frontal Attack") }],
		"s-850-10000-1109-0": [{ type: "text", sub_type: "message", message: t("AoE Target") }],
		"s-850-10000-1104-0": [{ type: "text", sub_type: "message", message: t("Stomp") }],
		"s-850-10000-1107-0": [{ type: "text", sub_type: "message", message: t("Laser Attack") },
			{ type: "spawn", func: "vector", args: [912, 360, 985, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 369, 995, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 351, 995, 180, 950, 0, 2500] }
		],
		"s-850-10000-1106-0": [{ type: "text", sub_type: "message", message: t("Target Bomb") }],
		"s-850-10000-1204-0": [{ type: "text", sub_type: "message", message: t("Big AoE (Run)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 550, 0, 4000] }
		],
		"qb-850-10000-427050": [
			{ type: "text", sub_type: "message", message: t("Plague of Exhaustion"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Regression"), class_position: "mystic" }
		],
		"s-850-10000-2205-0": "s-850-10000-1205-0",
		"s-850-10000-2102-0": "s-850-10000-1102-0",
		"s-850-10000-2113-0": "s-850-10000-1113-0",
		"s-850-10000-2105-0": "s-850-10000-1105-0",
		"s-850-10000-2112-0": "s-850-10000-1112-0",
		"s-850-10000-2115-0": "s-850-10000-1115-0",
		"s-850-10000-2111-0": "s-850-10000-1111-0",
		"s-850-10000-2109-0": "s-850-10000-1109-0",
		"s-850-10000-2107-0": "s-850-10000-1107-0",
		"s-850-10000-2106-0": "s-850-10000-1106-0",
		"s-850-10000-2204-0": "s-850-10000-1204-0",
		"s-850-10000-2103-0": "s-850-10000-1103-0",
		"s-850-10000-2114-0": "s-850-10000-1114-0",
		"s-850-10000-2108-0": "s-850-10000-1108-0",
		"s-850-10000-2104-0": "s-850-10000-1104-0",
		"am-850-10000-90341002": [{ type: "func", func: debuff_event, args: [false, 3] }], // hateful thought #2
		"am-850-10000-90341003": [{ type: "func", func: debuff_event, args: [false, 2] }], // desperate thought #3 90341006
		"am-850-10000-90341006": "am-850-10000-90341003",
		"am-850-10000-90341005": "am-850-10000-90341002"
	};
};
