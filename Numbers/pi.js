const { log } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of PI decimal places up to 10\n', (input) => {
    const n = parseInt(input);

    if (n > 10) {
        log('Limit is 10 decimal places');
        rl.close();
        return;
    }
    log('Pi is ', Math.PI.toFixed(n), ' to ', n, ' decimal places');
    rl.close();
})