function solution(arr) {
	let timeline = [];

	for (let el of arr) {
		timeline.push([el[0], "s"]);
		timeline.push([el[1], "e"]);
	}

	timeline.sort((a, b) => {
		if (a[0] === b[0]) {
			return a[1].charCodeAt() - b[1].charCodeAt();
		} else {
			return a[0] - b[0];
		}
	});

	let max = 0;
	let count = 0;

	for (let el of timeline) {
		if (el[1] === "s") {
			count++;
		} else {
			count--;
		}
		max = Math.max(max, count);
	}

	return max;
}

let arr = [
	[14, 18],
	[12, 15],
	[15, 20],
	[20, 30],
	[5, 14],
];
// arr = [
// 	[1, 3],
// 	[2, 4],
// 	[2, 5],
// ];
console.log(solution(arr));

[
	[5, 14],
	[12, 15],
	[14, 18],
	[15, 20],
	[20, 30],
];
