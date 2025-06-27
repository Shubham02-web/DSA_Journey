// Swap 2 numbers

// Using Extra Variables

// let a = 10;
// let b = 20;
// let c;

// c = a;
// a = b;
// b = c;

// console.log("A = " + a + " " + "B = " + b);

// Without Extra Variables

// let a = 10;
// let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("A = " + a + " " + "B = " + b);

// Using Destructuring

let a = 20,
    b = 10;

[a, b] = [b, a];
console.log("a is : " + a + " " + " B is  = " + b);