function solution(n, arr) {
	let check = Array.from({ length: n + 1 }, () => 0);

	let answer = 0;

	// graph 생성
	let graph = Array.from({ length: n + 1 }, () => []);

	for (let [a, b] of arr) {
		graph[a].push(b);
	}

	// [ [], [ 2, 3, 4 ], [ 1, 3, 5 ], [ 4 ], [ 2, 5 ], [] ]

	let path = [];

	function DFS(n) {
		if (n === 5) {
			answer++;
			console.log(path);
		} else {
			let arr = graph[n];

			for (let i = 0; i < arr.length; i++) {
				if (check[arr[i]] === 0) {
					check[arr[i]] = 1;
					path.push(graph[n][i]);
					DFS(arr[i]);
					check[arr[i]] = 0;
					path.pop();
				}
			}
		}
	}

	check[1] = 1;
	DFS(1);

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
