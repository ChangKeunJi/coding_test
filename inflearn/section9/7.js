function solution(arr) {
	let answer = 0;

	const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
	const dy = [0, 1, 1, 1, 0, -1, -1, -1];
	const q = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i][j] === 1) {
				BFS(i, j);
				answer++;
				console.log("bfs end");
			}
		}
	}

	function BFS(x, y) {
		arr[x][y] = 0;

		q.push([x, y]);

		while (q.length > 0) {
			const p = q.shift();
			console.log(p);

			for (let k = 0; k < 8; k++) {
				let nx = p[0] + dx[k];
				let ny = p[1] + dy[k];

				if (
					nx >= 0 &&
					nx < arr.length &&
					ny >= 0 &&
					ny < arr.length &&
					arr[nx][ny] === 1
				) {
					arr[nx][ny] = 0;
					q.push([nx, ny]);
				}
			}
		}
	}

	return answer;
}

let arr = [
	[1, 1, 0, 0, 0, 1, 0],
	[0, 1, 1, 0, 1, 1, 0],
	[0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 1, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 1, 0, 0],
	[1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
