const fs = require("fs")

const json1 = JSON.parse(fs.readFileSync("dataset/out_all_filtered.json"))
const json2 = JSON.parse(fs.readFileSync("dataset/out_all_filtered2.json"))
const json3 = JSON.parse(fs.readFileSync("dataset/out_all_filtered3.json"))

const list_total_houses = json1.concat(json2, json3)

fs.writeFile("dataset/out.json", JSON.stringify(list_total_houses), function (err) {
    if (err) {
        console.log(err);
    }
})