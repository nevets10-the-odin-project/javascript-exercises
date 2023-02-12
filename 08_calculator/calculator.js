const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (array) {
	let sum = 0;
	array.forEach((number) => {
		sum += number;
	});
	return sum;
};

const multiply = function (array) {
	let product = 1;
	array.forEach((number) => {
		product *= number;
	});
	return product;
};

const power = function (number, power) {
	return number ** power;
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
