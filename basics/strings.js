const name = "Hitesh"
const repo = 50
console.log(name+repo);
console.log(`hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('hitesh') // another way to declare string that invoke object

console.log(gameName[0]);
console.log(gameName.__proto__); // to print all the possible methods of a string _ _ p r o t o _ _ 


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.anchor());
console.log(gameName.at());
console.log(gameName.big());
console.log(gameName.charAt());
console.log(gameName.charCodeAt);
console.log(gameName.codePointAt());
console.log(gameName.endsWith());
console.log(gameName.concat()); // space comes bw string and an int 
console.log(gameName.includes());
console.log(gameName.isWellFormed());
/*{
UTF-16 uses 1code unit and 2 code units
1 code characters in Basic Multilingual Plane(BMP) -> U+0000 to U+FFFF
2 code units (a surrogate pair) for characters outside BMP(emojis,rare symbols etc.)
-> U+10000 to U+10FFFF
console.log("Hello".isWellFormed()); // true
console.log("😊".isWellFormed()); // true

let bad = "\uD800"; // high surrogate, no pair
console.log(bad.isWellFormed()); // false
let bad = "\uDC00"; // low surrogate, no pair
console.log(bad.isWellFormed()); // false
let bad = "\uDC00\uD800"; // invalid order
console.log(bad.isWellFormed()); // false
let bad = "\uD800";  
console.log(bad.toWellFormed()); // "�"
}*/
console.log(gameName.lastIndexOf());
console.log(gameName.localeCompare); //compare string also including the local languages and accents
/*
referenceString.localeCompare(compareString)
referenceString.localeCompare(compareString, locales)

console.log("hello".localeCompare("helloo")); // -1;
console.log("helloo".localeCompare("hello")); // 1;
console.log("hello".localeCompare("hello")); // 0 

*/
console.log(gameName.match());
console.log(gameName.matchAll());
console.log(gameName.normalize());
console.log(gameName.padEnd());
console.log(gameName.padStart());
console.log(gameName.repeat());
console.log(gameName.replace());
console.log(gameName.replaceAll());
console.log(gameName.search());

const x = 20;

console.log(x.toString());
console.log(x);
console.log(typeof x);
console.log(typeof String(x));

console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));
//etc.....

const newString = gameName.substring(-5,4); // not for negative values 
console.log(newString)                      // will understand -ve as 0

const c = gameName.substring(0,4);
console.log(c)

const anotherString = gameName.slice(-8,4) // start from back
console.log(anotherString);

const newStringOne =  "  hitesh      ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-')); // https://hitesh.com/hitesh-choudhary
console.log(url.includes('sundar')); // false


const str = new String('hitesh-hc-com');
console.log(str.split('-'))

// .anchor() usage -->>>
// const contentString = "Hello, world";
// const elem = document.createElement("a");
// elem.innerText = contentString;
// document.body.appendChild(elem);

// at
const array = [5,12,8,130,44];

let index = 2;
console.log(`the value of index ${index} is ${array.at(index)}`)

// big
// const contentString = "Hello, world";
// document.body.innerHTML = contentString.big();
//this will give following in HTML
/*<big>Hello, world</big>*/

//blink
// document.write("Hello".blink());
//in html
//<blink>Hello</blink>


// let emoji = "😊";
// console.log(emoji.charCodeAt(0));   // 55357 (not the full code, half of surrogate pair)
// console.log(emoji.codePointAt(0)); // 128522 (correct full code point)

//concat
console.log("anay",1); // 'anay 1' // space comes

let stri = "JavaScript";
console.log(str.endsWith("Script")); // true
console.log(str.endsWith("Java"));   // false
console.log(str.endsWith("a", 4));   // true ("Java")

 let stra = "Hello"; /*This is one of the old HTML string methods in JavaScript.It wraps the text in <tt> (teletype, monospace font).*/
console.log(str.fixed()); // "<tt>Hello</tt>"
<script>
  document.write("Hello".fixed());
</script>

