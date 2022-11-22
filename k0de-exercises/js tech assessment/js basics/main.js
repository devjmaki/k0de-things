console.log("Hello!");

let firstName = "Stewart";
let lastName = "Griffin";
let age = 2;
const hobbies = ["Building Machine", "Acting", "Playing Tennis", "Time Traveling"];
const address = {
    houseNumber: "31",
    street: "Spooner Street",
    city: "Quahog",
    state: "Rhode Island"
};

const hobby = hobbies.join(', ');
const workAddress = address.houseNumber + " " + address.street + ", " + address.city + ", " + address.state;

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Age: ${age} years old`);
console.log(`Hobbies: ${hobbies.join(', ')}`);
console.log(`Work Address: ${workAddress} `);

console.log(`************************`);


function userData (nName, fName, lName, age) {
    console.log(`Ola, I'm ${fName} ${lName[0]}, ${age} years of age. You may call me ${nName}.`);

    console.log(`This was printed inside of a function:`);
    console.log(hobbies);

    console.log(`This was printed inside of a function: `);
    console.log(address);
}
userData('Stewie', 'Stewart', 'Griffin', 2);

function returnValue() {
    return false;
}

let isMarried = returnValue();
console.log(`The value of isMarrried is ${isMarried}. ${firstName} is too young for marriage.`);