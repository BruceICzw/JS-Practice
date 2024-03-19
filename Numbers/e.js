const { log } = require('console');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of decimals for e\n', (input) => {
    const n = parseInt(input);
    if (n > 10) {
        log('Limit for decimal places is 10 ');
        rl.close();
        return
    }
    log('Value of e is ', Math.E.toFixed(n), `to ${n} decimal places`)
    rl.close();
})