//  Print n hellow words

// function nhellowWord(n) {
//   for (let i = 0; i < n; i++) {
//     console.log("Hello World" + "  " + (i + 1));
//   }
// }
// nhellowWord(5);

// function naturalNumer(n) {
//   let value = [];
//   for (let i = n; i > 0; i--) {
//     value.push(i);
//   }
//   return value;
// }
// console.log(...naturalNumer(10));

// function sumOfNaturalNumber(n) {
//   let value = 0;
//   for (let i = 1; i <= n; i++) {
//     value += i;
//   }
//   return value;
// }
// console.log(sumOfNaturalNumber(5));

function factorial(n) {
  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));
