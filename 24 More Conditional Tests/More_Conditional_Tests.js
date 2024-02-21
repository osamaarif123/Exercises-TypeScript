"use strict";
// Tests for equality and inequality with strings
console.log("Equality and Inequality with strings:");
console.log("Test equality:", "hello" === "hello"); // True
console.log("Test inequality:", "hello" !== "hello"); // True
console.log("Test equality with different case:", "Hello" === "Hello"); // False
console.log("Test inequality with different case:", "Hello" !== "Hello"); // True
// Tests using the lower case function
console.log("\nLower case function tests:");
console.log("Test lower case:", "Hello".toLowerCase() === "hello"); // True
console.log("Test lower case with different case:", "HELLO".toLowerCase() === "hello"); // True
console.log("Test lower case with mixed case:", "HeLLo".toLowerCase() === "hello"); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical tests:");
console.log("Test equality:", 5 === 5); // True
console.log("Test inequality:", 5 !== 5); // True
console.log("Test greater than:", 10 > 5); // True
console.log("Test less than:", 5 < 10); // True
console.log("Test greater than or equal to:", 5 >= 5); // True
console.log("Test less than or equal to:", 5 <= 10); // True
// Tests using "and" and "or" operators
console.log("\n'And' and 'Or' operator tests:");
console.log("Test 'and':", true && true); // True
console.log("Test 'and' with one false:", true && false); // False
console.log("Test 'or':", true || false); // True
console.log("Test 'or' with both false:", false || false); // False
// Test whether an item is in an array
console.log("\nItem in array test:");
const array = [1, 2, 3, 4, 5];
console.log("Test item in array:", array.includes(3)); // True
console.log("Test item not in array:", array.includes(6)); // False
// Test whether an item is not in an array
console.log("\nItem not in array test:");
console.log("Test item not in array:", !array.includes(6)); // True
console.log("Test item in array:", !array.includes(3)); // False
