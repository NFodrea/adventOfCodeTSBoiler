import fs from "fs-extra";

export async function readFile(filePath: string) {
    return await fs.readFile(filePath, { encoding: "utf8" });
}

export async function splitData(filePath: string) {
    try {
        const data = await readFile(filePath);
        const splitData = data.split("\n\n").map(x => x.split("\n"));
        // data.trim();
        // console.log(splitData);
        return splitData;
    } catch (err) {
        throw new Error(err);
    }
}

export async function day2SplitData(filePath: string) {
    try {
        const data = await readFile(filePath);
        const splitData = data.split("\n\n").map(x => x.split("\n"));
        const data2 = splitData[0].map(x => x.split(" "));
        // data.trim();
        // console.log(splitData);
        return data2;
    } catch (err) {
        throw new Error(err);
    }
}
