let dy = Array.from(Array(35), () => Array(35).fill(0));

function solution(n, r) {
	// 저장되어 있는 경우
	if (dy[n][r] > 0) return dy[n][r];

	if (n === r || r === 0) return 1;
	return (dy[n][r] = solution(n - 1, r - 1) + solution(n - 1, r));
}

console.log(solution(33, 19));
