function cashOut(i) {
    if (typeof i !== "number" || i < 0) {
        return "Invalid";
    }
    const amount = i * 0.0175;
    return amount;
}
//  console.log(cashOut(1000))


function validEmail(str) {
    // console.log();
    if ((typeof str !== "string") || (str.split("")[0] === ",") || (str.split("")[0] === "-") || (str.split("")[0] === "_") || (str.split("")[0] === "=") || (str.split("")[0] === "!") || (str.split("")[0] === "#") || (str.split("")[0] === "$") || (str.split("")[0] === "%") || (str.split("")[0] === "^") || (str.split("")[0] === "&") || (str.split("")[0] === "*") || (str.split("")[0] === "+") || (str.split("")[0] === "@") || (str.endsWith(".com") === false) || (str.indexOf("@") === str.length - 1)) {
        return false;
    }
    else {
        return true;
    }
}

// console.log(validEmail("ami.tumi@gmail.com"));



function electionResult(votes) {
    if (Array.isArray(votes) !== true) {
        return "Invalid"
    }
    let mangoCount = 0;
    let bananaCount = 0;

    for (const i of votes) {
        if (i === "mango") {
            mangoCount++
        }
        else if (i === "banana") {
            bananaCount++
        }
    }
    if (mangoCount > bananaCount) {
        return "Mango"
    }
    else if (bananaCount > mangoCount) {
        return "Banana"
    }
    else if (bananaCount = mangoCount) {
        return "Tie"
    }
}

const newLocal = ["mango", "banana", "na", "agei bhalo asilam"];
// console.log(electionResult(newLocal))



function findBestFriend(o1, o2) {
    if ((typeof o1 !== "object") || (Array.isArray(o1) === true) || (typeof o2 !== "object") || (Array.isArray(o2) === true) || (Object.keys(o1).length !== 3) || (Object.keys(o2).length !== 3)) {
        return "Invalid"
    }
    else if ((o1.bestFriend === o2.roll) && (o2.bestFriend === o1.roll)) {
        return true;
    }
    else {
        return false;
    }
}

const i1 = { name: "kashem", roll: 3, bestFriend: 1 };
const i2 = { name: "joshim", roll: 1, bestFriend: 3 };
// console.log(findBestFriend(i1, i2));




function countTime(time) {
    if (!Array.isArray(time)) {
        return "Invalid"
    }
    let totalTime = 0;
    for (const k of time) {
        if (typeof k !== "number") {
            return "Invalid"
        }
        totalTime += k;
    }
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
}

const input = [];
console.log(countTime(input));