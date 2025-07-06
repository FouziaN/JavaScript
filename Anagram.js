// check anagram 
let str1 = "cat"
let str2 = "tac"

function countChar(str){
    let charCount = {};
    for(let i = 0 ; i < str.length ; i++ ){
        let val = str[i]
        if(charCount[val] === undefined){
            charCount[val] = 1
        }else{
            charCount[val]++
        }
    }
    return charCount
}

function isEqualObj(obj1 , obj2){
    for(let key in obj1){
        if(!obj2.hasOwnProperty(key)){
            return false
        }
        
        if(obj1[key] !== obj2[key]){
            return obj1
        }
    }
    return true
}

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const count1 = countChar(str1);
    const count2 = countChar(str2);

    return isEqualObj(count1, count2);
}

console.log(anagram(str1 , str2))