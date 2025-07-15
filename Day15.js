// Find duplicate numbers in an array containing multiple duplicates.

function findDuplicate(nums) {
    let temp = [];
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            temp[temp.length] = num;
        } else {
            seen.add(num);
        }
    }
    return temp;
}
let array = [3, 5, 7, 2, 3, 2];
console.log(findDuplicate(array));