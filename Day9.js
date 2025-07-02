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

// function factorial(n) {
//   let fact = 1;
//   for (let i = n; i >= 1; i--) {
//     fact = fact * i;
//   }
//   return fact;
// }
// console.log(factorial(5));

// function factors(n) {
//   let fact = [];
//   for (let i = 2; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) fact.push(i);
//     else continue;
//   }
//   return fact;
// }

// console.log(...factors(20));

// Prime Numbers

// function isPrime(n) {
//   if (n <= 0 || n === 1) return "Not a prime number";
//   if (n === 2 || n === 3) return "Prime Number";
//   if (n % 2 == 0) return "Not a prime Number";
//   for (let i = 3; i < Math.sqrt(n); i = i + 2) {
//     if (n % i === 0) return "Not a prime Number";
//   }
//   return "Primae Number";
// }

// console.log(isPrime(31));

// function sumOfDigit(n) {
//   let val = 0;
//   while (n > 0) {
//     val += Math.floor(n % 10);
//     n = n / 10;
//   }
//   return val;
// }

// console.log(sumOfDigit(2546));

// Reverse Numder

function reverseNumber(n) {
  let val = 0;
  while (n > 0) {
    val = val * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return val;
}

console.log(reverseNumber(2546));
