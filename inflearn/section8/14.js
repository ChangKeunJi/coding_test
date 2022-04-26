function solution(n, m) {
	let answer = [];
	let temp = [];

	function DFS(L, S) {
		if (L === m || S === n) {
			answer.push(temp.slice());
		} else {
			for (let i = S; i < n + 1; i++) {
				temp[L] = i;
				console.log(L, S, temp);
				DFS(L + 1, i + 1);
			}
		}
	}

	DFS(0, 1);
	return answer;
}

console.log(solution(5, 3));
