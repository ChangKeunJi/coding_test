function solution(t, ps, pt) {
	let max = Number.MIN_SAFE_INTEGER;

	function DFS(k, time, sum) {
		if (time < 0) return;

		if (k === ps.length) {
			max = Math.max(sum, max);
		} else {
			// k 인덱스 포함하지 않는 경우
			DFS(k + 1, time, sum);

			// k 인덱스 포함하는 경우
			time -= pt[k];
			sum += ps[k];
			DFS(k + 1, time, sum);
		}
	}

	DFS(0, t, 0); // (index, time, sum)

	return max;
}

let ps = [10, 25, 15, 6, 7]; // 점수
let pt = [5, 12, 8, 3, 4]; // 시간
console.log(solution(20, ps, pt));
// 제한시간 20
