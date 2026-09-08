//Find the second largest number 

let arr = [10, 5, 8, 20, 15];

let largest = 1
let second_largest = 0

for (let num of arr){
    if(num > largest){
        second_largest = largest;
        largest = num;
    }
    else if(num > second_largest && num !== largest){
        second_largest = num
    }
}

console.log("Second Largest number:", second_largest)