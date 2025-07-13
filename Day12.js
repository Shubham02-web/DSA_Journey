// Find Missing Number from 0 to n

// using the total and expected count
function missingOne(nums) {
    let n = nums.length;
    let expected = (n * (n + 1)) / 2;
    let actual = nums.reduce((a, b) => a + b, 0);
    return expected - actual;
}

let arr = [0, 2, 1, 4, 3, 7, 5, 6, 8, 10];
missingOne(arr);