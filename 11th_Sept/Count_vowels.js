// Count vowels

function count_vowels(str){
    let count = 0;
    for (char of str){
        if (
            char === "a" |
            char === "e" |
            char === "i" |
            char === "o" |
            char === "u" 
        )
        count ++
    }
    return count;
}

console.log(count_vowels("hello world welcome to the world of vowel"))