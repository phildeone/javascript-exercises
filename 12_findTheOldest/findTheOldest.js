
const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
const findTheOldest = function(people) {
//   let oldestPerson ={};
//   let oldestAge = 0;
//   for(let i = 0; i < people.length; i++){
//     let age = people[i].yearOfDeath - people[i].yearOfBirth;
//     if(age >= oldestAge){
//       oldestAge = age;
//       oldestPerson = people[i];
//     }
//   }
//   return oldestPerson;

  // people.forEach(item => {
  //   if(oldestAge < item.yearOfDeath - item.yearOfBirth){
  //     oldestAge = item.yearOfDeath - item.yearOfBirth;
  //     oldestPerson = item;
  //   }
  // })
  // return oldestPerson;

  return people.reduce((oldestPerson, oldestAlive) => {
    const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    const oldestAgeAlive = getAge(oldestAlive.yearOfBirth, oldestAlive.yearOfDeath);
    return oldestAge < oldestAgeAlive ? oldestAlive : oldestPerson;
  })
};

//A function to Identify oldest person alive.
const getAge = function(birthYear, deathYear){
  if (!deathYear){
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear;
}



// Do not edit below this line
module.exports = findTheOldest;
