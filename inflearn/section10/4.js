function solution(m, coin) {
	let dy = Array.from({ length: m + 1 }, () => 0);

	dy[0] = 0;

	for (let i = 0; i < coin.length; i++) {
		let curCoin = coin[i];

		for (let j = curCoin; j < dy.length; j++) {
			dy[j] = Math.min(dy[j], dy[j - curCoin] + 1);
		}
	}
	console.log(dy);
	return dy[m];
}

let arr = [1, 2, 5];
console.log(solution(16, arr));
