// Grotto of Lost Souls (Hard)
//
// made by michengs / HSDN / Calvary

module.exports = (dispatch, handlers, guide, lang) => {

	let color = 0;
	let debuff = 0;
	let print_wave = true;
	let awakening_one = false;
	let awakening_two = false;
	let stack_level = 0;
	let enrage = false;

	const is_mt = dispatch._mod.connection.metadata.serverList[dispatch._mod.serverId].name.includes("MT");

	function stacks_level_event() {
		if (!awakening_one) return;

		stack_level++;

		if ((!awakening_two && stack_level > 0) || (awakening_two && stack_level > 2)) {
			handlers.text({
				sub_type: "notification",
				message: t("Stack {stack_level}", { stack_level: stack_level }),
				speech: false
			});
		}

		if (stack_level === 4) {
			handlers.text({
				sub_type: "alert",
				message: t("Explosion soon")
			});
		}
	}

	return {
		// 1 BOSS
		"nd-982-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-982-1000-106-0": [{ type: "text", class_position: "tank", sub_type: "message", message: t("Heavy") }],
		"s-982-1000-107-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message: t("Pushback") },
			{ type: "text", class_position: "heal", sub_type: "message", message: t("Pushback (Kaia)") },
			{ type: "spawn", func: "vector", args: [553, 90, 30, 140, 600, 1000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 30, -140, 600, 1000, 2000] }
		],
		"s-982-1000-108-0": [
			{ type: "text", sub_type: "message", message: t("Bait Front (Flying)") }
		],
		"s-982-1000-108-1": [
			{ type: "spawn", func: "vector", args: [553, 90, 140, 5, 620, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 355, 620, 0, 1500] }
		],
		"s-982-1000-109-0": [{ type: "text", sub_type: "message", message: t("Rocks (Small)") }],
		"s-982-1000-110-0": [{ type: "text", sub_type: "message", message: t("Rocks (Large)") }],
		"s-982-1000-111-0": [
			{ type: "text", sub_type: "message", message: t("Stun (Dodge)"), delay: 1500 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 50, null, 350, 1500, 2000] }
		],
		"s-982-1000-113-0": [{ type: "text", sub_type: "message", message: t("Thorns (Bleed)") }],
		"s-982-1000-116-0": [
			{ type: "text", sub_type: "message", message: t("AoE") },
			{ type: "text", sub_type: "message", message: t("3") },
			{ type: "text", sub_type: "message", delay: 500, message: t("2") },
			{ type: "text", sub_type: "message", delay: 1000, message: t("1") },
			{ type: "text", sub_type: "message", delay: 1500, message: t("Dodge") }
		],
		"s-982-1000-301-0": [
			{ type: "text", sub_type: "message", message: t("Flower Stuns") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 2000 }
		],
		"s-982-1000-307-0": [{ type: "text", sub_type: "message", message: t("Cage (Don't move)") }],
		"s-982-1032-349-0": [{ type: "text", sub_type: "message", message: t("Dodge")}],
		// Flowers mech
		"ab-982-1003-98200161": [
			{ type: "text", sub_type: "message", message: t("Green") },
			{ type: "func", func: () => color = 1 }
		],
		"ab-982-1003-98200162": [
			{ type: "text", sub_type: "message", message: t("Violet") },
			{ type: "func", func: () => color = 2 }
		],
		"ae-0-0-98200148": [{ type: "func", func: () => debuff = 1 }], // green
		"ae-0-0-98200149": [{ type: "func", func: () => debuff = 2 }], // violet
		"s-982-1000-201-0": [{ type: "text", sub_type: "alert", message: t("Change Debuff"), check_func: () => debuff !== 0 && color !== debuff, delay: 5000 }],
		"s-982-1000-309-0": [
			{ type: "text", sub_type: "message", message: t("One Flower") },
			{ type: "text", sub_type: "alert", message: t("Dodge the flower!"), check_func: () => color === debuff, delay: 1500 }
		],
		"s-982-1000-310-0": [
			{ type: "text", sub_type: "message", message: t("Two Flowers") },
			{ type: "text", sub_type: "alert", message: t("Dodge ONE flower!"), check_func: () => color !== debuff, delay: 1500 }
		],
		"s-982-1000-312-0": [
			{ type: "text", sub_type: "message", message: t("Break Golden Flower") },
			{ type: "text", sub_type: "alert", message: t("Dodge the Flower!"), check_func: () => color === debuff, delay: 1500 }
		],
		"s-982-1000-308-0": [
			{ type: "func", func: () => color = 0 },
			{ type: "func", func: () => debuff = 0 }
		],

		// 2 BOSS
		"nd-982-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-982-2000-105-0": [{ type: "text", sub_type: "message", message: t("Spin") }],
		"s-982-2000-108-0": [{ type: "text", sub_type: "message", message: t("Dodge. Shot Forward"), delay:  500 }],
		"s-982-2000-109-0": [{ type: "text", sub_type: "message", message: t("Wave Forward") }],
		"s-982-2000-112-0": [{ type: "text", sub_type: "message", message: t("Kick Forward") }],
		"s-982-2000-113-0": [
			{ type: "text", sub_type: "message", message: t("Stun (AoE)") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 310, 0, 3000] }
		],
		"s-982-2000-114-0": [
			{ type: "text", sub_type: "message", message: t("Get In") },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 600, 0, 5000] }
		],
		"s-982-2000-116-0": [
			{ type: "text", sub_type: "message", message: t("Front | Back") },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 180, 0, 90, 500, 0, 5000] }
		],
		"s-982-2000-117-0": "s-982-2000-116-0",
		"s-982-2000-301-0": [
			{ type: "text", sub_type: "message", message: t("Get Out | Dodge") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 3700 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-982-2000-302-0": [
			{ type: "text", sub_type: "message", message: t("Get In | Dodge") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 3700 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-982-2000-303-0": [{ type: "text", sub_type: "message", message: t("Waves") }],
		"s-982-2000-307-0": [{ type: "text", sub_type: "message", message: t("Target") }],
		"s-982-2000-307-2": [{ type: "text", sub_type: "message", message: t("Dodge") }],

		// 3 BOSS
		"nd-982-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => enrage = false }
		],
		"ns-982-3000": [{ type: "func", func: () => enrage = false }],
		"rb-982-3000": [{ type: "func", func: () => enrage = true }],
		"re-982-3000": [{ type: "func", func: () => enrage = false }],
		"h-982-3000-99": [
			{ type: "func", func: () => print_wave = true },
			{ type: "func", func: () => awakening_one = false },
			{ type: "func", func: () => awakening_two = false },
			{ type: "func", func: () => stack_level = 0 }
		],
		"h-982-3000-90": [{ type: "text", sub_type: "message", message: t("90%"), check_func: () => is_mt }],
		"h-982-3000-80": [{ type: "text", sub_type: "message", message: t("80%"), check_func: () => !is_mt }],
		"h-982-3000-45": [{ type: "text", sub_type: "message", message: t("45%"), check_func: () => is_mt }],
		"h-982-3000-30": [{ type: "text", sub_type: "message", message: t("30%"), check_func: () => !is_mt }],
		"s-982-3000-109-0": [{ type: "text", sub_type: "message", message: t("Front Throw (Target)") }],
		"s-982-3000-134-0": [{ type: "text", sub_type: "message", message: t("Front Throw (Target)") }],
		"s-982-3000-118-0": [{ type: "text", sub_type: "message", message: t("Front Triple") }],
		"s-982-3000-143-0": [
			{ type: "text", sub_type: "message", message: t("Left Rear") },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 330, null, 280, 0, 3000] }
		],
		"s-982-3000-145-0": "s-982-3000-143-0",
		"s-982-3000-144-0": [
			{ type: "text", sub_type: "message", message: t("Right Rear") },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 330, null, 280, 0, 3000] }
		],
		"s-982-3000-147-0": "s-982-3000-144-0",
		"s-982-3000-146-0": [
			{ type: "text", sub_type: "message", message: t("Pulses Left") },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, is_mt ? 4200 : 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-982-3000-154-0": [
			{ type: "text", sub_type: "message", message: t("Pulses Left") },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-982-3000-148-0": [
			{ type: "text", sub_type: "message", message: t("Pulses Right") },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, is_mt ? 4200 : 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-982-3000-155-0": [
			{ type: "text", sub_type: "message", message: t("Pulses Right") },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-982-3000-161-0": [
			{ type: "text", sub_type: "message", message: t("Front | Back") },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-982-3000-162-0": [
			{ type: "text", sub_type: "message", message: t("Front | Back") },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-982-3000-213-0": [{ type: "text", sub_type: "message", message: t("Tail") }],
		"s-982-3000-215-0": [{ type: "text", sub_type: "message", message: t("Tail (Combo)") }],
		"s-982-3000-139-0": [
			{ type: "text", sub_type: "message", message: `Wave + Wing (Left Safe)`, check_func: () => print_wave && !enrage },
			{ type: "text", sub_type: "message", message: `Wave Fast + Wing (Left Safe)`, check_func: () => print_wave && enrage },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-982-3000-139-1": "s-982-3000-139-0",
		"s-982-3000-139-2": "s-982-3000-139-0",
		"s-982-3000-150-0": "s-982-3000-139-0", //
		"s-982-3000-150-1": "s-982-3000-139-0",
		"s-982-3000-150-2": "s-982-3000-139-0",
		"s-982-3000-141-0": [
			{ type: "text", sub_type: "message", message: t("Wave + Wing (Right Safe)"), check_func: () => print_wave && !enrage },
			{ type: "text", sub_type: "message", message: t("Wave Fast + Wing (Right Safe)"), check_func: () => print_wave && enrage },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-982-3000-141-1": "s-982-3000-141-0",
		"s-982-3000-141-2": "s-982-3000-141-0",
		"s-982-3000-152-0": "s-982-3000-141-0", //
		"s-982-3000-152-1": "s-982-3000-141-0",
		"s-982-3000-152-2": "s-982-3000-141-0",
		"s-982-3000-300-0": [
			{ type: "text", sub_type: "message", message: t("3") },
			{ type: "text", sub_type: "message", delay: 300, message: t("2") },
			{ type: "text", sub_type: "message", delay: 600, message: t("1") },
			{ type: "text", sub_type: "message", delay: 800, message: t("Dodge! (Awakening 1)") }, // <80%
			{ type: "func", func: () => awakening_one = true },
			{ type: "func", func: () => stack_level = 0 }
		],
		"s-982-3000-399-0": [
			{ type: "text", sub_type: "message", message: t("3") },
			{ type: "text", sub_type: "message", delay: 400, message: t("2") },
			{ type: "text", sub_type: "message", delay: 800, message: t("1") },
			{ type: "text", sub_type: "message", delay: 1200,message: t("Dodge! (Awakening 2)")}, // <30%
			{ type: "func", func: () => awakening_two = true },
			{ type: "func", func: () => stack_level = 0 }
		],
		"s-982-3000-360-0": [
			{ type: "text", sub_type: "message", message: t("Dodge! (Explosion)") },
			{ type: "func", func: () => stack_level = 0 }
		],
		"ab-982-3000-98200399": [{ type: "func", func: stacks_level_event }],
		"s-982-3000-351-0": [
			{ type: "text", sub_type: "message", message: t("Stones") },
			{ type: "text", sub_type: "message", message: t("Dodge"), delay: 2000 },
			{ type: "text", sub_type: "message", message: t("Line up to the plate"), delay: 4000 },
			{ type: "text", sub_type: "message", message: t("Kaia!"), delay: 9500 }
		],
		"s-982-3011-352-0": [
			{ type: "text", sub_type: "message", message: t("Break Sphere"), check_func: () => !awakening_two },
			{ type: "text", sub_type: "message", message: t("Break Three Spheres"), check_func: () => awakening_two }
		],
		"s-982-3012-353-0": "s-982-3011-352-0"
	};
};