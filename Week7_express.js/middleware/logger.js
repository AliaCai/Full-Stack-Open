const moment=require('moment');

//4.0 Login function midlesware: res, req, next
const logger = (req, res, next)=>{ //every time make a request, this midle ware will run
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);// -> http://localhost:5000/ -> after adding time http://localhost:5000/:2024-07-17T11:53:43-04:00
    next();
}

module.exports=logger;