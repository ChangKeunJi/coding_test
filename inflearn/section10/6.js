function solution(w, h) {
	if (w === 1 || h === 1) return 0;

	let b;
	let s;

	// w, h 중 큰 것과 작은 것을 구분한다
	if (w > h) {
		b = w;
		s = h;
	} else {
		b = h;
		s = w;
	}

	// 약분을 구한다.
	let rest = b % s;
	let m;
	let n;

	if (Number.isInteger(b / rest)) {
		m = b / rest;
	} else {
		m = b;
	}

	if (Number.isInteger(s / rest)) {
		n = s / rest;
	} else {
		n = s;
	}

	console.log(m, n);

	return w * h - n * Math.ceil(m / n) * (s / n);
}
