function solution(str) {
	let stack = [];

	for (let el of str) {
		if (!isNaN(el)) {
			stack.push(Number(el));
		} else {
			const firstEl = stack.pop();
			const secondEl = stack.pop();

			if (el === "/") stack.push(secondEl / firstEl);
			if (el === "*") stack.push(secondEl * firstEl);
			if (el === "+") stack.push(secondEl + firstEl);
			if (el === "-") stack.push(secondEl - firstEl);
		}
		console.log(stack);
	}

	return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
