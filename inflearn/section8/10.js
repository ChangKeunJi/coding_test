function solution(m, arr) {
	let check = Array.from({ length: arr.length }, () => 0);
	let temp = Array.from({ length: m }, () => 0);
	let count = 0;

	function DFS(L) {
		if (L === m) {
			console.log(...temp);
			count++;
			return;
		} else {
			for (let i = 0; i < arr.length; i++) {
				if (check[i] === 1) continue;

				check[i] = 1;
				temp[L] = arr[i];
				DFS(L + 1);
				check[i] = 0;
			}
		}
	}

	DFS(0);
	return count;
}

let arr = [3, 6, 9];
console.log(solution(2, arr)); // 6
