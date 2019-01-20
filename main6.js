// Promises

/*

A Promise is an object that is used as a placeholder for the eventual results of a
deferred (and possibly asynchronous) computation.

*/



// const myProimse = new Promise((resolve, reject) => {
//     if (Math.random() * 100 < 90) {
//       reject(new Error('The promise was rejected by using reject function.'));
//     }
//     throw new Error('The promise was rejected by throwing an error');
//   });
  
//   myProimse.then(
//     () => console.log('resolved'), 
//     (error) => console.log(error.message)
//   );


/*

In the above example, we created a promise and stored it in myPromise. How can we access the the value passed by the resolve or reject function?All Promise instances have a 
.then() method on them. 

*/


const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        console.log('resolving the promise ...');
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

// Two functions 
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

myPromise.then(onResolved, onRejected);

// Same as above, written concisely
myPromise.then((resolvedValue) => {
    console.log(resolvedValue);
}, (error) => {
    console.log(error);
});