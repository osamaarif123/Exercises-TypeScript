function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magician_names: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

// Apply make_great function to modify magician_names array
magician_names = make_great(magician_names);

// Call the function to show the magicians
show_magicians(magician_names);
