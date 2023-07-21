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

#### HEADERS:-

| HEADERS      | Content-Type: application/json        |
|-------------|---------------------------------------|
| BODY        | { text: "hello", photo: "smile.jpg" } |
| STATUS CODE | 200 (successful)                      |