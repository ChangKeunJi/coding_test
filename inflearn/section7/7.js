function solution(arr) {
	return arr.sort((a, b) => {
		// x좌표가 서로다르면 정렬 시킨다.
		if (a[0] !== b[0]) return a[0] - b[0];

		// x좌표가 같을 때는 y좌표를 비교한다.
		if (a[0] === b[0]) return a[1] - b[1];
	});
}

let arr = [
	[2, 7],
	[1, 3],
	[1, 2],
	[2, 5],
	[3, 6],
];
console.log(solution(arr));
