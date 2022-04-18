function solution(str) {
	let stack = 0;
	let answer = "";

	for (let el of str) {
		// 열린 괄호일 시 +1
		if (el === "(") {
			stack++;
			continue;
		}

		// 닫는 괄호일 시 -1
		if (el === ")") {
			stack--;
			continue;
		}

		// 스택이 0일 경우 문자를 정답에 추가
		if (stack === 0) answer += el;
	}

	return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
