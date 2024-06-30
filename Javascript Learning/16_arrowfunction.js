// const user={
//     username : "shweta",
//     age:20,
//     welcomemessage: function(){
//         console.log( `${this.username}, welcome to website`);
//         console.log(this)  
//     }
// }
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this);

 
// function chai(){
//     let name = "shweta"
//     console.log(this.name);
// }
// chai()


// const chaii = function(){
//     let username ="shweta"
//     console.log(this.username);
// }
// chaii()


//ARROW FUCNTION

const chaiii = ()=> {
    let username ="shweta"
    console.log(this.name);
}
chaiii()




const addtwo=(num1,num2)=>{
    return num1+num2
}

console.log(addtwo(3,4))


//IMPLICIT RETURN 

const addtwonumbers=(num1,num2) => num1+num2
console.log(addtwonumbers(8,6)) 


//to return an object it must be enclosed in paranthesis

const addtwotwo =(num1,num2)=>({name:"shweta"})
console.log(addtwotwo());

