let scores = [89, 95, 72, 95, 100, 99];

function secondLargest(arr) {
    let firstLargest = arr[0]
    let secondLargest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargest(scores))