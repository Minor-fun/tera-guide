// Corrupted Skynest
//
// made by michengs / HSDN / ZC

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	const { player } = dispatch.require.library;
	const { MARKER_ITEM } = module.parent.exports.spawn;

	let debuff = null;
	let timer1 = null;
	let timer2 = null;
	let timer3 = null;
	let timer4 = null;
	let timer5 = null;
	let boss_ent = null;
	let boss_offset = 0;
	let qbacting = null;
	let blue = false;
	let red = false;
	let debuff_tracker_started = false;

	const mech_messages = {
		0: { message: "IN", message_RU: "К НЕМУ", message_zh: "靠近" },
		1: { message: "OUT", message_RU: "ОТ НЕГО", message_zh: "远离" }
	};

	const qbacting_messages = {
		0: { message: "different", message_RU: "разные", message_zh: "不同颜色" },
		1: { message: "same", message_RU: "одинаковые", message_zh: "相同颜色" }
	};

	const debuff_messages = {
		0: { message: "Ready to get Fire debuff", message_RU: "Готовность к переключению на Огонь", message_zh: "准备吃火" },
		1: { message: "Ready to get Ice debuff", message_RU: "Готовность к переключению на Лед", message_zh: "准备吃冰" }
	};

	// NULL % 2 = 0
	//    1 % 2 = 1
	//    0 % 2 = 0
	//    2 % 2 = 0

	function spawn_marker(out) {
		if (!boss_ent) return;

		let distance = 220;
		let caption = "IN";

		if (out) {
			distance = 620;
			caption = "OUT";
		}

		handlers.event([
			{ type: "spawn", func: "marker", args: [false, 45 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
			{ type: "spawn", func: "marker", args: [false, 135 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
			{ type: "spawn", func: "marker", args: [false, 225 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] },
			{ type: "spawn", func: "marker", args: [false, 315 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]] }
		], boss_ent);
	}

	function debuff_added(id) {
		debuff_removed();
		debuff = id; // debuff event id

		timer1 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message: "Debuff 20 seconds", message_zh: "debuff二十秒",
					message_RU: "Дебафф 20 сек."
				});
			}
		}, 70000);

		timer2 = dispatch.setTimeout(() => {
			if (debuff != null) {
				dispatch.setTimeout(() => {
					handlers.text({
						sub_type: "alert",
						message: (`${debuff_messages[debuff % 2].message}`),
						message_RU: (`${debuff_messages[debuff % 2].message_RU}`),
						message_zh: (`${debuff_messages[debuff % 2].message_zh}`)
					});
				}, 2000);

				handlers.text({
					sub_type: "message",
					message: "Debuff 50 seconds", message_zh: "debuff五十秒",
					message_RU: "Дебафф 50 сек."
				});
			}
		}, 40000);

		timer3 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message: "Warning! Debuff 15 seconds", message_zh: "警告！debuff十五秒",
					message_RU: "Дебафф 15 сек."
				});
			}
		}, 75000);

		timer4 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message: "Warning! Debuff 10 seconds", message_zh: "警告！debuff十秒",
					message_RU: "Дебафф 10 сек."
				});
			}
		}, 80000);

		timer5 = dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers.text({
					sub_type: "message",
					message: "Warning! Debuff 5 seconds", message_zh: "警告！debuff五秒",
					message_RU: "Дебафф 5 сек."
				});
			}
		}, 85000);

		if (blue) {
			handlers.text({
				sub_type: "message",
				message: (`${mech_messages[(qbacting + debuff + 1) % 2].message}`),
				message_RU: (`${mech_messages[(qbacting + debuff + 1) % 2].message_RU}`),
				message_zh: (`${mech_messages[(qbacting + debuff + 1) % 2].message_zh}`)
			});

			spawn_marker((qbacting + debuff + 1) % 2);
		} else if (red) {
			handlers.text({
				sub_type: "message",
				message: (`${mech_messages[(qbacting + debuff) % 2].message}`),
				message_RU: (`${mech_messages[(qbacting + debuff) % 2].message_RU}`),
				message_zh: (`${mech_messages[(qbacting + debuff) % 2].message_zh}`)
			});

			spawn_marker((qbacting + debuff) % 2);
		}
	}

	function debuff_removed() {
		debuff = null;
		dispatch.clearTimeout(timer1);
		dispatch.clearTimeout(timer2);
		dispatch.clearTimeout(timer3);
		dispatch.clearTimeout(timer4);
		dispatch.clearTimeout(timer5);
	}

	function skilld_event(skillid, ent) {
		const abnormality_change = (added, event) => {
			// Fire/Ice debuff
			if (player.isMe(event.target.toString()) && [30260001, 30260002, 31260001, 31260002].includes(event.id)) {
				if (added) {
					debuff_added(event.id);
				} else {
					debuff_removed();
				}
			}

			// Argon Priest Essence buff
			if (player.isMe(event.target.toString()) && [30261701, 31261701].includes(event.id)) {
				if (added && boss_ent) {
					handlers.spawn({ // spawn teleport mark
						sub_type: "item",
						id: MARKER_ITEM,
						sub_delay: 50000,
						pos: {
							x: 53192,
							y: 100761,
							z: 14233
						}
					}, boss_ent);
				}
			}
		};

		// In-Out quest balloons (qbacting => ярость 0, ужас 1)
		if ([3026004, 3126004, 3026005, 3126005].includes(skillid)) {
			qbacting = skillid % 2;
		}

		// Fire/Ice debuff (debuff % 2 => синий 0, красный 1)
		if ([30260001, 31260001, 30260002, 31260002].includes(skillid) && !debuff_tracker_started) {
			debuff_added(skillid);
		}

		// In-Out identification
		if ([212, 213, 214, 215].includes(skillid)) {
			boss_ent = ent;
			handlers.event([
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 440, 200, 8000] },
				{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 4, 840, 200, 8000] }
			]);
		}

		if ([212, 214].includes(skillid)) { // Fire claw (141, 142)
			boss_offset = 10;
			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 190, 840, 200, 8000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 10, 840, 200, 8000] }
			]);
		}

		if ([213, 215].includes(skillid)) { // Ice claw (143, 144)
			boss_offset = -10;
			handlers.event([
				{ type: "spawn", func: "vector", args: [553, 0, 0, 170, 840, 200, 8000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, 350, 840, 200, 8000] }
			]);
		}

		if ([213, 214].includes(skillid)) { // Ice inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message: (`Ice inside (${qbacting_messages[qbacting].message}) | ${mech_messages[(qbacting + debuff + 1) % 2].message}`),
						message_RU: (`Внутри лед (${qbacting_messages[qbacting].message_RU}) | ${mech_messages[(qbacting + debuff + 1) % 2].message_RU}`),
						message_zh: (`内冰 (${qbacting_messages[qbacting].message_zh}) | ${mech_messages[(qbacting + debuff + 1) % 2].message_zh}`)
					});

					spawn_marker((qbacting + debuff + 1) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message: (`Ice inside (${qbacting_messages[qbacting].message})`),
						message_RU: (`Внутри лед (${qbacting_messages[qbacting].message_RU})`),
						message_zh: (`内冰 (${qbacting_messages[qbacting].message_zh})`)
					});
				}
			}, 500);

			blue = true;
			red = false;

			dispatch.setTimeout(() => blue = false, 6500); //6700
		}

		if ([212, 215].includes(skillid)) { // Fire inside
			dispatch.setTimeout(() => {
				if (debuff != null) {
					handlers.text({
						sub_type: "message",
						message: (`Fire inside (${qbacting_messages[qbacting].message}) | ${mech_messages[(qbacting + debuff) % 2].message}`),
						message_RU: (`Внутри огонь (${qbacting_messages[qbacting].message_RU}) | ${mech_messages[(qbacting + debuff) % 2].message_RU}`),
						message_zh: (`内火 (${qbacting_messages[qbacting].message_zh}) | ${mech_messages[(qbacting + debuff) % 2].message_zh}`)
					});

					spawn_marker((qbacting + debuff) % 2);
				} else {
					handlers.text({
						sub_type: "message",
						message: (`Fire inside (${qbacting_messages[qbacting].message})`),
						message_RU: (`Внутри огонь (${qbacting_messages[qbacting].message_RU})`),
						message_zh: (`内火 (${qbacting_messages[qbacting].message_zh})`)
					});
				}
			}, 500);

			blue = false;
			red = true;

			dispatch.setTimeout(() => red = false, 6500);
		}

		if (!debuff_tracker_started) {
			dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, abnormality_change.bind(null, true));
			dispatch.hook("S_ABNORMALITY_END", 1, abnormality_change.bind(null, false));

			debuff_tracker_started = true;
		}
	}

	const skills = {
		"112-0": [{ type: "text", sub_type: "message", message: "Ice DOT", message_RU: "Лед (полоса)", message_zh: "冰直线" }],
		"110-0": [{ type: "text", sub_type: "message", message: "Fire DOT", message_RU: "Огонь (лужа)", message_zh: "火圈" }],
		"108-0": [
			{ type: "text", sub_type: "message", message: "Turn Right (Repel)", message_RU: "Поворот вправо (откид)", message_zh: "向右转带击退" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"158-0": [
			{ type: "text", sub_type: "message", message: "Turn Right (Repel)", message_RU: "Поворот вправо (откид)", message_zh: "向右转带击退" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"109-0": [
			{ type: "text", sub_type: "message", message: "Turn Left (Repel)", message_RU: "Поворот влево (откид)", message_zh: "向左转带击退" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"159-0": [
			{ type: "text", sub_type: "message", message: "Turn Left (Repel)", message_RU: "Поворот влево (откид)", message_zh: "向左转带击退" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 440, 0, 2000] }
		],
		"120-0": [{ type: "text", sub_type: "message", message: "Together", message_RU: "Яростный рев", message_zh: "集合" }],
		"145-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан", message_zh: "晕" }],
		"157-0": [{ type: "text", sub_type: "message", message: "Change", message_RU: "Смена", message_zh: "交换" }],
		"103-0": [
			{ type: "text", sub_type: "message", message: "Tail (Flying)", message_RU: "Хвост (полет)", message_zh: "飞天甩尾" },
			{ type: "text", sub_type: "message", message: "Arise!", message_RU: "Удочка!", message_zh: "上升", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 912, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 260, 500, 0, 2000] }
		],
		"153-0": [
			{ type: "text", sub_type: "message", message: "Tail (Flying)", message_RU: "Хвост (полет!!)", message_zh: "飞天甩尾" },
			{ type: "text", sub_type: "message", message: "Arise!", message_RU: "Удочка!", message_zh: "上升", delay: 1500, class_position: "priest" },
			{ type: "spawn", func: "semicircle", args: [140, 260, 912, 0, 0, 10, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 135, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 260, 500, 0, 2000] }
		],

		// AOE лед (большой)
		"104-0": [
			{ type: "text", sub_type: "message", message: "Ice Storm DOTs", message_RU: "Ледяные лужи", message_zh: "冰圈" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 5000] }
		],
		// AOE огонь (большой)
		"105-0": [
			{ type: "text", sub_type: "message", message: "Fire Bombs", message_RU: "Огненные бомбы", message_zh: "火焰炸弹" },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 500, 10, 270, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 500, 10, 270, 0, 3250] },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 500, 10, 270, 0, 3500] },
			{ type: "spawn", func: "circle", args: [false, 553, 235, 500, 10, 270, 0, 3750] },
			{ type: "spawn", func: "circle", args: [false, 553, 90, 500, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 270, 500, 10, 270, 0, 4250] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 500, 10, 270, 0, 4500] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 500, 10, 270, 0, 4750] }
		],
		// AOE лед (малый)
		"154-0": [
			{ type: "text", sub_type: "message", message: "Ice Storm", message_RU: "Ледяной шторм", message_zh: "冰风暴" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 6000] }
		],
		// AOE огонь (малый)
		"155-0": [{ type: "text", sub_type: "message", message: "Fire (Knockdown)", message_RU: "Огненный столб (опрокид)", message_zh: "火柱击倒" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Dodge", message_RU: "Эвейд", message_zh: "闪避" }
		],

		"206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_RU: "Прыжок назад", message_zh: "后跳" }],
		"206-2": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 350, 0, 3000] }],
		"137-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокидывание", message_zh: "击倒" }],
		"138-0": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "AOE", message_zh: "范围攻击" }],
		"139-0": [{ type: "text", sub_type: "message", message: "Fire to all", message_RU: "Огонь всем", message_zh: "全屏火" }],
		"140-0": [{ type: "text", sub_type: "message", message: "Ice to all", message_RU: "Лед всем", message_zh: "全屏冰" }],

		"die": [{ type: "func", func: debuff_removed }],
		"nd-3026-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3026-1000-1118-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-3026-1000-2118-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-3026-1000-1118-1": [{ type: "text", sub_type: "message", message: "Dodge!", message_RU: "Эвейд!", message_zh: "闪避！", delay: 615 }],
		"s-3026-1000-2118-1": [{ type: "text", sub_type: "message", message: "Dodge!", message_RU: "Эвейд!", message_zh: "闪避！", delay: 625 }],
		"s-3026-1000-1212-0": [{ type: "func", func: skilld_event, args: [212] }],
		"s-3026-1000-1215-0": [{ type: "func", func: skilld_event, args: [215] }],
		"s-3026-1000-1213-0": [{ type: "func", func: skilld_event, args: [213] }],
		"s-3026-1000-1214-0": [{ type: "func", func: skilld_event, args: [214] }],
		"qb-3026-1000-3026005": [{ type: "func", func: skilld_event, args: [3026005] }], // ужас, одинаковые цвета
		"qb-3026-1000-3026004": [{ type: "func", func: skilld_event, args: [3026004] }], // ярость, разные цвета
		"qb-3026-1000-3126005": [{ type: "func", func: skilld_event, args: [3126005] }], // ужас, одинаковые цвета
		"qb-3026-1000-3126004": [{ type: "func", func: skilld_event, args: [3126004] }], // ярость, разные цвета
		"am-3026-1000-30260001": [{ type: "func", func: skilld_event, args: [30260001] }], // красный
		"am-3026-1000-30260002": [{ type: "func", func: skilld_event, args: [30260002] }], // синий
		"am-3026-1000-31260001": [{ type: "func", func: skilld_event, args: [31260001] }], // красный
		"am-3026-1000-31260002": [{ type: "func", func: skilld_event, args: [31260002] }] // синий
	};

	const object = {};

	for (const [key, value] of Object.entries(skills)) {
		if (key.length === 5) {
			object[`s-3026-1000-1${key}`] = value;
			object[`s-3026-1000-2${key}`] = value;
		} else {
			object[key] = value;
		}
	}

	return object;
};