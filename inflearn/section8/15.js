function solution(n, k, arr, m) {
	let count = 0;
	let temp = [];
	let answer = [];

	function DFS(L, I, SUM) {
		if (L === k) {
			// if (SUM % m === 0) count++;
			answer.push([...temp]);
		} else {
			for (let i = I; i < arr.length; i++) {
				temp[L] = arr[i];
				DFS(L + 1, i + 1, SUM + arr[i]);
				temp.pop();
			}
		}
	}

	DFS(0, 0, 0);
	return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
