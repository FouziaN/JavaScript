let arr = [10 , 9 , 3 , 5 , 2 , 9 , 20 , 23 , 20]

function findElement(arr , ele){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === ele){
            return true
        }
    }
    return false
}

function findSum(arr){
    let sum = 0
    for(let i = 0 ; i < arr.length ;i++){
        sum = sum + arr[i]
    }
    return sum
}

// console.log()

function findMax(arr){
    let max = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = max + arr[i]
        }
    }
    return max
}
const result = findMax(arr)
console.log(result)


const subArray = arr.slice(3 , 5)
const subArray2 = arr.slice(2 , 5)

console.log(subArray)
console.log(subArray2)


var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0588945678",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "1234567890",
        "likes": ["Music", "Reading", "Traveling"]
    },
    {
        "firstName": "Sarah",
        "lastName": "Smith",
        "number": "9876543210",
        "likes": ["Dancing", "Cooking", "Gaming"]
    },
    {
        "firstName": "Michael",
        "lastName": "Johnson",
        "number": "1122334455",
        "likes": ["Football", "Movies", "Photography"]
    },
    {
        "lastName": "Lane",
        "number": "1122334455",
        "likes": ["Football", "Movies", "Photography"]
    }
];

function findName(arr){
    for(let i = 0 ; i < arr.length ;i++){
       let contact = arr[i]
       if(contact.hasOwnProperty("firstName") && contact.hasOwnProperty("lastName")){
        let result = contact.firstName + " " + contact.lastName
        console.log(result)
       }
    }
}

findName(contacts)


function findLikes(arr){
    let newLikes = []
    for(let i = 0 ; i < arr.length ; i++){
        let contact = arr[i]
        let likes = contact.likes
        newLikes = [...newLikes, ...likes]
    }
    let uniqueLikes = new Set(newLikes)
    uniqueLikes = [...uniqueLikes]
    uniqueLikes.sort()
    console.log(newLikes , uniqueLikes)
}
findLikes(contacts)

function addNewContact(arr){
    let newContact = {
        "firstName" : "ML",
        "lastName" : "FN" ,
        "number": "1122334455",
        "likes": ["Narccist", "Harrasing"]
    }
    let newArr = [...arr]
    newArr.push(newContact)
    return newArr
}

let newContacts = addNewContact(contacts)
console.log(newContacts)
console.log(contacts)


for(i = 0 ; i < 5 ; i++){
    row = " "
    for(j = 0 ; j < 5 - i ; j++){
        row = row + (j + 1)
    }
    console.log(row)
}

for (i = 0 ; i < 5 ; i++){
    row = " "
    for( j = 0 ; j < 5 - i ; j++){
        row += " * ";
    }
    console.log(row)
}

let str = "abbcddde"
function countCharFrequency(str) {
    const charCount = {}; 
    for (let i = 0; i < str.length; i++) { 
        let char = str[i];
        if(charCount[char] === undefined){
            charCount[char] = 1
            console.log(charCount[char])
        }else{
            charCount[char]++
        }
    }
    return charCount;
}

const resul = countCharFrequency(str);
console.log(resul);
