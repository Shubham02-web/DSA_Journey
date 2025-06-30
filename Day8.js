// To check valid voter

const age = Number(prompt("Please Enter Your Age"));
if (isNaN(age)) {
  alert("Enter Number");
  console.log("Please enter number its not a number");
} else if (Math.floor(age <= 0)) {
  alert("Please Enter a positive number");
  console.log("Please Enter a positive number");
} else if (Math.floor(age <= 18)) {
  alert("You are under 18 you are not eligible for vote now ");
  console.log("You are under 18");
} else {
  alert("Congratulation you are eligble for voting");
  console.log("Congratulation you are eligble for voting");
}
