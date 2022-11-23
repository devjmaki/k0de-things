/*
Essay Part:

1.What is the difference between a comparison operator and an assignment operator?

Comparison operators are not necessarily mathematical and are utilized to compare two values: a left and a right. 
It consists of operators such as greater than (>), less than (<), greater than or equal to (>=), less than or equal to (<=), equality (=), not equal (!=), strong equality (===), and strong non-equality (!==).
For example, 9 > 1. Also, 9 === 9. 

On the other hand, Assignment Operators assigns a value to its left operand based on the value of its right operand. 
The simple assignment operator is equal (=). That is, x = 9 is an example assignment expression that assigns the value of 9 to x.


2.What is a Boolean? What does it represent?

Boolean is a simple yet frequently used primitive data type which has two values that are deemed special words in JavaScript: True or False. 
Moreover, it plays a significant role in performing logic and enabling different outcomes in our code. 

3.How is the += operator different than + operator?

The difference between += and + is that the former is the shorthand operator of Addition Assignment while the latter is used for arithmetic operations. 
For example,
let m = 9;
console.log(m += 1);

output = 10

*/
 

//Code Part

//1.Set two variables equal to two different numbers. Use a comparison operator to compare these two variables. Change one of their values by using the +=, -=, *=, or /= operator. Then, compare their values again.

let a = 99;
let e = 11;

99 > 11;
//true

99 < 11;
//false

99 >= 11;
//true

99 <= 11;
//false

99 = 11;
//false

99 != 11;
//true

99 === 11;
//false

99 !== 11;
//true

//changing value of e

console.log(e *= 9);

//output = 99; new value of e

//comparing values of a and e again

99 > 99;
//false

99 < 99;
//false

99 >= 99;
//true

99 <= 99;
//true

99 = 99;
//99

99 != 99;
//false

99 === 99;
//true

99 !== 99;
//false


//2.Try out the <= and >= operators.

let age = 23;
age <= 19;
//false

age >= 8;
//true


//3.Try to use the !== operator.

1 !== '1';
//true
