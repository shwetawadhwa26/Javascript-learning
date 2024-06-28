//singleton object
const tinder = new Object();
//non singleton object
const tinderuser={}
tinderuser.id="123abc";
tinderuser.name="sammy"
tinderuser.isloggenid=false
// console.log(tinderuser);

const regularuser={
    email:"shwetagreat@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shweta",
            lastname:"wadhwa",

        }
    }

}

console.log(regularuser.fullname.userfullname.firstname);


const obj1 ={1: "a",2:"b"};
const obj2 ={3:"c",4:"d"};
const obj4 ={4:"e",5:"f"};
const obj3={obj1,obj2};
console.log(obj3);
// output - { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const ob3= Object.assign({},obj1,obj2)
const ob4= Object.assign({},obj1,obj2,obj4)
console.log(ob3); //output - { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(ob4);

const obj5={...obj1,...obj2}
console.log(obj5);

//{} --> acts as an empty object in which rest of the values are stored


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    },
    {
        id:3,
        email:"g@gmail.com"
    },
    {
        id:4,
        email:"f@gmail.com"
    },
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


// to search whether a property exists or not
console.log(tinderuser.hasOwnProperty('name'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseteacher:"shweta" 
}

//course.courseteacher -- too long method
//destructing
const{courseteacher}=course
console.log(courseteacher);

const{courseteacher:employ}=course
console.log(employ);


