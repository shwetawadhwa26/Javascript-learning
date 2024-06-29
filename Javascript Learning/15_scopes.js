// var c=300
// let a=300   
// if(true){
// let a=10
// const b=20

// console.log("inner",a); //block scope

// }


// console.log(a); //global scope
// //console.log(b);
// //console.log(c);



function one(){
    const username="shweta"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    //two();
}
one();


if (true){
    const username="shweta"
    if(username=="shweta"){
        const website="youtube"
        console.log(username+website);

    }
    //console.log(website);
}
//console.log(username);