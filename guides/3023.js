// Akalath Quarantine
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang, t) => {
	guide.type = ES;

	let debuff = null; // default debuff

	return {
		// 1 BOSS
		"nd-3023-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Debuff removed
		"die": [{ type: "func", func: () => { debuff = null; } }],
		// Debuf added
		"ae-0-0-30231000": [{ type: "func", func: () => debuff = 1 }], // AoE (red)
		"ae-0-0-30231001": [{ type: "func", func: () => debuff = 2 }], // AoE (blue)
		"am-3023-1000-30231000": [{ type: "func", func: () => debuff = 1 }], // Red
		"am-3023-1000-30231001": [{ type: "func", func: () => debuff = 2 }], // Blue
		//
		"s-3023-1000-104-0": [{ type: "text", sub_type: "message", message: t("Random Jump") }],
		"s-3023-1000-105-0": [{ type: "text", sub_type: "message", message: t("Back") }],
		"s-3023-1000-110-0": [
			{ type: "text", sub_type: "message", message: t("Stun") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 175, 10, 260, 0, 6000] }
		],
		"s-3023-1000-111-0": [
			{ type: "text", sub_type: "message", message: t("Left Slash") },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 6, 302, 270, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 176, 502, 270, 200, 0, 2000] }
		],
		"s-3023-1000-112-0": [
			{ type: "text", sub_type: "message", message: t("Right Slash") },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 354, 302, 90, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 184, 502, 90, 200, 0, 2000] }
		],
		"s-3023-1000-113-0": "s-3023-1000-111-0",
		"s-3023-1000-114-0": "s-3023-1000-112-0",
		"s-3023-1000-115-0": [
			{ type: "text", sub_type: "message", message: t("Back Attack") },
			{ type: "spawn", func: "semicircle", args: [90, 280, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [90, 275, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [90, 270, 553, 0, 0, 10, 340, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 90, 150, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 270, 150, 0, 2000] }
		],
		"s-3023-1000-116-0": [
			{ type: "text", sub_type: "message", message: t("Kaia's Shield"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Thrall of Protection"), class_position: "mystic" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 560, 0, 6000] }
		],
		"s-3023-1000-3107-0": [
			{ type: "text", sub_type: "message", message: t("Smash") },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 4000] }
		],
		"s-3023-1000-3115-0": [
			{ type: "text", sub_type: "message", message: t("Spin") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-3023-1000-3116-0": [
			{ type: "text", sub_type: "message", message: t("Circles + Spin") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 5000] }
		],
		"s-3023-1000-3119-0": [ // red inside
			{ type: "text", sub_type: "message", message: t("OUT (red)"), check_func: () => debuff === 1, delay: 500 },
			{ type: "text", sub_type: "message", message: t("IN (blue)"), check_func: () => debuff === 2, delay: 500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 650, 0, 4000] }
		],
		"s-3023-1000-3220-0": [ // blue inside
			{ type: "text", sub_type: "message", message: t("IN (blue)"), check_func: () => debuff === 1, delay: 500 },
			{ type: "text", sub_type: "message", message: t("OUT (red)"), check_func: () => debuff === 2, delay: 500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 650, 0, 4000] }
		],

		// 2 BOSS
		"nd-3023-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3023-2000-164-0": [{ type: "text", sub_type: "message", message: t("Counter Attack (bleed)") }],
		"s-3023-2000-166-0": [{ type: "text", sub_type: "message", message: t("Turn-back") }],
		"s-3023-2000-175-0": [
			{ type: "text", sub_type: "message", message: t("Incoming Stun") },
			{ type: "text", sub_type: "message", delay: 1500, message: t("Dodge") }
		],
		"s-3023-2000-178-0": [{ type: "text", sub_type: "message", message: t("Scratching (bleed)") }],
		"s-3023-2000-181-0": [
			{ type: "text", sub_type: "message", message: t("Rock Throw") },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 4000] }
		],
		"s-3023-2000-182-0": [{ type: "text", sub_type: "message", message: t("Knockdown") }],
		"s-3023-2000-185-0": [
			{ type: "text", sub_type: "message", message: t("Big jump (Kaia's Shield)"), class_position: "priest" },
			{ type: "text", sub_type: "message", message: t("Big jump (Thrall of Protection)"), class_position: "mystic" },
			{ type: "text", sub_type: "alert", delay: 110000, message: t("Big jump soon..."), class_position: "heal" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 500, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 750, 0, 6000] }
		],
		"s-3023-2000-202-0": [
			{ type: "text", sub_type: "message", message: t("Backstab") },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 180, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 180, 500, 0, 3000] }
		],
		"s-3023-2000-207-0": [{ type: "text", sub_type: "message", message: t("Phantom x5 (bleed)") }],
		"s-3023-2000-212-0": [{ type: "text", sub_type: "message", message: t("Flash (bleed)") }]
	};
};