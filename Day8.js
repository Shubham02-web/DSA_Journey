// To check valid voter

// const age = Number(prompt("Please Enter Your Age"));
// if (isNaN(age)) {
//   alert("Enter Number");
//   console.log("Please enter number its not a number");
// } else if (Math.floor(age <= 0)) {
//   alert("Please Enter a positive number");
//   console.log("Please Enter a positive number");
// } else if (Math.floor(age <= 18)) {
//   alert("You are under 18 you are not eligible for vote now ");
//   console.log("You are under 18");
// } else {
//   alert("Congratulation you are eligble for voting");
//   console.log("Congratulation you are eligble for voting");
// }

// Manage Shop Discount

// let amount = Number(prompt("total amount  = ? "));
// let Discount;
// if (isNaN(amount)) {
//   alert("Enter valid number ");
//   console.log("Please Enter a valid number ");
// } else if (amount >= 0 && amount <= 5000) {
//   console.log("Total Amount : " + amount);
//   Discount = Math.floor((amount * 5) / 100);
//   console.log("Total Discount :  " + Discount);
//   amount = amount - Discount;
//   console.log("Total Paybale Amount : " + amount);
// } else if (amount > 5000 && amount <= 8000) {
//   console.log("Total Amount : " + amount);
//   Discount = Math.floor((amount * 10) / 100);
//   console.log("Total Discount :  " + Discount);
//   amount = amount - Discount;
//   console.log("Total Paybale Amount : " + amount);
// } else if (amount > 8000) {
//   console.log("Total Amount : " + amount);
//   Discount = Math.floor((amount * 20) / 100);
//   console.log("Total Discount :  " + Discount);
//   amount = amount - Discount;
//   console.log("Total Paybale Amount : " + amount);
// }

// Manage Bijli Bill

// let unit = Number(prompt("Enter your unit ? "));
// let totalAmount = 0;
// let amount;
// let unt = 0;
// if (isNaN(unit)) {
//   console.log("Please Enter a Number");
// }
// if (unit <= 0) {
//   console.log("Please Enter Positive Number  ");
// }
// if (unit >= 300) {
//   unt = unit - 300;
//   unit = unit - unt;
//   amount = 12 * unt;
//   totalAmount += amount;
//   console.log("Total Amount by 12/unit : " + Number(amount));
// }
// if (unit >= 200) {
//   unt = unit - 200;
//   unit = unit - unt;
//   amount = 10 * unt;
//   totalAmount += amount;
//   console.log("Total Amount by 10/unit : " + Number(amount));
// }
// if (unit >= 100) {
//   unt = unit - 100;
//   unit = unit - unt;
//   amount = 8 * unt;
//   totalAmount += amount;
//   console.log("Total Amount by 8/unit : " + Number(amount));
// }
// if (unit > 0) {
//   amount = 5 * unit;
//   totalAmount += amount;
//   console.log("Total Amount by 5/unit : " + Number(amount));
//   console.log("Total Paybal Amount  : ", Number(totalAmount));
// }

// INR Denomination
// let unit = Number(prompt("Enter your Amount ? "));
// let totalAmount = 0;
// let amount;
// let unt = 0;
// if (isNaN(unit)) {
//   console.log("Please Enter a Number");
// }
// if (unit <= 0) {
//   console.log("Please Enter Positive Number  ");
// }
// if (unit >= 500) {
//   unt = Math.floor(unit / 500);
//   unit = unit - unt * 500;
//   console.log("Total 500 Note  : " + unt);
// } else {
//   console.log("Total 500 Note : 0");
// }
// if (unit >= 200) {
//   unt = Math.floor(unit / 200);
//   unit = unit - unt * 200;
//   console.log("Total 200 Note  : " + unt);
// } else {
//   console.log("Total 200 Note : 0");
// }
// if (unit >= 100) {
//   unt = Math.floor(unit / 100);
//   unit = unit - unt * 100;
//   console.log("Total 100 Note  : " + unt);
// } else {
//   console.log("Total 100 Note : 0");
// }
// if (unit >= 50) {
//   unt = Math.floor(unit / 50);
//   unit = unit - unt * 50;
//   console.log("Total 50 Note  : " + unt);
// } else {
//   console.log("Total 50 Note : 0");
// }
// if (unit >= 20) {
//   unt = Math.floor(unit / 20);
//   unit = unit - unt * 20;
//   console.log("Total 20 Note  : " + unt);
// } else {
//   console.log("Total 20 Note : 0");
// }
// if (unit >= 10) {
//   unt = Math.floor(unit / 10);
//   unit = unit - unt * 10;
//   console.log("Total 10 Note  : " + unt);
// } else {
//   console.log("Total 10 Note : 0");
// }
// if (unit >= 5) {
//   unt = Math.floor(unit / 5);
//   unit = unit - unt * 5;
//   console.log("Total 5 Note  : " + unt);
// } else {
//   console.log("Total 5 Note : 0");
// }
// if (unit >= 2) {
//   unt = Math.floor(unit / 2);
//   unit = unit - unt * 2;
//   console.log("Total 2 Note  : " + unt);
// } else {
//   console.log("Total 2 Note : 0");
// }
// if (unit >= 1) {
//   unt = Math.floor(unit / 1);
//   unit = unit - unt * 1;
//   console.log("Total 1 Note  : " + unt);
// } else {
//   console.log("Total 1 Note : 0");
// }

// Ternary and nestead ternary opertator
// console.log(10 > 5 ? (2 > 3 ? "2" : "3") : "5");

// let n = Number(prompt("Enter Number : "));
// switch (n) {
//   case 1:
//     console.log("Hey i am 1");
//     break;
//   case 2:
//     console.log("Hey i am 2");
//     break;
//   default:
//     console.log("not in a and b");
// }
