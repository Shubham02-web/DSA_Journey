//  Print n hellow words

// function nhellowWord(n) {
//   for (let i = 0; i < n; i++) {
//     console.log("Hello World" + "  " + (i + 1));
//   }
// }
// nhellowWord(5);

function naturalNumer(n) {
  let value = [];
  for (let i = n; i > 0; i--) {
    value.push(i);
  }
  return value;
}
console.log(...naturalNumer(10));
