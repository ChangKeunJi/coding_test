// == set을 이용한 방법 ==

// 1. 두 배열 중 하나를 Set으로 만든다.
// 2. 나머지 배열을 반복문으로 돌리며 Set에 포함되 있는지 확인한다.
// 3. 포함되어 있다면 별도의 배열로 push한다.

function solution(a, b) {
	let answer = [];
	const set = new Set(a);

	for (const el of b) {
		if (set.has(el)) {
			answer.push(el);
		}
	}

	return answer.sort((a, b) => a - b);
}

// == 투포인터를 사용한 방법 ==

function solution(a, b) {
	const answer = [];
	let n = (m = 0);

	a = a.sort((a, b) => a - b);
	b = b.sort((a, b) => a - b);

	while (n !== a.length - 1 || m !== b.length - 1) {
		if (a[n] === b[m]) {
			answer.push(a[n]);
			n++;
			m++;
			continue;
		}

		if (a[n] < b[m]) n++;
		if (a[n] > b[m]) m++;
	}

	return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
