//Count Vowels - Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.

//get user input
const readline = require('readline');
let str;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input) => {
    str = input;
    if (vowelCount = countVowels(str)) {
        console.log(`The number of vowels in ${str} is ${vowelCount.count}`);
        console.log(`The number of each vowel in ${str} is ${JSON.stringify(vowelCount.vowelCount)}`);
    } else {
        console.log('Invalid input');
    }
    rl.close();

});


//function to count vowels

function countVowels(data) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let vowelCount = {};
    for (let i = 0; i < data.length; i++) {
        if (vowels.includes(data[i])) {
            count++;
            if (vowelCount[data[i]]) {
                vowelCount[data[i]]++;
            } else {
                vowelCount[data[i]] = 1;
            }
        }
    }
    return { count, vowelCount };


}