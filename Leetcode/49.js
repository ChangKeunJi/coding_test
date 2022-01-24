const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function (strs) {
	for (const el of strs) {
		// el의 Map을 만든다.
		const map = new Map();

		for (const e of el) {
			if (map.get(e)) {
				map[e]++;
			} else {
				map.set(e, 1);
			}
		}
	}
};
groupAnagrams(strs);
