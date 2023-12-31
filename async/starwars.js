const urls2 = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls2.map(url => {
    return fetch(url).then(people => people.json())
    // fetch returns a promise
})).then(results => {
    // throw Error
    console.log('1',results[0])
    console.log('2',results[1])
    console.log('3',results[2])
    console.log('4',results[3])
}).catch(err => console.log('Fix the ', err))
.finally(()=> console.log('extra'))
// .finally(data => console.log('extra ',data)); // extra undefined - finally doesn't recieve a parameter
// after a promise has finished, no matter what happens it'll run
