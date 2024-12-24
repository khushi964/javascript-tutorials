const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
// ++++++++++++ Maths++++++++

// Using Math methods in JavaScript  

console.log(Math.ceil(4.2));  // Rounds up to the nearest integer  
console.log(Math.floor(4.9)); // Rounds down to the nearest integer  
console.log(Math.min(3, 6, 8)); // Gets the minimum value among the arguments  
console.log(Math.max(3, 6, 8)); // Gets the maximum value among the arguments  

console.log(Math.random()); // Generates a random number between 0 and 1  
n
// Generates a random number between 1 and 10  
console.log(Math.floor(Math.random() * 10) + 1);  

// Generates a random number between min and max (inclusive)  
const min = 10;  
const max = 20;  
console.log(Math.floor(Math.random() * (max - min + 1)) + min);