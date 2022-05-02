function solution(cacheSize, cities) {
	if (cacheSize === 0) return cities.length * 5;
	if (cities.length === 0) return 0;

	let cache = [];
	let count = 0;

	cities = cities.map((el) => el.toLowerCase());

	while (cities.length) {
		let city = cities.shift();

		// 캐시에 있는지 확인한다.
		let i = cache.findIndex((el) => el === city);

		if (i >= 0) {
			// 캐시에 저장된 경우 캐시 맨 뒤로 보낸다.
			cache.splice(i, 1);
			cache.push(city);

			count += 1;
		} else {
			// 저장되어 있지 않은 경우
			if (cache.length < cacheSize) {
				cache.push(city);
			} else {
				cache.shift();
				cache.push(city);
			}
			count += 5;
		}
	}
	return count;
}
