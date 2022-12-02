import { splitData } from "../utils/split";

// Start Part 1
async function getFormattedData() {
    const data = await splitData("src/day2/data.txt");
    console.log(data);
    return data;
}

export const day2 = async () => {
    console.log("Day 2");
    getFormattedData();
};
