let sentence = "Hello world I am learning JavaScript";
// Output: "olleH dlrow I ma gninrael tpircSavaJ"

function reverseSentence(sentence) {
    let result = [];
    let words = sentence.split(" ")
    console.log(words)
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversed = "";

        for (let j = word.length - 1; j >= 0; j--) {
            reversed = reversed + word[j]
        }
        result.push(reversed);
    }

    return result.join(" ");
}

console.log(reverseSentence(sentence))
