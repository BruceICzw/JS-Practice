// Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number.

const readline = require('readline');

function generateFibonacciSequence(num) {
    let sequence = [0, 1];

    for (let i = 2; i <= num; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (number) => {
    const fibonacciSequence = generateFibonacciSequence(number);
    console.log(fibonacciSequence);
    rl.close();
});
