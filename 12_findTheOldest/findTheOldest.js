const findTheOldest = function (people) {
	return people.reduce((oldest, person) => {
		if (!oldest) return person;

		return oldest.yearOfDeath - oldest.yearOfBirth >
			person.yearOfDeath - person.yearOfBirth
			? oldest
			: person;
	}, {});
};

// Do not edit below this line
module.exports = findTheOldest;
