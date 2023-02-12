const findTheOldest = function (people) {
	return people.reduce((oldest, person) => {
		if (!oldest) return person;

		const currentYear = new Date().getFullYear();

		const oldestMaxYear =
			"yearOfDeath" in oldest ? oldest.yearOfDeath : currentYear;
		const oldestAge = oldestMaxYear - oldest.yearOfBirth;

		const personMaxYear =
			"yearOfDeath" in person ? person.yearOfDeath : currentYear;
		const personAge = personMaxYear - person.yearOfBirth;

		return oldestAge > personAge ? oldest : person;
	}, {});
};

// Do not edit below this line
module.exports = findTheOldest;
