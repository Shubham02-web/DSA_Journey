// Revision

// find missing Number Among 0 to n+1

// using reduce method
function findMissing(nums) {
    let n = nums.length;
    let expected = (n * (n + 1)) / 2;
    let actual = nums.reduce((a, b) => a + b, 0);
    return expected - actual;
}

let arr = [2, 3, 0, 4, 1, 5];
console.log(findMissing(arr));