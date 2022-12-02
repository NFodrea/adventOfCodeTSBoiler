import { day2SplitData, splitData } from "../utils/split";

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

//  What -> (wins against what)
// A -> Z
// A == X
// B -> X
// B == Y
// C -> Y
// C == Z

// total score = the sum of your scores for each round

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
async function getFormattedData2() {
    const data = await day2SplitData("src/day2/data.txt");
    console.log(data);
    return data;
}

const WLDMap = {
    win: {
        A: "Y",
        B: "Z",
        C: "X",
    },
    lose: {
        A: "Z",
        B: "X",
        C: "Y",
    },
};

const opponentMap = {
    A: "X",
    B: "Y",
    C: "Z",
};

// X lose
// Y draw
// Z win

const pointsMapping = [
    ["X", 1],
    ["Y", 2],
    ["Z", 3],
];

async function determineMoves(): Promise<string[][]> {
    const data = await getFormattedData2();
    return data.map(moves => {
        if (moves[1] === "Z") {
            return [moves[0], WLDMap.win[moves[0]]];
        } else if (moves[1] === "X") {
            return [moves[0], WLDMap.lose[moves[0]]];
        }
        return [moves[0], opponentMap[moves[0]]];
    });
}

async function compareMoves2(data: string[][]) {
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
        console.log("move", move);
    });
    return output;
}

async function getTotal2(data: number[]) {
    const total = data.reduce((a, b) => a + b, 0);
    console.log("total", total);
    return total;
}

// End Part 2

export const day2 = async () => {
    const data = await determineMoves();
    const comparedData = await compareMoves2(data);
    const hold = getTotal2(comparedData);
    console.log(hold);
};
