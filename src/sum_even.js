const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a positive integer: "));

let sum = 0;
for (let i = 2; i <= n; i += 2) {
    sum += i;
}

console.log(`Sum of even numbers from 2 to ${n} is ${sum}`);