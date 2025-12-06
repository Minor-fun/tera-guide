// Thaumetal Refinery (Hard)
//
// made by ITunk / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	const { entity } = dispatch.require.library;

	let blue_vaccine_loc = null;
	let red_vaccine_loc = null;
	let road_from_gameId = null;
	let temperature_boss = null;
	let have_buff = null;

	function spawn_road(loc) {
		const road_from_ent = entity.mobs[road_from_gameId];
		if (road_from_ent && loc) {
			const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
			const distance = road_from_ent.pos.dist2D(loc);
			handlers.spawn({ func: "vector", args: [476, 0, 0, angle, distance, 0, 10000] }, { loc: road_from_ent.pos });
		}
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 9941030) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "message", message: t("Put banana to the tree") });
			}
		}
	});

	return {
		// 1 BOSS
		"nd-994-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-994-1000-103-0": [
			{ type: "text", sub_type: "message", message: t("AOE Stun (Dodge)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 125, null, 250, 0, 2000] }
		],
		"s-994-1000-107-0": [
			{ type: "text", sub_type: "message", message: t("Jump (Dodge)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 2500, 2500] }
		],
		"s-994-1000-108-1": [{ type: "text", sub_type: "message", message: t("Stun Back") }],
		"s-994-1000-111-0": [
			{ type: "text", sub_type: "message", message: t("Explosions (In)"), delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 275, 1000, 4000] }
		],
		"s-994-1000-112-0": [
			{ type: "text", sub_type: "message", message: t("Explosions (Out)"), delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 325, 1000, 4000] }
		],
		"s-994-1000-113-0": [
			{ type: "text", sub_type: "message", message: t("Explosions (Middle)"), delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 210, 1000, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 400, 1000, 4000] }
		],
		"s-994-1000-114-0": [{ type: "text", sub_type: "message", message: t("Many Attacks | Pull") }],
		"s-994-1000-115-0": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1000 }],
		"s-994-1000-116-0": [{ type: "text", sub_type: "message", message: t("Gather!"), delay: 3000 }],
		"s-994-1000-119-0": [{ type: "text", sub_type: "message", message: t("Pushback") }],
		"s-994-1000-312-0": [{ type: "text", sub_type: "message", message: t("Shield!"), delay: 2000 }],
		"s-994-1000-315-0": [{ type: "text", sub_type: "message", message: t("In") }],
		"ae-0-0-9941002": [{ type: "text", sub_type: "message", message: t("Eye (boss to banana)") }],
		"qb-994-1000-994008": [{ type: "text", sub_type: "message", message: t("Push (Kaia)") }],

		// 2 BOSS
		"nd-994-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-994-2000-111-0": [{ type: "text", sub_type: "message", message: t("Bait (2 stones)") }],
		"s-994-2000-112-0": [{ type: "text", sub_type: "message", message: t("Bait (3 stones)") }],
		"s-994-2000-106-0": [{ type: "text", sub_type: "message", message: t("Bait (Rock)") }],
		"s-994-2000-108-0": [{ type: "text", sub_type: "message", message: t("Jump to Tank") }],
		"s-994-2000-307-0": [{ type: "text", sub_type: "message", message: t("Stones") }],
		"ae-0-0-9942006": [{ type: "text", sub_type: "message", message: t("Stone on you"), delay: 1000 }],
		"s-994-2000-117-0": [{ type: "text", sub_type: "message", message: t("Inward Wave"), delay: 1000 }],
		"s-994-2000-118-0": [{ type: "text", sub_type: "message", message: t("Outward Wave") }],
		"s-994-2000-114-0": [{ type: "text", sub_type: "message", message: t("Together") }],
		"s-994-2000-113-0": [
			{ type: "text", sub_type: "message", message: t("Donut (In > Out)"), delay: 1500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 225, 1500, 2000] },
			{ type: "text", sub_type: "message", message: t("Out / Dodge"), delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 325, 3500, 3000] }
		],
		"s-994-2000-110-0": [{ type: "text", sub_type: "message", message: t("Hit in dd") }],

		// 3 BOSS
		"die": [{ type: "func", func: () => have_buff = null }],
		"ns-994-3000": [{ type: "func", func: () => temperature_boss = null }],
		"nd-994-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-994-3002": [{ type: "func", func: ent => road_from_gameId = ent.gameId }], // Колба с мобом
		"ns-994-3003": [{ type: "func", func: ent => road_from_gameId = ent.gameId, delay: 1000 }], // Эксперимент(моб)
		"nd-994-3003": [{ type: "func", func: () => road_from_gameId = null }],
		"ns-994-3004": [{ type: "func", func: ent => blue_vaccine_loc = ent.pos }], // Синий
		"ns-994-3005": [{ type: "func", func: ent => red_vaccine_loc = ent.pos }], // Красный
		"s-994-3000-103-0": [{ type: "text", sub_type: "message", message: t("Pushback") }],
		"s-994-3000-107-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 5500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 5500] },
			{ type: "text", sub_type: "message", message: t("Front (Dodge)"), check_func: () => !temperature_boss },
			{ type: "text", sub_type: "message", message: t("Front | Back (Dodge)"), check_func: () => temperature_boss === "fire" },
			{ type: "text", sub_type: "message", message: t("Front x2 (Dodge)"), check_func: () => temperature_boss === "ice" }
		],
		"s-994-3000-108-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 5500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 5500] },
			{ type: "text", sub_type: "message", message: t("Back (Dodge)"), check_func: () => !temperature_boss },
			{ type: "text", sub_type: "message", message: t("Back x2 (Dodge)"), check_func: () => temperature_boss === "fire" },
			{ type: "text", sub_type: "message", message: t("Back | Front (Dodge)"), check_func: () => temperature_boss === "ice" }
		],
		"s-994-3000-104-0": [{ type: "text", sub_type: "message", message: t("Bait") }],
		"s-994-3000-111-0": [
			{ type: "text", sub_type: "message", message: t("Out Safe"), check_func: () => have_buff === "ice" || !have_buff }, // ice default
			{ type: "text", sub_type: "message", message: t("In Safe"), check_func: () => have_buff === "fire" }
		],
		"s-994-3000-112-0": [
			{ type: "text", sub_type: "message", message: t("In Safe"), check_func: () => have_buff === "fire" || !have_buff }, // fire default
			{ type: "text", sub_type: "message", message: t("Out Safe"), check_func: () => have_buff === "ice" }
		],
		"s-994-3000-113-0": [
			{ type: "text", sub_type: "message", message: t("Donut (In)"), check_func: () => have_buff === "ice" || !have_buff }, // ice default
			{ type: "text", sub_type: "message", message: t("Donut (Middle)"), check_func: () => have_buff === "fire" }
		],
		"s-994-3000-114-0": [
			{ type: "text", sub_type: "message", message: t("Donut (Middle)"), check_func: () => have_buff === "fire" || !have_buff }, // fire default
			{ type: "text", sub_type: "message", message: t("Donut (In)"), check_func: () => have_buff === "ice" }
		],
		"s-994-3000-116-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: t("Front"), check_func: () => !temperature_boss }
		],
		"s-994-3000-118-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: t("Back"), check_func: () => !temperature_boss }
		],
		"s-994-3000-122-0": [{ type: "text", sub_type: "message", message: t("Gather!") }],
		"s-994-3000-125-0": [{ type: "text", sub_type: "message", message: t("Bait (Puddle)") }],
		"s-994-3000-126-0": "s-994-3000-111-0",
		"s-994-3000-127-0": "s-994-3000-112-0",
		"s-994-3000-128-0": "s-994-3000-113-0",
		"s-994-3000-129-0": "s-994-3000-114-0",
		"s-994-3000-130-0": "s-994-3000-116-0",
		"s-994-3000-301-0": [
			{ type: "text", sub_type: "message", message: t("Line up the puddles to blue") },
			{ type: "func", func: () => spawn_road(blue_vaccine_loc) }
		],
		"s-994-3000-302-0": [
			{ type: "text", sub_type: "message", message: t("Line up the puddles to red") },
			{ type: "func", func: () => spawn_road(red_vaccine_loc) }
		],
		"s-994-3000-315-0": [{ type: "text", sub_type: "message", message: t("Pull") }],
		"s-994-3000-316-0": "s-994-3000-315-0",
		"am-994-3000-9943045": [{ type: "func", func: () => have_buff = "ice", delay: 1000 }],
		"am-994-3000-9943046": [{ type: "func", func: () => have_buff = "fire", delay: 1000 }],
		"ae-0-0-9943045": "am-994-3000-9943045",
		"ae-0-0-9943046": "am-994-3000-9943046",
		"ar-0-0-9943045": [{ type: "func", func: () => have_buff = null }],
		"ar-0-0-9943046": "ar-0-0-9943045",
		"ar-994-3000-9943045": "ar-0-0-9943045",
		"ar-994-3000-9943046": "ar-0-0-9943045",
		"qb-994-3000-994022": [{ type: "func", func: () => temperature_boss = "ice" }],
		"qb-994-3000-994024": [{ type: "func", func: () => temperature_boss = "fire" }],
		"qb-994-3000-994064": [{ type: "text", sub_type: "message", message: t("Give stun!") }],
		"qb-994-3000-994065": [{ type: "text", sub_type: "message", message: t("Gather!") }]
	};
};