// find the missing element

let arr = [1 , 112] 

// Input = 1 , 112 
// opp / Iteration = number of operations / 112
// 2 operation = Outerloop
// 110 operations = innerloop

//[2, 5, 7, 8 , 9 ]
function getMissingNumbers(arr){
    let prev = arr[0]
    let opp = 0
    let missingElement = []
    for(let i = 0 ; i < arr.length ; i++){
        opp++
        let curr = arr[i]
        for(let j = prev + 1 ; j < curr ; j++){
           missingElement.push(j)
           opp++
        }
        prev = arr[i]
    }
    console.log(opp)
    return missingElement
}

console.log(getMissingNumbers(arr))


// function getMissingNumbers(arr){
//     let missingNumbers = []
//     for(let i = 0 ; i < 9 ; i++){
//         let count = 0;
//         for(let j = 0 ; j < arr.length ; j++){
//             if(i !== arr[j]){
//                 count++;
//             }
//         }
//         if (count === arr.length) {
//             missingNumbers.push(i);
//         }
//     }
//     return missingNumbers;
// }

// console.log(getMissingNumbers(arr))