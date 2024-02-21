"use strict";
// Define a function to store information about a car
function createCar(manufacturer, model, ...extras) {
    // Create the car object with mandatory properties
    let car = {
        manufacturer: manufacturer,
        model: model,
        extras: {}
    };
    // Add extra information provided as key-value pairs
    extras.forEach(extra => {
        const [key, value] = Object.entries(extra)[0]; // Extract key-value pair
        car.extras[key] = value;
    });
    return car;
}
// Call the function with required information and extra name-value pairs
let myCar = createCar("Toyota", "Camry", { color: "blue" }, { year: 2023 });
// Print the returned Object to verify all information was stored correctly
console.log(myCar);
