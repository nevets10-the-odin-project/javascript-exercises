const convertToCelsius = function (fahrenheit) {
	const celsius = (fahrenheit - 32) * (5 / 9);
	if (Number.isInteger(celsius)) return celsius;
	return +celsius.toFixed(1);
};

const convertToFahrenheit = function (celsius) {
	const fahrenheit = celsius * (5 / 9) + 32;
	if (Number.isInteger(fahrenheit)) return fahrenheit;
	return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
