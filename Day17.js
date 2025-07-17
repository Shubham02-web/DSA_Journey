// Find the maximum product of two integers n-1  in an array.
function findMaxProduct(nums) {
    let max1 = nums[0];
    let max2 = nums[0];
    for (let num of nums) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (max2 < num) {
            max2 = num;
        }
    }
    return (max1 - 1) * (max2 - 1);
}

let nums = [1, 5, 4, 5];
// let nums = [3, 7];
console.log(findMaxProduct(nums));