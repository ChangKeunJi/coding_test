const logs = [
	"dig1 8 1 5 1",
	"let1 art can",
	"dig2 3 6",
	"let2 own kit dig",
	"let3 art zero",
];

// let이 digit보다 먼저온다
// letter log는 사전순으로 정렬되어있다
// 문자가 동일한 경우 식별자 순으로 한다
// 숫자 로그는 입력 순서를 유지한다

// 1. 새로운 배열을 만들고 입력받은 배열을 반복문으로 돌린다
// 2. letter 로그를 발견하면 새로운 배열에 push한다
// 3. letter 로그로 이루어진 배열을 다시 반복문으로 돌린다
// 4. sort 메서드를 이용해 alphabetic 순서로 정렬한다
// 5. 정렬한 배열 뒤에 남은 digit 원소들을 같다 붙인다

var reorderLogFiles = function (logs) {
	// 1. 새로운 배열을 만들고 입력받은 배열을 반복문으로 돌린다
	// 2. letter 로그를 발견하면 새로운 배열에 push한다
	let digits = [];
	let newArr = [];

	for (let el of logs) {
		if (isNaN(Number(el[el.length - 1]))) {
			newArr.push(el);
		} else {
			digits.push(el);
		}
	}

	// 3. letter 로그로 이루어진 배열을 다시 반복문으로 돌린다
	// 요소들의 단어 순서를 재정렬한다
	// 4. sort 메서드를 이용해 alphabetic 순서로 정렬한다

	// let newArr2 = [];

	// for (let el of newArr) {
	// 	let tempArr = el.split(" ");
	// 	let first = tempArr.splice(0, 1);
	// 	tempArr.push(first[0]);
	// 	el = tempArr;
	// 	newArr2.push(el);
	// }

	// newArr2 = newArr2.sort();
	// let newArr3 = [];

	// for (let el of newArr2) {
	// 	let last = el.splice(-1);
	// 	newArr3.push([...last, ...el]);
	// }

	console.log(newArr.sort());

	// 5. 정렬한 배열 뒤에 남은 digit 원소들을 같다 붙인다
	let answer = [];

	// for (let el of newArr3) {
	// 	answer.push(el.join(" "));
	// }
	// // console.log([...answer, ...digits]);
	// return [...answer, ...digits];
};

reorderLogFiles(logs);
// ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
