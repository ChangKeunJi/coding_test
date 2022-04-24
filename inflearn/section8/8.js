function solution(n, m) {
	let answer = [];
	let temp = Array.from({ length: m });

	function DFS(L) {
		if (L === m) {
			answer.push([...temp]);
		} else {
			for (let i = 1; i <= n; i++) {
				temp[L] = i;
				console.log(temp);
				DFS(L + 1);
			}
		}
	}

	DFS(0);
	return answer;
}

console.log(solution(3, 2));
