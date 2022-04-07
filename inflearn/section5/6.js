function solution(str) {
	let map = new Map();

	// Hash 생성

	for (let el of str) {
		if (map.has(el)) {
			map.set(el, map.get(el) + 1);
		} else {
			map.set(el, 1);
		}
	}

	let max = 0;
	let answer = "";
	for (let [key, value] of map) {
		if (value > max) {
			max = value;
			answer = key;
		}
	}

	return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

// function solution(str) {
// 	let hash = {};

// 	for (let el of str) {
// 		if (hash[el]) {
// 			hash[el] = hash[el] + 1;
// 		} else {
// 			hash[el] = 1;
// 		}
// 	}

// 	let max = 0;
// 	let answer;

// 	for (let key in hash) {
// 		if (hash[key] > max) {
// 			max = hash[key];
// 			answer = key;
// 		}
// 	}

// 	return answer;
// }
