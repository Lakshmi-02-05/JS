//Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. 
//Given the time in hours, you need to return the number of litres of water that Nathan will drink, rounded to the smallest value.

let totalValue = hours => {
    return Math.floor(hours * 0.5);
};
console.log(totalValue(4));
console.log(totalValue(0));
console.log(totalValue(2)); 
console.log(totalValue(1.4)); 
console.log(totalValue(12.3)); 
console.log(totalValue(0.82)); 
console.log(totalValue(11.8)); 
console.log(totalValue(1787)); 