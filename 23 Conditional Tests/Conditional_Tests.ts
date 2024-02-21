let car = 'subaru';

// Test 1: Check if car is equal to 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2: Check if car is not equal to 'toyota'
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// Test 3: Check if car is strictly equal to 'subaru' (same value and type)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 4: Check if car is not strictly equal to 5
console.log("Is car !== 5? I predict True.");
console.log(car !== '5');

// Test 5: Check if car is a string
console.log("Is typeof car === 'string'? I predict True.");
console.log(typeof car === 'string');

// Test 6: Check if car is a boolean
console.log("Is typeof car === 'boolean'? I predict False.");
console.log(typeof car === 'boolean');

// Test 7: Check if car is truthy
console.log("Is car truthy? I predict False.");
console.log(!!car);

// Test 8: Check if car is falsy
console.log("Is car falsy? I predict False.");
console.log(!car);

// Test 9: Check if car is undefined
console.log("Is car undefined? I predict False.");
console.log(car === undefined);

// Test 10: Check if car is null
console.log("Is car null? I predict False.");
console.log(car === null);
