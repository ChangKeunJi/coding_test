function foo(arr) {
	const answer = [];

	for (let el of arr) {
		let bool = true;
		el = Number(el.toString().split("").reverse().join(""));

		for (let i = 2; i < el; i++) {
			if (el % i === 0) {
				bool = false;
			}
		}

		if (bool && el !== 1) {
			answer.push(el);
		}
	}
	console.log(answer);
}

foo([32, 55, 62, 20, 250, 370, 200, 30, 100]);
// 23 2 73 2 3

// - 강의 풀이법 -

// whilte 문을 이용한 숫자 뒤집기
// 소수 판별법

function isPrime(num) {
	if (num === 1) return false;

	for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
		if (num % i === 0) return false;
	}

	return true;
}

function foo2(arr) {
	const answer = [];

	for (let el of arr) {
		let res = 0;

		while (el) {
			let x = el % 10;
			res = res * 10 + x;
			el = parseInt(el / 10);
		}

		if (isPrime(res)) {
			answer.push(res);
		}
	}

	console.log(answer);
}

foo2([32, 55, 62, 20, 250, 370, 200, 30, 100]);
