import { Console } from "console";

// Guest List
let Guest_List :string[] = ['abdullah' , 'saifullah' , 'bilal' , 'ali'];

//for(let i=0; i<Guest_List.length; i++){

  //  console.log('Dear Mr. ' + Guest_List[i] + '\n\nIt is your pleasure to inivite you in our party.\n\nThank You!\n\n')
//}

// Changing Guest 
let absent_Guest :string = 'abdullah' ;
let new_Guest :string = 'Umar';

Guest_List[0] = new_Guest;

//for(let i=0; i<Guest_List.length; i++){

   // console.log('Dear Mr. ' + Guest_List[i] + '\n\nIt is your pleasure to inivite you in our party.\n\nThank You!\n\n')
//}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

 // More Guest

console.log('Good News! We find big table so we are inviting 3 mor guests.')
//array me 3 guest add kiye hain.
Guest_List.unshift('Ahmed');
Guest_List.splice(2 , 0 , 'hadi');
Guest_List.push('hamza');
//Yahan per men 6 guest ko arrey ko print kraye hain.
for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + '\n\nIt is your pleasure to inivite you in our party.\n\nThank You!\n\n')
}

//  Shrinking Guest

//Sorry Message to guest for not Inviting.
console.log('\nSorry we can not arrage big table, only Two peoples will be invited.');
// Yahan per mene Guest remove kiye hain.
while(Guest_List.length > 2){

  let remove_Guest = Guest_List.pop();
  console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
  
}
// Hamare bache howe 2 Invited Guest.
for(let i=0; i<Guest_List.length; i++){

  console.log('Dear Mr. ' + Guest_List[i] + '\n\nYou are Still invited.\n\nThank You!\n\n')
}
// mene sare guest arrey se romove kar diye.
Guest_List.splice(0 , 2);
console.log(Guest_List);
