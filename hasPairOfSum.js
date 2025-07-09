let arr = [1, 2, 3, 9]

function hasPairOfSum(arr, n) {
    if(arr.length < 1){
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === n) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

console.log(hasPairOfSum(arr , 10));