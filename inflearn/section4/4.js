function solution(m, product) {
	let answer = Number.MIN_SAFE_INTEGER;

	// 상품 쿠폰이 없다는 가정하에 구매 가격이 저렴한 순서를 배열을 재정렬한다
	const lowToHighPrice = product.sort((b, a) => {
		return b[0] + b[1] - (a[0] + a[1]);
	});
	// => [ [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 6, 6 ], [ 10, 3 ] ]

	// 반복문을 돌려 학생 중 한명에게 50% 할인을 적용시킨뒤 몇 개 구매가능한지 구한다
	for (let i = 0; i < lowToHighPrice.length; i++) {
		// i번 째 학생에게 50% 쿠폰을 적용시킨 뒤 구매 확정
		const discounted = lowToHighPrice[i][0] / 2 + lowToHighPrice[i][1];
		let count = 1;
		let budget = m - discounted;

		// 모든 학생들 반복문을 돌려서 몇 개까지 구매가능한지 계산한다
		for (let j = 0; j < lowToHighPrice.length; j++) {
			// 구매 확정된 학생일 경우 넘어간다
			if (j === i) continue;

			// 구매할 상품 가격
			const price = lowToHighPrice[j][0] + lowToHighPrice[j][1];

			// 예산이 모자랄 경우 중단한다
			if (budget < price) break;
			// 구매한 만큼 예산에서 깍는다
			budget -= price;
			count++;
		}
		answer = Math.max(answer, count);
	}

	console.log(answer);
}

let arr = [
	[6, 6],
	[2, 2],
	[4, 3],
	[4, 5],
	[10, 3],
];
solution(28, arr);
