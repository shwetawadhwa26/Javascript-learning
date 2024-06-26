const score =400;
console.log(score);


const balance = new Number(100);
console.log(balance);


// Number {100}
// [[Prototype]]: Number
// [[PrimitiveValue]] : 10

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 11123.8966;

console.log(otherNumber.toPrecision(3));

const hundreds =1000000;
console.log(hundreds.toLocaleString('en-IN'));


console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.min(2,3,4,5));
console.log(Math.max(4,5,6,7,88));
console.log(Math.random());
console.log(Math.floor(Math.random()*10+1));


const min =10;
const max =20;
console.log(Math.random()*(max-min+1));




