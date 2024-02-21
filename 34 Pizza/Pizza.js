"use strict";
let favoritePizzas = ["Pizza Hut", "Pizza Point", "Supreme Pizza"];
// Print the names of each pizza
console.log("My favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}
// Print a sentence using the name of each pizza
console.log("\nSimple statements about my favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza}`);
}
// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
