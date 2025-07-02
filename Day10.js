// Check Number is strong or not

// function StrongNumber(n) {
//   let temp = n;
//   let result = 0;
//   let rem = 0;
//   while (n > 0) {
//     let fact = 1;
//     rem = n % 10;
//     n = Math.floor(n / 10);
//     for (let i = 1; i <= rem; i++) {
//       fact = fact * i;
//     }
//     result += fact;
//   }
//   console.log(result);
//   if (temp === result) {
//     return "Number is strong";
//   } else {
//     return "Number is not strong";
//   }
// }
// console.log(StrongNumber(145));

// Guess The Number

const num = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let ans = -1;

while (ans !== num) {
  if (attempt == 5) {
    console.log("you have enter 5 time Wrong Guess , try after some time");
    break;
  }
  ans = Number(prompt("Guesss the number"));
  if (isNaN(ans) || ans < 0 || ans > 100) {
    console.log("try again with number range 0 to 100");
    continue;
  }

  attempt++;

  if (num > ans) {
    console.log("too low , Try Again");
  } else if (num < ans) {
    console.log("too high ,  try again");
  } else if (num == ans) {
    console.log("Congrats , you guess it right");
  }
}
