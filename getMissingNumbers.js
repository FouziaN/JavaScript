// find the missing element

let arr = [1 , 3 , 4 , 6]

function getMissingNumbers(arr){
    let missingNumbers = []
    for(let i = 0 ; i < 9 ; i++){
        let count = 0;
        for(let j = 0 ; j < arr.length ; j++){
            if(i !== arr[j]){
                count++;
            }
        }
        if (count === arr.length) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}

console.log(getMissingNumbers(arr))