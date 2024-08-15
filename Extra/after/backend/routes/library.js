const router = require('express').Router();
const Equations = require('../models/equation.model');

//Get
router.route('/').get((req,res)=>{
    Equations.find()
    .then(equations=>res.json(equations))
    .catch(err=>res.status(400).json({error:err}));
})

//Get through id
router.route('/:id').get((req,res)=>{
    const id=req.params.id;

    Equations.findById(id)
    .then(equation=>res.json(equation))
    .catch(err=>res.status(400).json({error:err}));
})

//Delete through id
router.route('/:id').delete((req,res)=>{
    const id= req.params.id;

    Equations.findByIdAndDelete(id)
    .then(()=>res.json(`${id} is deleted`))
    .catch(err=>res.status(400).json({error:err}));
})


//Edit through id (2 ways)
router.route('/:id').put((req,res)=>{

    const id = req.params.id;

    Equations.findById(id)
    .then(equation=>{
        equation.number1=req.body.number1;
        equation.number2=req.body.number2;
        equation.number3=req.body.number3;
        equation.sign=req.body.sign;;

        equation.save()
        .then(()=>res.json(`${id} is changed`))
        .catch(err=>res.status(400).json({error:err}))

    })
    .catch(err=>res.status(400).json({error:err}));
  

})
/*
//2nd way to update using updateOne()
router.route('/:id').put((req,res)=>{


    const id = req.params.id;

    if (req.body.number1){
        Equations.updateOne({_id:id},
            {$set:{
                id:id,
                number1:req.body.number1,
                number2:req.body.number2,
                number3:req.body.number3,
                sign:req.body.sign
            }}
        )
        .then(()=>res.json('finish'))
        .catch(err=>res.json({error:err}));
         
       
    }

})

*/

module.exports=router;