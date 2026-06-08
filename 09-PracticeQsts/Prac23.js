//Given an array of numbers, write a function that returns the sum of all of the positives ones. 
//If the array is empty, the sum should be 0.

let positiveSum = (arr)=> {
    let sum = 0;

    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }

    return sum;
}
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));