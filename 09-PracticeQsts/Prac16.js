//Given a string of space-separated numbers, write a function that returns the highest and lowest numbers. There will always be at least one number in the input string.

let array = ["1", "2", "3", "4", "5"];
let newArr = array.map(Number);

const highest = newArr.reduce((prev,current) => {
    return prev > current ? prev : current;
});
console.log(`Highest value from the given array is ${highest}`);

const lowest = newArr.reduce((prev,current) => {
    return prev < current ? prev : current;
});
console.log(`Lowest value from the given array is ${lowest}`);
