## http requests

- GET /friends/6 list of friend/individual data access
- POST /messages save the message and send to friend
- PUT /messages/7 Edit the message no. 7
- DELETE /messages/16 or /friends/8


| METHOD | POST                                  |
|--------|---------------------------------------|
| PATH   | /messages                             |
| BODY   | { text: "hello", photo: "smile.jpg" } |
| HEADERS | Host: facebook.com                    |

### HEADERS:-

| HEADERS      | Content-Type: application/json        |
|-------------|---------------------------------------|
| BODY        | { text: "hello", photo: "smile.jpg" } |
| STATUS CODE | 200 (successful)                      |


For *`https://www.google.com:443/maps`*, **Origin** is combination of
- Protocol: **https://**
- Host(server to be browsed): **www.google.com**
- Port(included in request): **www.google.com:443/maps**


### **`CORS`** - Cross Origin Resource Sharing

**Access-Control-Allow-Origin:**
- *(for allowing all)
- **Whitelisting** => Explicitily specific allowance(Eg. https://www.google.com)


### check methods
we can check the request **POST** method by writing in broswer console, recieved in our running server-terminal, that the data is logged correctly
```
fetch('http://localhost:3000/friends',{
    method: 'POST',
    body: JSON.stringify({id: 5, name: "Aman Katara"})
})
.then((response) => response.json())
.then((friend) => console.log(friend))
```


