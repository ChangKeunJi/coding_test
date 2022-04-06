function solution1(arr1, arr2) {
	// 1. 두 배열을 각각 오름차순으로 정렬한다.

	// sort를 비우면 원소를 문자열 처리하기 때문에 두 자릿수 숫자는 제대로 정렬되지 않는다!!!
	const sortedArr1 = arr1.sort((b, a) => b - a);
	const sortedArr2 = arr2.sort((b, a) => b - a);

	// 2. 투포인터를 사용해서 두 배열을 비교하면서 두 원소가 같으면 정답 배열에 push 한다.
	const answer = [];
	let p1 = 0;
	let p2 = 0;

	console.log(sortedArr1);

	while (p1 < sortedArr1.length && p2 < sortedArr2.length) {
		if (sortedArr1[p1] === sortedArr2[p2]) {
			answer.push(sortedArr1[p1]);
			p1++;
			p2++;
		} else if (sortedArr1[p1] < sortedArr2[p2]) {
			p1++;
		} else {
			p2++;
		}
	}

	return answer;
}

// SET을 이용한 방법
function solution2(arr1, arr2) {
	const set = new Set(arr1);
	const sortedArr = arr2.sort((a, b) => a - b);
	const answer = [];

	for (let el of sortedArr) {
		if (set.has(el)) {
			answer.push(el);
		}
	}

	return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
// console.log(solution1(a, b));
console.log(solution2(a, b));

// 1, 2, 3, 5, 9
// 2, 3, 5, 7, 8
