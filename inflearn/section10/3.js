function solution(arr) {
	let dy = Array.from({ length: arr.length }, () => 0);

	for (let i = 0; i < arr.length; i++) {
		let max = 0;

		for (let j = i - 1; j >= 0; j--) {
			if (arr[i] > arr[j]) {
				max = Math.max(dy[j], max);
			}
		}

		dy[i] = max + 1;
	}

	let maxAnswer = 0;

	for (let el of dy) {
		maxAnswer = Math.max(maxAnswer, el);
	}
	console.log(dy);

	return maxAnswer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
