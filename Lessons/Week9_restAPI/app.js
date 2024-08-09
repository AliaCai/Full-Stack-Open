const http=require('http');

const server=http.createServer((req, res)=>{
    //definding variouse routes
    //but not very maintanable -> tedious
    //framework come into the pics -> give a proper structure 
    if(req.url==='/'){
        res.write('Hello world');
        res.end();
    }

    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000...');
