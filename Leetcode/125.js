const s = "A man, a plan, a canal: Panama";

// 정규표현식을 이용한 풀이

var isPalindrome = function (s) {
	// 입력받은 문자열에서 숫자와 영문자를 제외한 모든 문자를 제거한 뒤 소문자로 바꿔준다.
	const newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

	// 빈 문자열을 만들고 반대방향으로 push하여 새로운 문자열을 만들어준다.
	let reversedStr = "";

	for (let i = newStr.length; i >= 1; i--) {
		reversedStr += newStr[i - 1];
	}
	// 두 문자열을 비교해준다.
	console.log(newStr === reversedStr);
	return newStr === reversedStr;
};

// 투 포인터를 이용한 풀이

var isPalindrome2 = function (s) {
	const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

	let left = 0;
	let right = str.length - 1;

	while (left < Math.ceil(str.length / 2)) {
		if (str[left] !== str[right]) return false;

		left++;
		right--;
	}

	return true;
};

isPalindrome2(s); // true
