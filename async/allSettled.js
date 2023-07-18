const promise1 = new Promise((resolve, reject)=> setTimeout(resolve, 3000));
const promise2 = new Promise((resolve, reject)=> setTimeout(reject, 3000));

Promise.all([promise1, promise2]).then(data => console.log(data)) // returns "Uncaught (in promise) undefined" without catch block
    .catch(e => console.log('something failed', e)) ; //e = undefined


// new , doesn't care about sresolve/reject, return when all promise are completed
Promise.allSettled([promise1, promise2]).then(data => console.log(data)) 
    .catch(e => console.log('something failed', e)) ; 

