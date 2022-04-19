function solution(arr) {
	for (let i = 0; i < arr.length; i++) {
		// 최솟값의 인덱스를 찾는다
		let minIndex = i;

		for (let k = i + 1; k < arr.length; k++) {
			if (arr[k] < arr[minIndex]) minIndex = k;
		}

		// 최소값의 위치를 조정한다
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}

	return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
