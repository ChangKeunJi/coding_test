function solution1(n, arr) {
	let answer = 0;

	for (let i = 0; i < arr.length; i++) {
		// i가 가르키는 곳을 sum으로 지정한다.
		let sum = arr[i];

		// sum이 n과 같으면 다음 반복문으로 넘어간다.
		if (sum === n) {
			answer++;
			continue;
		}

		// sum이 n보다 작으면 다음 숫자를 하나씩 더해간다.
		if (sum < n) {
			for (let k = i + 1; k < arr.length; k++) {
				sum += arr[k];

				// 어느 순간 sum이 n과 같아지면 반복문 중단한다.
				if (sum === n) {
					answer++;
					break;
				}

				// sum이 n보다 커져도 반복문 중단한다.
				if (sum > n) break;
			}
		} else {
			continue;
		}
	}

	return answer;
}

function solution2(n, arr) {
	let lt = 0;
	let rt = 0;
	let sum = arr[rt];
	let answer = 0;

	while (rt < arr.length) {
		if (sum === n) {
			answer++;
			sum -= arr[lt++];
			sum += arr[++rt];
		}

		if (sum < n) {
			sum += arr[++rt];
		}

		if (sum > n) {
			sum -= arr[lt++];
		}
	}

	return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution1(6, a));
console.log(solution2(6, a));
console.log(solution2(3, [1, 1, 1, 1, 1, 1, 1])); //5
