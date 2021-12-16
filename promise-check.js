setTimeout(() => console.log("timer executed"), 0);
Promise.resolve().then(() => console.log("promise resolved"));
