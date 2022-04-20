function solution(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let k = 0; k < i; k++) {
			if (arr[k] > arr[k + 1]) [arr[k + 1], arr[k]] = [arr[k], arr[k + 1]];
		}
	}

	return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
