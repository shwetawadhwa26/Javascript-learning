

//normal fucntion
// function chai(){
//     console.log(`DB connected`);
// }
// chai()

//IIFE
//IIFEs are a common pattern in JavaScript for creating private variables and modules.
//They are self-contained and don't pollute the global scope.

//1st define (), 2nd () execute
(function chaii(){
    console.log(`DB connected`);
})();

(  (name) =>{
    console.log(`DB connected two ${name}`);
})('shweta')


