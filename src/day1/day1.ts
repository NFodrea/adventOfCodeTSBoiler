import { splitData } from "../utils/split";
// Start Part 1
async function getFormattedData() {
    const data = await splitData("src/day1/data.txt");
    return data;
}

async function convertToNumbers() {
    const data = await getFormattedData();
    return data.map(x => x.map(y => parseInt(y)));
}

async function totalCalories() {
    const data = await convertToNumbers();
    const totalData = data.map(x => x.reduce((a, b) => a + b, 0));
    console.log(totalData);
    return totalData;
}

// End Part 1

// Start Part 2

// a function that returns the 3 largest numbers from the total calories function
async function getThreeLargest() {
    const data = await totalCalories();
    const sortedData = data.sort((a, b) => b - a);
    const threeLargest = sortedData.slice(0, 3);
    console.log(threeLargest);
    // add threeLargest together
    const total = threeLargest.reduce((a, b) => a + b, 0);
    console.log("total", total);
    return total;
}
// End Part 2

export const day1 = async () => {
    const data = await totalCalories();
    console.log(Math.max(...data));
    console.log("Part 2");
    getThreeLargest();
};
