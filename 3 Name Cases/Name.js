let personName = '';
personName = prompt('What is your Name?') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here are your name in :
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}
    `);
}
else {
    alert(`Plase fill your name !`);
}
