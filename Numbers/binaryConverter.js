// Binary to Decimal and Back Converter - Develop a converter to convert a decimal number to binary or a binary number to its decimal equivalent.

//get user input
const readline = require('readline');
let num;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    num = input;
    if (isNaN(num)) {
        console.log('Invalid input');
        rl.close();
    } else {
        num = parseInt(num);
        console.log(`The binary equivalent of ${num} is ${convertToBinary(num)}`);
        rl.close();
    }

})

//function to convert decimal to binary
function convertToBinary(num) {
    return parseInt(num, 10).toString(2);

}