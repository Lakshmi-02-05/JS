//Return the number (count) of vowels (a, e, i, o, u) in the given string. 
//The input string will only consist of lower case letters and/or spaces.


const vowels = str => {
    let count = 0;

    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    return count;
};

console.log(vowels("Lakshmi"));      
console.log(vowels("javascript")); 
console.log(vowels("aeiou"));      