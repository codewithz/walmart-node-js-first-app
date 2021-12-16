console.log('Before');
getCategory(100, function (category) {
    console.log('Category', category);

    //Getting the top two products
    getTopTwoProducts(category.name);
});

console.log('After');


function getCategory(id, callback) {

    setTimeout(() => {
        console.log('Reading a category from database...');
        callback({ categoryId: id, name: 'Electronics' });
    }, 2000);

}

function getTopTwoProducts(category) {
    setTimeout(() => {
        console.log('Calling the Walmart API for getting top two products in category [' + category + ']');
        topTwoProducts = ['Apple IPhone', 'Samsung Galaxy A72'];
        return topTwoProducts;
    }, 2000)
}