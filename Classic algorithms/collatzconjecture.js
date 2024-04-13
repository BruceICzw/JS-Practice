//Collatz Conjecture - Start with a number n > 1. Find the number of steps it takes to reach one using the following process: If n is even, divide it by 2. If n is odd, multiply it by 3 and add 1

// Function to calculate the number of steps to reach 1 using the Collatz Conjecture




//get user input
const readline = require('readline');
let number;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number greater than 1: ', (num) => {
    number = parseInt(num);
    if (isNaN(number) || number <= 1) {
        console.log('Invalid input. Please enter a number greater than 1.');
        rl.close();
        return;
    }
    else {
        //convert number to integer
        number = parseInt(number);
        let steps = collatzConjecture(number);
        console.log(`The number of steps to reach 1 using the Collatz Conjecture is ${steps}`);

        rl.close();
    }


});


function collatzConjecture(n) {
    let steps = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = (3 * n) + 1;
        }
        steps++;
    }
    return steps;
}