// Gossamer Vault
//
// made by michengs / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-3101-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3101-1000-104-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Stun Frontal") }],
		"s-3101-1000-112-0": [{ type: "text", sub_type: "message", message: t("Left + Right") }],
		"s-3101-1000-139-0": [
			{ type: "text", sub_type: "message", message: t("Back + Front (Fast)") },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 70, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 110, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 250, 800, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 2, 0, 290, 800, 0, 2500] }
		],
		"s-3101-1000-124-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Stun Frontal") }],
		"s-3101-1000-127-0": [
			{ type: "text", sub_type: "message", message: t("Back (Fast)") },
			{ type: "spawn", func: "vector", args: [553, 90, 139, 173, 800, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 139, -173, 800, 0, 2000] }
		],
		"s-3101-1000-131-0": [
			{ type: "text", sub_type: "message", message: t("Back Wave (Fast)") },
			{ type: "spawn", func: "vector", args: [553, 0, 100, 112, 800, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 100, -112, 800, 0, 2000] }
		],
		"s-3101-1000-132-0": [{ type: "text", sub_type: "message", message: t("Left + Right (Fast)") }],
		"s-3101-1000-133-0": [
			{ type: "text", sub_type: "message", message: t("Jump (Fast)") },
			{ type: "text", sub_type: "message", delay: 1400, message: t("Dodge!") }
		],
		"s-3101-1000-138-0": [
			{ type: "text", sub_type: "message", message: t("Jump P (Fast)") },
			{ type: "text", sub_type: "message", delay: 1400, message: t("Dodge!") }
		],
		"s-3101-1000-148-0": [
			{ type: "text", sub_type: "message", message: t("Right Hand (Flying)") },
			{ type: "spawn", func: "circle", args: [false, 553, 20, 150, 10, 320, 0, 4000] }
		],
		"s-3101-1000-149-0": [
			{ type: "text", sub_type: "message", message: t("Left Hand (Flying)") },
			{ type: "spawn", func: "circle", args: [false, 553, 340, 150, 10, 320, 0, 4000] }
		],
		"s-3101-1000-151-0": [{ type: "text", sub_type: "message", message: t("Stun Attack!") }],
		"s-3101-1000-313-0": [
			{ type: "text", sub_type: "message", message: t("Circles (Slow)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3101-1000-314-0": [
			{ type: "text", sub_type: "message", message: t("Circles (Fast)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],

		// 2 BOSS
		"nd-3101-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3101-2000-108-0": [{ type: "text", sub_type: "message", message: t("Back Attack!") }],
		"s-3101-2000-150-0": [{ type: "text", sub_type: "message", message: t("Phantom") }],
		"s-3101-2000-228-0": [{ type: "text", sub_type: "message", message: t("Team Up") }],
		"s-3101-2000-230-0": [
			{ type: "text", sub_type: "message", message: t("AOE") },
			{ type: "text", sub_type: "message", delay: 1300, message: t("Dodge!") }
		],
		"s-3101-2000-231-0": [
			{ type: "text", sub_type: "message", message: t("Out Safe") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3101-2000-232-0": [
			{ type: "text", sub_type: "message", message: t("In Safe") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3101-2000-235-0": [{ type: "text", sub_type: "message", message: t("Debuffs") }],
		"s-3101-2000-236-0": [{ type: "text", sub_type: "message", message: t("Counter Attack (Bait)") }]
	};
};