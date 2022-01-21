const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = ["hit"];
// "ball"

var mostCommonWord = function (paragraph, banned) {
	const map = {};
	let max = 0;
	let answer;

	paragraph.split(/[^a-zA-Z]/).forEach((el) => {
		el = el.toLowerCase();

		if (!el) return;
		if (banned.includes(el)) return;

		if (map[el]) {
			map[el]++;
		} else {
			map[el] = 1;
		}

		if (map[el] > max) {
			max = map[el];
			answer = el;
		}
	});

	console.log(answer);
};

mostCommonWord(paragraph, banned);
