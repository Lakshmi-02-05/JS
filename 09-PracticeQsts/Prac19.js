//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.

// const value = str => {
//     return str
//         .split("")
//         .map((char,index) = {
//            if(char.length >= 5){
//             return char.reverse();
//            } 
//         })
//         .join("")
// };

const value = str => {
    return str
        .split(" ")
        .map(word => {
            if (word.length >= 5) {
                 return word.split("").reverse().join("");
            }
            return word;
        })
        .join(" ");
};
console.log(spinWords('Hey fellow warriors'));