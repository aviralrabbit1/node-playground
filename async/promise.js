// a promise is an object that may produce a single value sometime in the future
// either resolved, or reason(rejected)
//  states - fulfilled, rejected or pending

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('it works');
    } else {
        reject('Error','it failed');  
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hello');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'meow');
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'meow nigga');
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })
    
// promise.then(result => console.log(result));
promise
    .then(result => {
        // throw Error
        
        return result+'!'
    })
    .then(result2 => 
        // console.log(result2 + '?')
        result2+'?'
    )
    .catch(()=> // cathes and runs only on any error between the chains "before it is placed"
        console.log('Error on result')
    )
    .then(result3 => {
        // throw Error // will throw error in the console
        console.log(result3 + '&');
    })