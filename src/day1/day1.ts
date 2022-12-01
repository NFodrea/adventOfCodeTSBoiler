import { splitData } from "../utils/split";

// 1 line is 1 item
// blank line is new elf

// For example, suppose the Elves finish writing their items' Calories and end up with the following list:

// 1000
// 2000
// 3000

// 4000

// 5000
// 6000

// 7000
// 8000
// 9000

// 10000

// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

// const countCalories = () => {
//     let oldValue = 0;
//     console.log(splitData("src/day1/smallData.txt"));

// };

export const day1 = () => {
    console.log("Day 1");
    console.log(splitData("src/day1/smallData.txt"));
};
