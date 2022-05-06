function solution(files) {
	// 대소문자, 숫자, 공백, 마침표, 빼기 / 영문자로 시작 / 숫자 하나 이상 포함

	// 1. 문자열을 세 개의 원소로 이루어진 배열로 변환
	let fileArr = files.map((file) => {
		let arr = file.split("");

		let startIndex = [...arr].findIndex((el) => !isNaN(el));
		let endIndex = [...arr].slice(startIndex).findIndex((el) => isNaN(el));

		if (endIndex === -1) {
			return [
				arr.slice(0, startIndex).join(""),
				arr.slice(startIndex).join(""),
			];
		} else {
			endIndex += startIndex;
			return [
				arr.slice(0, startIndex).join(""),
				arr.slice(startIndex, endIndex).join(""),
				arr.slice(endIndex).join(""),
			];
		}
	});
	/*
			[
				[ 'img', '12', 'png' ],
				[ 'img', '10', 'png' ],
				[ 'img', '02', 'png' ],
				[ 'img', '1', 'png' ],
				[ 'IMG', '01', 'GIF' ],
				[ 'img', '2', 'JPG' ]
			]
	*/

	console.log(fileArr);

	fileArr = fileArr.sort((a, b) => {
		const [headA, numA] = a;
		const [headB, numB] = b;

		// HEAD 비교
		const lowerHeadA = headA.toLowerCase();
		const lowerHeadB = headB.toLowerCase();

		if (lowerHeadA !== lowerHeadB) {
			return lowerHeadA.charCodeAt(0) - lowerHeadB.charCodeAt(0);
		} else {
			// NUMBER 비교
			const trimedNumA = +trimString(numA);
			const trimedNumB = +trimString(numB);

			if (trimedNumA === trimedNumB) {
				return 0;
			} else {
				return trimedNumA - trimedNumB;
			}
		}
	});

	console.log(fileArr.map((el) => el.join("")));
	return fileArr.map((el) => el.join(""));
}

const trimString = (num) => {
	let newStr = "";

	for (let i = 0; i < num.length; i++) {
		if (num[i] === "0") {
			continue;
		} else {
			newStr = num.slice(i);
			break;
		}
	}
	return newStr;
};
