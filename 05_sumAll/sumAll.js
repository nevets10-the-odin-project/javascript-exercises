const sumAll = function (num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
	if (num1 < 0 || num2 < 0) return "ERROR";

	let smallerNumber = num1 <= num2 ? num1 : num2;
	const largerNumber = num1 >= num2 ? num1 : num2;
	let sum = 0;

	while (smallerNumber <= largerNumber) {
		sum += smallerNumber;
		smallerNumber++;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
