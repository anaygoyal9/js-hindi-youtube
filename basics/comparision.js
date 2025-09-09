console.log("2">1); // true
console.log("02">1); // true

// according to typescript the data types in comparasion should not be different

console.log(null>0); // false
console.log(null==0); // false
console.log(null<=0); // true
console.log(null>=0) // true
console.log(null<0); // false

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false => all these conversion should not be done


//strict check
console.log("2"===2) // false 
//value and data type
