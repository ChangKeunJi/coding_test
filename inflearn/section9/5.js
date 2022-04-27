function solution() {
	const answer = [];
	const q = [];

	q.push(1);

	while (q.length > 0) {
		// queue의 맨 앞 원소를 pop 해준다.
		let p = q.shift();

		// p를 정답에 추가
		answer.push(p);

		// p가 특정 숫자 이상이 되면 queue에 push 하는것을 멈춘다.
		if (p * 2 > 7 || p * 2 + 1 > 7) continue;

		// p와 연결되어 있는 자식 노드를 queue에 push 해준다.
		q.push(p * 2);
		q.push(p * 2 + 1);
	}

	return answer;
}

console.log(solution());
