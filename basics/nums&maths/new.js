const score = 40000000000;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3)); // 23.9

const a = 123.8966;

console.log(a.toPrecision(3)); // 124
console.log(score.toLocaleString('en-IN'))

//******************************maths*********************************

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(2,3,4,6));
console.log(Math.max(2,3,4,6));

console.log(Math.random());
console.log((Math.random()*10));
console.log((Math.random()*10) + 1);