// Current users
let current_users: string[] = ["john", "mary", "alice", "sam"];

// New users
let new_users: string[] = ["eric", "JOhn", "susan", "chris"];

// Convert current users to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

// Loop through new_users to check uniqueness
new_users.forEach(new_user => {
    // Convert new username to lowercase for case-insensitive comparison
    let new_user_lower = new_user.toLowerCase();

    // Check if the new username exists in the current users list (case-insensitive)
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! ${new_user} is available.`);
    }
});
