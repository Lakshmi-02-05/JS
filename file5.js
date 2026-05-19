//For a given array with marks of students -> 
// [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(avg);

//Create an array to store companies -> 
//"Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//a. Remove the first company from the array
//b. Remove Uber & Add Ola in its place
//c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
companies.push("Amazon");
