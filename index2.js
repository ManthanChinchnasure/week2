const fs = require("fs");

const contents = fs.readFile("a.txt", "utf-8");
console.log(contents);

let s = 0
for(let i = 0; i<1000; i++){
    s +=1
}

console.log(s);