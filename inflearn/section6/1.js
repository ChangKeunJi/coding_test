function solution(str) {
	// "("을 만나면 +1, ")"이면 -1을 해준 뒤 최종 값이 0이면 YES

	let stack = 0;

	for (let el of str) {
		if (el === "(") {
			stack++;
		} else {
			stack--;
		}

		// 괄호가 열리지 않았는데 닫는 괄호가 나올 경우
		if (stack < 0) return "NoO";
	}

	return stack === 0 ? "YES" : "No";
}

let a = "(()(()))(()";
a = "(()))";
console.log(solution(a));
