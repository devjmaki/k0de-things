/*
    Javascript
    - creates dynamically updating content , control multimedia, animate images, 
    and pretty much everything else.
    DYNAMIC CODE
    Server side - ability to update the display of a web page/app, to show different things generating new content as required.
    Client side - generates new content inside the client's browser.
*/

console.log("Hello World");

// //1. Using InnerHTML
// document.getElementById("sample").innerHTML =("Welcome to Javascript");
// //the most common way to display data in HTML

// //2. document.write() - testing purposes
// document.write("Hello method");

// //3. alert() - dsiplays a window in the web browser.
// alert ("I am an alert!");

// //4. console.log() - for debugging purposes
// console.log ("This is a console log");

//This is a single line comment

// comment

/* Multiline comment */

//Naming variables
const pi = 3.1416; //these variable cannot be reassigned.
console.log (pi);

// pi = 1.20;
// console.log(pi);

let name = "Jem";
//let is re-assignable
console.log (name);
name="Dahl";
console.log (name);

// let name ="Joey";
// //we cannot re-declare the variable itself
// console.log (name);

//Primitive Data Types
let name1 = "Bryan";//String
console.log (name1);
console.log(typeof name1);
//typeof enables us to know what data type is it.

let age = 15; //number
console.log (typeof age);

let grade = 90.5; //number
console.log (typeof grade);

let isPresent = true; //boolean - answers true or false
//isPresent - the proper naming convention for assigning a boolean value;

console.log (isPresent);
console.log (typeof isPresent);

let myCopy; 
console.log(myCopy);
//output is undefined because there is no value assigned into it.

let option1 = null;
console.log(option1);

// let 1fruit = apple;
// console.log (1fruit);
//We do not apply number first before a word

let $year = 2022;
console.log($year);
//we can use a special character before word when naming a variable.
//There are some special characters that do not work for assigning a variable.

let $_year = 2023;
console.log($_year);
//2 special characters are working before a word.

let state = `Washington`;
console.log (state);
//backticks are working but for Strings only

//object 
const guy = {
    //property: value
    //key value pair

    name: "Peter Griffin", //str
    age: 43, //num
    address: "Spooner Street, Rhode Island",
    isFunny: true, //boolean
    spouse: "Lois Griffin",
    children: [ "Meg", "Chris", "Steward"] //array
};
console.log(guy);
console.log(guy.name);
console.log(guy.children[2]);

//array
const carBrands = [ "Honda", "Jeep", "Lexus", "Subuwu", "Range Rover"];
console.log(carBrands);
console.log(carBrands.length);

//exercise
const fruits = [ "apples","oranges","bananas","grapes","strawberry"];
console.log(fruits[2]);
console.log(fruits.length);
console.log(`Family Guy characters: ${guy.name}, ${guy.spouse}, and their children ${guy.children.join(', ')}`);

/*
function
    function declaration:
        function keyword
        function name and parenthesis -> holds params
        { } -> determine the block of codes, statements are written inside
*/

function greet(fName, lName, greeting = "Hello"){
    //greeting -> funcName
    //(fName) -> params/args/properties/attributes
    //params - named variables passed into a function/imports args into function

    console.log(`${greeting}, ${fName} ${lName}!`);
};
greet("Jem","Makie");

//return 
function product(m,j){
    console.log("Product:");
    return m * j; //stops execution of a function
}
console.log(product(1,9));

//exercise
//compute ave of three numbers
function average (a,b,c){
    return (a + b + c )/ 3;
}
console.log(average(3,3,3));

//arrow function with parens around params
const ave = (a,b,c) => {
    return (a + b + c )/ 3;
}
console.log(ave(5,5,5));
