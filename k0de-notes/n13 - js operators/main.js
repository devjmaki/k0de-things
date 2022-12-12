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


//Compound Assignment Operator
// shorthand for arithmetic and assignment operation.
//performs mathematical operation then assigning the result back to the variable.

/*
Long method:
let j = 15;
console.log(j+3);//18
console.log(j); //15
*/

//Addition Assignment Operator (+=)
let i = 15;

console.log(i += 3);//18- adds the number in the initial value
console.log(i);//18

//Subtraction Assignment Operators (-=)
console.log(i -= 10);//8

//Multiplication Assignment Operator (*=)
console.log(i *= 15); //120
//i = 8
// 8*15 = 120

//Division Assignment Operator (/=)
console.log(i /= 2); //60
//i = 120 based on above
// 120/2 = 60

//Modulus Assignment Operator (%=)
console.log(i %= 8); //remainder is 4

//Companion Operators
//compares two operands and returns a logical value (true or false)

/*
    < = less than
    > = greater than
*/

//Equality Operator (==) a.k.a "Loose Equality"
//compares the same value regardless of data type because of coercion.

console.log("Jan" == "Jan");//true
console.log(true==true);//true
console.log(false==true); //false
console.log(true==false);//false
console.log(false==false);//true - same value
console.log(null==undefined);//true

console.log("20"==20);//true because of coercion

/*
    Binary Numbers
    1 = true
    0 - false
 */
console.log(true==1);//true
console.log(true==2);//false
console.log(false==0);//true
console.log(false==1); //false

console.log(4.00 == 4); //true

//Type Coercion - automatic/implicit conversion of values from one data type to another.

//parseInt() - converted into whole numbers
//parseFloat() - used for decimal numbers

let ex = 75.68;
console.log(parseInt("75.68")); 
console.log(parseFloat("75.68"));

console.log(parseInt("75.68").toFixed(2));
//.toFixed(2) - displays decimal places
console.log(parseFloat(ex.toFixed(3)));

//Strict Equality Operator (===)
//doesn't practice coercion
//compares "sameness of value" and data type

console.log(1 === 1); //true
console.log(5 === "5");//false
console.log(true === 1); //false
console.log(null === undefined); //false
console.log("James" === "Daniel"); //false - samesness of value is practiced in Strict Equality Operator
console.log(true === true); //true
console.log(false === false); //true

//Inequality Operator (!=)
//a.k.a Loose Inequality Operator
//compares difference of values regardless of data types
//coercion will take place

console.log( false != true); //true
console.log( 3 != 3.00); //false
console.log(null != undefined); //true
console.log(true != 1); //false

//Strict Inequality Operator(!==)
//data type and difference of values

console.log(false !== true); //true
console.log (4 !== 4.00) //false
console.log(null !== undefined); //true
console.log(true !== 1); //true

//Greater Than (>)
console.log(100>75); //true
console.log(70>180); //false

//Less Than (<)
console.log(45<50); //true
console.log(67<45); //false

//Greater Than or Equal to (>=)
console.log(45 >= 45);//true
console.log(44 >= 45);//false

//Less Than or Equal to (<=)
console.log(100 <= 100);//true
console.log(1 <= 0.5);//false

//Logical Operators
    //AND (&&) Operator - when there is false in the statement it set as false

console.log( true && true); //true
console.log( true && false);  //false
console.log( false && true); //false
console.log( false && false);  //false

console.log(("Max" == "Max") && (undefined == null)); //true

let kei = true;
console.log (kei > 2 && kei < 2); //false

let isSleepy = true;
let isDoneStudying = false;
let drinkCafe = isSleepy && isDoneStudying;
console.log(drinkCafe); //false

//best practice to declare a boolean use the word "is" before the given word

//OR Operator (||)
//evaluates to true of either of the operand is true
//if both operands are false the result is false.

console.log( true || true);
console.log( true || false); 
console.log( false || true); //true
console.log( false || false);  //false

//NOT Operator - reverse
console.log(!true); //false
console.log(!false); //true

let isCoffee = true;
let isReady = "1";
let drinkCoffee = !isCoffee === isReady;
console.log(drinkCoffee); //false

let faveNum = 333;
let chooseNum = 245;
let isHigher = !(chooseNum > faveNum || faveNum >= chooseNum);
console.log(isHigher); //false

/*
    let isTrue = true;
    let isFalse = false;

    let isTralse = !(!isFalse != !isFalse && isFalse !== isTrue || (!isTrue != !isFalse && isFalse != !isTrue));

    (!isFalse != !isFalse && isFalse !== isTrue
        T     !=    T     &&    F    !==    T
            F       &&     T
                    F
    
    || 
    
    (!isTrue != !isFalse && isFalse != !isTrue))
        F    !=   T      &&    F    !=    F
            T       &&      F
                    F
    
    ! ( F || F )
    !(F)
    = True
*/
