"use strict";
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Array of magician's names
let magician_names = ["David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
// Call the function to show the magicians
show_magicians(magician_names);
