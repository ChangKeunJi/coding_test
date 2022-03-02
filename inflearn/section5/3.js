const getSum = (arr, n, m) => {
	const newArr = arr.slice(n, m);
	return newArr.reduce((a, b) => a + b);
};

function solution(k, array) {
	let answer = 0;

	let n = 0;
	let m = 1;

	while (n < array.length && m < array.length) {
		const sum = getSum(array, n, m);

		if (sum === k) {
			answer++;
			n++;
			m = n + 1;
		}

		if (sum > k) {
			n++;
			m = n + 1;
		}

		if (sum < k) {
			m++;
		}
	}

	return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

// console.log(getSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 3));
