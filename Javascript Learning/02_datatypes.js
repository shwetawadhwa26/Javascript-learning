"use strict";
// treats all JS code as newer version

//alert(3+3)
//we are using nodejs, not browser


//PRIMITIVE DATATYPES
//range of numbers --> 2^53
//bigint --> big int usually used in stock markets
//string --> '' or " "
//boolean --> true or false
//null --> standalone value (empty)
//undefined --> value that isnt defined
//symbol --> unique



//OBJECT

// console.log(typeof "shweta");
// console.log(typeof 1234);
// // "1234" --> string but 1234 --> number
// console.log(typeof null);
// //null --> object 
// console.log(typeof undefined);
// //undefined --> undefined

// let score ="33abc";
// console.log(typeof(score));
// console.log(typeof score)
// let valueinnumber = Number(score);
// console.log(typeof valueinnumber);
// console.log(valueinnumber)



let pop = true;
console.log(typeof(pop)); //boolean
console.log(typeof pop); //boolean
let valueinpop = Number(pop);
//number is used for conversion of truw to 1 or false to 0
console.log(typeof valueinpop); //returns number
console.log(valueinpop); //returns 1 for true for 0 for false 




//CONVERSION 
//"33" --> 33
//"33abc"  --> NaN
//true --> 1 , flase --> 0

let isloggedin = 1
let booleanisloggedin = boolean(isloggedin);
console.log(booleanisloggedin);


var a=5;
var b=2;
var sum=a+b;
var diff=a-b;
var product=a*b;
var division=a/b;
var modulus=a%b;
var power=a**b;


console.log(sum);
console.log(diff);
console.log(division);
console.log(modulus);
console.log(power);




//increment operator and decrement operators 
console.log(a--);
console.log(b++);


//assignment operators = , +=, -=, *=, %=, **=



let x = 5;
let y = 2;

x+=5;
y-=2;
console.log("x = ", x);
console.log("y = " ,y);



//comparison operators == equal to , === equal to & type, != not equal to , !== not equal to & type

let  w  =5;
let v = 2;

let h = "5";

//in js it converts string into a number then compare and give output 
// hence "5"--> 5 so w ==h hence output is true 
console.log("h==w", h==w);
console.log("w !=v ", w!=v);
console.log(" w==v" , w==v);
console.log("w===v", w===v);
console.log("w!==v", w!==v);
console.log("w>=v", w>=v);



//logical operators

//logical and --> && , logical or --> || , logical not --> !
//symbol used for or || is known as pipe --> | 



let m =6;
let n = 5;
let cond1=m>n;
let cond2=m===n;
console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 || cond2 = ", cond1 || cond2);
console.log("!(m<n) = ", (m<n));

//CONDITIONAL STATEMENTS - to implement some condition in the code 
let age = 56;
 if ( age >= 18){
    console.log("you can vote ");
 }

 if(age<18){
    console.log("you cant vote ");
 }

let mode ="dark";
let color;
if(mode === "dark" ){
    color="black";
}

if(mode === "light"){
    color="white";
}
console.log(color);



