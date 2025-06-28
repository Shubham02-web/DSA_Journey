// let a = 768;

// Division
// console.log(768 / 10);

// console.log(a / 100);

// console.log(Math.floor(a / 100));

// console.log(Math.round(a / 10));

// Reminder

// console.log(a % 10);  gave us last digit

// console.log(a % 100);

// let i = 11;
// i = i++;
// i = i++ + ++i;
// i = ++i;
// i = ++(++i);

// i = i--;
// i = --i;

// i = i-- - --i;

// console.log(i);

// Area of Rectangle

// let length = 10;
// let width = 5;
// console.log("Area of Rectangle = ", length * width);

// Genrate OTP

// function genrateOtp(n) {
//     let otp = "";
//     while (n > 0) {
//         otp += Math.round(Math.random() * 10 + 1);
//         n--;
//     }
//     return otp;
// }

// console.log(genrateOtp(6));

// Area of triangle using heron's problem

// let a = 5;
// let b = 7;
// let c = 8;

// let s = (a + b + c) / 2;

// let area = Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
// console.log(area);

//   Circumference Of area

let r = 7;
let cir = (2 * Math.PI * r).toFixed(2);
console.log(cir);