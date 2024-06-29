// console.log("s")
// console.log("h")
// console.log("w")
// console.log("e")
// console.log("t")
// console.log("a")

// function saymyname(){ 
//     console.log("s");
// console.log("h");
// console.log("w");
// console.log("e");
// console.log("t");
// console.log("a");

// }

// //saymyname()

// function addtwonumbers(number1,number2){
//      console.log(number1+number2);
// }
// addtwonumbers(3,4)
// addtwonumbers(3,"77")
// addtwonumbers(3,'a')
// addtwonumbers(44,null)


// const result =addtwonumbers(3,5);
// console.log("result: ",result);

// function subtracttwonumbers(number1,number2){
//     // let result=number1-number2;
//     // return result;
//     return number1+number2
    
// }
// const res=addtwonumbers(3,3)

// console.log("Result:",result);

// function loginusermessage(username){
//     if(username===undefined){
//         console.log("please enter a username");
//         return
//     }
//     return '${username} just logged in';
// }

// //console.log(loginusermessage("shweta"));

// console.log(loginusermessage(""));
// console.log(loginusermessage());


// function calculatecartprice(val1,val2,...num1){
//     return num1
// }
// console.log(calculatecartprice(200,300,400,5000));



const user = {
  username: "shweta",
  age: 20
};

function handleObject(anyObject) {
  console.log(`username is ${anyObject.username} and age is ${anyObject.age}`); // Use backticks for template literals
}

handleObject(user);


const mynewarray=[900,300,400,500]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(mynewarray));