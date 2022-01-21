const logs = [
	"dig1 8 1 5 1",
	"let1 art can",
	"dig2 3 6",
	"let2 own kit dig",
	"let3 art zero",
];

const reorderLogFiles = (logs) => {
	// 식별자를 제외한 Body만 반환하는 함수 생성
	const getBody = (s) => s.slice(s.indexOf(" ") + 1);

	const compare = (a, b) => {
		const n = getBody(a).toLocalSpire;
	};
};

reorderLogFiles(logs);
// ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
