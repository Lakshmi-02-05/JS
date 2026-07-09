//1 Create a function that prints your name.
console.log("1 Create a function that prints your name.");

function name(name){
    console.log("Lakshmi");
}
name()

//2 Create a function to add two numbers.
function add(a,b){
    console.log(a + b);
}
add(3,7);

//Arrow function
const arrowadd = (a,b) => a + b;
console.log(arrowadd(3,7))

//3 Create a function to multiply two numbers.
function mul(a,b){
    console.log(a * b);
}
mul(12,2);

//4 Create an arrow function that returns the square of a number.
const square = x => x * x;
console.log(square(6));

//5 Create an arrow function that checks whether a number is even or odd.
const evenodd = z =>{
    if(z % 2 === 0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");       
    }
}
evenodd(19);

//5 Create a function that prints numbers from 1 to 10.
console.log("Create a function that prints numbers from 1 to 10.");
function n() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

n();

//6 Create a function that prints the multiplication table of a given number.
console.log("Create a function that prints the multiplication table of a given number.")
function table(num){
    for(let i = 1; i <= 10; i++){
        let result = console.log(`${num} X ${i} = ${num*i}`);       
    }
}
table(7)


//7 Create a function that returns the largest of two numbers.
console.log("Create a function that returns the largest of two numbers.");

function largest(a,b){
    if(a == b){
        console.log("Both the numbers are equal");
    }
    else if(a>b){
        console.log("Largest is", a);
    }
    else{
        console.log("Largest is", b);   
    }
}
largest(74,26)

//8 Create a function that counts from 10 to 1.
console.log("8 Create a function that counts from 10 to 1.");

function counts(){
    for(let i=10; i >= 1; i--){
        console.log(i);
    }
}
counts();


//9 Create a function that returns the factorial of a number.
console.log("9 Create a function that returns the factorial of a number.");

let result = 1;
function factorial(x){
    for(let i =2 ; i <= x; i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(3));

