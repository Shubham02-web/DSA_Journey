// Find duplicate numbers in an array containing multiple duplicates.

// function findDuplicate(nums) {
//     let temp = [];
//     let seen = new Set();
//     for (let num of nums) {
//         if (seen.has(num)) {
//             temp[temp.length] = num;
//         } else {
//             seen.add(num);
//         }
//     }
//     return temp;
// }

function findDuplicate(nums) {
    let frequencyArr = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (frequencyArr[val] === undefined) {
            frequencyArr[val] = 1;
        } else {
            frequencyArr[val]++;
        }
    }

    for (let j = 0; j < frequencyArr.length; j++) {
        if (frequencyArr[j] > 1) {
            let isAdded = true;
            for (let k = 0; k < result.length + 1; k++) {
                if (result[k] === j) {
                    isAdded = false;
                    break;
                }
            }
            if (isAdded) {
                result[result.length] = j;
            }
        }
    }

    return result;
}
let array = [3, 5, 7, 2, 3, 2];
console.log(findDuplicate(array));