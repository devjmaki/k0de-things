/*
INTRO TO JS 

JavaScript 
- client-side scripting language
- src code is processed on web browser, not on web server
- script -> program of the language
- creates dynamic and interactive experiences for the user

* include js in an html page = script tag before body tag in html file
*call an external js file = scrip tag inside head tag

display output in js: 
1. innerHTML - defines HTML content
2. document.write() - testing purposes
3. alert() - displays window on the browser
4. console.log() - debugging purposes

single comment - ctrl + /
multi line - ctrl + shift + /

variable
- container for storing data (data values)

a. var 
- most common var
- can be reassigned but only accessed within a function

b. const 
- x reassigned, x accessible before they appear within the code

c. let
- can be reassigned but x re-declared

data types 
- loosely typed and dynamic lang
- vars are not directly associated with any particular data type
- any can be re-assigned values of all types

1. Primitive Data Type
- string -> textual 
- number -> numeric
- boolean -> t/f
- null -> intentional absence of any obj val
- undefined -> hasnt been assigned

*camelCase notation for naming vars 
* semicolon (;) after js code!!
* case-sensitive
* when naming a var: number before letter is not accepted, some special characters is accepted, two special characters ($_) before a word is accepted, 

backticks/template literal
- for strings in js
- ``

2. Objects
- structure of a code that models a real-life obj
- container-like but contains several types of data
- { }
- obj properties are written as name: value pairs
- separated by commas 

3. Arrays
- collection of related data
- single object that contains multiple val enclosed in a [ ] (array literals), separated by commas

elements 
- each data stored in an array
- accessible thru indexes -> starts at 0
- highest index = array.length - 1

function
- stores a piece of code that does a single task inside a defined block and then call the code whenever it is needed using a single short command - rather than having to type out the same code multiple times 
- syntax:
    function funcName (params){
        block of code
        console.log/return
    }
    funcName(); -> invoke function

*/
