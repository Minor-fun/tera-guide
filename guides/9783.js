// Dark Reach Citadel
//
// made by ITunk / HSDN / FrostSigil

module.exports = (dispatch, handlers, guide, lang) => {
	let firstboss_prepare_stun = false;
	let secondboss_show_book_notify = true;
	let secondboss_game_id_for_book = null;
	let secondboss_red_book_loc = null;
	let secondboss_blue_book_loc = null;
	let secondboss_green_book_loc = null;

	function closest(nums, num) {
		return nums.reduce((prev, curr) => (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev));
	}

	dispatch.hook("S_NPC_LOCATION", "*", e => {
		if (!secondboss_show_book_notify || e.gameId !== secondboss_game_id_for_book) return;

		const books = [
			e.loc.angleTo(secondboss_red_book_loc), // Red book
			e.loc.angleTo(secondboss_blue_book_loc), // Blue book
			e.loc.angleTo(secondboss_green_book_loc) // Green book
		];

		const book = books.indexOf(closest(books, e.w));

		switch (book) {
			case 0: // Red -> Blue
				handlers.alias({ id: "ab-783-2000-78300222" });
				break;
			case 1: // Blue -> Green
				handlers.alias({ id: "ab-783-2000-78300223" });
				break;
			case 2: // Green -> Red
				handlers.alias({ id: "ab-783-2000-78300224" });
				break;
		}

		secondboss_show_book_notify = false;
		secondboss_game_id_for_book = null;
	});

	return {
		// 1 BOSS
		"nd-783-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-783-1008": [{ type: "text", sub_type: "message", message: t("Take Balls") }],
		"s-783-1000-101-0": [{ type: "text", sub_type: "message", message: t("Stun"), check_func: () => firstboss_prepare_stun }],
		"s-783-1000-102-0": [
			{ type: "func", func: () => firstboss_prepare_stun = true },
			{ type: "func", func: () => firstboss_prepare_stun = false, delay: 2700 }
		],
		"s-783-1000-104-0": [{ type: "text", sub_type: "message", message: t("Jump") }],
		"s-783-1000-109-0": [{ type: "text", sub_type: "message", message: t("Push Back") }],
		"s-783-1000-119-0": [{ type: "text", sub_type: "message", message: t("Dodge (Heavy Attack)"), delay: 300 }],
		"s-783-1000-127-0": [{ type: "text", sub_type: "message", message: t("Many Attack") }],
		"s-783-1000-128-0": [{ type: "text", sub_type: "message", message: t("Lazer") }],
		"s-783-1000-130-0": "s-783-1000-128-0",
		"s-783-1000-301-0": [{ type: "text", sub_type: "message", message: t("Dodge"), delay: 1900 }],
		"s-783-1000-304-0": [{ type: "text", sub_type: "message", message: t("Pull") }],
		"s-783-1000-305-0": [{ type: "text", sub_type: "message", message: t("Triple Laser (Together)") }],

		// 2 BOSS
		"nd-783-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-783-2001": [ // Red book
			{ type: "func", func: ent => secondboss_red_book_loc = ent.loc },
			{ type: "func", func: () => secondboss_show_book_notify = true }
		],
		"ns-783-2002": [ // Blue book
			{ type: "func", func: ent => secondboss_blue_book_loc = ent.loc },
			{ type: "func", func: () => secondboss_show_book_notify = true }
		],
		"ns-783-2003": [ // Green book
			{ type: "func", func: ent => secondboss_green_book_loc = ent.loc },
			{ type: "func", func: () => secondboss_show_book_notify = true }
		],
		"ab-783-2000-78300222": [ // Red
			{ type: "event", check_func: () => secondboss_show_book_notify, args: [
				{ type: "text", sub_type: "message", message: t("Take Blue Book") },
				{ type: "text", sub_type: "notification", message: t("Take [c=#7777ff]Blue[/c] Book"), speech: false },
				{ type: "func", func: () => secondboss_show_book_notify = false }
			] }
		],
		"ab-783-2000-78300223": [ // Blue
			{ type: "event", check_func: () => secondboss_show_book_notify, args: [
				{ type: "text", sub_type: "message", message: t("Take Green Book") },
				{ type: "text", sub_type: "notification", message: t("Take [c=#77ff77]Green[/c] Book"), speech: false },
				{ type: "func", func: () => secondboss_show_book_notify = false }
			] }
		],
		"ab-783-2000-78300224": [ // Green
			{ type: "event", check_func: () => secondboss_show_book_notify, args: [
				{ type: "text", sub_type: "message", message: t("Take Red Book") },
				{ type: "text", sub_type: "notification", message: t("Take [c=#ff7777]Red[/c] Book"), speech: false },
				{ type: "func", func: () => secondboss_show_book_notify = false }
			] }
		],
		"s-783-2000-105-0": [{ type: "text", sub_type: "message", message: t("Whip (Dodge)") }],
		"s-783-2000-110-0": [{ type: "text", sub_type: "message", message: t("Front Attack (Dodge)") }],
		"s-783-2000-112-0": [{ type: "text", sub_type: "message", message: t("Push Back (Right)") }],
		"s-783-2000-114-0": [{ type: "text", sub_type: "message", message: t("Ground Hit (Dodge)") }],
		"s-783-2000-115-0": [{ type: "text", sub_type: "message", message: t("Push Back (Left)") }],
		"s-783-2000-119-0": [{ type: "text", sub_type: "message", message: t("Jump (Dodge)") }],
		"s-783-2000-120-0": [{ type: "text", sub_type: "message", message: t("Front Attack | Push Back") }],
		"s-783-2000-206-0": [{ type: "func", func: ent => secondboss_game_id_for_book = ent.gameId }], // prepare to take the book
		"s-783-2000-316-0": [{ type: "text", sub_type: "message", message: t("Fire AOE") }],
		"s-783-2000-306-0": [
			{ type: "text", sub_type: "message", message: t("Dodge | Out") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, -50, null, 375, 0, 5000] }
		],
		"s-783-2000-317-0": [{ type: "text", sub_type: "message", message: t("Water AOE") }],
		"s-783-2000-318-0": [
			{ type: "text", sub_type: "message", message: t("Dodge (Get out)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, -50, null, 700, 0, 7000] }
		],
		"s-783-2000-324-0": [{ type: "text", sub_type: "message", message: t("Dodge (Pull)"), delay: 2400 }],

		// 3 BOSS
		"nd-783-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-783-3000-106-0": [{ type: "text", sub_type: "message", message: t("Push (Tank)") }],
		"s-783-3000-110-0": [{ type: "text", sub_type: "message", message: t("Throw Front (Stun)") }],
		"s-783-3000-113-0": [{ type: "text", sub_type: "message", message: t("Push Back") }],
		"s-783-3000-114-0": [{ type: "text", sub_type: "message", message: t("Bait (Target)") }],
		"s-783-3000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: t("Throw Back (Stun)") },
			{ type: "spawn", func: "circle", args: [true, 553, 205, 410, null, 220, 0, 2000] }
		],
		"s-783-3000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: t("Throw Back (Stun)") },
			{ type: "spawn", func: "circle", args: [true, 553, 155, 410, null, 220, 0, 2000] }
		],
		"s-783-3000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: t("Throw (Target)") },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-783-3000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-783-3000-124-0": [{ type: "text", sub_type: "message", message: t("AoE (Dodge)") }],
		"s-783-3000-125-0": [{ type: "text", sub_type: "message", message: t("Hit | Frontal Stun") }],
		"s-783-3000-126-0": [
			{ type: "text", sub_type: "message", message: t("Frontal Stun") },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-783-3000-127-0": [
			{ type: "text", sub_type: "message", message: t("Back Hit") },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 350, null, 380, 0, 2000] }
		],
		"s-783-3000-129-0": [{ type: "text", sub_type: "message", message: t("Somersault | Back Hit") }],
		"s-783-3000-130-0": [
			{ type: "text", sub_type: "message", message: t("Back Hit (Bleed)") },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-783-3000-142-0": [{ type: "text", sub_type: "message", message: t("Frontal Combo") }],
		"s-783-3000-301-0": [
			{ type: "text", sub_type: "message", message: t("Thorns (Target)") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 2200 }
		],
		"s-783-3000-303-0": [
			{ type: "text", sub_type: "message", message: t("Right Safe") },
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 4000, true, null] }
		],
		"s-783-3000-306-0": [
			{ type: "text", sub_type: "message", message: t("Left Safe") },
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 4000, true, null] }
		],
		"s-783-3000-309-0": [{ type: "text", sub_type: "message", message: t("Debuff!!!") }],
		"s-783-3000-315-0": [
			{ type: "text", sub_type: "message", message: t("Dodge | Out") },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 0, null, 400, 0, 6000] }
		],
		"s-783-3003-411-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 3000] }]
	};
};