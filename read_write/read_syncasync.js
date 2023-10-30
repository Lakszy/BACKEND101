const fs = require("fs");

console.log(1);

//?NON-Blocking->the call back generator makes it easier so for the code
fs.readFile("read_write/contact.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log(2); 
//! Blocking code
const lak = fs.readFileSync("read_write/contact.txt", "utf-8");
console.log(lak);

console.log(3);
