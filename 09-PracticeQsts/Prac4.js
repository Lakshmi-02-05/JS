//Write a function that given the input string name, returns the greeting statement Hello, 
//<name> how are you doing today?


let inputValue = prompt("Pls Enter your name");
let greetings = `Hello ${inputValue} how are you doing today?`;
console.log(greetings);


//One more method (GPT)
let valName = name => {
    return `Hello ${name} how are you doing today?`;
};
console.log(valName("Laksh"));