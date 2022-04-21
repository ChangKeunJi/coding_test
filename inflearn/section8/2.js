function solution(n) {
	let sum = "";

	function DFS(n) {
		if (n === 0) return;

		DFS(parseInt(n / 2));

		sum += n % 2;
	}

	DFS(n);

	return sum;
}

console.log(solution(11));
