function solution(arr) {
	let answer = "NO";
	let total = arr.reduce((a, b) => a + b, 0);
	let flag = 0;
	function DFS(l, sum) {
		if (flag) return;

		if (l > arr.length - 1) {
			if (sum === total / 2) {
				console.log(sum);
				flag = 1;
				answer = "YES";
			}
		} else {
			DFS(l + 1, sum + arr[l]);
			DFS(l + 1, sum);
		}
	}

	DFS(0, 0);

	return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
arr = [1, 2, 3, 4, 2];
console.log(solution(arr));
