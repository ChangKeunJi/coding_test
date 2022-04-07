function solution(n, arr) {
	// 첫 번째 윈도우 값을 구해준다.
	let window = 0;
	for (let i = 0; i < n; i++) {
		window += arr[i];
	}

	let max = window;
	let rt = n - 1;
	let lt = 0;

	// 윈도우를 움직이면서 값을 수정해주고 max값과 비교해준다.

	while (rt < arr.length) {
		max = Math.max(window, max);
		window = window + arr[++rt] - arr[lt++];
	}

	return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// function solution(n, arr) {
// 	let max = 0;
// 	let rt = n - 1;

// 	while (rt < arr.length) {
// 		let num = n - 1;
// 		let sum = 0;

// 		while (num >= 0) {
// 			sum += arr[rt - num];
// 			num--;
// 		}

// 		max = Math.max(sum, max);

// 		rt++;
// 	}

// 	return max;
// }
