let arr = [2, 1 , 3 , 2 , 1 , 4]

function hasExactKDuplicateDistance(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (j - i === k) {
          return true;
        }
      }
    }
  }
  return false;
}

const result = hasExactKDuplicateDistance(arr, 3)
console.log(result)


function hasDuplicatesDistance(arr, k) {
  for (let i = 0; i < arr.length ; i++) {
    let j = i + k
    if (j >= arr.length) {
      break;
    }
    console.log("i :", i, "j :", j)
    if (arr[i] === arr[j]) {
      return true;
    }
  } return false;
}

const res = hasDuplicatesDistance(arr, 2)
console.log(res)

//   let ar = 345
// function countDigit(num){
//     let numStr = num.toString();
//     let count = 0
//     for(let i = 0 ; i < numStr.length ; i++){
//         count++
//     }
//     console.log(count)
// }

// countDigit(ar)


// function countDigit(num) {
//     let count = 0;
//     while (num !== 0) {
//         num = (num / 10) | 0; // This drops the decimal part
//         count++;
//     }
//     console.log(count);
// }
// countDigit(ar)


function hasDuplicatesDistanceKey(arr, k) {
  if(arr.length < 2){
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    let j = i + k;
    if (j >= arr.length) continue;
    if (arr[i] === arr[j]) {
      return true;
    }
  }
  return false;
}

console.log(hasDuplicatesDistanceKey(arr , 3))


function duplicateKey(arr , k){
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = i + 1 ; j < arr.length ; j++){
      if (arr[i] === arr[j]) {
        if (j - i === k) {
          return true;
        }
      }
    }
  }return false
}

console.log(duplicateKey(arr , 3))