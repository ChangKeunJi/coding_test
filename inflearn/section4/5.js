// 1. 배열의 원소들 중 n장의 카드를 뽑는다.
// 2. n장의 카드 중 3장을 뽑아 합을 구한 뒤 큰 순서로 정렬시킨다.
// 3. 정렬된 합 중에서 k번째로 큰 수를 반환한다

function solution(n, k, arr) {
	// 합을 담아놓을 배열
	let groupOfSum = [];

	// n개의 카드 중 3장의 카드를 뽑는 모든 경우의 수를 구한다
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			for (let k = j + 1; k < n; k++) {
				const sum = arr[i] + arr[j] + arr[k];
				if (groupOfSum.includes(sum)) continue;
				groupOfSum.push(sum);
			}
		}
	}

	return groupOfSum.sort((b, a) => a - b)[k - 1];
}

// ---- SET을 사용한 방법

function solution1(n, k, arr) {
	let set = new Set();

	for (let i = 0; i < n - 2; i++) {
		for (let j = i + 1; j < n - 1; j++) {
			for (let k = j + 1; k < n; k++) {
				const sum = arr[i] + arr[j] + arr[k];
				set.add(sum);
			}
		}
	}

	// SET을 배열로 변환시킨다
	let array = Array.from(set).sort((a, b) => b - a);

	return array[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution1(10, 3, arr));
