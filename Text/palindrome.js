//Check if Palindrome - Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

//get user input
const readline = require('readline');
let str;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input) => {
    str = input;
    if (isPalindrome(str)) {
        console.log(`${str} is a palindrome`);
    } else {
        console.log(`${str} is not a palindrome`);
    }
    rl.close();

});


// Function to check if a string is a palindrome
function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}