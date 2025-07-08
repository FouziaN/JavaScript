let nums = [1, 2, 3, 2, 4, 5, 1];

function removeDuplicate(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let val = arr.find(e => e === nums[i]);
        if (!val) {
            arr.push(nums[i])
        }
    }
    return arr
}

console.log(removeDuplicate(nums))