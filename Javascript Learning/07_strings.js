const name ="shweta";
const repocount=50;

//console.log(name+repocount+" value");

console.log('hello my name is ${name} and my repo count is ${repocount}'); 


const gamename = new String ('hiteshhc');

console.log(gamename[0]);
console.log(gamename.length);

console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase()); //changes to uppercase 
console.log(gamename.charAt(2)); //gives char present at index 2
console.log(gamename.indexOf('t'));//gives index of t 
console.log(gamename.indexOf('hc'));

console.log(gamename.toLowerCase()); //changes to lower case

const newstring = gamename.substring(0,4);
const thenewstring=gamename.substring(-2,5); //0-5 ignores -ve int
console.log(newstring);
console.log(thenewstring);


const newstringone = "   shweta   ";
console.log(newstringone);
console.log(newstringone.trim());

const url ="https://chat.openai.com/c/8d51b6b4-5fe1-4e38-afe3-efb38a321308";

console.log(url.replace('321308','-'));
console.log(url.includes('SUNDAR'));

console.log(gamename.split());










   



