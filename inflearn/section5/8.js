function compareMaps(mapA, mapB) {
	if (mapA.size !== mapB.size) return false;

	for (let [key, value] of mapA) {
		if (value !== mapB.get(key)) return false;
	}

	return true;
}

function solution(a, b) {
	let answer = 0;

	// b의 문자열 길이
	let leng = b.length;

	// 비교기준이 될 b의 해쉬를 만든다.
	let mapB = new Map();
	for (let el of b) {
		if (mapB.has(el)) {
			mapB.set(el, mapB.get(el) + 1);
		} else {
			mapB.set(el, 1);
		}
	}

	// 길이가 하나 짧은 a 해쉬 생성
	let mapA = new Map();
	for (let i = 0; i < leng - 1; i++) {
		if (mapA.has(a[i])) {
			mapA.set(a[i], mapA.get(a[i]) + 1);
		} else {
			mapA.set(a[i], 1);
		}
	}

	// 투 포인터로 순환하면서 슬라아딩 방식으로 비교한다.
	let lt = 0;
	let rt = leng - 1;

	while (rt < a.length) {
		// rt의 문자를 mapA에 추가한다.
		if (mapA.has(a[rt])) {
			mapA.set(a[rt], mapA.get(a[rt]) + 1);
		} else {
			mapA.set(a[rt], 1);
		}

		// 두 해쉬를 서로 비교한다.
		if (compareMaps(mapA, mapB)) answer++;

		// 윈도우를 한칸 씩 이동한다.
		rt++;

		if (mapA.has(a[lt])) {
			mapA.set(a[lt], mapA.get(a[lt]) - 1);
		}

		if (mapA.get(a[lt]) === 0) mapA.delete(a[lt]);

		lt++;
	}

	return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
