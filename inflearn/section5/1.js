// Array.shift를 이용한 방법 O(n^2)

function solution1(arr1, arr2) {
	// 정답이 될 배열
	const answer = [];

	// 두 배열의 첫 번째 원소 크기를 비교한 뒤 작은것을 shift해준다.
	// 배열의 크기가 0이면 while문을 중단시킨다.
	while (arr1.length > 0 && arr2.length > 0) {
		if (arr1[0] > arr2[0]) {
			answer.push(arr2.shift());
		} else {
			answer.push(arr1.shift());
		}
	}

	// 두 배열 중 남아있는 원소들은 정답 배열에 합쳐준다.
	return [...answer, ...arr1, ...arr2];
}

// Pointer를 이용한 방법 O(n)

function solution2(arr1, arr2) {
	// 정답이 될 배열
	const answer = [];

	let p1 = 0;
	let p2 = 0;

	while (p1 < arr1.length && p2 < arr2.length) {
		if (arr1[p1] < arr2[p2]) {
			answer.push(arr1[p1]);
			p1++;
		} else {
			answer.push(arr2[p2]);
			p2++;
		}
	}

	// 두 배열 중 남아있는 배열을 answer에 합쳐준다.
	while (p2 < arr2.length) {
		answer.push(arr2[p2]);
		p2++;
	}
	while (p1 < arr1.length) {
		answer.push(arr1[p1]);
		p1++;
	}

	// 두 배열 중 남아있는 원소들은 정답 배열에 합쳐준다.
	return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution1(a, b));
console.log(solution2(a, b));
