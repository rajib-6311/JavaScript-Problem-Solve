const products = [
    {name: 'sampo', price: 200},
    {name: 'Oil', price: 300},
    {name: 'chips', price: 100},
    {name: 'shart', price: 700},
    {name: 'pant', price: 700}
]

function getSoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
   
}
const total = getSoppingTotal(products);
console.log("Total buy: ",total);