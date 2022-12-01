import fs from "fs-extra";

export async function readFile(filePath: string) {
    return await fs.readFile(filePath, { encoding: "utf8" });
}

export async function splitData(filePath: string) {
    try {
        const data = await readFile(filePath);
        data.split("\n\n").map(x => x.split("\n"));
        data.trim();
        console.log(data);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}
