const p = new Promise((resolve, reject) => {
    //Kick off some async work here

    setTimeout(() => {
        // resolve(1);
        reject(new Error('Some Error Message'))
    }, 2000);
});

p
    .then((result) => {
        console.log('Result', result);
    })
    .catch((err) => {
        console.log('Error:', err.message);
    });

