//Get user to input a number using prompt("Enter a number:"). 
// Check if the number is a multiple of 5 or not.

let usernum = prompt("Enter a Number");
if (usernum % 5 ===0){
    console.log(usernum, "is multiple of 5");
}else{
    console.log(usernum, "is not multiple of 5");
}

//A code to give grade according to students score 
//80-100 - A
//70-89 - B
//60-69 - C
//50-59 - D 
//0-49 -E

let score = prompt("Enetr Your Score to get Grade")

if (score >= 80 && score <= 100) {
    console.log("Grade for", score, "is A")
} else if (score >= 70 && score <= 89) {
    console.log("Grade for", score, "is B")
} else if (score >= 60 && score <= 69) {
    console.log("Grade for", score, "is C")
} else if (score >= 50 && score <= 59) {
    console.log("Grade for", score, "is D")
} else if (score >= 0 && score <= 49) {
    console.log("Grade for", score, "is E")
}
