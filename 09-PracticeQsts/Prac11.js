//Given a word, your job is to return the middle character(s) of the word. 
//If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

let middleValue = str => {
    let len = str.length;
    let mid = len / 2;

    return len % 2 ? str[Math.floor(mid)]: str[mid-1] + str[mid];
};
console.log(middleValue('test')); 
console.log(middleValue('SwaDharma')); 