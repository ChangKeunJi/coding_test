const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const compareMaps = (map1, map2) => {
	for (const key in map1) {
		if (map1[key] !== map2[key]) return false;
	}

	return true;
};

const toMap = (str) => {
	const map = {};
	for (const e of str) {
		if (map[e]) {
			map[e] = map[e] + 1;
		} else {
			map[e] = 1;
		}
	}

	return map;
};

var groupAnagrams = function (strs) {
	const answer = [];

	for (const el of strs) {
		const map = toMap(el);
		for (const e of answer.flat()) {
		}
	}
};
groupAnagrams(strs);
