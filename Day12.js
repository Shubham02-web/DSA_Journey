// 1.	Find the missing number in a given integer array of 1 to 100.

function findMissing(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}
let arr = [1];
console.log(findMissing(arr));