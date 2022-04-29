function solution(orders, course) {
	let answer = [];

	// 입력받은 orders 배열의 문자열 원소를 배열로 바꿔주고 알파벳 순으로 정렬한다.
	let newOrders = orders.map((order) => {
		return order.split("").sort().join("");
	});

	// 원소의 개수가 작은것 부터 먼저오게 다시 정렬한 뒤 배열원소를 다시 문자열로 변환한다.
	newOrders = newOrders.sort((a, b) => a.length - b.length);

	// course를 순환하면서 갯수에 맞는 조합이 존재하는지 찾는다.
	let commonArr = [];

	// 이중 for문 돌면서 공통 문자열 찾는다.

	for (let i = 0; i < newOrders.length; i++) {
		for (let j = i + 1; j < newOrders.length; j++) {
			const [common, commonLeng] = findCommonStr(newOrders[i], newOrders[j]);

			if (course.includes(commonLeng)) commonArr.push(common);
		}
	}

	console.log("commonArr", commonArr);

	// commonArr를 Map으로 만든다.
	const map = {};

	for (let el of commonArr) {
		if (map[el]) {
			map[el]++;
		} else {
			map[el] = 1;
		}
	}

	console.log("map", map);

	for (let el of course) {
		let max = -1;
		for (let prop in map) {
			if (prop.length === el) {
				max = Math.max(max, map[prop]);
			}
		}
		console.log("max", max);
		for (let prop in map) {
			if (prop.length === el && map[prop] === max) {
				answer.push(prop);
			}
		}
	}

	console.log(answer);
	return answer.sort();
}

function findCommonStr(str1, str2) {
	let common = "";

	for (let el of str1) {
		if (str2.includes(el)) common += el;
	}

	if (!common) return ["", 0];

	return [common, common.length];
}

//2

function solution(orders, course) {
	let answer = [];

	// 입력받은 orders 배열의 문자열 원소를 배열로 바꿔주고 알파벳 순으로 정렬한다.
	let newOrders = orders.map((order) => {
		return order.split("").sort().join("");
	});

	// 원소의 개수가 작은것 부터 먼저오게 다시 정렬한 뒤 배열원소를 다시 문자열로 변환한다.
	newOrders = newOrders.sort((a, b) => a.length - b.length);
	console.log(newOrders);

	/* - newOrders 
	[
		'AB',    'CD',
		'ADE',   'XYZ',
		'XYZ',   'ACD',
		'ABCDE'
	]
	*/

	// course를 순환하면서 갯수에 맞는 조합이 존재하는지 찾는다.
	let commonArr = [];

	// 이중 for문 돌면서 공통 문자열 찾는다.
	for (let i = 0; i < newOrders.length; i++) {
		for (let j = i + 1; j < newOrders.length; j++) {
			// const [common, commonLeng] = findCommonStr(newOrders[i], newOrders[j]);
			console.log(findCommonStr(newOrders[i], newOrders[j], course));
			// if(course.includes(commonLeng)) commonArr.push(common);
		}
	}
}

function findCommonStr(str1, str2, course) {
	let arr = [];

	// A, D, E / A, B, C, D, E
	for (let c of course) {
		// 2, 3, 5
		let common = "";
		for (let i = 0; i < str1.length; i++) {
			if (str2.includes(str1[i])) {
				common += str1[i];
				if (common.length === c) {
					arr.push(common);
				}
			}
		}
	}
}
