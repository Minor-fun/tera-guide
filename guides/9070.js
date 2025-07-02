// Manglemire
//
// made by michengs / HSDN / ambushing

const OPCODES = {
	"S_DUNGEON_EVENT_GAGE": {
		366226: 39917,
		367078: 47028,
		367080: 57835,
		367081: 39359,
		376012: 47078
	}
};

function addOpcodeAndDefinition(mod, name, version = null, definition = null) {
	if (OPCODES[name] !== undefined && OPCODES[name][mod.dispatch.protocolVersion] !== undefined) {
		mod.dispatch.addOpcode(name, OPCODES[name][mod.dispatch.protocolVersion]);
	}
	if (version !== null && definition !== null) {
		mod.dispatch.addDefinition(name, version, definition);
	}
}

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	addOpcodeAndDefinition(dispatch._mod, "S_DUNGEON_EVENT_GAGE", 2, [
		["name", "refString"],
		["message", "refString"],
		["unk", "int32"],
		["type", "int32"],
		["value", "int32"],
		["name", "string"],
		["message", "string"]
	]);

	const numbers = { 470046: 3, 470047: 6, 470048: 9 };
	const boss_numbers = new Set();
	let event_gage = 0;

	dispatch.hook("S_ABNORMALITY_BEGIN", 4, event => {
		if (numbers[event.id] !== undefined) {
			boss_numbers.add(numbers[event.id]);
		}
	});

	dispatch.hook("S_ABNORMALITY_END", 1, event => {
		if (numbers[event.id] !== undefined) {
			boss_numbers.delete(numbers[event.id]);
		}
	});

	dispatch.hook("S_DUNGEON_EVENT_GAGE", 2, event => {
		event_gage = event.value;
	});

	function is_telling_truth() {
		const ones = event_gage % 10;
		const tens = Math.floor((event_gage % 100) / 10);

		return !boss_numbers.has(ones) && !boss_numbers.has(tens);
	}

	return {
		"nd-470-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: () => {
				boss_numbers.clear();
				event_gage = 0;
			} }
		],

		"s-470-1000-1105-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-470-1000-1106-0": [{ type: "text", sub_type: "message", message: "Smash", message_RU: "Удар", message_zh: "重砸" }],
		"s-470-1000-1120-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Притяжка", message_zh: "拉人" }],
		"s-470-1000-1114-0": [{ type: "text", sub_type: "message", message: "Spray", message_RU: "Спрей", message_zh: "喷射" }],
		"s-470-1000-1201-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан", message_zh: "晕" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 250, 0, 2500] }
		],
		"s-470-1000-1307-0": [{ type: "text", sub_type: "message", message: "With a Bomb - Go away. No Bomb - Enter the circle", message_RU: "С бомбой - отойти. Без бомбы - войти в круг", message_zh: "有炸弹远离没炸弹进圈" }],
		"s-470-1000-2105-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок", message_zh: "跳跃" }],
		"s-470-1000-2106-0": [{ type: "text", sub_type: "message", message: "Smash", message_RU: "Удар", message_zh: "重砸" }],
		"s-470-1000-2107-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан", message_zh: "晕" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 100, 12, 250, 0, 2500] }
		],
		"s-470-1000-2114-0": [{ type: "text", sub_type: "message", message: "Line", message_RU: "Полоса", message_zh: "直线" }],
		"s-470-1000-3106-0": [{ type: "text", sub_type: "message", message: "100" }],

		"s-470-1000-3213-0": [ // "My shield will save me!" (shield)
			{ type: "text", sub_type: "message", message: "Break shield", message_RU: "Сломать щит", message_zh: "破盾", check_func: () => is_telling_truth() },
			{ type: "text", sub_type: "message", message: "Puddles (run away)", message_RU: "Лужи (убегать)", message_zh: "毒圈快跑", check_func: () => !is_telling_truth() }
		],
		"s-470-1000-3212-0": [ // "I will kill you all!" (aoe around boss)
			{ type: "text", sub_type: "message", message: "Out", message_RU: "Наружу", message_zh: "远离", check_func: () => is_telling_truth() },
			{ type: "text", sub_type: "message", message: "In", message_RU: "Внутрь", message_zh: "靠近", check_func: () => !is_telling_truth() }
		],
		"s-470-1000-3218-0": [ // "One of you must die!" (aoe around player)
			{ type: "text", sub_type: "message", message: "Out", message_RU: "Наружу", message_zh: "远离", check_func: () => is_telling_truth() },
			{ type: "text", sub_type: "message", message: "In", message_RU: "Внутрь", message_zh: "靠近", check_func: () => !is_telling_truth() }
		],

		"qb-470-1000-470019": [
			{ type: "text", sub_type: "alert", message: "Truth", message_RU: "Правда", message_zh: "真实", check_func: () => is_telling_truth() },
			{ type: "text", sub_type: "alert", message: "Lie", message_RU: "Ложь", message_zh: "谎言", check_func: () => !is_telling_truth() }
		],
		"qb-470-1000-470011": [{ type: "text", sub_type: "message", message: "Stand on stars", message_RU: "Встать на звезду", message_zh: "站星星上" }]
	};
};