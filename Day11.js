const prompt = require("prompt-sync")();
const age = prompt("enter ur age : ? ");
// for (let i = 0; i < age; i++) {
//   for (let j = i; j < age; j++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

for (let i = 0; i < age; i++) {
  let ascii = 65;
  for (let j = i; j < age; j++) {
    process.stdout.write(String.fromCharCode(ascii) + "");
    ascii++;
  }
  process.stdout.write("\n");
}
