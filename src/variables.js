const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Enter the first number: "));
let b = parseFloat(prompt("Enter the second number: "));

console.log(`The sum is: ${a + b}`);