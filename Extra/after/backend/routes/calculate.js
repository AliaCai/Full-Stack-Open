const router=require('express').Router();
const math = require('mathjs');
const Equation = require('../models/equation.model');

router.route('/').get((req,res) => {
    Equation.find()
    .then(equations => res.json(equations))
    .catch(err=>res.status(400).json({error: err}))
})



function addEqu (number1, number2, number3, sign, res){

    const newEquation = new Equation({
            number1,
            number2,
            number3,
            sign
        });

    newEquation.save()
    .then(()=>res.json(` ${number3}`))
    .catch((err)=>res.status(400).json({error: err}));

}

//fufilling cuculation of + - * divide
router.route('/:sign').post((req,res)=>{
    const number1=req.body.number1;
    const number2=req.body.number2;
    const sign =req.params.sign;
    const number3 =0;


    if ((number1===0 || number1) && (number2===0 || number2) && typeof number1 === 'number' && typeof number2 === 'number'){
        if (sign==='+' || sign === '-' || sign ===  '*'){
            const number3= math.evaluate(`${number1} ${sign} ${number2}`);
            addEqu(number1, number2, number3, sign, res);//
            //res.json({equ:  `${number1} ${sign} ${number2} = ${number3}`});

        }else if(sign==='divide'){
            if(number2!==0){
                const number3= math.evaluate(`${number1}/${number2}`);
                addEqu(number1, number2, number3, sign, res);//
                //res.json({equ: `${number1} / ${number2} = ${number3}`});
            }else{
                res.status(400).json({error: 'number2 cannot be 0 in this case.'});
            }
        }else{
            res.status(400).json({error: 'sign has to be + - * or divide'});
        }
    }else{
        res.status(400).json({error:"check your what you enter for number 1 and number 2."});
    }



})

module.exports=router; 