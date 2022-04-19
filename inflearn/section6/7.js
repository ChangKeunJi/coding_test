function solution(a, b) {
	let arrA = a.split("");

	for (let el of b) {
		if (el === arrA[0]) arrA.shift();
	}

	return arrA.length > 0 ? "NO" : "YES";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
