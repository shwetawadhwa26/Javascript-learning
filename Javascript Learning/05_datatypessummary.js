//DATAYPES are of 2 types --> primitive and non primitive(refrence)

//PRIMITIVE --> 7 types --> string , number, boolean, null, undefined, symbol, bigint

//REFRENCE/NON PRIMITIVE --> array, objects, functions


const isloggedin=false
const outsidetemp = null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(typeof anotherId) 

console.log(id==anotherId);

const bignumber = 123456677888987654n
console.log(typeof bignumber);
//n infront of number converts it into big int



const heros=['hello', 'hi', 'bye'];
let myobj={
    name:"hitesh",
    age: 22,
}

console.log(heros);


const myfunction = function(){
    console.log("hello world");
}





