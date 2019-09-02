let todo = ['homework', 'breakfast', 'learnign js', 'playing'];

//for (let i = 0; i < todo.length; i++) {
//  console.log(todo[i]);
//}

//todo.forEach(function(assignment, index) {
//  console.log(`${index} :${assignment}`);
//})

//map

let shoppingcart = [
    { id: 1, product: 'Book' },
    { id: 2, product: 'pic' },
    { id: 3, product: 'album' }
];

let productname = shoppingcart.map(function(productName) {
    return productName.product;
});

console.log(productname);