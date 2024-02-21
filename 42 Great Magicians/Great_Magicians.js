"use strict";
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Array of magician's names
let magician_names = ["David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
// Apply make_great function to modify magician_names array
magician_names = make_great(magician_names);
// Call the function to show the magicians
show_magicians(magician_names);
