// () - parenthesis []=brackets {}=braces


//arrays
//in javascript arrays are - resizeable, mix of elements,not associative,zer-indexed

const myarr=[0,1,2,3,4,5];
console.log(myarr[0]); //0
console.log(myarr);


const myheros = ["shaktiman","nagraj"];
console.log(myheros);

const myarr2=new Array(1,2,3,4);
console.log(myarr2[0]);
console.log(myarr2);

myarr.push(6); //inserts 6 in the end of the array
myarr.push(88);
myarr.pop(); //removes last digit from the array
myarr.unshift(99);//inserts in start of the array
myarr.shift();//removes first element from array
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(9));
console.log(myarr.indexOf(6));

const newarr=myarr.join();
console.log(myarr);
console.log(newarr);
console.log(typeof newarr);


//SLICE , SPLICE


//SLICE -The slice() method can be used to create a copy of an array or return a portion of an array.
// It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
console.log("A",myarr);
const myn1=myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr);


//SPLICE - method adds and/or removes array elements.
//it overwrites the original array.


const myn2=myarr.splice(1,3);
console.log("C",myarr);
console.log(myn2);


cons




