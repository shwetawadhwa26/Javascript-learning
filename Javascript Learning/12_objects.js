//singleton


//symbols define - important for interview

const mysym= Symbol("key1")

//object literals

const jsuser={
    name : "shweta",
    age : 20,
    [mysym]:"mykey1",

    location : "panchkula",
    email:"shwetawadhwa75@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","tuesday","wednesday"],
}

//not a very good method
console.log(jsuser.email);
//better method to access
console.log(jsuser["name"]);
//or best method
//console.log(jsuser[email]);
console.log(typeof jsuser.mysym);

//The Object.freeze() static method freezes an object.
// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
jsuser.email = "shweta@vhatgpt.com"

Object.freeze(jsuser)
jsuser.email ="shwetawadhwa75@gmail.com"
console.log(jsuser.email);


jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());

jsuser.greeting2=function(){
    //string interpolation method
    console.log('hello users, ${this.name}');
}

console.log(jsuser.greetingtwo());


