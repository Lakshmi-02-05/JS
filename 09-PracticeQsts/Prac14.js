//Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.

const squareDigits = num => {
    let count = "";
    for(let int of String(num)){
        count += int * int;
    }
    return count;
};
console.log(squareDigits(2112));
console.log(squareDigits(9159));
console.log(squareDigits(3212));