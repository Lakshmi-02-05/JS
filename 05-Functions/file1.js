//Create a function that takes string as an argument an return the number of vowels in the string

function countvowels(str){
    let count = 0;
    for(char of str){
        if(
            char === 'a' |
            char === 'e' |
            char === 'i' |
            char === 'o' |
            char === 'u' 
        )
        count++;
    }
    return count;
}

console.log(countvowels("lakshmi"));
