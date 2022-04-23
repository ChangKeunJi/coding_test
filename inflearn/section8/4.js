function solution(n) {
	let array = Array.from({ length: n + 1 }, () => 0);
	let answer = [];

	function DFS(k) {
		if (k === n + 1) {
			let temp = [];
			console.log(array);

			for (let i = 1; i < array.length; i++) {
				if (array[i] === 1) {
					temp.push(i);
				}
			}

			if (temp.length > 0) answer.push(temp);

			return;
		} else {
			array[k] = 1;
			DFS(k + 1);

			array[k] = 0;
			DFS(k + 1);
		}
	}

	DFS(1);

	console.log("answer: ", answer);
}

solution(3);
