function foo(array) {
	const arr = array.splice(0, 1);
}

foo([
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2],
]);
