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

export async function day3SplitData(filePath: string) {
    try {
        const data = await readFile(filePath);
        const splitData = data.split("\n");
        return splitData;
    } catch (err) {
        throw new Error(err);
    }
}

export async function day4SplitData(filePath: string) {
    try {
        const data = await readFile(filePath);
        const splitData = data.split("\n");
        const roomPairs = splitData.map(pair => {
            // '2-5,15-90'
            return pair.split(",");
        });
        return roomPairs;
    } catch (err) {
        throw new Error(err);
    }
}

export type MoveData = {
    quantity: number;
    from: number;
    to: number;
};

export async function day5Split(
    filePath: string,
): Promise<[MoveData[], string[][]]> {
    try {
        const data = await readFile(filePath);
        const splitData = data.split("\n");
        let stackStrings = [];
        const moveStrings = [];
        const crateStacks = [];
        splitData.forEach(s => {
            if (s.startsWith("move")) {
                moveStrings.push(s);
            } else if (s.match(/\[[A-Z]\]/)) {
                stackStrings.push(s);
            }
        });
        stackStrings = stackStrings.map(stackString => {
            const crates = stackString.match(/(\[[A-Z]\])|\s\s\s\s/g);
            const crateLetters = [];
            for (let crate of crates) {
                const crateLetterMatch = crate.match(/\[([A-Z])\]/);
                const crateLetter =
                    crateLetterMatch && crateLetterMatch[1]
                        ? crateLetterMatch[1]
                        : null;
                crateLetters.push(crateLetter);
            }
            return crateLetters;
        });
        stackStrings.reverse().forEach((crates, stackStringsIndex) => {
            crates.forEach((crate, index) => {
                // console.log(crate, stackStringsIndex, index);
                if (crate === null) return;
                if (crateStacks[index] === undefined) {
                    crateStacks[index] = [];
                }
                crateStacks[index].push(crate);
            });
        });
        const moveData: MoveData[] = moveStrings.map(moveString => {
            const data = moveString.match(
                /move\s*(\d*)\s*from\s*(\d*)\s*to\s*(\d*)\s*/,
            );
            return {
                quantity: parseInt(data[1]),
                from: data[2] - 1,
                to: data[3] - 1,
            };
        });
        // console.log(crateStacks);
        return [moveData, crateStacks];
    } catch (err) {
        throw new Error(err);
    }
}
