function solution(arr) {
	let max = 0;

	// 회의가 끝나는 시간을 오름차순으로 정렬
	arr.sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0] - b[0];
		} else {
			return a[1] - b[1];
		}
	});

	for (let i = 0; i < arr.length; i++) {
		let count = 1;

		// 현재 진행되고 있는 회의 -> arr[i]를 첫 회의로 지정
		let current = arr[i];

		for (let k = i + 1; k < arr.length; k++) {
			if (arr[k][0] >= current[1]) {
				current = arr[k];
				count++;
				console.log(arr[k]);
			}
		}

		max = Math.max(count, max);
	}

	return max;
}

let arr = [
	[1, 4],
	[2, 3],
	[3, 5],
	[4, 6],
	[5, 7],
];

arr = [
	[7, 8],
	[2, 3],
	[4, 7],
	[1, 3],
];

arr = [
	[3, 3],
	[1, 3],
	[2, 3],
];

console.log(solution(arr));
