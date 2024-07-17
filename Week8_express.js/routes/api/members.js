const express=require('express');
const router=express.Router();
const members=require('../../Members');

//use router. instead of app. to handel request




//3.0 /GETS ALL MEMBERS: postman: Get: http://localhost:5000/api/members
router.get('/', (req, res) =>{///api/members
    res.json(members);//do not need to strinfy it althought that is js object because this will take care of it
});




//5.0 GET SINGLE MAMBER
router.get('/:id', (req, res)=>{///api/members

    const found = members.some(member => member.id === parseInt(req.params.id));//some: give a true or false based on condition


    if (found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));//200 status -> everything is ok (postman)
    }else{
        //status: 400 -> bad request -> does not give what we want
        res.status(400).json({meg: `No member with the id of ${req.params.id}`});
    }
})


//7.
//create something on the srever / adding to the server -> post request (eg. fetch api, form submission)
//we can use the same route as long as it is different method (eg. get, post)
router.post('/', (req, res) => {
    res.send(req.body);
});


/*index.js-----------------------------------------------------------------------------------------------------------------------

//3.0 SImple rest api (not deal with databse, hardbode array)

//GETS ALL MEMBERS: postman: Get: http://localhost:5000/api/members
app.get('/api/members', (req, res) =>{
    res.json(members);//do not need to strinfy it althought that is js object because this will take care of it
});




//5.0 GET SINGLE MAMBER (getting by id) -> /:id url param, getting be req
app.get('/api/members/:id', (req, res)=>{
    //res.send(req.params.id); //return id


    const found = members.some(member => member.id === parseInt(req.params.id));//some: give a true or false based on condition


    //use filter take in array and filter out things
    //res.json(members.filter(member => member.id === parseInt(req.params.id)));//member.id is a num but req.params.id is a string -> === does not woek bcause type does not mathc -> add pareseint


    if (found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));//200 status -> everything is ok (postman)
    }else{
        //status: 400 -> bad request -> does not give what we want
        res.status(400).json({meg: `No member with the id of ${req.params.id}`});
    }
})

-----------------------------------------------------------------------------------------------------------------------*/

module.exports=router;