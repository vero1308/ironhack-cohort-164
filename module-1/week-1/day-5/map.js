// MAP is HOF, and it will apply a treatment to each value of the parsed array, and return a BRAND new array containing the modified values


var products = [
    {name: "spoon", price: 2},
    {name: "plate", price: 6},
    {name: "glass", price: 3},
    {name: "fork", price: 2}
];

function applySalesPrice(prods, discount) {
    var mappedProducts = prods.map(currentProduct =>{
        var newPrice = currentProduct.price - (currentProduct.price * discount) / 100;
        currentProduct.price = newPrice;
        return currentProduct;
    });
    return mappedProducts;
}

// function applySalesPrice(prods, discount) {
//     return prods.map(currentProduct =>{
//         var newPrice = currentProduct.price - (currentProduct.price * discount) / 100;
//         currentProduct.price = newPrice;
//         return currentProduct;
//     });
// }

const result = applySalesPrice(products, 10);
console.log("------------>");
console.log(result);

var numbers = [1, 2, 3, 4, 5];
var multipliedNumbers = numbers.map(n => n * 2);
// var multipliedNumbers = numbers.map(function(n) { return n * 2 });
console.log("------------>");
console.log(multipliedNumbers);

