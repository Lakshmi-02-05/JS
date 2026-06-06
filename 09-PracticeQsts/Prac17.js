//Write a function that takes any non-negative integer as an argument and returns it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//gpt
function descendingOrder(n) {
    return Number(
        n
            .toString()
            .split("")
            .sort((a, b) => b - a)
            .join("")
    );
}

console.log(descendingOrder(42145)); 
console.log(descendingOrder(145263));