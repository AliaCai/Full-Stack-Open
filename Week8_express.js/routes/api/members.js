const express=require('express');
const router=express.Router();
const members=require('../../Members');
const uuid=require('uuid');

//use router. instead of app. to handel request


//just in memory

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


//7.0 CREATE MEMBER (BODY PARSER MIDDLEWARE)
//create something on the srever / adding to the server -> post request (eg. fetch api, form submission)
//we can use the same route as long as it is different method (eg. get, post)
router.post('/', (req, res) => {
    //res.send(req.body);
    const newMember = {//mongodb, a lot of data base create id for you
        //use uuid to generate id here
        id: uuid.v4(),
        name: req.body.name,
        email:req.body.email,
        status:'active'
    };

    if(!newMember.name || !newMember.email){
        return res.status(400).json({meg: 'Please include a name and email'}); //dont do else and dont use return -> err that says header has already sent
    }

    members.push(newMember);//added to array

    //send back respond eg:
    //res.json(members); //show a json page -. need to make api work
    res.redirect('/');

});//need to set up in index.js too

//8.0 Update Member
// Put resuest
router.put('/:id', (req, res)=>{

    const found = members.some(member => member.id === parseInt(req.params.id));//check it exists


    if (found){
       const updMember=req.body;

       //loop through the id we have, if have -> the one updated
       members.forEach(member => {
        if(member.id === parseInt(req.params.id)){
            member.name= updMember.name ? updMember.name :member.name;
            member.email=updMember.email ? updMember.email:member.email;

            //send back a response
            res.json({msg: 'Member updated', member:member}); //member;member=member;
        }
       });
    }else{
        //status: 400 -> bad request -> does not give what we want
        res.status(400).json({meg: `No member with the id of ${req.params.id}`});
    }
})


//9.0 Delete member
router.delete('/:id', (req, res)=>{

    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found){
        res.json({
            msg: 'Member deleted', 
            members: members.filter(member => member.id !== parseInt(req.params.id))});//filter out the one
    }else{
        //status: 400 -> bad request -> does not give what we want
        res.status(400).json({meg: `No member with the id of ${req.params.id}`});
    }
})


/*index.js-----------------------------------------------------------------------------------------------------------------------

//3.0 SImple rest api (not deal with databse, hardbode array)

//GETS ALL MEMBERS: postman: Get: http://localhost:5000/api/members
app.get('/api/members', (req, res) =>{
    res.json(members);//do not need to strinfy it althought that is js object because this will take care of it
});




//5.0 GET SINGLE MAMBER (getng by id) -> /:id url param, getting be req
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