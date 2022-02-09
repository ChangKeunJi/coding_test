function foo(array) {
	let answer = 0;
	for (let i = 1; i <= 4; i++) {
		for (let j = 1; j <= 4; j++) {
			let result = true;
			for (const score of array) {
				if (score.indexOf(i) <= score.indexOf(j)) result = false;
			}
			if (result) {
				answer++;
			}
		}
	}

	return answer;
}

foo([
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2],
]);
