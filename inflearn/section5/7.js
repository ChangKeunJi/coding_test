function solution(strA, strB) {
	const mapA = new Map();
	const mapB = new Map();

	// A와 B 맵을 만든다.
	for (let el of strA) {
		if (mapA.get(el)) {
			mapA.set(el, mapA.get(el) + 1);
		} else {
			mapA.set(el, 1);
		}
	}

	for (let el of strB) {
		if (mapB.get(el)) {
			mapB.set(el, mapB.get(el) + 1);
		} else {
			mapB.set(el, 1);
		}
	}

	console.log(mapA, mapB);

	// 두 배열 중 하나를 순환하면서 key, value가 일치하는지 확인한다.
	for (let [key, value] of mapA) {
		if (value !== mapB.get(key)) return false;
	}

	return true;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
