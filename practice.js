// // const doggie = {
// //     name: 'Buzz',
// //     breed: 'Great Pyrenees',
// //     furColor: 'black and white',
// //     activityLevel: 'sloth-like',
// //     favoriteFood: 'hot dogs'
// //   };

// // //   const breed = doggie.breed;
// //   const name = doggie.name;

// //   console.log(breed, name);

// //   const {name, breed} = doggie;
// //   console.log(name, breed);
// const doggie = {
// //     name: 'Buzz',
// //     breed: 'Great Pyrenees',
// //     furColor: 'black and white',
// //     activityLevel: 'sloth-like',
// //     favoriteFoods: {
// //       meats:{
// //         ham: 'smoked',
// //         hotDog: 'Oscar Meyer',
// //       },
// //       cheeses:{
// //         american: 'kraft'
// //       }
// //     }
// //   };

// //   const {furColor, american} = doggie.favoriteFoods.cheeses;
// //   console.log(furColor, american);

// With arrays, the order matters;(Destructuring Assignment)


const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
const [medium, small, giant] = dogs;

console.log(small, giant);

// We can pick the parts of the array we want to assign 
// to a variable name. The initial comma tells the engine to skip
// the first element and start assigning on the second.

const [,, ndogo] = dogs;
console.log(ndogo );

// Using destructuring assignments with strings
// You can split up a string into multiple strings using .split()

const dogsName = 'Sir Woody BarksALot';

const [,, character] = dogsName.split(' ');
console.log(character);
