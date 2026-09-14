// Find the most frequent element

let arr = [1, 2, 3, 2, 4, 2, 5, 3];

let count = {};

for (let num of arr) {
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}

let max = 0;
let answer;

for (let num in count) {
    if (count[num] > max) {
        max = count[num];
        answer = num;
    }
}

console.log(answer);