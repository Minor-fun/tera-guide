// Velik's Sanctuary (Hard) Asura
//
// made by michengs / HSDN / vathsq / Calvary / ITunk / Vampic

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	let boss_enraged = false;
	let are_you_afraid_of_me_continue = false;
	let first_fifty = false;
	let triple_swipe_remaining = 0;

	function first_swipe_event(skillid, ent) {
		let double = "";
		if (first_fifty && triple_swipe_remaining === 0) {
			double = t("(Double)");
		}

		if (triple_swipe_remaining > 0) {
			triple_swipe_remaining--;
		}

		// 1401 non-enraged
		const rightSafe = [
			{ type: "text", sub_type: "message", message: `${t("Right")} ${double}` },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },

			// Left after right when double swipe
			{ type: "text", sub_type: "message", message: t("Left"), delay: 2000, check_func: () => double },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 2000, 1500], check_func: () => double },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 2000, 1500, true, null], check_func: () => double },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 2000, 1500, true, null], check_func: () => double },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 2000, 1500], check_func: () => double },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 2000, 1500], check_func: () => double },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 2000, 1500], check_func: () => double },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 2000, 1500], check_func: () => double }
		];
		// 1402 non-enraged
		const leftSafe = [
			{ type: "text", sub_type: "message", message: `${t("Left")} ${double}` },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },

			// Right after left when double swipe
			{ type: "text", sub_type: "message", message: t("Right"), delay: 2000, check_func: () => double },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 2000, 1500], check_func: () => double },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 2000, 1500, true, null], check_func: () => double },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 2000, 1500, true, null], check_func: () => double },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 2000, 1500], check_func: () => double },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 2000, 1500], check_func: () => double },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 2000, 1500], check_func: () => double },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 2000, 1500], check_func: () => double }
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

	function reset_backevent() {
		boss_enraged = false;
		triple_swipe_remaining = 0;
		first_fifty = false;
	}

	let second_swipes_remaining = 0;
	let second_fifty = false;
	let second_new_swipe = false;
	let second_swipe_counter = 0;

	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: t("Pizza") },
				{ type: "spawn", func: "marker", args: [false, one * 45 + 68, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 45, 750, 0, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 90, 750, 0, 5000] },
				{ type: "spawn", func: "marker", args: [false, two * 45 + 68, 300, 7000, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 45, 750, 7000, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 90, 750, 7000, 5000] }
			]);
		}
	}

	function secondboss_swipe_event(skillid) {
		if (!second_new_swipe) return;

		let pattern = null;

		if (!second_fifty) {
			const pattern1 = [
				{ type: "text", sub_type: "notification", message: t("Right (Double)") },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, 60, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "marker", args: [false, 130, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 4600, 2200] }
			];
			const pattern2 = [
				{ type: "text", sub_type: "notification", message: t("Left (Double)") },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, 300, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "marker", args: [false, 230, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 4600, 2200] }
			];

			const pattern3 = [{ type: "text", sub_type: "message", message: t("Back - Front") }];
			const pattern4 = [{ type: "text", sub_type: "message", message: t("Front - Back") }];

			pattern = skillid === 1101 ? pattern3 : pattern4;
			if (second_swipe_counter % 2 === 0) {
				pattern = skillid === 1101 ? pattern1 : pattern2;
			}
		} else {
			const pattern1 = [
				{ type: "text", sub_type: "notification", message: t("Right (Double) - Front - Back") },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, 60, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "marker", args: [false, 130, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 4600, 2200] }
			];
			const pattern2 = [
				{ type: "text", sub_type: "notification", message: t("Left (Double) - Back - Front") },
				{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, 300, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "marker", args: [false, 230, 100, 4600, 2200, true, null] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 4600, 2200] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 4600, 2200] }
			];

			pattern = skillid === 1101 ? pattern1 : pattern2;

		}

		handlers.event(pattern);
		second_swipe_counter++;
		second_new_swipe = false;
	}

	let thirdboss_fifty = false;
	let thirdboss_soul_world = false;

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!thirdboss_fifty) {
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
				if (!thirdboss_fifty) {
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
				if (!thirdboss_fifty) {
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

	let run_mech_active = false;
	let run_mech_push_back = false;

	function run_if_you_can(skillid) {
		if (!run_mech_active) return;

		if (skillid === 1117) {
			handlers.event([{ type: "text", sub_type: "message", message: t("Stun | Push Back") }]);
		}

		if (skillid === 1105) {
			run_mech_push_back = true;
		} else if (run_mech_push_back) {
			const msg = skillid === 1102 ? t("Soon: IN") : t("Soon: OUT");

			handlers.event([{ type: "text", sub_type: "notification", message: msg }]);

			run_mech_active = false;
			run_mech_push_back = false;
		}
	}

	let afriad_mech_active = false;

	function are_you_afraid_of_me(skillid) {
		if (!afriad_mech_active) return;

		let msg = "";
		const id = thirdboss_soul_world ? 1132 : 1131;

		msg = skillid === id ? t("Soon: OUT > IN") : t("Soon: IN > OUT");

		handlers.event([
			{ type: "text", sub_type: "notification", message: msg }
		]);

		afriad_mech_active = false;
		are_you_afraid_of_me_continue = true;
	}

	let clever_mech_active = false;

	function are_you_clever(skillid) {
		if (!clever_mech_active) {
			if (skillid === 1131) {
				handlers.event([{ type: "text", sub_type: "message", message: t("Back small wave") }]);
			}
			return;
		}

		if (skillid === 1102) {
			handlers.event([{ type: "text", sub_type: "message", message: t("Rotate"), delay: 900 }]);
		}

		if (skillid === 1131 || skillid === 1132) {
			let msg = "";
			const id = thirdboss_soul_world ? 1132 : 1131;

			msg = skillid === id ? t("Soon: OUT | Donuts (IN > OUT)") : t("Soon: IN | Donuts (OUT > IN)");

			handlers.event([{ type: "text", sub_type: "notification", message: msg }]);

			clever_mech_active = false;
		}
	}

	function reset_third_boss() {
		clever_mech_active = false;
		afriad_mech_active = false;
		run_mech_push_back = false;
		run_mech_active = false;
		thirdboss_soul_world = false;
		thirdboss_fifty = false;
		are_you_afraid_of_me_continue = false;
	}

	return {
		// 1 BOSS
		"ns-981-1000": [{ type: "func", func: () => boss_enraged = false }],
		"nd-981-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: reset_backevent }
		],
		"rb-981-1000": [{ type: "func", func: () => boss_enraged = true }],
		"re-981-1000": [{ type: "func", func: () => boss_enraged = false }],
		"h-981-1000-49": [
			{ type: "text", sub_type: "message", message: t("49%") },
			{ type: "func", func: () => first_fifty = true }
		],
		"s-981-1000-1401-0": [{ type: "func", func: first_swipe_event, args: [1401] }],
		"s-981-1000-1402-0": [{ type: "func", func: first_swipe_event, args: [1402] }],
		"s-981-1000-1301-0": [{ type: "text", sub_type: "message", message: t("AoE (Silence)") }],
		"s-981-1000-1303-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-981-1000-1304-0": [
			{ type: "text", sub_type: "message", message: t("Donuts"), check_func: () => first_fifty }
		],
		"s-981-1000-1308-0": [
			{ type: "text", sub_type: "message", message: t("Out") },
			{ type: "spawn", func: "marker", args: [false, 75, 370, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 165, 370, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 255, 370, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 345, 370, 0, 1000, true, null] }
		], //out
		"s-981-1000-1309-0": [
			{ type: "text", sub_type: "message", message: t("In") },
			{ type: "spawn", func: "marker", args: [false, 75, 100, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 165, 100, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 255, 100, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 345, 100, 0, 1000, true, null] }],
		"s-981-1000-1310-0": [
			{ type: "spawn", func: "marker", args: [false, 30, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 330, 200, 0, 1000, true, null] }],
		"s-981-1000-1311-0": [
			{ type: "spawn", func: "marker", args: [false, 0, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 120, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 180, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 240, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 200, 0, 1000, true, null] }],
		"s-981-1000-1313-0": [
			{ type: "text", sub_type: "message", message: t("3") },
			{ type: "text", sub_type: "message", delay: 400, message: t("2") },
			{ type: "text", sub_type: "message", delay: 800, message: t("1") },
			{ type: "text", sub_type: "message", delay: 1200, message: t("Dodge") }],
		"s-981-1000-1111-0": [{ type: "text", sub_type: "message", message: t("Back 360") }],
		"s-981-1000-1113-0": [{ type: "text", sub_type: "message", message: t("Front | AoEs") }],
		"s-981-1000-1114-0": [
			{ type: "text", sub_type: "message", message: t("Bait on res") },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-981-1000-1115-0": [{ type: "text", sub_type: "message", delay: 2500, message: t("Dodge") }], // dodge circle
		"s-981-1000-1117-0": [{ type: "text", sub_type: "message", delay: 4500, message: t("Dodge") }], // dodge circles
		"s-981-1000-2111-0": "s-981-1000-1111-0",
		"s-981-1000-2112-0": "s-981-1000-1112-0",
		"s-981-1000-2113-0": "s-981-1000-1113-0",
		"s-981-1000-2114-0": "s-981-1000-1114-0",
		"s-981-1000-2115-0": "s-981-1000-1115-0",
		"s-981-1000-2117-0": "s-981-1000-1117-0",
		"qb-981-1000-98103": [{ type: "text", sub_type: "message", message: t("Lead circle to the stone") }],
		"qb-981-1000-98106": [{ type: "text", sub_type: "message", message: t("Lead circles to the stone") }],
		"dm-0-0-9981005": [
			{ type: "text", sub_type: "message", message: t("Triples!") },
			{ type: "func", func: () => triple_swipe_remaining = 3 },
			{ type: "func", func: first_triples_event }
		],

		// 2 BOSS
		"nd-981-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => second_swipes_remaining = 0 },
			{ type: "func", func: () => second_fifty = false },
			{ type: "func", func: () => second_swipe_counter = 0 },
			{ type: "func", func: () => second_new_swipe = false }
		],
		"h-981-2000-49": [
			{ type: "text", sub_type: "message", message: t("49%") },
			{ type: "func", func: () => second_fifty = true }
		],
		"dm-0-0-9068016": [{ type: "func", func: () => second_new_swipe = true }],
		// I will rip you apart
		"dm-0-0-9981021": [
			{ type: "func", func: () => second_swipes_remaining = 4, check_func: () => second_fifty }
		],
		// Cage Mechanic
		"s-981-2000-1501-0": [
			{ type: "text", sub_type: "message", delay: 1000, message: t("3") },
			{ type: "text", sub_type: "message", delay: 2000, message: t("2") },
			{ type: "text", sub_type: "message", delay: 3000, message: t("1") }
		],
		"s-981-2000-1110-0": [{ type: "text", sub_type: "message", message: t("Back Move") }],
		"s-981-2000-1111-0": [{ type: "text", sub_type: "message", message: t("360 attack") }],
		"s-981-2000-1114-0": [{ type: "text", sub_type: "message", message: t("Pull") }],
		"s-981-2000-1115-0": [{ type: "text", sub_type: "message", message: t("Circles") }],
		"s-981-2000-1115-1": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 150 }],
		"s-981-2000-1117-0": [{ type: "text", sub_type: "message", message: t("Jump") }],
		"s-981-2000-1106-0": [
			{ type: "func", func: () => second_swipes_remaining--, check_func: () => second_swipes_remaining > 0 },
			{ type: "text", sub_type: "message", message: t("Back"), check_func: () => !second_fifty || second_swipes_remaining !== 1 },
			{ type: "text", sub_type: "message", message: t("Back - Front"), check_func: () => second_fifty && second_swipes_remaining === 1 },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 14, 270, 0, 2600] }
		],
		"s-981-2000-1108-0": [
			{ type: "func", func: () => second_swipes_remaining--, check_func: () => second_swipes_remaining > 0 },
			{ type: "text", sub_type: "message", message: t("Front"), check_func: () => !second_fifty || second_swipes_remaining !== 1 },
			{ type: "text", sub_type: "message", message: t("Front - Back"), check_func: () => second_fifty && second_swipes_remaining === 1 }
		],
		"s-981-2000-1130-0": [
			{ type: "func", func: () => second_swipes_remaining--, check_func: () => second_swipes_remaining > 0 },
			{ type: "text", sub_type: "message", message: t("Right") },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1131-0": [
			{ type: "func", func: () => second_swipes_remaining--, check_func: () => second_swipes_remaining > 0 },
			{ type: "text", sub_type: "message", message: t("Left") },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1101-0": [{ type: "func", func: secondboss_swipe_event, args: [1101] }],
		"s-981-2000-2101-0": "s-981-2000-1101-0",
		"s-981-2000-1102-0": [{ type: "func", func: secondboss_swipe_event, args: [1102] }],
		"s-981-2000-2102-0": "s-981-2000-1102-0",
		"s-981-2000-1134-0": [
			{ type: "text", sub_type: "message", message: t("Inner + AoE") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-981-2000-1134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-981-2000-1136-0": [{ type: "text", sub_type: "message", message: t("Donut") }],
		"s-981-2000-1202-0": [{ type: "text", sub_type: "message", message: t("Target Throw") }],
		"s-981-2000-1205-0": [{ type: "text", sub_type: "message", message: t("Target Throw") }],
		"s-981-2000-1206-0": [{ type: "text", sub_type: "message", message: t("Pike (Target)") }],
		"s-981-2000-1302-0": [{ type: "text", sub_type: "message", message: t("Bait (Target)") }],
		"s-981-2000-1302-1": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1600 }],
		"s-981-2000-1502-0": [
			{ type: "text", sub_type: "message", message: t("AoE") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-981-2000-1503-0": [{ type: "text", sub_type: "message", message: t("Target Lockon") }],
		"s-981-2000-1504-0": [{ type: "text", sub_type: "message", message: t("Mobs Summon") }],
		//
		"s-981-2000-2106-0": "s-981-2000-1106-0",
		"s-981-2000-2108-0": "s-981-2000-1108-0",
		"s-981-2000-2110-0": "s-981-2000-1110-0",
		"s-981-2000-2111-0": "s-981-2000-1111-0",
		"s-981-2000-2114-0": "s-981-2000-1114-0",
		"s-981-2000-2115-0": "s-981-2000-1115-0",
		"s-981-2000-2115-1": "s-981-2000-1115-1",
		"s-981-2000-2117-0": "s-981-2000-1117-0",
		"s-981-2000-2130-0": "s-981-2000-1130-0",
		"s-981-2000-2131-0": "s-981-2000-1131-0",
		"s-981-2000-2134-0": "s-981-2000-1134-0",
		"s-981-2000-2134-1": "s-981-2000-1134-1",
		"s-981-2000-2136-0": "s-981-2000-1136-0",
		// Pizza Mechanic
		"s-981-927-1301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-981-927-1302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-981-927-1303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-981-927-1307-0": [{ type: "func", func: secondboss_floor_event, args: [1, 6] }],
		"s-981-927-1308-0": [{ type: "func", func: secondboss_floor_event, args: [3, 6] }],
		"s-981-927-1309-0": [{ type: "func", func: secondboss_floor_event, args: [6, 3] }],
		"s-981-927-1310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-981-927-1311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-981-927-1312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-981-927-1313-0": [{ type: "func", func: secondboss_floor_event, args: [1, 6] }],
		"s-981-927-1314-0": [{ type: "func", func: secondboss_floor_event, args: [3, 6] }],
		"s-981-927-1315-0": [{ type: "func", func: secondboss_floor_event, args: [6, 3] }],
		//
		"qb-981-4000-9981046": [{ type: "text", sub_type: "notification", message: t("First: Debuffs (Closest)") }], // Thank you... for this release...
		"qb-981-4000-9981047": [{ type: "text", sub_type: "notification", message: t("First: Circles (Spread)") }], // Beware the... red lightning...
		"qb-981-4000-9981048": [{ type: "text", sub_type: "notification", message: t("First: Bombs (Gather + Cleanse)") }], // Beware the mark... of Lakan...

		// 3 BOSS
		"nd-981-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: reset_third_boss }
		],
		"s-981-3000-1130-0": [
			{ type: "text", sub_type: "message", message: t("Stun") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 25, 10, 275, 0, 2000] }
		],
		"s-981-3000-2130-0": "s-981-3000-1130-0",
		//
		"s-981-3000-1116-0": [
			{ type: "text", sub_type: "message", message: t("Donut (Out > In > Out)"), check_func: () => !thirdboss_soul_world },
			{ type: "text", sub_type: "message", message: t("Donut (In > Out > In)"), check_func: () => thirdboss_soul_world },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 195, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 345, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 515, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 40, 8, 670, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 6, 830, 0, 6000] }
		],
		"s-981-3000-2116-0": "s-981-3000-1116-0",
		"h-981-3000-99": [{ type: "func", func: () => thirdboss_fifty = false }],
		"h-981-3000-50": [{ type: "func", func: () => thirdboss_fifty = true }],
		"dm-0-0-9981043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-9981044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-9981045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"qb-981-3000-98131": [{ type: "text", sub_type: "message", message: t("Range Check") }],
		"qb-981-3000-98135": [{ type: "func", func: () => run_mech_active = true }],
		"s-981-3000-1101-0": [{ type: "func", func: run_if_you_can, args: [1101] }],
		"s-981-3000-1102-0": [
			{ type: "func", func: run_if_you_can, args: [1102] },
			{ type: "func", func: are_you_clever, args: [1102] }
		],
		"s-981-3000-1105-0": [
			{ type: "func", func: run_if_you_can, args: [1105] },
			{ type: "text", sub_type: "message", message: t("Push Back") }
		],
		"s-981-3000-1117-0": [{ type: "func", func: run_if_you_can, args: [1117] }],
		"qb-981-3000-98133": [
			{ type: "func", func: () => clever_mech_active = true },
			{ type: "text", sub_type: "message", message: t("Cone | Rotate") }
		], // let's see just how clever you are...
		"qb-981-3000-98134": [
			{ type: "func", func: () => afriad_mech_active = true },
			{ type: "text", sub_type: "message", message: t("Cone x2") }
		], //are_you_afraid_of_me
		"s-981-3000-1131-0": [
			{ type: "func", func: are_you_afraid_of_me, args: [1131] },
			{ type: "func", func: are_you_clever, args: [1131] }
		],
		"s-981-3000-1132-0": [
			{ type: "func", func: are_you_afraid_of_me, args: [1132] },
			{ type: "func", func: are_you_clever, args: [1132] }
		],
		"s-981-3000-2131-0": "s-981-3000-1131-0",
		"s-981-3000-2132-0": "s-981-3000-1132-0",
		"s-981-3000-2101-0": "s-981-3000-1101-0",
		"s-981-3000-2102-0": "s-981-3000-1102-0",
		"s-981-3000-2105-0": "s-981-3000-1105-0",
		"s-981-3000-2117-0": "s-981-3000-1117-0",
		"s-981-3000-1404-0": [{ type: "text", sub_type: "message", message: t("Debuffs (Closest)") }],
		"s-981-3000-1405-0": [{ type: "text", sub_type: "message", message: t("Debuffs (Farthest)") }],
		"s-981-3000-1301-0": [{ type: "text", sub_type: "message", message: t("Bombs (Gather + Cleanse)") }],
		"s-981-3000-1302-0": [{ type: "text", sub_type: "message", message: t("Bombs (Gather + No cleanse)") }],
		"s-981-3000-3103-0": [{ type: "text", sub_type: "message", message: t("Circles (Spread)") }],
		"s-981-3000-3105-0": [{ type: "text", sub_type: "message", message: t("Circles (Gather)") }],
		"s-981-3000-1136-0": [{ type: "text", sub_type: "message", message: t("Claw (Bait)") }],
		"s-981-3000-1144-0": [{ type: "text", sub_type: "message", message: t("OUT") }],
		"s-981-3000-1145-0": [{ type: "text", sub_type: "message", message: t("IN") }],
		"s-981-3000-1240-0": [
			{ type: "text", sub_type: "message", message: t("Donuts") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }
		],
		"s-981-3000-1401-0": [
			{ type: "text", sub_type: "message", message: t("Wave (Dodge) | Plague/Regress") },
			{ type: "text", sub_type: "message", message: t("Puddles! (Spread)"), delay: 1900 },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 15, 175, 1000, 7000] },
			{ type: "func", func: () => thirdboss_soul_world = true }
		],
		"s-981-3000-1140-0": [
			{ type: "text", sub_type: "message", message: t("Donuts (OUT > IN)") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 195, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 345, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 515, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 40, 8, 670, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 6, 830, 0, 4500] }
		],
		"s-981-3000-2140-0": "s-981-3000-1140-0",
		"s-981-3000-1146-0": [
			{ type: "text", sub_type: "message", message: t("Donuts (IN > OUT)") },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 195, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 345, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 41, 10, 515, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 40, 8, 670, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 6, 830, 0, 4500] }
		],
		"s-981-3000-2146-0": "s-981-3000-1146-0",
		"s-981-3000-1153-0": "s-981-3000-1146-0",
		"s-981-3000-2153-0": "s-981-3000-1146-0",
		"s-981-3000-1402-0": [
			{ type: "text", sub_type: "message", message: t("Wave (Dodge) | Sleep") },
			{ type: "func", func: () => thirdboss_soul_world = false }
		],
		"s-981-3000-1701-0": [{ type: "text", sub_type: "message", message: t("Back | Front") }],
		//
		"s-981-3000-1129-0": [{ type: "text", sub_type: "message", message: t("IN") }],
		"s-981-3000-1113-0": [{ type: "text", sub_type: "message", message: t("Bait") }],
		"s-981-3000-1151-0": [{ type: "text", sub_type: "message", message: t("Stun") }],
		"s-981-3000-1152-0": [
			{ type: "text", sub_type: "message", message: t("Stun + Back") },
			{ type: "spawn", func: "semicircle", args: [110, 250, 553, 0, 0, null, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 70, -1000, 70, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 290, -1000, -70, 1000, 0, 6000] }
		],
		"s-981-3000-1152-1": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1900 }],
		"s-981-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }], // begone
		"s-981-3000-2145-0": [
			{ type: "text", sub_type: "message", message: t("IN"), check_func: () => !are_you_afraid_of_me_continue },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 250, 0, 1500] },
			{ type: "text", sub_type: "message", message: t("IN > OUT"), check_func: () => are_you_afraid_of_me_continue },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 285, 2000, 2000], check_func: () => are_you_afraid_of_me_continue },
			{ type: "func", func: () => are_you_afraid_of_me_continue = false, check_func: () => are_you_afraid_of_me_continue, delay: 1000 }
		],
		"s-981-3000-2144-0": [
			{ type: "text", sub_type: "message", message: t("OUT"), check_func: () => !are_you_afraid_of_me_continue },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 250, 0, 1500] },
			{ type: "text", sub_type: "message", message: t("OUT > IN"), check_func: () => are_you_afraid_of_me_continue },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 285, 2000, 2000], check_func: () => are_you_afraid_of_me_continue },
			{ type: "func", func: () => are_you_afraid_of_me_continue = false, check_func: () => are_you_afraid_of_me_continue, delay: 1000 }
		],
		"s-981-3000-2129-0": "s-981-3000-1129-0",
		"s-981-3000-2113-0": "s-981-3000-1113-0",
		"s-981-3000-2151-0": "s-981-3000-1151-0",
		"s-981-3000-2152-0": "s-981-3000-1152-0",
		"s-981-3000-2152-1": "s-981-3000-1152-1",
		"s-981-3000-2138-0": "s-981-3000-1138-0"
	};
};