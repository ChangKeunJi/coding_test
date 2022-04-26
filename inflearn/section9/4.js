function solution(arr) {
	let answer = 0;

	// 동서남북 순서
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	function DFS(x, y) {
		if (x === 6 && y === 6) {
			answer++;
		} else {
			for (let k = 0; k < 4; k++) {
				let nx = x + dx[k];
				let ny = y + dy[k];

				if (nx < 0 || ny < 0) continue;
				if (nx >= arr.length || ny >= arr.length) continue;

				if (arr[nx][ny] === 0) {
					arr[x][y] = 1;
					DFS(nx, ny);
					arr[x][y] = 0;
				}
			}
		}
	}

	arr[0][0] = 1;
	DFS(0, 0);

	return answer;
}

let arr = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 1, 0, 0, 0],
	[1, 1, 0, 1, 0, 1, 1],
	[1, 1, 0, 0, 0, 0, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
