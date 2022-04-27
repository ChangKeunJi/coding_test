function solution(s, e) {
	const q = [];

	// check 배열
	const check = Array.from({ length: 10001 }, () => 0);

	// 시작점을 큐에 첫 원소로 집어 넣는다.
	q.push([s, 0]);

	check[s] = 1;

	while (q.length > 0) {
		// 큐에 맨 앞 원소를 pop
		const p = q.shift();

		// brake 포인트
		// if (p[0] === e) return p[1];

		// p의 자식들을 다시 큐에 push
		for (let cp of [p[0] + 1, p[0] - 1, p[0] + 5]) {
			if (cp > 10000 || cp < 0) continue;

			// brake 포인트
			if (cp === e) return p[1] + 1;

			// 지나온 적이 없을 때만 push
			if (check[cp] === 0) {
				q.push([cp, p[1] + 1]);
			}
		}
	}
}

console.log(solution(8, 3));
