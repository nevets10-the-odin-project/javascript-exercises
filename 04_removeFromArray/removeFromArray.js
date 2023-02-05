const removeFromArray = function (array, ...values) {
	for (const value of values) {
		if (array.indexOf(value) !== -1) {
			array.splice(array.indexOf(value), 1);
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
