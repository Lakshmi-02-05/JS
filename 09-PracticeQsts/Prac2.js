//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Self Trial
let evenNum = num => {
    if(num % 2 === 0){
        value = "Even";
        //console.log("Even");            
    }else{
        value = "Odd";
        //console.log("Odd");     
    }
    return value;
}
console.log(evenNum(36));


//BETTER AND SHORTER VERSION (GPT)

let evenNumber = num => {
    if(num % 2 === 0){
        return "Even";           
    }else{
        return "Odd";    
    }
}
console.log(evenNumber(749));

//Using Ternary operator  (Solution)
let even_odd = num1 => {
    return num1 % 2 === 0 ? "Even": "Odd";
};
console.log(even_odd(7878));