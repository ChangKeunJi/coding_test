function solution(n, k) {
	// 1부터 n까지 나열되는 배열 생성
	let arr = Array.from({ length: n }, (value, index) => index + 1);

	// 한 명만 남았을 때 멈춘다
	while (arr.length > 1) {
		// 제거되기 전 원소들 뒤로 이동
		for (let i = 1; i < k; i++) arr.push(arr.shift());

		// 왕자 제거
		arr.shift();
	}

	return arr[0];
}

console.log(solution(8, 3));
