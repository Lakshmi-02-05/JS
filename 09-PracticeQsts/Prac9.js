//Trolls are attacking your comment section! 
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
//neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.

const vowel = str => {
    let result = "";

    for(const char of str){
        if (!"aeiou".includes(char)) {
            result += char;
        }
    }
    return result;
};
console.log(vowel("Hello World"));
console.log(vowel("Java Script"));
console.log(vowel("Hey, Hope doing good"));



