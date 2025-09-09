// on the basis of data storage in memory and how to access it it is officially categorised

//primitive =>

// 7 types : Strings,Number,null,undefined,Symbol,BigInt,Boolean

// js is dynamically typed language

//Referance =>(Non Primitive)

// Array,Objects,Functions

const id = Symbol('123');
const newid = Symbol('123');

console.log(id==newid); // false
console.log(id===newid); // false

const bigNumber = 1548626248464564354841651621; // both bigint
const bignumber = 51651651516265n; // both bigint

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name : "hitesh",
    age : 22,
}
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bignumber);
console.log(typeof heros);
console.log(typeof myFunction);