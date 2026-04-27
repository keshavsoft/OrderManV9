import fs from "fs";

fs.writeFileSync("Master1.json", fs.readFileSync("Master.json", "utf16le"), "utf8");

// const data = fs.readFileSync("Master1.json", "utf8").replace(/^\uFEFF/, "")

// const k1 = JSON.parse(data);

// console.log("aaaaaaaa : ", k1);
