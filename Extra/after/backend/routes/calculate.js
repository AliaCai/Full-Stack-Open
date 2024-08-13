const router=require('express').Router();
const math = require('mathjs');


router.route('/add').post((req,res)=>{
    const number1= Number(req.body.number1);
    const number2=Number(req.body.number2);

    const sign ='+';
    if (typeof number1 === 'number' && typeof number2 === 'number'){
        const number3= math.evaluate(`${number1}+${number2}`);
        res.json({meg:  `result is ${number3}`});
    }else{
        res.status(400).json({meg:'error'});
    }

})

module.exports=router; 