// Thaumetal Refinery
//
// made by ITunk / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	const { entity } = dispatch.require.library;

	let blue_vaccine_loc = null;
	let red_vaccine_loc = null;
	const road_from_gameIds = new Set();

	function spawn_road(loc) {
		road_from_gameIds.forEach(road_from_gameId => {
			const road_from_ent = entity.mobs[road_from_gameId];
			if (road_from_ent && loc) {
				const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
				const distance = road_from_ent.pos.dist2D(loc);
				handlers.event([
					{ type: "spawn", func: "vector", args: [553, -90 + angle, 50, angle, distance, 0, 10000] },
					{ type: "spawn", func: "vector", args: [553, 90 + angle, 50, angle, distance, 0, 10000] }
				], { loc: road_from_ent.pos });
			}
		});
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 7941030) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "message", message: t("Put banana to the tree") });
			}
		}
	});

	return {
		// 1 BOSS
		"nd-794-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-794-1000-103-0": [
			{ type: "text", sub_type: "message", message: t("AOE Stun (Dodge)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 125, null, 250, 0, 2000] }
		],
		"s-794-1000-107-0": [
			{ type: "text", sub_type: "message", message: t("Jump (Dodge)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 2500, 2500] }
		],
		"s-794-1000-115-0": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1000 }],
		"s-794-1000-119-0": [{ type: "text", sub_type: "message", message: t("Pushback") }],
		"s-794-1000-315-0": [{ type: "text", sub_type: "message", message: t("In") }],
		"ae-0-0-7941002": [{ type: "text", sub_type: "message", message: t("Eye (boss to banana)") }],
		"qb-794-1000-994008": [{ type: "text", sub_type: "message", message: t("Push (Kaia)") }],

		// 2 BOSS
		"s-794-2000-111-0": [{ type: "text", sub_type: "message", message: t("Bait (2 stones)") }],
		"s-794-2000-112-0": [{ type: "text", sub_type: "message", message: t("Bait (3 stones)") }],
		"s-794-2000-106-0": [{ type: "text", sub_type: "message", message: t("Bait (Rock)") }],
		"s-794-2000-307-0": [{ type: "text", sub_type: "message", message: t("Stones") }],
		"ae-0-0-7942006": [{ type: "text", sub_type: "message", message: t("Stone on you"), delay: 1000 }],
		"s-794-2000-117-0": [{ type: "text", sub_type: "message", message: t("Inward Wave"), delay: 1000 }],
		"s-794-2000-118-0": [{ type: "text", sub_type: "message", message: t("Outward Wave") }],
		"s-794-2000-114-0": [{ type: "text", sub_type: "message", message: t("Together") }],
		"s-794-2000-110-0": [{ type: "text", sub_type: "message", message: t("Hit in dd") }],

		// 3 BOSS
		"nd-794-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-794-3002": [{ type: "func", func: ent => road_from_gameIds.add(ent.gameId) }], // Колба с мобом
		"nd-794-3002": [{ type: "func", func: ent => road_from_gameIds.delete(ent.gameId), delay: 5000 }],
		"ns-794-3004": [{ type: "func", func: ent => blue_vaccine_loc = ent.pos }], // Синий
		"ns-794-3005": [{ type: "func", func: ent => red_vaccine_loc = ent.pos }], // Красный
		"s-794-3000-103-0": [{ type: "text", sub_type: "message", message: t("Pushback") }],
		"s-794-3000-107-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: t("Front (Dodge)") }
		],
		"s-794-3000-108-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: t("Back (Dodge)") }
		],
		"s-794-3000-104-0": [{ type: "text", sub_type: "message", message: t("Bait") }],
		"s-794-3000-111-0": [{ type: "text", sub_type: "message", message: t("Out Safe") }],
		"s-794-3000-112-0": [{ type: "text", sub_type: "message", message: t("In Safe") }],
		"s-794-3000-113-0": [{ type: "text", sub_type: "message", message: t("Donut (In)") }],
		"s-794-3000-114-0": [{ type: "text", sub_type: "message", message: t("Donut (Out)") }],
		"s-794-3000-122-0": [{ type: "text", sub_type: "message", message: t("Gather!") }],
		"s-794-3000-125-0": [{ type: "text", sub_type: "message", message: t("Bait (Puddle)") }],
		"s-794-3000-315-0": [
			{ type: "text", sub_type: "message", message: t("Remove puddles from paths") },
			{ type: "func", func: () => spawn_road(blue_vaccine_loc) }
		],
		"s-794-3000-316-0": [
			{ type: "text", sub_type: "message", message: t("Remove puddles from paths") },
			{ type: "func", func: () => spawn_road(red_vaccine_loc) }
		]
	};
};