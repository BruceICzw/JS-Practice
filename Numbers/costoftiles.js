// Write a program that takes the cost per tile, width and height of the floor plan as input and calculates the total cost of tiles needed.
const readline = require('readline');
let width, height, costPerTile;

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for input
rl.question('Enter the cost per tile: ', (costPerTile) => {
    // Parse the cost per tile as a number
    costPerTile = parseFloat(costPerTile);

    // Check if the cost per tile is a valid number
    if (isNaN(costPerTile)) {
        console.log('Invalid input. Please enter a valid number for the cost per tile.');
        rl.close();
        return;
    }

    // Prompt user for input
    rl.question('Enter the width of the floor plan: ', (width) => {
        // Parse the width as a number
        width = parseFloat(width);

        // Check if the width is a valid number
        if (isNaN(width)) {
            console.log('Invalid input. Please enter a valid number for the width of the floor plan.');
            rl.close();
            return;
        }

        // Prompt user for input
        rl.question('Enter the height of the floor plan: ', (height) => {
            // Parse the height as a number
            height = parseFloat(height);

            // Check if the height is a valid number
            if (isNaN(height)) {
                console.log('Invalid input. Please enter a valid number for the height of the floor plan.');
                rl.close();
                return;
            }

            // Calculate the total cost of tiles
            const totalCost = calculateCostOfTiles(width, height, costPerTile);
            console.log(`The total cost of tiles needed is $${totalCost}`);

            // Close the readline interface
            rl.close();
        });
    });
});

// Function to calculate the cost of tiles
function calculateCostOfTiles(width, height, costPerTile) {
    // Calculate the total number of tiles needed
    const totalTiles = width * height;

    // Calculate the total cost
    const totalCost = totalTiles * costPerTile;

    // Return the total cost
    return totalCost;
}