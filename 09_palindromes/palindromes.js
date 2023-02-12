const palindromes = function (string) {
	const filteredString = string.replaceAll(/[^\w]/g, "").toLowerCase();
	const reversed = filteredString.split("").reverse().join("");
	return filteredString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
