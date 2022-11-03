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
