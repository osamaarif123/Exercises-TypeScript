function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Original array of magician's names
let magician_names: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

// Create a copy of the original array
let magician_names_copy: string[] = [...magician_names];

// Apply make_great function to modify the copied array
let magician_names_great: string[] = make_great(magician_names_copy);

// Call the function to show the magicians with original names
console.log("Original Magicians:");
show_magicians(magician_names);

// Call the function to show the magicians with "the Great" added to their names
console.log("\nGreat Magicians:");
show_magicians(magician_names_great);
