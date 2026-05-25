//Create a function usinng arrow function that takes string as an argument an return the number of vowels in the string
let countvowel = (str) => {
    let count = 0;
    for(char of str) {
       
        if(
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u' 
        )
        count++;
    }
    return count;
}
console.log(countvowel("an apple a day keeps the doctor away"));