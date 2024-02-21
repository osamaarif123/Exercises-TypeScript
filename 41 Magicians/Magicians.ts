function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician's names
let magician_names: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

// Call the function to show the magicians
show_magicians(magician_names);
