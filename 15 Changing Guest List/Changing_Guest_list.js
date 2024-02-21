"use strict";
let Guest_List = ['abdullah', 'saifullah', 'bilal', 'ali'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + '\n\nIt is your pleasure to inivite you in our party.\n\nThank You!\n\n');
}
let absent_Guest = 'abdullah';
let new_Guest = 'Umar';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + '\n\nIt is your pleasure to inivite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
