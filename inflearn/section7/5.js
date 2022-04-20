function solution(n, arr) {
	// n 사이즈의 캐시 생성
	let cash = [];

	for (let el of arr) {
		// 캐시에 저장되어있지 않은 경우
		if (!cash.includes(el)) {
			// 캐시가 가득찬 경우
			if (cash.length === n) {
				cash.pop();
				cash.unshift(el);
			} else {
				// 캐시의 자리가 남아있는 경우
				cash.unshift(el);
			}
		} else {
			// 캐시 내에 이미 저장되어 있는 경우

			// 캐시내 인덱스 찾기
			let index = cash.indexOf(el);

			// 한칸 씩 뒤로 미루기
			for (let i = index; i > 0; i--) {
				cash[i] = cash[i - 1];
			}

			cash[0] = el;
		}
	}

	return cash;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
