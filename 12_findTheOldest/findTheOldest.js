const calcAge = function (person) {
  return (typeof person.yearOfDeath === 'number' ? person.yearOfDeath : (new Date()).getFullYear()) - person.yearOfBirth;
}

const findTheOldest = function(people) {
  return people.reduce((oldest, person) =>  calcAge(oldest) < calcAge(person) ? person : oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
