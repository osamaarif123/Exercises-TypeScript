"use strict";
function makeSandwich(items) {
    console.log("Making sandwich with the following items:");
    items.forEach(item => console.log("-", item));
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different arrays of items
makeSandwich(["Ham", "Cheese", "Lettuce", "Tomato"]);
makeSandwich(["Turkey", "Swiss cheese", "Pickles"]);
makeSandwich(["Peanut butter", "Jelly"]);
