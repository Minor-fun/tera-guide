// Timescape (Hard)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = ES;

	const third_boss_sun_w = -2;
	const third_boss_daemon_w = 0;
	const third_boss_goddess_w = 2;
	let third_boss_wall_w = null;
	let third_boss_small_w = null;
	let third_boss_middle_w = null;
	let third_boss_large_w = null;
	let third_boss_small_game_id = null;
	let third_boss_middle_game_id = null;
	let third_boss_large_game_id = null;

	function w_to_deg(radians) {
		if (radians == 0) return 0;
		if (radians == 2) return 120;
		if (radians == -2) return 240;
	}

	function calc_step(a, b, reverse = false) {
		if (a === b) return 0;
		let diff = w_to_deg(b) - w_to_deg(a);
		if (diff <= 0) diff += 360;
		if (reverse) return diff > 120 ? 1 : 2;
		return diff > 120 ? 2 : 1;
	}

	function third_boss_wall_announce() {
		const small = calc_step(third_boss_small_w, third_boss_wall_w);
		const middle = calc_step(third_boss_middle_w, third_boss_wall_w, true);
		const large = calc_step(third_boss_large_w, third_boss_wall_w);
		if (small + middle + large === 0) {
			handlers.text({
				sub_type: "notification",
				message: t("Set"),
				speech: false
			});
		} else {
			handlers.text({
				sub_type: "notification",
				message: t("Small: {small}, Middle: {middle}, Large: {large}", { small: small, middle: middle, large: large }),
				speech: false
			});
		}
	}

	dispatch.hook("S_SPAWN_NPC", "*", e => {
		if (e.templateId === 243) {
			third_boss_wall_w = third_boss_sun_w;
			handlers.event([
				{ type: "text", sub_type: "alert", message: t("Wall Change (Sun)") },
				{ type: "func", func: third_boss_wall_announce, delay: 2000 }
			]);
		}
		if (e.templateId === 244) {
			third_boss_wall_w = third_boss_daemon_w;
			handlers.event([
				{ type: "text", sub_type: "alert", message: t("Wall Change (Demon)") },
				{ type: "func", func: third_boss_wall_announce, delay: 2000 }
			]);
		}
		if (e.templateId === 245) {
			third_boss_wall_w = third_boss_goddess_w;
			handlers.event([
				{ type: "text", sub_type: "alert", message: t("Wall Change (Goddess)") },
				{ type: "func", func: third_boss_wall_announce, delay: 2000 }
			]);
		}
		if (e.templateId === 301) {
			third_boss_small_game_id = e.gameId;
			third_boss_small_w = parseInt(e.w);
		}
		if (e.templateId === 302) {
			third_boss_middle_game_id = e.gameId;
			third_boss_middle_w = parseInt(e.w);
		}
		if (e.templateId === 303) {
			third_boss_large_game_id = e.gameId;
			third_boss_large_w = parseInt(e.w);
		}
	});

	dispatch.hook("S_CREATURE_ROTATE", "*", e => {
		dispatch.setTimeout(() => {
			if (e.gameId === third_boss_small_game_id) {
				third_boss_small_w = parseInt(e.w);
				third_boss_wall_announce();
			}
			if (e.gameId === third_boss_middle_game_id) {
				third_boss_middle_w = parseInt(e.w);
				third_boss_wall_announce();
			}
			if (e.gameId === third_boss_large_game_id) {
				third_boss_large_w = parseInt(e.w);
				third_boss_wall_announce();
			}
		}, e.time + 100);
	});

	return {
		// Boss 1 (phase 1)
		"nd-456-401": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-456-401-104-0": [
			{ type: "text", sub_type: "message", message: t("Bomb") },
			{ type: "text", sub_type: "warning", message: t("(1)"), speech: false, delay: 550 },
			{ type: "text", sub_type: "warning", message: t("(2)"), speech: false, delay: 1300 },
			{ type: "text", sub_type: "warning", message: t("(3)"), speech: false, delay: 2050 },
			{ type: "text", sub_type: "message", message: t("(4) Dodge!"), delay: 2800 }
		],
		"s-456-1001-107-0": [{ type: "text", sub_type: "alert", message: t("Shot") }],

		"s-456-403-106-0": [{ type: "text", sub_type: "alert", message: t("Circle") }],
		"s-456-1001-103-0": [{ type: "text", sub_type: "alert", message: t("Tail") }],
		"s-456-1001-101-0": [{ type: "text", sub_type: "alert", message: t("Hit") }],
		"s-456-1001-112-0": [{ type: "text", sub_type: "message", message: t("Rotate") }],
		"s-456-1001-113-0": "s-456-1001-112-0",
		"s-456-1001-111-0": [{ type: "text", sub_type: "message", message: t("Flight") }],
		"qb-456-1001-456020": [{ type: "text", sub_type: "message", message: t("Give stun") }],

		// Boss 1 (phase 2)
		"nd-456-413": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-456-413-104-0": [
			{ type: "text", sub_type: "message", message: t("Bomb") },
			{ type: "text", sub_type: "warning", message: t("(1)"), speech: false, delay: 550 },
			{ type: "text", sub_type: "warning", message: t("(2)"), speech: false, delay: 1300 },
			{ type: "text", sub_type: "warning", message: t("(3)"), speech: false, delay: 2050 },
			{ type: "text", sub_type: "message", message: t("(4) Dodge!"), delay: 2800 }
		],
		"s-456-414-104-0": "s-456-413-104-0",
		"s-456-415-104-0": "s-456-413-104-0",
		"s-456-416-104-0": "s-456-413-104-0",
		"s-456-1000-107-0": [{ type: "text", sub_type: "alert", message: t("Shot") }],
		"ab-456-1000-905685": [
			{ type: "text", sub_type: "message", message: t("Plague of Exhaustion"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Regression"), class_position: "mystic" }
		],

		"s-456-1000-103-0": "s-456-1001-103-0",
		"s-456-1000-101-0": "s-456-1001-101-0",
		"s-456-1000-112-0": "s-456-1001-112-0",
		"s-456-1000-113-0": "s-456-1001-112-0",
		"s-456-1000-111-0": "s-456-1001-111-0",
		"dm-456-1000-456001": "qb-456-1001-456020",

		// Boss 2
		"nd-456-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-456-1002-102-0": [{ type: "text", sub_type: "message", message: t("Jump") }],
		"s-456-1002-103-0": [{ type: "text", sub_type: "message", message: t("Combo") }],
		"s-456-1002-104-0": [{ type: "text", sub_type: "message", message: t("Shot (target)") }],
		"s-456-1002-107-0": [{ type: "text", sub_type: "message", message: t("Many Pokes") }],
		"s-456-1002-110-0": [{ type: "text", sub_type: "message", message: t("Clap") }],
		"s-456-1002-111-0": [{ type: "text", sub_type: "message", message: t("Front | Jump Back") }],
		"s-456-1002-212-0": [{ type: "text", sub_type: "message", message: t("Jump Back") }],
		"s-456-1002-314-0": [{ type: "text", sub_type: "alert", message: t("Lay Back") }],
		"s-456-1002-315-0": [{ type: "text", sub_type: "alert", message: t("Lay Front") }],
		"s-456-1002-319-0": [{ type: "text", sub_type: "alert", message: t("Spin") }],
		"s-456-1002-3110-0": [{ type: "text", sub_type: "message", message: t("Breath") }],
		"s-456-1002-3113-0": [{ type: "text", sub_type: "message", message: t("AOE (Give stun)"), delay: 4000 }],

		// Boss 3
		"nd-456-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ab-456-1003-905607": [
			{ type: "text", sub_type: "message", message: t("Cleanse + Plague of Exhaustion"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Cleanse + Regression"), class_position: "mystic" }
		],
		"s-456-1003-3101-0": [
			{ type: "text", sub_type: "message", message: t("Take a Circle"), check_func: () => third_boss_wall_w !== third_boss_middle_w },
			{ type: "text", sub_type: "message", message: t("Don't Take a Circle"), check_func: () => third_boss_wall_w === third_boss_middle_w }
		],
		"s-756-1003-103-0": [
			{ type: "text", sub_type: "message", message: t("Spin") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 340, 0, 5000] }
		],
		"s-456-1003-104-0": [{ type: "text", sub_type: "message", message: t("Clap") }],
		"s-456-1003-105-0": [{ type: "text", sub_type: "message", message: t("Front") }],
		"s-456-1003-105-1": [{ type: "text", sub_type: "message", message: t("Back") }],
		"s-456-1003-107-0": [{ type: "text", sub_type: "message", message: t("Swipe") }],
		"s-456-1003-108-0": [{ type: "text", sub_type: "message", message: t("Swipe") }],
		"s-456-1003-109-0": [{ type: "text", sub_type: "message", message: t("Breath (target)") }],
		"s-456-1003-111-0": [{ type: "text", sub_type: "message", message: t("Leash (target)") }],
		"s-456-1003-3104-0": [{ type: "text", sub_type: "message", message: t("Cage") }], // 456016
		"s-456-1003-3108-0": [{ type: "text", sub_type: "message", message: t("Waves") }],
		"qb-456-1003-456015": [{ type: "text", sub_type: "message", message: t("AOE") }], // 3103
		"qb-456-1003-456017": [{ type: "text", sub_type: "message", message: t("Give Stun") }] // 3102
	};
};