//Write a function that returns "Even" if number is even, else "Odd".

function evenOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOdd(4)); 
console.log(evenOdd(7)); 
console.log(evenOdd(874987)); 