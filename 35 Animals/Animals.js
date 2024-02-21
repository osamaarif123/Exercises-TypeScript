"use strict";
let animals = ["Dog", "Cat", "Rabbit"];
// Print the names of each animal
console.log("Animals:");
for (let animal of animals) {
    console.log(animal);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
