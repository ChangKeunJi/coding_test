function solution(m, arr) {
	arr = arr.sort((a, b) => b - a); // -> [5, 2, 1]

	let minCount = Number.MAX_SAFE_INTEGER;
	let count = 0;

	function DFS(i, sum) {
		console.log(sum, i);
		if (i === arr.length) return;

		if (sum === m) {
			minCount = Math.min(count, minCount);
			count = 0;
			return;
		} else {
			if (sum < m) {
				count++;
				sum += arr[i];
				DFS(i, sum);
			} else {
				sum -= arr[i];
				count--;
				DFS(++i, sum);
			}
		}
	}

	DFS(0, 0);

	return minCount;
}

// 1. 동전을 큰 값부터 계속 더해주면서 count를 샌다.
// 2. 값이 초과하면 count를 1 빼주고, 작은 수를 더해주기 시작한다.
// 3. 더 이상 더해줄 작은 수가 없다면 return 한다.
// 4. sum이 특정 값과 일치하면 count값을 minCount와 비교해준다.

let arr = [1, 5, 12];
console.log(solution(15, arr));
