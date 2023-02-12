const palindromes = function (string) {
	const reversed = string
		.replaceAll(/[^\w]/g, "")
		.toLowerCase()
		.split("")
		.reverse()
		.join("");

	return string === reversed;
};

// Do not edit below this line
module.exports = palindromes;
