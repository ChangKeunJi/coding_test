function solution(c, arr) {
	let max = Number.MIN_SAFE_INTEGER;

	function DFS(l, sum) {
		if (sum > c) return;

		if (l > arr.length - 1) {
			max = Math.max(sum, max);
		} else {
			DFS(l + 1, sum + arr[l]);

			DFS(l + 1, sum);
		}
	}

	DFS(0, 0);

	return max;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
