console.log('Before');
//Asynchronous way
getCategory(100, getTopTwoProductsNamed);



function getTopTwoProductsNamed(category) {

    console.log('Category', category);
    //Getting the top two products
    getTopTwoProducts(category.name, getPriceForTopProductNamed);

}

function getPriceForTopProductNamed(topTwoProducts) {
    console.log(topTwoProducts);
    // Get the price for first products
    getPriceForTopProduct(topTwoProducts[0], displayPriceOfTopProduct);
}


function displayPriceOfTopProduct(price) {
    console.log("Price of the product is:" + price);
}



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

function getPriceForTopProduct(product, callback) {
    setTimeout(() => {
        console.log('Fetching the price for ', product);
        callback(5000);
    }, 3000)
}