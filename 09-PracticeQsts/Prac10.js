//Given an array of integers, find the one that appears an odd number of times. 
//There will always be only one integer that appears an odd number of times.
//Method 1 GPT
const findOdd = arr => {
    const counts = {};

    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (const num in counts) {
        if (counts[num] % 2 !== 0) {
            return Number(num);
        }
    }
};

console.log(findOdd([1, 1, 2]));           // 2
console.log(findOdd([0, 1, 0, 1, 0]));     // 0
console.log(findOdd([7]));                 // 7

//Method 2 - GIT

const findOdd = arr => {
  return arr.reduce((a, b) => a ^ b);
};
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));