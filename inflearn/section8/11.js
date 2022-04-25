function solution(n) {
	if (n <= 1) return 1;

	return solution(n - 1) * n;
}

console.log(solution(5));
