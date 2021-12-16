console.log('Before');
//Asynchronous way
getCategory(100, function (category) {
    console.log('Category', category);
    //Getting the top two products
    getTopTwoProducts(category.name, function (topTwoProducts) {
        console.log(topTwoProducts);
        // Get the price for first products
        getPriceForTopProduct(topTwoProducts[0], function (price) {
            console.log("Price of the product is:" + price);
        });
    });
});


console.log('After');


function getCategory(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Reading a category from database...');
            resolve({ categoryId: id, name: 'Electronics' });
        }, 2000);

    });

}

function getTopTwoProducts(category) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Calling the Walmart API for getting top two products in category [' + category + ']');
            topTwoProducts = ['Apple IPhone', 'Samsung Galaxy A72'];
            resolve(topTwoProducts);
        }, 2000);
    })
}

function getPriceForTopProduct(product) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Fetching the price for ', product);
            resolve(5000);
        }, 3000)
    })
}