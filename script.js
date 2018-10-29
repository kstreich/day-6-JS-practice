let andrew = {
  firstName: "Andrew",
  birthOrder: "oldest",
  eyeColor: "blue",
  hairColor: "brown",
  age: 31
};

let jon = {
  firstName: "Jon",
  birthOrder: "youngest",
  eyeColor: "blue",
  hairColor: "brown",
  age: 25
};


let kim = {
  firstName: "Kim",
  gender: "female",
  age: 27,
  height: "5 feet 4 inches",
  eyeColor: "blue",
  hair: {
    color: "blonde",
    length: "medium",
    consistency: "wavy"
  },
  birthPlace: "Washington",
  martialStatus: "married",
  spouse: {
    firstName: "Jude",
    eyeColor: "brown",
    hairColor: "brown",
    age: 26
  },
  children: 0,
  pets: 0,
  parents: [
    {
      firstName: "Kevin",
      parent: "dad",
      eyeColor: "blue",
      hairColor: "brown"
    },
    {
      firstName: "Jane",
      parent: "mom",
      eyeColor: "blue",
      hairColor: "brown"
    }
  ],
  siblings: [andrew, jon],
  favoriteColor: "gray",
  favoriteTvShow: "Parks and Rec",
  favoriteMovie: "Heavyweights",
  favoriteSeasons: ["spring", "fall"],
  hobbies: ["Playing ukelele", " baking", " hiking", " shopping", " dancing"
  ]
};

let story1 = `My name is ${kim.firstName} and I am ${kim.age} years old. I am married to ${kim.spouse.firstName} and he is ${kim.spouse.age} years old. He has dreamy ${kim.spouse.eyeColor} eyes and a thick head of ${kim.spouse.hairColor} hair. But back to me... I have ${kim.pets} pets and ${kim.children} children. My favorite tv show is ${kim.favoriteTvShow}. My hobbies include ${kim.hobbies}. I have ${kim.siblings.length} siblings; one named ${andrew.firstName} who is the ${andrew.birthOrder}, and the other named ${jon.firstName} who is the ${jon.birthOrder}. My parents names are ${kim.parents[0].firstName} and ${kim.parents[1].firstName}. My mom has ${kim.parents[1].hairColor} hair and my dad has ${kim.parents[1].eyeColor} eyes.`

console.log(story1)
console.log("line 65")