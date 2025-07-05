let str = "aabbcccddde"
let arr = {}

for (let i = 0; i < str.length; i++) {
    let val = str[i]
    if (arr.hasOwnProperty(val)) {
        arr[val]++ 
    } else {
        arr[val] = 1
    }
    console.log(arr)
}

let dict1 = {1:1, 2:2 , 3:3 ,4:4};
let dict2 = {1:1, 2:2 , 3:3 ,4:5};

//check two obj length

function objEqual(dict1 , dict2){
    let keys1 = Object.keys(dict1);
    let keys2 = Object.keys(dict2);

    if(keys1.length !== keys2.length){
        return false
    }

    for(let key in dict1){
        if(!dict2.hasOwnProperty(key)){
            return false
        }
        if(dict1[key] !== dict2[key]){
            return false
        }
    }
    return true
}

console.log(objEqual(dict1 , dict2))



// Find Duplicates:
// Given an array of numbers, return a new array containing only the duplicate elements.

let arr2 = [2 , 2 , 3 , 4 , 5 , 6 , 3 , 5]

function duplicateElement(arr){
    let newArr = {}
    for(let i = 0 ; i < arr.length ; i++){
        let count = arr[i]
        if(newArr[count] === undefined){
            newArr[count] = 1
        }else{
            newArr[count]++
        }
    }
    let duplicateArr = [];
    for (let key in newArr) {
        if (newArr[key] > 1) {
            duplicateArr.push(parseInt(key));
        }
    }

    return duplicateArr;
}
console.log(duplicateElement(arr2))


// Remove Specific Value:
// Write a function to remove all instances of a given value from an array in-place.

function removeValue(arr , val){
    for(let i = 0 ; i <  arr.length ; i++){
        if(arr[i] === val){
            arr.splice(i, 1);
            i--; 
        }
    }
    return arr
}

console.log(removeValue(arr2 , 2))

// Flatten Nested Arrays:
// Given an array like [1, [2, [3, 4], 5]], flatten it into a single array [1, 2, 3, 4, 5].
let arr4 = [1, [2, [3, 4], 5]]

console.log(arr4.flat(Infinity))



