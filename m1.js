import fs from "fs";

// const data = fs.readFileSync("Master1.json", "utf8");
const data = fs.readFileSync("Master1.json", "utf8").replace(/^\uFEFF/, "");
const a1 = JSON.parse(data);

const k2 = a1.tallymessage.map(element => {
    return element.metadata.type;
});

const uniqueArray = [...new Set(k2)];

console.log("aaaaaaaa : ", uniqueArray);
