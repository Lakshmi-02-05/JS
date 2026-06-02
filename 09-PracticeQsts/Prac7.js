//Create a function that checks if a number n is divisible by two numbers x AND y. 
//All inputs are positive, non-zero digits.

const value = (n,x,y) =>{
    let result = n % x === 0 && n % y === 0;
        return result;
};

console.log(value(6,3,2));