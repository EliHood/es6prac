const people = [
    { name: 'John Doe', age: 17 },
    { name: 'Thomas Calls', age: 19 },
    { name: 'Liam Smith', age: 20 },
    { name: 'Jessy Pinkman', age: 18 }
];


// old way of javascript
// const peopleAbove18 = (collection) => {
//     const results = [];
   
//     for (let i = 0; i < collection.length; i++) {
//       const person = collection[i];
   
//       if (person.age >= 18) {
//         results.push(person);
//       }
//     }
//     return results;
//   };


// new way

const peopleAbove18 = (collection) => {
   return collection.filter( (person) => person.age >= 18)
}

// const owl = peopleAbove18(people);
// console.log(owl)


// Map function
// Let’s take the same list of people and an array of
//  names that tells if the person loves to drink coffee.



const coffeeLovers = ['John Doe', 'Liam Smith', 'Jessy Pinkman'];

// old way
const addCoffeeLoverValue = (collection) => {
    const results = [];
   
    for (let i = 0; i < collection.length; i++) {
      const person = collection[i];
      if (coffeeLovers.includes(person.name)) {
        person.coffeeLover = true;
      } else {
        person.coffeeLover = false;
      }
   
      results.push(person);
    }
   
    return results;
};
// const owl = addCoffeeLoverValue(coffeeLovers);
// console.log(owl);

// new way

const incrementAge = (collection) => {
    return collection.map( (person) =>{
        person.coffeeLover = coffeeLovers.includes(person.name);

        return person;
    });
}


const owl = incrementAge(coffeeLovers);
// console.log(owl);


// Reduce function
// We want to sum up all the people’s ages.

// boring way

// const sumAge = (collection) => {
//     let num = 0;

//     collection.forEach( (person) => {
//         num += person.age;
//     });

//     return num;
// }
// console.log(sumAge(people))

// better way

// const sumAge = (collection) => collection.reduce( (sum, person) =>{
//     return sum + person.age
// }, 0);
// console.log(sumAge(people))


// more filter practice

const is16 = (person) => {
 return person.age === 19
}

let ages = people.filter(is16);
// console.log(ages);

// another way

const age2 = people.filter( (people) =>{
    return people.age === 16
});

// console.log(age2);


// more map practice

let persons = people.map( (person)=> person.name);

// console.log(persons);

// more reduce practice

// let agee = people.reduce( (sum, person) => sum + person.age, 0 )
        

// console.log(agee);

// let agee2 = people.filter( (person) => person.name === 'John Doe' && person.age === 17 )
                
// console.log(agee2);


