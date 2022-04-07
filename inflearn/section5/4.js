function solution(n, arr) {
	let lt = 0;
	let rt = 0;
	let sum = 0;
	let answer = 0;

	for (let rt = 0; rt < arr.length; rt++) {
		sum += arr[rt];
		while (sum > n) {
			sum -= arr[lt++];
		}
		answer += rt - lt + 1;
	}

	return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

// function solution(n, arr) {
// 	let count = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		let sum = 0;

// 		for (let k = i; k < arr.length; k++) {
// 			sum += arr[k];
// 			if (sum <= n) count++;
// 		}
// 	}

// 	return count;
// }
