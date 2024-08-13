const router=require('express').Router();
const math = require('mathjs');


//fufilling cuculation of + - * divide
router.route('/:sign').post((req,res)=>{
    const number1=req.body.number1;
    const number2=req.body.number2;
    const sign =req.params.sign;

    if ((number1===0 || number1) && (number2===0 || number2) && typeof number1 === 'number' && typeof number2 === 'number'){
        if (sign==='+' || sign === '-' || sign ===  '*'){
            const number3= math.evaluate(`${number1} ${sign} ${number2}`);
            res.json({equ:  `${number1} ${sign} ${number2} = ${number3}`});

        }else if(sign==='divide'){
            if(number2!==0){
                const number3= math.evaluate(`${number1}/${number2}`);
                res.json({equ: `${number1} / ${number2} = ${number3}`});
            }else{
                res.json({error: 'number2 cannot be 0 in this case.'});
            }
        }else{
            res.json({error: 'sign has to be + - * or divide'});
        }
    }else{
        res.status(400).json({error:"check your what you enter for number 1 and number 2."});
        res.status(400).json({msg:`numbers: ${number1} ${number2} ${typeof number1} ${typeof number2}`});
    }

})

module.exports=router; 