let arr = [10 , 9 , 3 , 5 , 2 , 9 , 20 , 23 , 20]

function findElement(arr , ele){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == ele){
            return i
        }
    }
    return -1
}

console.log(findElement(arr, 9))


function findSum(arr){
    let sum = 0
    for(let i = 0 ; i < arr.length ; i++){
        sum = arr[i] + sum
    }
    return sum
}

console.log(findSum(arr))

function secondLargest(arr){
    let firstLargest = arr[0]
    let secondLargest = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]
        }else if(arr[i] > secondLargest && arr[i] !== firstLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargest(arr))

function findLargest(arr){
    let firstLargest = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > firstLargest){
            firstLargest = arr[i]
        }
    }
    return firstLargest
}

console.log(findLargest(arr))


function findSmallest(arr){
    let smallest = arr[0]
    for(let i = 0 ; i < arr.length ;i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest
}
console.log(findSmallest(arr))




