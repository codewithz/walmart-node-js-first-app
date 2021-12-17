console.log('Before');
//Asynchronous way

//Callback Approach 

// getCategory(100, function (category) {
//     console.log('Category', category);
//     //Getting the top two products
//     getTopTwoProducts(category.name, function (topTwoProducts) {
//         console.log(topTwoProducts);
//         // Get the price for first products
//         getPriceForTopProduct(topTwoProducts[0], function (price) {
//             console.log("Price of the product is:" + price);
//         });
//     });
// });

//Promise Based Approach
// const p = getCategory(100);
// p
//     .then((category) => {

//         getTopTwoProducts(category.name)
//             .then((topTwoProducts) => {
//                 getPriceForTopProduct(topTwoProducts[0])
//                     .then((price) => {
//                         console.log('Price of the product is ' + price);
//                     })
//             });

//     })
//     .catch((err) => {
//         console.log("error", err.message);
//     });

// Async and Await Approach

async function displayPriceForTopProduct() {
    try {
        const category = await getCategory(100);
        const topTwoProducts = await getTopTwoProducts(category.name);
        const price = await getPriceForTopProduct(topTwoProducts[0]);
        console.log('Price for the product is:' + price);
    }
    catch (error) {
        console.log('Error', error);
    }
}

displayPriceForTopProduct();


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
            //reject(new Error('Top Two Error'))
        }, 2000);
    })
}

function getPriceForTopProduct(product) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Fetching the price for ', product);
            resolve(5000);
            //reject(new Error('Price Error'))
        }, 3000)
    })
}