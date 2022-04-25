function solution(n, f) {
	let answer,
		flag = 0;
	let dy = Array.from(Array(11), () => Array(11).fill(0));
	let ch = Array.from({ length: n + 1 }, () => 0);
	let p = Array.from({ length: n }, () => 0);
	let b = Array.from({ length: n }, () => 0);
	function combi(n, r) {
		if (dy[n][r] > 0) return dy[n][r];
		if (n === r || r === 0) return 1;
		else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
	}
	function DFS(L, sum) {
		if (flag) return;
		if (L === n && sum === f) {
			answer = p.slice();
			flag = 1;
		} else {
			for (let i = 1; i <= n; i++) {
				if (ch[i] === 0) {
					ch[i] = 1;
					p[L] = i;
					DFS(L + 1, sum + b[L] * p[L]);
					ch[i] = 0;
				}
			}
		}
	}
	for (let i = 0; i < n; i++) {
		b[i] = combi(n - 1, i);
	}
	DFS(0, 0);
	return answer;
}

console.log(solution(4, 16));

function solution1(n, f) {
	// 1부터 n까지의 수가 정렬되는 모든 경우를 계산한다.
	let arr = Array.from({ length: n }, (_, i) => i + 1); // 1,2,3,4
	let check = Array.from({ length: n }, () => 0);
	let temp = Array.from({ length: n }, () => 0);
	let answer = [];

	function DFS(L) {
		if (answer.length > 0) return;

		if (L === n) {
			// if (f === pascal(temp)) return temp;
			// console.log("pascal: ", pascal([...temp]));
			const pascalNum = pascal([...temp]);

			if (pascalNum === f) answer.push([...temp]);

			// answer.push([...temp]);
		} else {
			for (let i = 0; i < arr.length; i++) {
				if (check[i] === 1) continue;

				temp[L] = arr[i];
				check[i] = 1;
				DFS(L + 1);
				check[i] = 0;
			}
		}
	}

	DFS(0);

	return answer;
}

function pascal(arr) {
	while (arr.length > 1) {
		for (let i = 0; i < arr.length - 1; i++) {
			arr[i] = arr[i] + arr[i + 1];
		}
		arr.pop();
	}
	return arr[0];
}

console.log(solution1(4, 16));
