const logs = [
	"dig1 8 1 5 1",
	"let1 art can",
	"dig2 3 6",
	"let2 own kit dig",
	"let3 art zero",
];

const reorderLogFiles = (logs) => {
	// 식별자 뒤에오는 단어들만 반환한다.
	const body = (s) => s.slice(s.indexOf(" ") + 1);

	// number & string 타입 상관없이 숫자이면 true를 반환한다.
	const isNum = (c) => /\d/.test(c);

	// if body same then compare identifier
	const compare = (a, b) => {
		const n = body(a).localeCompare(body(b));
		if (n !== 0) return n;
		return a.localeCompare(b);
	};

	const digitLogs = [];
	const letterLogs = [];
	for (const log of logs) {
		if (isNum(body(log))) digitLogs.push(log);
		else letterLogs.push(log);
	}

	console.log([...letterLogs.sort(compare), ...digitLogs]);

	return [...letterLogs.sort(compare), ...digitLogs];
};

reorderLogFiles(logs);
// ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
