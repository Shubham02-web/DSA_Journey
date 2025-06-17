function trianglePattern(n) {
    for (let i = 0; i < n; i++) {
        let patt = "";
        for (let j = 0; j <= i; j++) {
            patt += "*";
        }
        console.log(patt);
    }
}
// trianglePattern(5);
function reverseTriangle(n) {
    for (let i = n; i > 0; i--) {
        let patt = "";
        for (let j = 0; j < i; j++) {
            patt += "*";
        }
        console.log(patt);
    }
}
// reverseTriangle(5);

function NumberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let patt = "";
        for (let j = 1; j <= i; j++) {
            patt += j + " ";
        }
        console.log(patt);
    }
}
// NumberTriangle(5);

function ReverseNumberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let patt = "";
        for (let j = n; j >= i; j--) {
            patt += j + " ";
        }
        console.log(patt);
    }
}
ReverseNumberTriangle(5);

// Learn About Array Abd their methods
// push()	Add item to end
// pop()	Remove item from end
// shift()	Remove item from start
// unshift()	Add item to start
// includes()	Check if item exists
// indexOf()	Find index of item
// slice()	Copy a portion (doesn’t change original)
// splice()	Modify array (insert/delete items)