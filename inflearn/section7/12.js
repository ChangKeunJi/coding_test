function count(mid, arr) {
	let count = 1;
	let temp = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - temp >= mid) {
			count++;
			temp = arr[i];
		}
	}
	return count;
}

function solution(k, arr) {
	let cal = 0;

	let answer;
	arr = arr.sort((a, b) => a - b);

	// 최소 마구간 간격 찾기
	let min = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i + 1] - arr[i]) {
			min = arr[i + 1] - arr[i];
		}
	}

	// 최대 마구간 간격 찾기
	let max = arr[arr.length - 1] - arr[0];

	let lt = min;
	let rt = max;

	while (lt <= rt) {
		cal++;
		let mid = parseInt((lt + rt) / 2);

		if (count(mid, arr) < k) {
			rt = mid - 1;
		} else {
			answer = mid;
			lt = mid + 1;
		}
	}
	console.log("cal: ", cal);
	return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
