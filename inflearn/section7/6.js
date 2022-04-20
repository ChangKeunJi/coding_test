function solution(arr) {
	// 첫번째 index 찾기

	let first;
	let second;

	for (let i = 1; i < arr.length; i++) {
		// 첫번째 경우
		if (arr[i - 1] <= arr[i] && arr[i] >= arr[i + 1]) {
			first = i + 1;
			break;
		}
	}

	for (let i = first; i < arr.length; i++) {
		// 두번째 경우
		if (arr[i - 1] >= arr[i] && arr[i] <= arr[i + 1]) second = i + 1;
	}

	return [first, second];
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
