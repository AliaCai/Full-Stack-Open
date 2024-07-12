const url = require('url');
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL -> striaght up url
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);
//Host name (simiar but do not include port)
console.log(myUrl.hostname);


//Pathname
console.log(myUrl.pathname);
//Serialized query
console.log(myUrl.search);//everything after question mark

