"use strict";
function make_shirt(size = "Large", message = "I love T-Shirts") {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("Medium");
// Create a small shirt with a different message
make_shirt("Small", "Not !");
