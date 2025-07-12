// 1.	Find the missing number in a given integer array of 1 to 100.

function findMissing(nums) {
    for (let i = 0; i < nums.length + 1; i++) {
        let flag = 1;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j) {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            return nums[i];
        }
    }
}