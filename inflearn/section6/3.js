function solution(board, move) {
	let stack = [];
	let answer = 0;

	for (let el of move) {
		for (let i = 0; i < board.length; i++) {
			if (board[i][el - 1] !== 0) {
				// 연속된 인형일 때는 스택에서 마지막 인형 제거 후 answer에 2추가
				if (stack[stack.length - 1] === board[i][el - 1]) {
					answer += 2;
					stack.pop();
				} else {
					// 연속된 인형이 아닐 때는 stack에 추가
					stack.push(board[i][el - 1]);
				}
				board[i][el - 1] = 0;

				break;
			}
		}
	}

	return answer;
}

let a = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 3],
	[0, 2, 5, 0, 1],
	[4, 2, 4, 4, 2],
	[3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
