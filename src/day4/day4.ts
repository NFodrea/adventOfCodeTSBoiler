import { day4SplitData } from "../utils/split";

// Part 1 Start

const hasOverlap = (roomPair: string[]) => {
    const [elf1, elf2] = roomPair;

    const [elf1RoomStart, elf1RoomEnd] = elf1
        .split("-")
        .map(elf => parseInt(elf));
    const [elf2RoomStart, elf2RoomEnd] = elf2
        .split("-")
        .map(elf => parseInt(elf));

    const condition1 =
        elf1RoomStart <= elf2RoomStart && elf1RoomEnd >= elf2RoomEnd;
    const condition2 =
        elf2RoomStart <= elf1RoomStart && elf2RoomEnd >= elf1RoomEnd;

    if (condition1 || condition2) {
        return true;
    }
    return false;
};

export const day4 = async () => {
    let total = 0;
    const roomPairs = await day4SplitData("src/day4/data.txt");
    roomPairs.forEach(pairs => {
        if (hasOverlap(pairs)) {
            total++;
        }
    });
    console.log(total);
};

// Start Part 2
function between(elfRoomStart: number, min: number, max: number) {
    return elfRoomStart >= min && elfRoomStart <= max;
}

const hasOverlap2 = (roomPair: string[]) => {
    const [elf1, elf2] = roomPair;

    const [elf1RoomStart, elf1RoomEnd] = elf1
        .split("-")
        .map(elf => parseInt(elf));
    const [elf2RoomStart, elf2RoomEnd] = elf2
        .split("-")
        .map(elf => parseInt(elf));

    // do any rooms overlap
    // What causes overlap?
    // elf1RoomStart less than elf2RoomStart
    // and elf1RoomEnd >= elf2RoomEnd
    if (
        between(elf2RoomStart, elf1RoomStart, elf1RoomEnd) ||
        between(elf1RoomStart, elf2RoomStart, elf2RoomEnd)
    ) {
        return true;
    }

    const overlapCondition1 =
        elf1RoomStart <= elf2RoomStart && elf1RoomEnd >= elf2RoomEnd;
    const overlapCondition2 =
        elf2RoomStart <= elf1RoomStart && elf2RoomEnd >= elf1RoomEnd;

    if (overlapCondition1 || overlapCondition2) {
        return true;
    }
    return false;
};

export const day4Part2 = async () => {
    let total = 0;
    const roomPairs = await day4SplitData("src/day4/data.txt");
    roomPairs.forEach(pairs => {
        if (hasOverlap2(pairs)) {
            total++;
        }
    });
    console.log(total);
};

// End Part 2
