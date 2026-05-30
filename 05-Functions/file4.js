//Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.

let n = 8;
let arr = [];
for (i = 1; i<=n; i++){
    arr.push(i);
}
console.log(arr);

let sumarr = arr.reduce((prev, curr) => {
    return prev + curr ;
});
console.log("Sum of all the numbers in the array is", sumarr);

let mularr = arr.reduce((prev, curr) => {
    return prev * curr ;
});
console.log("Product of all the numbers in the array is", mularr);