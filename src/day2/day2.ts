import { splitData } from "../utils/split";

// First Column is opponents move
// A = Rock
// B = Paper
// C = Scissors

// Second Column is what I should play
// X = Rock
// Y = Paper
// Z = Scissors

// Mapping
// A X Rock
// B Y Paper
// C Z Scissors

// A -> Z
// A == X
// B -> X
// B == Y
// C -> Y
// C == Z

// total score = the sum of your scores for each round

// Selected shape points
// Rock = 1 point
// Paper = 2 points
// Scissors = 3 points

// round outcome points
// 0 lost
// 3 draw
// 6 win

// Small Data Reference
// A Y (Rock, Paper) =  (2 paper 6 win) 8 points
// B X (Paper, Rock) = (1 rock 0 lost) 1 points
// C Z (Scissors, Scissors) = (3 scissors 3 tie) 6 points

// A function that takes 2 inputs and returns the points for that round

// Find Total Score

// Start Part 1
async function getFormattedData() {
    const data = await splitData("src/day2/data.txt");
    const data2 = data[0].map(x => x.split(" "));
    // index 0 opponent move
    // index 1 my move
    console.log(data2);
    return data2;
}

async function compareMoves() {
    const data = await getFormattedData();
    const output = data.map(move => {
        if (move[0] === "A" && move[1] === "X") {
            return 4;
        }
        if (move[0] === "B" && move[1] === "Y") {
            return 5;
        }
        if (move[0] === "C" && move[1] === "Z") {
            return 6;
        }
        if (move[0] === "A" && move[1] === "Y") {
            return 8;
        }
        if (move[0] === "A" && move[1] === "Z") {
            return 3;
        }
        if (move[0] === "B" && move[1] === "X") {
            return 1;
        }
        if (move[0] === "B" && move[1] === "Z") {
            return 9;
        }
        if (move[0] === "C" && move[1] === "X") {
            return 7;
        }
        if (move[0] === "C" && move[1] === "Y") {
            return 2;
        }
    });
    console.log("output", output);
    return output;
}

async function getTotal() {
    const data = await compareMoves();
    const total = data.reduce((a, b) => a + b, 0);
    console.log("total", total);
    return total;
}
// End Part 1

// Start Part 2

// End Part 2

export const day2 = async () => {
    console.log("Day 2 Part 1");
    getTotal();
};
