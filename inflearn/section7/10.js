function solution(n, arr) {
	arr = arr.sort((a, b) => a - b);

	let lt = 0;
	let rt = arr.length - 1;

	while (lt <= rt) {
		let mid = Math.floor((lt + rt) / 2);

		// console.log(mid);

		if (arr[mid] === n) return mid + 1;

		if (arr[mid] < n) {
			lt = mid++;
		} else {
			rt = mid--;
		}
	}
}

// [ 12, 23, 32, 57, 65, 81, 87, 99 ]

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
