// Aesir's End - NM (Guide)
//
// made by Mate

module.exports = (dispatch, handlers, guide, lang, t) => {

	// let print_stun = true;

	return {
		"nd-2803-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"s-2803-1000-1-0": [{ type: "text", sub_type: "message", message: t("Double Base Slash") }],
		"s-2803-1000-2-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-2803-1000-3-0": [{  type: "text", class_position: "tank", sub_type: "message", message: t("Knock Up") }],
		"s-2803-1000-4-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-2803-1000-5-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Stun") }],
		"s-2803-1000-6-0": [{ type: "text", sub_type: "message", message: t("Double Spinning") }],
		"s-2803-1000-7-0": [
			{ type: "text", sub_type: "message", message: t("Pull + KD"), class_position: ["tank", "dps"]},
			{ type: "text", sub_type: "message", message: t("Kaia"), class_position: ["mystic", "priest"]},
		],
		"s-2803-1000-8-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Tank Buster") }],
		"s-2803-1000-9-0": [{ type: "text", sub_type: "message", message: t("DODGE") }],
		"s-2803-1000-10-0": [{ type: "text", sub_type: "message", message: t("Spinning DODGE") }],
		//"s-2803-1000-111-0": [{ type: "text", sub_type: "message", message: t("Roll Back") }],
		//"s-2803-1000-112-0": [{ type: "text", sub_type: "message", message: t("Gungnir") }],
		"s-2803-1000-113-0": [{ type: "text", sub_type: "message", message: t("Overhead Slash") }],
		"s-2803-1000-101-0": [{ type: "text", sub_type: "message", message: t("SHEILD") }],
		"s-2803-1000-102-0": [{ type: "text", sub_type: "message", message: t("PLAGUE/REGRESS") }],
		//"s-2803-1000-303-0": [{ type: "text", sub_type: "message", message: t("Wipe Calamity Strike - (Stage1)") }],
		//"s-2803-1000-304-0": [{ type: "text", sub_type: "message", message: t("Wipe Calamity Strike - (Stage2)") }],
		"s-2803-1000-305-0": [{ type: "text", sub_type: "message", message: t("RuneBurst") }],
		//"s-2803-1000-306-0": [{ type: "text", sub_type: "message", message: t("Ragnarok") }],
		//"s-2803-1000-7-0": [{ type: "text", sub_type: "message", message: t("Glaive Follow") }],
		//"s-2803-1000-308-0": [{ type: "text", sub_type: "message", message: t("Shinning Slash") }],
		//"s-2803-1000-309-0": [{ type: "text", sub_type: "message", message: t("Shinning AOE") }],
		//"s-2803-1000-310-0": [{ type: "text", sub_type: "message", message: t("Twilight 1") }],
		//"s-2803-1000-311-0": [{ type: "text", sub_type: "message", message: t("Twilight 2") }],
		//"s-2803-1000-312-0": [{ type: "text", sub_type: "message", message: t("Twilight 3") }],
		//"s-2803-1000-313-0": [{ type: "text", sub_type: "message", message: t("Twilight 4") }],
		//"s-2803-1000-315-0": [{ type: "text", sub_type: "message", message: t("Pizza") }],

		/*"s-2803-1000-315-0": [
			{ type: "text", sub_type: "message", message: t("Pizza") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: t("Dodge!") }
		],

		//"s-2803-1000-316-0": [{ type: "text", sub_type: "message", message: t("Pizza - (Inverted)") }],

		/*"s-2803-1000-316-0": [
			{ type: "text", sub_type: "message", message: t("Pizza - (Inverted)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: t("Dodge!") }
		],

		//"s-2803-1000-401-0": [{ type: "text", sub_type: "message", message: t("Valk-Wait") }],
		//"s-2803-1000-501-0": [{ type: "text", sub_type: "message", message: t("Last-Stand-Valk") }],
		//"s-2803-1000-1-0": [{ type: "text", sub_type: "message", message: t("Double Base Slash") }],
		//"s-2803-1000-2-0": [{ type: "text", sub_type: "message", message: t("Spin & Slash") }],
		//"s-2803-1000-3-0": [{ type: "text", sub_type: "message", message: t("Leaping Strike") }],
		//"s-2803-1000-2104-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		//"s-2803-1000-2105-0": [{ type: "text", sub_type: "message", message: t("BloodFlower") }],
		//"s-2803-1000-2106-0": [{ type: "text", sub_type: "message", message: t("Slash & Double Spinning Death") }],
		//"s-2803-1000-2107-0": [{ type: "text", sub_type: "message", message: t("DreamSlash") }],
		//"s-2803-1000-2108-0": [{ type: "text", sub_type: "message", message: t("Ground Bash") }],
		//"s-2803-1000-2109-0": [{ type: "text", sub_type: "message", message: t("Glaive Strike") }],
		//"s-2803-1000-2110-0": [{ type: "text", sub_type: "message", message: t("Spinning Death 3rd Hit") }],
		//"s-2803-1000-2112-0": [{ type: "text", sub_type: "message", message: t("Gungnir") }],
		//"s-2803-1000-2113-0": [{ type: "text", sub_type: "message", message: t("Overhead Slash") }],
		//"s-2803-1000-3001-0": [{ type: "text", sub_type: "message", message: t("DreamSlash") }],
		//"s-2803-1000-3002-0": [{ type: "text", sub_type: "message", message: t("RuneBurst") }],
		//"s-2803-1000-3003-0": [{ type: "text", sub_type: "message", message: t("DreamSlash-Pizza") }],

		"s-2803-1000-315-0": [
			{ type: "text", sub_type: "message", message: t("Pizza") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: t("Dodge!") }
		],

		//"am-3030-1000-99000580": [{ type: "text", sub_type: "message", message: t("Hit Thorns") }],

		"nd-3030-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-2000-309-0": [
			{ type: "text", sub_type: "message", message: t("AOE circles | Stun"), check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 4000 }
		],
		"s-3030-2000-105-0": [
			{ type: "text", sub_type: "message", message: t("Laser Frontal (Stun)"), check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 15000 }
		],*/
	};
};