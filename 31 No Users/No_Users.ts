let users: string[] = []; // Assuming this is your array of usernames

// Check if the list of users is not empty
if (users.length > 0) {
    // If the list is not empty, print the list of users
    console.log("Current users:", users.join(", "));
} else {
    // If the list is empty, print the message
    console.log("We need to find some users!");
}

// Remove all usernames from the array
users = [];

// Check if the list of users is not empty after removal
if (users.length > 0) {
    // If the list is not empty, print the list of users
    console.log("Current users:", users.join(", "));
} else {
    // If the list is empty, print the message
    console.log("We need to find some users!");
}
