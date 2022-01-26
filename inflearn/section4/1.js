function foo(n, arr) {
	let max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

	for (const el of arr) {
		let sum = 0;

		for (const e of String(el)) {
			sum += Number(e);
		}

		if (max[0] === sum && max[1] < el) {
			max = [sum, el];
			continue;
		}

		if (max[0] < sum) {
			max = [sum, el];
			continue;
		}
	}
	console.log(max[1]);
	return max[1];
}

foo(7, [128, 460, 603, 40, 521, 137, 123]);
// 137

function foo2(n, arr) {
	let;
}
