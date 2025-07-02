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
				handlers.text({ sub_type: "message", message: "Put banana to the tree", message_RU: "Положить банан к дереву", message_zh: "把香蕉放到树下" });
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
			{ type: "text", sub_type: "message", message: "AOE Stun (Dodge)", message_RU: "АОЕ стан (эвейд)", message_zh: "范围眩晕闪避" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 125, null, 250, 0, 2000] }
		],
		"s-794-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_RU: "Прыжок (эвейд)", message_zh: "跳跃闪避" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 2500, 2500] }
		],
		"s-794-1000-115-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", message_zh: "闪避", delay: 1000 }],
		"s-794-1000-119-0": [{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид назад", message_zh: "击退" }],
		"s-794-1000-315-0": [{ type: "text", sub_type: "message", message: "In", message_RU: "К нему", message_zh: "靠近" }],
		"ae-0-0-7941002": [{ type: "text", sub_type: "message", message: "Eye (boss to banana)", message_RU: "Глазик (подвести босса к банану)", message_zh: "眼睛带王去香蕉" }],
		"qb-794-1000-994008": [{ type: "text", sub_type: "message", message: "Push (Kaia)", message_RU: "Откид (кайа)", message_zh: "推开套盾" }],

		// 2 BOSS
		"s-794-2000-111-0": [{ type: "text", sub_type: "message", message: "Bait (2 stones)", message_RU: "Байт (2 камня)", message_zh: "诱导两块石头" }],
		"s-794-2000-112-0": [{ type: "text", sub_type: "message", message: "Bait (3 stones)", message_RU: "Байт (3 камня)", message_zh: "诱导三块石头" }],
		"s-794-2000-106-0": [{ type: "text", sub_type: "message", message: "Bait (Rock)", message_RU: "Байт (глыба)", message_zh: "诱导落石" }],
		"s-794-2000-307-0": [{ type: "text", sub_type: "message", message: "Stones", message_RU: "Камни", message_zh: "石头" }],
		"ae-0-0-7942006": [{ type: "text", sub_type: "message", message: "Stone on you", message_RU: "Камень на тебе", message_zh: "石头点你", delay: 1000 }],
		"s-794-2000-117-0": [{ type: "text", sub_type: "message", message: "Inward Wave", message_RU: "Волна к нему", message_zh: "向内波", delay: 1000 }],
		"s-794-2000-118-0": [{ type: "text", sub_type: "message", message: "Outward Wave", message_RU: "Волна от него", message_zh: "向外波" }],
		"s-794-2000-114-0": [{ type: "text", sub_type: "message", message: "Together", message_RU: "Собраться", message_zh: "集合" }],
		"s-794-2000-110-0": [{ type: "text", sub_type: "message", message: "Hit in dd", message_RU: "Удар в дд", message_zh: "打近战" }],

		// 3 BOSS
		"nd-794-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-794-3002": [{ type: "func", func: ent => road_from_gameIds.add(ent.gameId) }], // Колба с мобом
		"nd-794-3002": [{ type: "func", func: ent => road_from_gameIds.delete(ent.gameId), delay: 5000 }],
		"ns-794-3004": [{ type: "func", func: ent => blue_vaccine_loc = ent.pos }], // Синий
		"ns-794-3005": [{ type: "func", func: ent => red_vaccine_loc = ent.pos }], // Красный
		"s-794-3000-103-0": [{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид назад", message_zh: "击退" }],
		"s-794-3000-107-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_RU: "Удар вперед (эвейд)", message_zh: "前方攻击闪避" }
		],
		"s-794-3000-108-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -90, 500, 0, 3000] },
			{ type: "text", sub_type: "message", message: "Back (Dodge)", message_RU: "Удар назад (эвейд)", message_zh: "背后攻击闪避" }
		],
		"s-794-3000-104-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт", message_zh: "诱导" }],
		"s-794-3000-111-0": [{ type: "text", sub_type: "message", message: "Out Safe", message_RU: "Снаружи сейв", message_zh: "外面安全" }],
		"s-794-3000-112-0": [{ type: "text", sub_type: "message", message: "In Safe", message_RU: "Внутри сейв", message_zh: "里面安全" }],
		"s-794-3000-113-0": [{ type: "text", sub_type: "message", message: "Donut (In)", message_RU: "Бублик (к нему)", message_zh: "环形靠近" }],
		"s-794-3000-114-0": [{ type: "text", sub_type: "message", message: "Donut (Out)", message_RU: "Бублик (между)", message_zh: "环形出去" }],
		"s-794-3000-122-0": [{ type: "text", sub_type: "message", message: "Gather!", message_RU: "Собраться!", message_zh: "集合！" }],
		"s-794-3000-125-0": [{ type: "text", sub_type: "message", message: "Bait (Puddle)", message_RU: "Байт (лужа)", message_zh: "诱导毒圈" }],
		"s-794-3000-315-0": [
			{ type: "text", sub_type: "message", message: "Remove puddles from paths", message_RU: "Отвести лужи от дорожек", message_zh: "带毒圈远离路径" },
			{ type: "func", func: () => spawn_road(blue_vaccine_loc) }
		],
		"s-794-3000-316-0": [
			{ type: "text", sub_type: "message", message: "Remove puddles from paths", message_RU: "Отвести лужи от дорожек", message_zh: "带毒圈远离路径" },
			{ type: "func", func: () => spawn_road(red_vaccine_loc) }
		]
	};
};