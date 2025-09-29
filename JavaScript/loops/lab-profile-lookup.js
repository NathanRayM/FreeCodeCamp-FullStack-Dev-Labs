// lab-profile-lookup

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    const person = contacts[i];
    if (person.firstName === name) {
      if (person.hasOwnProperty(prop)) {
        return person[prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));

/*
EXPECTED OUTPUT

Vos
[ 'Intriguing Cases', 'Violin' ]
[ 'Hogwarts', 'Magic', 'Hagrid' ]
No such contact
No such contact

*/
