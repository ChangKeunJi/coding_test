function solution(n, k, arr, m) {
	let count = 0;
	let temp = [];

	function DFS(L, I, SUM) {
		if (L === k) {
			if (SUM % m === 0) count++;
		} else {
			for (let i = I; i < arr.length; i++) {
				DFS(I + 1, i + 1, SUM + arr[i]);
			}
		}
	}

	DFS(0, 0, 0);
	return count;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
