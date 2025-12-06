// Beach River Outpost
//
// made by Boguslaw, False
//feel free to improve :)

module.exports = (dispatch, handlers, guide, lang) => {

	const { player } = dispatch.require.library;
	
	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 428131012) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: t("Orb on you fast!!!") });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: t("Orb on {name}", { name: member.name })
					});
				}
			}
		}
	});

	return {
		"nd-2813-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-2813-1204": [{ type: "text", sub_type: "message", message: t("Cross waves") }],
		"ns-2813-1201": "ns-2813-1204",
		"s-2813-1000-501-0": [
			{ type: "text", sub_type: "message", message: t("Donuts Out-In") },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 5000] }
		],
		"s-2813-1000-502-0": [
			{ type: "text", sub_type: "message", message: t("Donuts Out-In-Out") },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 8000] }
		],
		"s-2813-1000-503-0": [
			{ type: "text", sub_type: "message", message: t("Donuts In-Out") },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 5000] }
		],
		"s-2813-1000-504-0": [
			{ type: "text", sub_type: "message", message: t("Donuts In-Out-In") },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 8000] }
		],
		"s-2813-1000-505-0": [{ type: "text", sub_type: "message", message: t("Push to win mechanic") }],
		"s-2813-1000-506-0": [{ type: "text", sub_type: "message", message: t("Block"), class_position: "tank" }],

		"s-2813-1000-510-0": [{ type: "text", sub_type: "message", message: t("Take orb for shield") }],
		"s-2813-1000-511-0": [{ type: "text", sub_type: "message", message: t("Front waves"), class_position: "tank" }],
		"s-2813-1000-512-0": [{ type: "text", sub_type: "message", message: t("Two wide waves front"), class_position: "tank" }],
		"s-2813-1000-513-0": [{ type: "text", sub_type: "message", message: t("Gather") }],
		"s-2813-1000-515-0": [{ type: "text", sub_type: "message", message: t("Spread") }],
		"s-2813-1000-517-0": [{ type: "text", sub_type: "message", message: t("Frost Sphere front"), class_position: "tank" }],
		"s-2813-1000-518-0": [{ type: "text", sub_type: "message", message: t("Wave back") }],
		"s-2813-1000-519-0": [{ type: "text", sub_type: "message", message: t("Big hit front"), class_position: "tank" }],
		"s-2813-1000-521-0": [{ type: "text", sub_type: "message", message: t("Ice Pillar Front"), class_position: "tank" }],
		"s-2813-1000-522-0": [{ type: "text", sub_type: "message", message: t("Two waves back"), class_position: ["dps", "heal"] }],
		"s-2813-1000-706-0": [{ type: "text", sub_type: "message", message: t("Dodge!"), class_position: "tank" }],
		"s-2813-1000-606-0": [{ type: "text", sub_type: "message", message: t("Eye! 4 hits block - 5th Dodge"), class_position: "tank" }]
	};
};