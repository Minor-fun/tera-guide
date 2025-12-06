// The Observatory
//
// made by False

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	const { entity } = dispatch.require.library;

	let orb1_loc = { x: 23790, y: 160322, z: 12617, w: 2.07 };
	let orb2_loc = { x: 24082, y: 161256, z: 12617, w: -3.05 };
	let orb3_loc = { x: 23449, y: 162197, z: 12617, w: -1.81 };
	let orb4_loc = { x: 22142, y: 161855, z: 12617, w: -0.58 };
	let orb5_loc = { x: 22463, y: 160329, z: 12617, w: 0.84 };
	let crys_loc = null;
	let road_from_gameId = null;
	let enrage = 0;
	let enrage_time = 0;
	let num_debuff = null;
	let color = "blue";
	let die = 0;
	let crys_off = 0;

	function spawn_road(loc) {
		const road_from_ent = entity.mobs[road_from_gameId];
		if (road_from_ent && loc) {
			const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
			const distance = road_from_ent.pos.dist2D(loc);
			handlers.spawn({ func: "vector", args: [445, 0, 0, angle, distance, 0, 99999999], tag: "light" }, { loc: road_from_ent.pos });
		}
	}

	function spawn_road_crys(loc) {
		const road_from_ent = entity.mobs[road_from_gameId];
		if (road_from_ent && loc) {
			const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
			const distance = road_from_ent.pos.dist2D(loc);
			handlers.spawn({ func: "vector", args: [476, 0, 0, angle, distance, 0, 6000] }, { loc: road_from_ent.pos });
		}
	}

	function side(skillid) {
		const left_safe = [
			{ type: "text", sub_type: "message", message: t("Left safe!") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 1000, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 250, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 340, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 430, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 7, 520, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 6, 610, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 5, 700, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 4, 790, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 3, 880, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 2, 1000, 0, 2500] }
		];
		const right_safe = [
			{ type: "text", sub_type: "message", message: t("Right safe!") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 1000, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 250, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 340, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 430, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 7, 520, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 6, 610, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 5, 700, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 4, 790, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 3, 880, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 2, 1000, 0, 2500] }
		];
		if ([112].includes(skillid)) {
			if (color == "red") {
				handlers.event(left_safe);
			} else if (color == "blue") {
				handlers.event(right_safe);
			}
		}
		if ([111].includes(skillid)) {
			if (color == "blue") {
				handlers.event(left_safe);
			} else if (color == "red") {
				handlers.event(right_safe);
			}
		}
	}

	function range_check() {
		enrage = new Date() - enrage_time >= 32100 ? 0 : 1;
		if (enrage == 1) {
			handlers.event([
				{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 300, 200, 5000] },
				{ type: "text", sub_type: "message", message: t("In!") }
			]);
		} else {
			handlers.event([
				{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "text", sub_type: "message", message: t("Out!") }
			]);
		}
	}

	return {
		"ns-2809-1000": [
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 23790, y: 160322, z: 12617, w: 2.07 }, ownerName: "11111", message: t("11111") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 24082, y: 161256, z: 12617, w: -3.05 }, ownerName: "22222", message: t("22222") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 23449, y: 162197, z: 12617, w: -1.81 }, ownerName: "33333", message: t("33333") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 22142, y: 161855, z: 12617, w: -0.58 }, ownerName: "44444", message: t("44444") },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 22463, y: 160329, z: 12617, w: 0.84 }, ownerName: "55555", message: t("55555") },
			{ type: "func", func: ent => road_from_gameId = ent.gameId },
			{ type: "func", func: () => crys_off = 0 },
			{ type: "spawn", sub_type: "item", id: 70052, sub_delay: 99999999, pos: { x: 23196, y: 161015, z: 12618, w: 1.56 } }
		],
		"nd-2809-1000": [
			{ type: "func", func: () => road_from_gameId = null },
			{ type: "func", func: () => color = "blue" },
			{ type: "func", func: () => enrage = 0 },
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		//Механика с шарами и дебаффами
		"ns-2809-1001": [{ type: "func", func: ent => orb1_loc = ent.pos }],
		"ns-2809-1002": [{ type: "func", func: ent => orb2_loc = ent.pos }],
		"ns-2809-1003": [{ type: "func", func: ent => orb3_loc = ent.pos }],
		"ns-2809-1004": [{ type: "func", func: ent => orb4_loc = ent.pos }],
		"ns-2809-1005": [{ type: "func", func: ent => orb5_loc = ent.pos }],

		"am-2809-1000-428091001": [
			{ type: "func", func: () => num_debuff = 1 },
			{ type: "text", sub_type: "message", message: t("Debuff 1") },
			{ type: "func", func: () => spawn_road(orb1_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 23790, y: 160322, z: 12617, w: 2.07 }, tag: "light" }
		],
		"am-2809-1000-428091002": [
			{ type: "func", func: () => num_debuff = 2 },
			{ type: "text", sub_type: "message", message: t("Debuff 2") },
			{ type: "func", func: () => spawn_road(orb2_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 24082, y: 161256, z: 12617, w: 1.69 }, tag: "light" }
		],
		"am-2809-1000-428091003": [
			{ type: "func", func: () => num_debuff = 3 },
			{ type: "text", sub_type: "message", message: t("Debuff 3") },
			{ type: "func", func: () => spawn_road(orb3_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 23449, y: 162197, z: 12617, w: 2.83 }, tag: "light" }
		],
		"am-2809-1000-428091004": [
			{ type: "func", func: () => num_debuff = 4 },
			{ type: "text", sub_type: "message", message: t("Debuff 4") },
			{ type: "func", func: () => spawn_road(orb4_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 22142, y: 161855, z: 12617, w: -0.76 }, tag: "light" }
		],
		"am-2809-1000-428091005": [
			{ type: "func", func: () => num_debuff = 5 },
			{ type: "text", sub_type: "message", message: t("Debuff 5") },
			{ type: "func", func: () => spawn_road(orb5_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 22463, y: 160329, z: 12617, w: 1.44 }, tag: "light" }
		],
		"ar-2809-1000-428091001": [
			{ type: "despawn_all", tag: "light", check_func: () => die == 0 },
			{ type: "func", func: () => num_debuff = null }
		],
		"ar-2809-1000-428091002": "ar-2809-1000-428091001",
		"ar-2809-1000-428091003": "ar-2809-1000-428091001",
		"ar-2809-1000-428091004": "ar-2809-1000-428091001",
		"ar-2809-1000-428091005": "ar-2809-1000-428091001",
		"qb-2809-1000-2809101": [{ type: "despawn_all", tag: "light", check_func: () => die == 0 }],
		"die": [{ type: "func", func: () => die = 1 }],
		"resurrect": [{ type: "func", func: () => die = 0 }],

		//Бежать к шарам
		"qb-2809-1000-2809103": [
			{ type: "text", sub_type: "message", message: t("Run to orb 1"), check_func: () => num_debuff === 1 },
			{ type: "text", sub_type: "message", message: t("Run to orb 2"), check_func: () => num_debuff === 2 },
			{ type: "text", sub_type: "message", message: t("Run to orb 3"), check_func: () => num_debuff === 3 },
			{ type: "text", sub_type: "message", message: t("Run to orb 4"), check_func: () => num_debuff === 4 },
			{ type: "text", sub_type: "message", message: t("Run to orb 5"), check_func: () => num_debuff === 5 },
			{ type: "text", sub_type: "alert", delay: 47000, message: t("Orbs or Puddles soon...") }
		],

		//Рес-байт
		"qb-2809-1000-2809106": [{ type: "text", sub_type: "message", message: t("Res-Bait!") }],

		//Механика с лужами
		"qb-2809-1000-2809104": [
			{ type: "text", sub_type: "message", message: t("Remove puddles from the boss!") },
			{ type: "text", sub_type: "alert", delay: 47000, message: t("Orbs or Puddles soon...") }
		],
		"s-2809-1000-1307-0": [
			{ type: "text", sub_type: "message", message: t("Stand in the puddles!") },
			{ type: "text", sub_type: "alert", delay: 87000, message: t("Puddles soon...") }
		],

		//Механика красный/синий
		"ns-2809-1014": [{ type: "func", check_func: () => num_debuff === 1, func: () => color = "red" }],
		"ns-2809-1015": [{ type: "func", check_func: () => num_debuff === 2, func: () => color = "red" }],
		"ns-2809-1016": [{ type: "func", check_func: () => num_debuff === 3, func: () => color = "red" }],
		"ns-2809-1017": [{ type: "func", check_func: () => num_debuff === 4, func: () => color = "red" }],
		"ns-2809-1018": [{ type: "func", check_func: () => num_debuff === 5, func: () => color = "red" }],
				
		// awaiting qb-2809-1000-2809112
		"s-2809-1000-1313-0": [
			{ type: "func", func: side, args: [112], delay: 3000 },
			{ type: "func", func: () => color = "blue", delay: 6000 }
		],
		// standby qb-2809-1000-2809111
		"s-2809-1000-1312-0": [
			{ type: "func", func: side, args: [111], delay: 3000 },
			{ type: "func", func: () => color = "blue", delay: 6000 }
		],

		//Механика очистка
		"qb-2809-1000-2809105": [{ type: "text", sub_type: "message", message: t("Purging!") }],
		"s-2809-1000-1304-0": [
			{ type: "text", sub_type: "message", message: t("Dodge!"), delay: 1200 },
			{ type: "text", sub_type: "message", message: t("Make a puddle with Res-byte!"), class_position: "heal", delay: 3000 }
		],

		//Проверка дальности qb-2809-1000-2809108
		"rb-2809-1000": [
			{ type: "func", func: () => enrage = 1 },
			{ type: "func", func: () => enrage_time = new Date() }
		],
		"re-2809-1000": [{ type: "func", func: () => enrage = 0 }],

		"s-2809-1000-1309-0": [{ type: "func", func: range_check }],

		//Механика бублики
		"qb-2809-1000-2809110": [
			{ type: "text", sub_type: "message", message: t("Donuts!") },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 300, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 600, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 875, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 3, 1150, 200, 8000] }
		],

		//Механика кристаллы
		"qb-2809-1000-2809114": [
			{ type: "text", sub_type: "message", message: t("Destroy crystals!") },
			{ type: "text", sub_type: "message", delay: 79000, message: t("Crystals soon..."), check_func: () => crys_off == 0 }
		],
		"ns-2809-1011": [
			{ type: "func", func: ent => crys_loc = ent.pos },
			{ type: "func", func: () => spawn_road_crys(crys_loc) }
		],
		"h-2809-1000-39": [{ type: "text", sub_type: "message", message: t("Crystals soon...") }],

		//10% волны
		"h-2809-1000-9": [
			{ type: "text", sub_type: "message", message: t("10%! Waves!") },
			{ type: "func", func: () => crys_off = 1 }
		]
	};
};