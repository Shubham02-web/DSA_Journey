// Check Number is strong or not

function StrongNumber(n) {
  let temp = n;
  let result = 0;
  let rem = 0;
  while (n > 0) {
    let fact = 1;
    rem = n % 10;
    n = Math.floor(n / 10);
    for (let i = 1; i <= rem; i++) {
      fact = fact * i;
    }
    result += fact;
  }
  console.log(result);
  if (temp === result) {
    return "Number is strong";
  } else {
    return "Number is not strong";
  }
}
console.log(StrongNumber(145));
