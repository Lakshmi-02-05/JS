//  Count even and odd numbers

let arr = [12, 7, 4, 9, 20, 15, 8];
let even = [];
let odd = [];
for (let num of arr){
    if (num % 2 == 0){
        even.push(num)
    }
    else{
        odd.push(num)
    }
}

console.log("Even:", even);
console.log("Odd:", odd);

