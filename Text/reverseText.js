//Enter a string and the program will reverse it and print it out
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input) => {
    const reversed = input.split('').reverse().join('');
    console.log('Reversed string:\n', reversed);
    rl.close();
});