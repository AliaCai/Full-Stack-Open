RESTFUL services
express gives the application a framwork/structure

REST: Representational state transfer -> build http services (CRUD operations)

documenttation: https://expressjs.com/en/4x/api.html#express

1. Cleint (front end)
   |
   | http protocal(power web)
   |
2. Server (backend -> get/save the data)


eg. vidly (renting movies) https://vidly.com/api/customers (endpoint) 
(start with http or https [exchange on a secur chanel] ) :// domain /api (not compusory) (can be after domain like sub domain) / endpoint to work with customers [resources]

type of http request determin the kind of operation -> verb/,ethod to determin type or intention
METHOD:
- GET    
- POST (create)
- PUT (update)
- DELETE


Request/RESTFUL CONVETION
: GET /api/customers -> array of customer objecy [{},{},{}]
: GET /api/customers/id -> {}

: PUT /api/customers/id   -> updated object
{name: ''}
(customer object in the body of request)

: DELETE /api/customers/id

: POST /api/customers -> create the customer
{name: ''}
(customer object in the body of request)

(custommers -> collection)

> npm i -g nodemon  (-g globally) (nodemon -> node monitor)
> nodemon index

set environment varialbe (port)
mac
name of environment variable
>export PORT=5000
>set e port
(reset)

>page: command r TO refresh-> status can not be seen on network inspect

>npm i joi