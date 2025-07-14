// Revision

// find missing Number Among 0 to n+1

// using reduce method
// function findMissing(nums) {
//     let n = nums.length;
//     let expected = (n * (n + 1)) / 2;
//     let actual = nums.reduce((a, b) => a + b, 0);
//     return expected - actual;
// }

// using nestead loop
function findMissing(nums) {
    for (let i = 0; i < nums.length + 1; i++) {
        let flag = 1;
        for (let j = 0; j < nums.length + 1; j++) {
            if (i === nums[j]) {
                flag = 0;
            }
        }
        if (flag) return i;
    }
}
let arr = [2, 3, 6, 4, 0, 5];
console.log(findMissing(arr));