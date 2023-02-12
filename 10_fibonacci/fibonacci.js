const fibonacci = function (number) {
	const φ = (1 + Math.sqrt(5)) / 2;
	return Math.floor(φ ** number / Math.sqrt(5) + 1 / 2);
};

// Do not edit below this line
module.exports = fibonacci;
