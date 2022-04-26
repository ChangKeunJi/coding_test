function solution(n, arr) {
	let answer = 0;

	// check 배열 생성
	let check = Array.from({ length: n + 1 }, () => 0);

	// graph 생성
	let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

	// graph에 경로가 존재하면 1로 수정
	for (let [a, b] of arr) {
		graph[a][b] = 1;
	}

	function DFS(k) {
		if (k === 5) {
			answer++;
		} else {
			for (let i = 1; i <= n; i++) {
				if (graph[k][i] === 1 && check[i] === 0) {
					check[i] = 1;
					DFS(i);
					check[i] = 0;
				}
			}
		}
	}

	// 출발점을 인수로 check한 뒤 DFS 함수의 인수로 전달
	check[1] = 1;
	DFS(1);

	console.log(graph);
	return answer;
}
let arr = [
	[1, 2],
	[1, 3],
	[1, 4],
	[2, 1],
	[2, 3],
	[2, 5],
	[3, 4],
	[4, 2],
	[4, 5],
];
console.log(solution(5, arr));
