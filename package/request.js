const axios = require('axios');

/* Make XMLHttpRequests from the browser
Make http requests from node.js
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Automatic transforms for JSON data */

axios.get('https://www.google.com')
    .then((response)=> { console.log(response); })
    .catch((err)=> console.log(err))
    .then(()=> console.log('All done!'))