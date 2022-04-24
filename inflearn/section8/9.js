function solution(m, arr) {
	// 동전의 종류를 금액이 큰 순서대로 정렬한다.
	arr = arr.sort((a, b) => b - a); // -> [5, 2, 1]

	//
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
