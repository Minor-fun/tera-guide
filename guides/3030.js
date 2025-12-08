// Commander's Residence
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang, t) => {

	let print_stun = true;

	return {
		// Maknakh
		"nd-3030-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-1000-114-0": [{ type: "text", sub_type: "message", message: t("Push (Repel)") }],
		"s-3030-1000-303-0": [{ type: "text", sub_type: "message", message: t("Meteors AOE") }],
		"s-3030-1000-120-0": [{ type: "text", sub_type: "message", message: t("Push Front") }],
		"s-3030-1000-104-0": [{ type: "text", sub_type: "message", message: t("Fire Front") }],
		"s-3030-1000-113-0": [{ type: "text", sub_type: "message", message: t("Circle AOE Front") }],
		"s-3030-1000-108-0": [{ type: "text", sub_type: "message", message: t("Frontal Thorns") }],
		"s-3030-1000-305-0": [{ type: "text", sub_type: "message", message: t("Circle AOE Front") }],
		"s-3030-1000-301-0": [{ type: "text", sub_type: "message", message: t("Hit Frontal | Stun") }],
		"s-3030-1000-307-0": [{ type: "text", sub_type: "message", message: t("Tail Stun") }],
		"s-3030-1000-112-0": [{ type: "text", sub_type: "message", message: t("Jump") }],
		"s-3030-1000-105-0": [{ type: "text", sub_type: "message", message: t("Front Fire") }],
		"am-3030-1000-99000580": [{ type: "text", sub_type: "message", message: t("Hit Thorns") }],

		// LB-1
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
		],
		"s-3030-2000-103-0": [{ type: "text", sub_type: "message", message: t("Hit Frontal") }],
		"s-3030-2000-101-0": [{ type: "text", sub_type: "message", message: t("Claws Front") }],
		"s-3030-2000-104-0": [{ type: "text", sub_type: "message", message: t("Front Attack | Stun") }],
		"s-3030-2000-112-0": [{ type: "text", sub_type: "message", message: t("Attack Behind (Fire)") }],
		"s-3030-2000-305-0": [{ type: "text", sub_type: "message", message: t("Circles AOE") }],
		"s-3030-2000-109-0": [{ type: "text", sub_type: "message", message: t("Laser Back | Stun") }],
		"s-3030-2000-301-0": [{ type: "text", sub_type: "message", message: t("Turn Debuff") }]
	};
};