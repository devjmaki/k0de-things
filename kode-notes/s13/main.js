// debugging purposes 
console.log("hello, world"); 

// js operators - symbols used to manipulate values/operands/math+logical computations

// A. Assignment Operator - represents equal symbol =
//  let - reassignable 
let a = 14;
a = 18;

let b = a;
console.log(b);
// output = 18 

// B. Arithmetic Operators - mathematical oprators on a numerical values/operands and returns a single numerical value (+)

console.log(20+30); 
// output = 50 
// primitive data type - int, null, undefined, boolean 

console.log("20"+"30");
// output = 2030; 
// string concatenation/concatenation - links/combines two strings together 

// C. Subtraction - difference (-)
console.log(20-10);
// output = 10;

console.log("50"-"10");
// output = 40
// Type Coercion - automatic/implicit conversion of values from one data to another. 

let x = 50;
let y = '30';
let diff = x - y;
console.log(diff); 
// type coercion

console.log("nine" - "one");
// Nan - Not a Number

//  D. Division (/)
console.log(50/5);
//  Number under primitive data type 

console.log("50"/"5"); 
// coercion

console.log("fifty"/"five");
// Nan

//  E. Modulus Division (modulo - % );
console.log(100%3);
// output = 1; remainder


// F. Increment (++) & Decrement (--)
// operators first = arithmetic operation 
let m = 30;
console.log(++m);
// output = 31; add 1

console.log(m);
// output = 31; displayed new value 

console.log(--m);
// output = 30;
console.log(m);
// output = 30;

// operand comes first before operator, it displays the val of the operand before performing the arithmetic operation 

console.log(m++);
// output = 30
console.log(m);
// output = 31; current val

console.log(m--);
// output = 31
console.log(m);
//  output = 30;


// Compound Assignment Operator - shortcut for arithmethic + assignment operations
//  performs operation then assigns the result back to the variable 
/*
    long method:
    let j = 15;
    console.log(j+3);//18 
    console.log(j); //15
*/

// Addition Assignment Operator (+=)
let s = 15;
console.log(s += 3);
// output = 18;
console.log(s);

// Subtraction Assignment Operator (-=)
console.log(s -= 10);
// output = 8

// Multiplication Assignment Operator (*=)
console.log(s *= 15);
// output = 120 

// Division Assignment Operator (/=)
console.log(s /= 2);
// output = 60

// Modulus Assignment Operator (%=)
console.log(s %= 8);
// output = 4;


// Companion Operators
// compares two operands and returns a logical value (true or false)

// < - less than
// > - greater than

// Equality Operator (==) aka "Loose Equality"
// compares the same value regardless of data type because of coercion

console.log("Jan" == "Jen");
console.log(true == true);
// true

console.log(false == true);
// false

console.log(true==false);
// false

console.log(false==false);
// true

console.log(null==undefined);
// true

console.log('20'==20);
// true


// BINARY NUMBERS
// 1 = TRUE 0 = FALSE
console.log(true==1);
// true

console.log(true==2);
// false

console.log(false==0);
// true

console.log(false==1);
// false

console.log(4.00 == 4);
// true

// parseInt() - convert into whole number
// parseFloat() - used for decimal number

let mj = 75.68;
console.log(parseInt("75.68"));
console.log(parseFloat("75.68"));

console.log(parseInt("75.68").toFixed(2));
// toFixed(2) - displays 2 decimal places

console.log(parseFloat(mj.toFixed(3)));

// Strict Equality Operator (===)
// doesnt practice coercion; compares "somenss of value" and data type

console.log(1===1); //true
console.log(5==="5"); //false
console.log(true===1); //false
console.log(null===undefined); //false
console.log("Makie"==="Marco"); //false

console.log(true===true); //true
console.log(false===false); //true

// Inequality Operators (!=)
// Loose Inequality Operator
// compares if values are different
// coercion works

console.log(false != true);
// true

console.log(3 != 3.00);
// false

console.log(null != undefined);
// false

console.log(true != 1);
// false


// STRICT INEQUALITY OPERATOR (!==)

console.log(false !== true);
// true

console.log(4 !== 4.00);
// false

console.log(null !== undefined);
// true

console.log(true !== 1);
// true


// GREATER THAN (>)
console.log(100>75);
// true

console.log(70>180);
// false


// LESS THAN (<)
console.log(45<50);
// true

console.log(67<45);
// false


// GREATER THAN OR EQUAL TO (>=)
console.log(45>=45);
// true

console.log(44 >= 45);
// false


// LESS THAN OR EQUAL TO (<=)
console.log(100 <= "100");
// true

console.log(1 < 0.5);
// false


// LOGICAL OPERATORS

// AND OPERATORS (&&)
// when there is false in statements it set as false
console.log(true && true);
// true

console.log(true && false);
// false

console.log(false && true);
// false

console.log(false && false);
// false

console.log(("Max && Max") && (undefined == null));
// true

console.log(("Max && Max") && (undefined === null));
// false

let gem = true;
console.log(gem > 2 && gem < 2);
// false

let isCoffee = true
let isReady = false
let drinkCoffee = isCoffee && isReady
console.log(drinkCoffee);


let isTrue = true;
let isFalse = false;

let isTralse = !(!isFalse != !isFalse && isFalse !== isTrue || (!isTrue != !isFalse && isFalse != !isTrue));

isTralse = !(true != true && false !== true || (false != true && false != false));

isTralse = !(false && true || (true && false));

isTralse = !(false || false);

isTralse = !(false);

isTralse = true
