// Gossamer Vault (Hard)
//
// made by michengs / ITunk

module.exports = (dispatch, handlers, guide, lang, t) => {
	let boss = null;

	return {
		// 1 BOSS
		"nd-3201-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//"s-3201-1000-103-0": [{ type: "text", class_position:"tank", sub_type: "message", message: t("Dodge") }],
		"s-3201-1000-104-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Stun attack") }],
		"s-3201-1000-107-0": [
			{ type: "text", sub_type: "message", message: t("Back") },
			{ type: "text", sub_type: "message", delay: 2250, message: t("Pull") },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 3000] }
		],
		"s-3201-1000-111-0": [
			{ type: "text", sub_type: "message", message: t("Back Wave") },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 3000] }
		],
		//"s-3201-1000-112-0": [{ type: "text", sub_type: "message", message: t("Left + Right") }],
		"s-3201-1000-113-0": [
			{ type: "text", sub_type: "message", message: t("Jump (Slow)") },
			{ type: "text", sub_type: "message", delay: 1500, message: t("Pull") }
		],
		"s-3201-1000-118-0": [
			{ type: "text", sub_type: "message", message: t("Jump (Slow)") },
			{ type: "text", sub_type: "message", delay: 1500, message: t("Pull") }
		],
		"s-3201-1000-119-0": [
			{ type: "text", sub_type: "message", delay: 1000, message: t("Back + Front") },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }
		],
		//"s-3201-1000-121-0": [{ type: "text", class_position:"tank", sub_type: "message", message: t("Right") }],
		//"s-3201-1000-122-0": [{ type: "text", class_position:"tank", sub_type: "message", message: t("Left") }],
		"s-3201-1000-124-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Stun attack") }],
		"s-3201-1000-127-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message: t("Back") },
			{ type: "text", class_position: "heal", sub_type: "message", message: t("Back") },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 3000] }
		],
		//"s-3201-1000-128-0": [{ type: "text", class_position:"tank", sub_type: "message", message: t("Triple Attack") }],
		"s-3201-1000-131-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message: t("Back Wave") },
			{ type: "text", class_position: "heal", sub_type: "message", message: t("Back Wave") },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 3000] }
		],
		//"s-3201-1000-132-0": [{ type: "text", sub_type: "message", message: t("Left + Right") }],
		"s-3201-1000-133-0": [{ type: "text", sub_type: "message", delay: 500, message: t("Jump (Fast)") }],
		"s-3201-1000-138-0": [{ type: "text", sub_type: "message", delay: 500, message: t("Jump P (Fast)") }],
		"s-3201-1000-139-0": [
			{ type: "text", sub_type: "message", message: t("Back + Front (Fast)") },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }
		],
		"s-3201-1000-143-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message: t("Left > Right") },
			{ type: "text", class_position: "dps", sub_type: "message", message: t("Right > Left") },
			{ type: "text", class_position: "heal", sub_type: "message", message: t("Right > Left") },
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2715, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2800, 4175, true, null] }, // 6
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] } // 7
		],
		"s-3201-1000-145-0": [
			{ type: "text", class_position: "tank", sub_type: "message", message: t("Left > Right") },
			{ type: "text", class_position: "dps", sub_type: "message", message: t("Right > Left") },
			{ type: "text", class_position: "heal", sub_type: "message", message: t("Right > Left") },
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }, // 7
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2000, true, null] }, // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2500, 5000, true, null] } // 6
		],
		"s-3201-1000-148-0": [
			{ type: "text", sub_type: "message", message: t("Right Hand (Flying)") },
			{ type: "spawn", func: "circle", args: [false, 553, 20, 150, 10, 320, 0, 4000] }
		],
		"s-3201-1000-149-0": [
			{ type: "text", sub_type: "message", message: t("Left Hand (Flying)") },
			{ type: "spawn", func: "circle", args: [false, 553, 340, 150, 10, 320, 0, 4000] }
		],
		"s-3201-1000-151-0": [{ type: "text", sub_type: "message", message: t("Stun attack") }],
		"s-3201-1000-305-0": [{ type: "text", sub_type: "message", message: t("Pizza") }],
		"s-3201-1000-311-0": [
			{ type: "text", sub_type: "message", message: t("Slow") },
			{ type: "text", sub_type: "message", delay: 4000, message: t("Pull") }
		],
		"s-3201-1000-312-0": [
			{ type: "text", sub_type: "message", message: t("Fast") },
			{ type: "text", sub_type: "message", delay: 2000, message: t("Pull") }
		],
		"s-3201-1000-313-0": [
			{ type: "text", sub_type: "message", message: t("Circles (Slow)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3201-1000-314-0": [
			{ type: "text", sub_type: "message", message: t("Circles (Fast)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],

		// 2 BOSS
		"ns-3201-2000": [{ type: "func", func: () => boss = null }],
		"nd-3201-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"am-3201-320126-32010224": [
			{ type: "func", func: () => boss = 1 },
			{ type: "text", delay: 52000, sub_type: "notification", message: t("True Debuff in 5 seconds") },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 1, func: () => boss = null },
				{ type: "text", check_func: () => boss === 1, sub_type: "message", message: t("Debuff reload") }
			] }
		],
		"am-3201-2000-32010220": [
			{ type: "func", func: () => { boss = 0; } },
			{ type: "text", delay: 52000, sub_type: "notification", message: t("False Debuff in 5 seconds") },
			{ type: "event", delay: 80000, args: [
				{ type: "func", check_func: () => boss === 0, func: () => boss = null },
				{ type: "text", check_func: () => boss === 0, sub_type: "message", message: t("Debuff reload") }
			] }
		],
		"am-3201-320121-32010222": [{ type: "text", sub_type: "notification", message: t("Spike in 5 seconds") }],
		"h-3201-2000-81": [{ type: "text", sub_type: "message", message: t("80%") }],
		"h-3201-2000-76": [{ type: "text", sub_type: "message", message: t("75%") }],
		"s-3201-2000-108-0": [{ type: "text", sub_type: "message", message: t("Back Attack!") }],
		"s-3201-2000-150-0": [{ type: "text", sub_type: "message", message: t("Phantom") }],
		"s-3201-2000-228-0": [
			{ type: "text", sub_type: "message", message: t("Team Up") },
			{ type: "text", sub_type: "message", delay: 3500, message: t("Dodge") }
		],
		"s-3201-2000-230-0": [{ type: "text", sub_type: "message", message: t("AOE") }],

		"s-3201-2000-231-0": [
			{ type: "text", sub_type: "message", message: t("Out Safe") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-232-0": [{ type: "text", sub_type: "message", message: t("In Safe") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3201-2000-236-0": [{ type: "text", sub_type: "message", message: t("Counter Attack (Bait)") }],
		"s-3201-2000-238-0": [
			{ type: "text", sub_type: "message", message: t("Out > In") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-239-0": [
			{ type: "text", sub_type: "message", message: t("In > Out") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		]
	};
};