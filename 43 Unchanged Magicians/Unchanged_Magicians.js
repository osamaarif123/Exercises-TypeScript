"use strict";
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Original array of magician's names
let magician_names = ["David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
// Create a copy of the original array
let magician_names_copy = [...magician_names];
// Apply make_great function to modify the copied array
let magician_names_great = make_great(magician_names_copy);
// Call the function to show the magicians with original names
console.log("Original Magicians:");
show_magicians(magician_names);
// Call the function to show the magicians with "the Great" added to their names
console.log("\nGreat Magicians:");
show_magicians(magician_names_great);
