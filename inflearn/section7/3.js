// 음수를 만나면 버블 정렬과 유사한 과정으로 또다른 음수를 만나기 전 까지 왼쪽으로 보낸다.

function solution(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			for (let k = i; k > 0; k--) {
				if (arr[k - 1] < 0) break;
				if (arr[k - 1] > 0) [arr[k - 1], arr[k]] = [arr[k], arr[k - 1]];
			}
		}
	}

	return arr;
}

let arr = [-7, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
