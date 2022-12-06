import { day5Split } from "../utils/split";
// Start Part 1
/*
Each array has a length of 9 This represents 1 row
There are 8 rows of crates

[
'    ', '    ',
'    ', '[C] ',
'    ', '    ',
'[N] ', '[R] ',
'   '
],

move array = index 0 (how many to move) index 1 fromStack index 2 toStack
move 4 from 9 to 6

a crate is an array of length 9

onlyCrates is any array of crates

*/

const moveCrate = (
    numCratesToMove: number,
    fromStackNumber: number,
    toStackNumber: number,
    crateArr: string[][],
) => {
    let tempArr = [];
    for (let index = 0; index < numCratesToMove; index++) {
        const colLen = crateArr[fromStackNumber].length - 1;
        const crateToMove = crateArr[fromStackNumber][colLen];
        tempArr.push(crateToMove);
        crateArr[fromStackNumber].splice(colLen);
        crateArr[toStackNumber].push(crateToMove);
    }
};

export const day5 = async () => {
    const [moveData, colOfCratesData] = await day5Split("src/day5/data.txt");
    moveData.map(moves => {
        moveCrate(moves.quantity, moves.from, moves.to, colOfCratesData);
    });

    console.log(colOfCratesData.map(crate => crate.pop()).join());
};

// Start Part 2
const moveCrate2 = (
    numCratesToMove: number,
    fromStackNumber: number,
    toStackNumber: number,
    crateArr: string[][],
) => {
    let tempArr = [];
    for (let index = 0; index < numCratesToMove; index++) {
        const colLen = crateArr[fromStackNumber].length - 1;
        const crateToMove = crateArr[fromStackNumber][colLen];
        tempArr = [crateToMove, ...tempArr];
        crateArr[fromStackNumber].splice(colLen);
    }
    crateArr[toStackNumber] = crateArr[toStackNumber].concat(tempArr);
};

export const day5Part2 = async () => {
    const [moveData, colOfCratesData] = await day5Split("src/day5/data.txt");
    moveData.map(moves => {
        moveCrate2(moves.quantity, moves.from, moves.to, colOfCratesData);
    });

    console.log(colOfCratesData.map(crate => crate.pop()).join());
};
// End Part 2
