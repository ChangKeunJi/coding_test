function solution(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let k = i - 1; k >= 0; k--) {
			if (arr[k + 1] < arr[k]) {
				[arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
			} else break;
		}
	}

	return arr;
}

// [11, 7, 5, 6, 10, 9]
// [7, 11, 5, 6, 10, 9]
// [5, 7, 11, 6, 10, 9] -> [5, 7, 6, 11, 10, 9] -> [5, 6, 7, 11, 10, 9]
// [5, 6, 7, 11, 10, 9]

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
