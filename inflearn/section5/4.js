function solution(n, arr) {
	let lt = 0;
	let rt = 0;
	let answer = 0;
	let sum = 0;

	while (rt < arr.length) {
		if (sum <= n) {
			answer++;
			sum += arr[++rt];
		} else {
			sum -= arr[lt++];
		}
	}

	return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
