// Sky Cruiser (Hard)
//
// made by michengs / HSDN / icebrog / Enndy

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = SP;

	let triple_attack = false;
	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let timer1 = null;
	let timer2 = null;
	let enrage = 0;
	let enrage_time = 0;
	let counter = 0;
	// let is_hp_79 = false;
	let is_hp_49 = false;
	let mech_total = 0;
	let mech_counter = 0;

	const mech_messages = {
		2: { message: t("Two Split Strikes") },
		3: { message: t("Three Split Strikes") },
		4: { message: t("Four Split Strikes") }
	};

	function boss_backcombo_event() {
		dispatch.clearTimeout(timer2);
		counter++;

		if (counter >= 2) {
			handlers.text({
				sub_type: "message",
				message: t("Back Combo")
			});
		}

		timer2 = dispatch.setTimeout(() => counter = 0, enrage == 1 ? 2200 : 2500);
	}

	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 1500;

			handlers.text({
				sub_type: "message",
				message: is_one_back ? "Back!" : "!!!"
			});
		}

		dispatch.setTimeout(() => back_print = false, 3500);
	}

	function boss_tripleattack_event() {
		dispatch.clearTimeout(timer1);
		triple_attack = true;
		timer1 = dispatch.setTimeout(() => triple_attack = false, 3500);
	}

	function boss_mech_eventP1(skillid) {
		handlers.event([
			{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1500] }
		]);

		if ([1402].includes(skillid)) {
			handlers.event([ // left
				{ type: "text", sub_type: "alert", speech: false,
					message: t("Left")
				},
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
			]);
		} else {
			handlers.event([ // right
				{ type: "text", sub_type: "alert", speech: false,
					message: t("Right")
				},
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
			]);
		}
	}

	function boss_mech_eventP2(skillid) {
		enrage = new Date() - enrage_time >= 35100 ? 0 : 1;
		mech_total = triple_attack ? (is_hp_49 ? 4 : 3) : 2; // is_hp_79

		if (mech_counter == 0) {
			handlers.text({ sub_type: "message",
				message: mech_messages[mech_total].message
			});

			mech_counter = mech_total;
		}

		mech_counter--;

		handlers.event([
			{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1500] }
		]);

		let effective_skillid = skillid;
		if (enrage == 1 && [1401, 1402].includes(skillid)) {
			effective_skillid = skillid == 1401 ? 1402 : 1401;
		}

		if (([1401, 1402].includes(effective_skillid) ? (effective_skillid % 2) % 2 : skillid % 2) == 0) {
			handlers.event([ // left
				{ type: "text", sub_type: "alert", speech: false,
					message: t("({mech_totalmech_counter}) Left", { mech_totalmech_counter: mech_total - mech_counter })
				},
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
			]);
		} else {
			handlers.event([ // right
				{ type: "text", sub_type: "alert", speech: false,
					message: t("({mech_totalmech_counter}) Right", { mech_totalmech_counter: mech_total - mech_counter })
				},
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
				{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
			]);
		}
	}

	return {
		// Phase 1
		"ns-3036-1001": [
			{ type: "spawn", func: "marker", args: [false, 281, -500, 100, 60000000, false] },
			{ type: "spawn", func: "point", args: [513, 261, 500, 100, 60000000] }
		],
		"nd-3036-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3036-1001-1112-0": [{ type: "text", sub_type: "message", message: t("Back Jump") }],
		"s-3036-1001-1401-0": [{ type: "func", func: boss_mech_eventP1, args: [1401] }],
		"s-3036-1001-1402-0": [{ type: "func", func: boss_mech_eventP1, args: [1402] }],
		"s-3036-1001-1303-0": [{ type: "text", sub_type: "message", message: t("Spin Attack") }],
		"s-3036-1001-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1001-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-3036-1001-1103-0": [{ type: "func", func: boss_backcombo_event }],
		"s-3036-1001-1106-0": [{ type: "func", func: boss_backcombo_event }],
		"s-3036-1001-2101-0": "s-3036-1001-1101-0",
		"s-3036-1001-2102-0": "s-3036-1001-1102-0",
		"s-3036-1001-2103-0": "s-3036-1001-1103-0",
		"s-3036-1001-2106-0": "s-3036-1001-1106-0",
		"s-3036-1001-2112-0": "s-3036-1001-1112-0",
		// Phase 2
		"ns-3036-1000": [
			{ type: "func", func: () => enrage = 0 },
			{ type: "func", func: () => mech_counter = 0 },
			{ type: "spawn", func: "marker", args: [false, 281, -500, 100, 60000000, false] },
			{ type: "spawn", func: "point", args: [513, 261, 500, 100, 60000000] }
		],
		"nd-3036-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"rb-3036-1000": [
			{ type: "func", func: () => enrage = 1 },
			{ type: "func", func: () => enrage_time = new Date() }
		],
		"re-3036-1000": [
			{ type: "func", func: () => enrage = 0 }
		],
		"h-3036-1000-100": [{ type: "func", func: () => is_hp_49 = false }],
		"h-3036-1000-94": [{ type: "text", sub_type: "message", message: t("94%") }],
		"h-3036-1000-49": [{ type: "text", sub_type: "message", message: t("49%") }, { type: "func", func: () => is_hp_49 = true }],
		"h-3036-1000-35": [{ type: "text", sub_type: "message", message: t("Watch the countdown") }],
		"h-3036-1000-34": [{ type: "text", sub_type: "message", message: t("Third layer of shrinking ring preparation") }],
		"h-3036-1000-65": [{ type: "text", sub_type: "message", message: t("Second layer of shrinking ring preparation") }],
		"s-3036-1000-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-3036-1000-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-3036-1000-1103-0": [{ type: "func", func: boss_backcombo_event }],
		"s-3036-1000-1106-0": [{ type: "func", func: boss_backcombo_event }],
		"s-3036-1000-1112-0": [{ type: "text", sub_type: "message", message: t("Back Move") }],
		"s-3036-1000-1114-0": [
			{ type: "text", sub_type: "message", message: t("Invisible Fire") },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 5830] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 5830] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 5830] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 5830] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 5830] }
		],
		"s-3036-1000-1115-0": [
			{ type: "text", sub_type: "message", message: t("3") },
			{ type: "text", sub_type: "message", delay: 1000, message: t("2") },
			{ type: "text", sub_type: "message", delay: 2000, message: t("1") },
			{ type: "text", sub_type: "message", delay: 3200, message: t("Dodge") }
		],
		"s-3036-1000-1117-0": [{ type: "text", sub_type: "message", message: t("Front") }],
		"s-3036-1000-1118-0": [
			{ type: "text", sub_type: "message", message: t("Front Cut | Dodge") },
			{ type: "spawn", func: "semicircle", args: [0, 60, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 55, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 340, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [300, 360, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [305, 360, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [310, 360, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [315, 360, 553, 0, 0, 10, 340, 0, 2000] }
		],
		"s-3036-1000-1302-0": [
			{ type: "text", sub_type: "message", message: t("AOE") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-3036-1000-2101-0": "s-3036-1000-1101-0",
		"s-3036-1000-2102-0": "s-3036-1000-1102-0",
		"s-3036-1000-1303-0": [{ type: "text", sub_type: "message", message: t("Spin Attack") }],
		"s-3036-1000-1401-0": [{ type: "func", func: boss_mech_eventP2, args: [1401] }],
		"s-3036-1000-1402-0": [{ type: "func", func: boss_mech_eventP2, args: [1402] }],
		"s-3036-1000-1701-0": [{ type: "func", func: boss_mech_eventP2, args: [1701] }],
		"s-3036-1000-1702-0": [{ type: "func", func: boss_mech_eventP2, args: [1702] }],
		"s-3036-1000-1801-0": [{ type: "text", sub_type: "message", message: t("Incoming Stun") }],
		"s-3036-1000-1805-0": [
			{ type: "text", sub_type: "message", message: t("Between") },
			{ type: "text", sub_type: "message", delay: 2150, message: t("IN") },
			{ type: "text", sub_type: "message", delay: 3050, message: t("All | OUT") },
			{ type: "text", sub_type: "message", delay: 3500, message: t("No Cleanse") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 430, 0, 6000] }
		],
		"s-3036-1000-1806-0": [
			{ type: "text", sub_type: "message", message: t("IN") },
			{ type: "text", sub_type: "message", delay: 2150, message: t("Between") },
			{ type: "text", sub_type: "message", delay: 3050, message: t("All | IN") },
			{ type: "text", sub_type: "message", delay: 3500, message: t("Cleanse") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 430, 0, 6000] }
		],
		"s-3036-1000-2103-0": "s-3036-1000-1103-0",
		"s-3036-1000-2106-0": "s-3036-1000-1106-0",
		"s-3036-1000-2112-0": "s-3036-1000-1112-0",
		"s-3036-1000-2114-0": "s-3036-1000-1114-0",
		"s-3036-1000-2115-0": "s-3036-1000-1115-0",
		"s-3036-1000-2117-0": "s-3036-1000-1117-0",
		"s-3036-1000-2118-0": "s-3036-1000-1118-0",
		"qb-3036-1000-3036039": [
			{ type: "text", sub_type: "message", delay: 75000, message: t("Triple Soon") },
			{ type: "text", sub_type: "notification", delay: 75000, message: t("Triple Soon"), speech: false },
			{ type: "func", func: boss_tripleattack_event }
		],
		"qb-3036-1000-3036040": [{ type: "func", func: boss_tripleattack_event }],
		"qb-3036-1000-3036041": [{ type: "func", func: boss_tripleattack_event }]
	};
};