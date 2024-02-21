"use strict";
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Mumbai", "india");
describe_city("France"); // No country specified, default country will be used
