function count(k, arr) {
	let count = 1;
	let sum = 0;

	for (let el of arr) {
		if (sum + el > k) {
			count++;
			sum = el;
		} else {
			sum += el;
		}
	}

	return count;
}

function solution(k, arr) {
	let answer;

	// dvd의 최소 용량 : 가장 큰 곡의 용량
	let lt = Math.max(...arr);

	// dvd의 최대 용량 : 모든 곡을 합한 용량
	let rt = arr.reduce((a, b) => a + b);

	while (lt <= rt) {
		let mid = Math.floor((lt + rt) / 2);

		if (count(mid, arr) <= k) {
			answer = mid;
			rt = mid - 1;
		} else {
			lt = mid + 1;
		}
	}

	return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
