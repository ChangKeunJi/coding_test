function solution(n) {
	let arr = Array.from({ length: n + 1 }, () => 0);

	let answer = [];

	function DFS(k) {
		if (k === n + 1) {
			let temp = [];
			for (let i = 1; i < arr.length; i++) {
				if (arr[i] === 1) {
					temp.push(i);
				}
			}

			if (temp.length > 0) answer.push(temp);
		} else {
			arr[k] = 1;
			DFS(k + 1);

			arr[k] = 0;
			DFS(k + 1);
		}
	}

	DFS(1);

	console.log(answer);
}

solution(3);
