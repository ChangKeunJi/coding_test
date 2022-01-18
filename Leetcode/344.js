// 344. Reverse String

const s = ["h", "e", "l", "l", "o"];

// 1. Two Pointer를 이용한 방법
var reverseString1 = function (s) {
	// 반복문이 멈출 지점을 구한다. (배열 길이의 절반)
	let leng = s.length - 1; //4

	let i = 0;
	while (i <= leng / 2) {
		// 맨 처음과 맨 끝을 시작으로 서로 값을 뒤바꾼다.
		let temp = s[i];
		s[i] = s[leng - i];
		s[leng - i] = temp;
		i++;
	}

	return s;
};

var reverseString = function (s) {
	let i = 0;
	let j = s.length - 1;

	while (i < j) {
		[s[i], s[j]] = [s[j], s[i]];
		i++;
		j--;
	}

	return s;
};

// Runtime: 201 ms, faster than 9.29%
// Memory Usage: 49 MB, less than 5.25%

reverseString1(s);
// ["o","l","l","e","h"]

// 2. 빈 배열을 이용한 방법 (Leetcode에서는 새로운 배열을 만들지 말라고한다.)

var reverseString2 = function (s) {
	// 값을 담을 빈 배열을 만들어 준다.
	let empty = [];

	// 반복문을 끝에서부터 돌면서 빈 배열에 넣어준다.
	for (let i = s.length - 1; i >= 0; i--) {
		console.log(s[i]);
		empty.push(s[i]);
	}

	console.log(empty);
	return empty;
};

// reverseString2(s);

// 3. 구조분해 할당
var reverseString3 = (s) => {
	let leng = s.length - 1;

	for (let i = 0, j = leng; i >= j; i++) {
		[s[i], s[j]] = [s[j], s[i]];
	}

	console.log(s, "3");
};

reverseString3(s);
