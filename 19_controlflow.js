//if

// if(condition){
// }


const isuserloggedin =true
if(2=='2'){
    console.log("executed");
}


if(2==='2'){
    console.log("executed");
}
// >,< , <= , >=, ==, ===, != , !===

const score = 200;
if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}



//SHORTHAND NOTATION
//IMPLICIT SCOPE
//bad code 
const balanced=1000
if(balanced>500) console.log("test"), console.log("test2");


if(balanced < 500){
    console.log("less than 500");
}
else if(balanced < 750 ){
    console.log("less than 750");

}
else if(balanced < 900){
    console.log("less than 900");
}
else{
    console.log("1000");
}

// && || 

const debitcard = true
const loggedinfromgoogle = true
const loggedinfromemail = false
if(loggedinfromemail && debitcard && 2==2){
    console.log('allow');
}
if(loggedinfromemail || loggedinfromgoogle || n){
    console.log("true")
}



//SWITCH


const month =3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("default");
        break;
}



const monthi = "jan"
switch (monthi) {
    case "sept":
        console.log("jan");
        break;
    case "feb":
        console.log("february");
        break;
    case "jan":
        console.log("jan");
        break;
    default:
        console.log("default");
        break;
}


const useremail = "histesh@gmail.com"
if(useremail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

//falsy values
//false, 0, -0, Bigint, On, "", null, underdefined, NaN

//truthy values
//"0",'false', " ", anything in string is truthy value, [], {}, function(){}

// if (useremail.length===0){
//     console.log("array is empty");
// }


// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
//}

let val1;
val1=5??10
val1=null??10
var1=undefined??15
console.log(var1);


//TERNIARY OPERATOR

//condition ? true : false
 



