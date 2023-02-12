const findTheOldest = function (people) {
	return people.reduce((oldest, nextPerson) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const nextPersonAge = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
		return oldestAge > nextPersonAge ? oldest : nextPerson;
	});
};

const getAge = function (yearOfBirth, yearOfDeath = new Date().getFullYear()) {
	return yearOfDeath - yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
