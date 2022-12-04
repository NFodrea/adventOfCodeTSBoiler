import { day2SplitData, day3SplitData } from "../utils/split";
// Start Part 1

// 1 line = 1 rucksack
// a rucksack has 2 compartments
// a rucksack always has the same number of items in its 2 compartments
// First half of characters compartment 1 2nd half compartment 2
// letter casing matters

// Rucksack 1 example
// vJrwpWtwJgWrhcsFMMfFFhFp
// compartment 1 vJrwpWtwJgWr
// compartment 2 hcsFMMfFFhFp
// The only item type that appears in both compartments is lowercase p.

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

// In the above example, the priority of the item type that appears in both compartments
//  of each rucksack is
//  16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s);
// the sum of these is 157.

// Find the item type that appears in both compartments of each rucksack.
// What is the sum of the priorities of those item types?

async function getFormattedData() {
    const data = await day2SplitData("src/day3/data.txt");
    data;
    return data;
}

function stringMatch(str1: string, str2: string) {
    const s1 = [...str1];
    const s2 = [...str2];

    return s1.map(char => {
        if (s2.includes(char)) {
            return char;
        }
    });
}

const lettersMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
};

async function divideRucksacks() {
    const data = await getFormattedData();
    const hold: string[] = [];

    data.map(sack => {
        const length = sack[0].length;
        const firstHalf = length / 2;

        let container1 = sack[0].slice(0, length / 2);
        let container2 = sack[0].slice(firstHalf);

        const matches = stringMatch(container1, container2);
        const matchesFiltered = matches.filter(x => x != undefined);
        console.log("matches", matchesFiltered);

        // dedupe
        const resultsSet = new Set(matchesFiltered);
        hold.push(...resultsSet);
    });
    return hold;
}

function sumPriority(arr: string[]) {
    let total = 0;
    arr.map(letter => {
        total += lettersMap[letter];
        console.log("total", total);
    });
}

export const day3 = async () => {
    const data = await divideRucksacks();
    sumPriority(data);
};

// End Part 1

// Start Part 2

// elves carry a badge
// the badge is the only item type carried by all three Elves.
// if a group's badge is item type B,
// then all three Elves will have item type B somewhere in their rucksack,
// and at most two of the Elves will be carrying any other item type.

// The only way to tell which item type is the right one is
//  by finding the one item type that is common between all three Elves in each group.

/*
Every set of three lines in your list corresponds to a single group, 
but each group can have a different badge item type. 
So, in the below example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg

In the first group, the only item type that appears in all three rucksacks is lowercase r;

And the second group's rucksacks are the next three lines:
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

In the second group, the only item type that appears in all three rucksacks is Z;


Find the letter that appears in a given 3 group batch sum their priority
*/

// go through 3 sacks see what letter exists in all of them
async function getFormattedData2() {
    const data = await day3SplitData("src/day3/data.txt");
    data;
    return data;
}

function stringMatch2(sackGroup: string[]) {
    const [sack1, sack2, sack3] = sackGroup;
    // loop through sack1 and see if sack2 and sack3 share a character if so return it
    for (const char of sack1) {
        if (sack2.includes(char) && sack3.includes(char)) {
            return char;
        }
    }
}

async function divideRucksacks2(data: string[]) {
    const parentArr: string[][] = [];
    let tempArr: string[] = [];
    data.forEach(sack => {
        tempArr.push(sack);
        if (tempArr.length === 3) {
            parentArr.push(tempArr);
            tempArr = [];
        }
    });
    return parentArr;
}

function sumPriority2(arr: string[]) {
    let total = 0;
    arr.map(letter => {
        total += lettersMap[letter];
    });
    return total;
}

export const day3Part2 = async () => {
    const data = await getFormattedData2();
    const groupedSacks = await divideRucksacks2(data);
    const matchedChars = groupedSacks.map(sackGroup => stringMatch2(sackGroup));
    console.log(sumPriority2(matchedChars));
};
// End Part 2
