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