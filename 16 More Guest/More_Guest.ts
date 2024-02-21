let Guest_List :string[] = ['abdullah' , 'saifullah' , 'bilal' , 'ali'];

//for(let i=0; i<Guest_List.length; i++){

  //  console.log('Dear Mr. ' + Guest_List[i] + '\n\nIt is your pleasure to inivite you in our party.\n\nThank You!\n\n')
//}

let absent_Guest :string = 'abdullah' ;
let new_Guest :string = 'Umar';

Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + '\n\nIt is your pleasure to inivite you in our party.\n\nThank You!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! We find big table so we are inviting 3 mor guests.')

Guest_List.unshift('Ahmed');
Guest_List.splice(2 , 0 , 'hadi');
Guest_List.push('hamza');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + '\n\nIt is your pleasure to inivite you in our party.\n\nThank You!\n\n')
}
