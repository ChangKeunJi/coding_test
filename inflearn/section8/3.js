function solution(n) {
	function DFS(n) {
		if (n > 7) return;
		// console.log(n);
		DFS(n * 2);
		// console.log(n);
		DFS(n * 2 + 1);
		console.log(n);
	}

	DFS(n);
}

console.log(solution(1));
