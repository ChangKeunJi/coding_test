function solution(a) {
	let answer = 0;
	const stack = [];

	for (let i = 0; i < a.length; i++) {
		// 막대기 절단
		if (a[i] === "(" && a[i + 1] === ")") {
			answer += stack.length;
			i++;
			// 막대기 추가
		} else if (a[i] === "(" && a[i + 1] !== ")") {
			stack.push(a[i]);
			// 막대기 절단
		} else if (a[i] === ")") {
			answer++;
			stack.pop();
		}
	}

	return answer;
}

let a = "()(((()())(())()))(())";
a = "(((()(()()))(())()))(()())";
console.log(solution(a));
