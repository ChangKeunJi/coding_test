function solution(m, musicinfos) {
	let answer = [];
	m = m.split("");

	let infoArr = musicinfos.map((el) => el.split(","));

	infoArr = infoArr.map((info) => {
		return {
			title: info[2],
			song: calSong(info[3], calTime(info[0], info[1])),
			time: calTime(info[0], info[1]),
		};
	});

	infoArr.forEach((info) => {
		if (info["song"].includes(m)) {
			answer.push(info["title"]);
		}
	});

	// - 두 배열을 비교해서 공통된 부분이 연속되었는지 확인해야...
	console.log(infoArr);
	console.log(m);
	console.log(answer);
}

function calTime(t1, t2) {
	let t1Arr = t1.split(":").map((el) => +el);
	let t2Arr = t2.split(":").map((el) => +el);

	let t1Time = t1Arr[0] * 60 + t1Arr[1];
	let t2Time = t2Arr[0] * 60 + t2Arr[1];

	return t2Time - t1Time;
}

function calSong(str, time) {
	let temp = str.split("");
	let strArr = [];

	for (let i = 0; i < temp.length; i++) {
		if (i + 1 < temp.length && temp[i + 1] === "#") {
			strArr.push(temp[i] + temp[i + 1]);
			i++;
		} else {
			strArr.push(temp[i]);
		}
	}

	let resultArr = [];
	let q = Math.floor(time / strArr.length);
	let r = time % strArr.length;
	if (str.length >= time) {
		return strArr.slice(0, time);
	} else {
		for (let i = 0; i < q; i++) {
			resultArr = [...resultArr, ...strArr];
		}
	}

	return [...resultArr, ...strArr.slice(0, r)];
}
