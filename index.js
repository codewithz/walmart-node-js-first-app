console.log('Before');
getCategory(100, function (category) {
    console.log('Category', category);

    //Getting the top two products
    getTopTwoProducts(category.name, function (topTwoProducts) {

        console.log(topTwoProducts);

        // Get the price for first products
        //  getPriceForTopProduct(topTwoProducts[0]);
    });
});

console.log('After');


function getCategory(id, callback) {

    setTimeout(() => {
        console.log('Reading a category from database...');
        callback({ categoryId: id, name: 'Electronics' });
    }, 2000);

}

function getTopTwoProducts(category, callback) {
    setTimeout(() => {
        console.log('Calling the Walmart API for getting top two products in category [' + category + ']');
        topTwoProducts = ['Apple IPhone', 'Samsung Galaxy A72'];
        callback(topTwoProducts);
    }, 2000)
}