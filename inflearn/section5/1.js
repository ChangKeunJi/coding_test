function solution(a, b) {
	// 정답으로 반활 될 배열
	let answer = [];

	const first = a.sort((b, a) => a - b);
	const second = b.sort((b, a) => a - b);

	// 두 배열의 원소가 존재하는 한 연산을 반복한다
	while (first.length > 0 && second.length > 0) {
		// 둘 중 작은 값을 정답에 push하고 제거해준다
		if (first[first.length - 1] <= second[second.length - 1]) {
			answer.push(first.pop());
		} else {
			answer.push(second.pop());
		}
	}

	// 만약 남아있는 배열이 있다면 정답에 추가해준다
	if (first.length !== 0) answer.push(...first.sort());
	if (second.length !== 0) answer.push(...second.sort());

	return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
