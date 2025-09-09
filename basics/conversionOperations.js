// let score = "33"
// let a =  33;
// console.log(typeof score);
// console.log(typeof(score));

// console.log(score + a);
// console.log(typeof (score+a));
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// score = "33a";
// valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(score) // 33a is also treated as a number when converted to a number
//                     // sometimes gives NaN : Not a number.


// let x = null;
// console.log(typeof x);
// let val = Number(x);
// console.log(typeof val); 
// console.log(val) // gives zero 0


// let y; // undefined
// console.log(typeof y);
// val = Number(y);
// console.log(typeof val);
// console.log(val); // gives NaN


// let z = true;
// console.log(typeof z);
// val = Number(z);
// let c = Number(false);
// console.log(typeof val);
// console.log(val); // gives 1 for true
// console.log(c); // gives 0 for false;

let isLoggedIn = 1; // for only 0 it is false else for alll integers it is true
let boolean = Boolean(isLoggedIn);
console.log(boolean); 

//Such conversions takes place 

// #Investigation Studies