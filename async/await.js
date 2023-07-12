async function fetchusers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}

// fetchusers();

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
    // fetch returns a promise
})).then(results => {
    console.log('users',results[0])
    console.log('posts',results[1])
    console.log('albums',results[2])
}).catch(('Error'));

const getdata = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async url => {
            const res = await fetch(url);
            return await res.json();        
            // const [users, posts, albums] = await Promise.all(urls.map(url => {
            // return fetch(url).then(res => res.json())
            // // fetch returns a promise
        }))
        console.log('users',users)
        console.log('posts',posts)
        console.log('albums',albums)        
    } catch (error) {
        console.log('damn', error);
    }
}

const getdata2 = async function(){
    arrayOfPromises = urls.map(url => fetch(url));
    for await(let request of arrayOfPromises){
        const data = await request.json();
        console.log(data);
    }
}