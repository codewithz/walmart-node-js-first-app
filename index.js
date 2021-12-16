console.log('Before');
const category = getCategory(100);
console.log(category);
console.log('After');

// Three patterns for handling the asynchronous code 
// 1. Callbacks
// 2. Promises 
// 3. Async / Await

function getCategory(id) {

    setTimeout(() => {
        console.log('Reading a category from database...');
        return { categoryId: id, name: 'Electronics' };
    }, 2000);

    return 1;
}