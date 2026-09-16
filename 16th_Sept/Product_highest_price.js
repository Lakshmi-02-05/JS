// Find the product with the highest price

let products = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 25000 },
    { name: "Tablet", price: 35000 },
    { name: "Monitor", price: 18000 }
];

let highest = products[0]
for (let product of products){
    if (product.price > highest.price){
        highest = products;
    }
}
console.log(highest);
