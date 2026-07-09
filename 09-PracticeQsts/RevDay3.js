//Multiplication

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//Prime

let num = 13;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}

//Fibonacci

let number = 15;
let first = 0;
let second =1;

for(i = 3; i<= number; i++){
    let next = first + second;
    first = second;
    second = next;
}
console.log(second);
