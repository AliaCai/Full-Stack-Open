//Router 
// (.router because it is a router we create)

const router = require('express').Router();
const Exercise = require('../models/exercise.model');

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Err:'+ err));
});

router.route('/add').post((req,res)=>{
    const username= req.body.username;
    const description=req.body.description;
    const duration = Number( req.body.duration);
    const date =  Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,//min
        date
    });

    newExercise.save()
    .then(() => res.json('Exercise added'))
    .catch(err=> res.status(400).json('Error' + err));

});

//res.params is sent through url, id->object id
router.route('/:id').get((req, res)=>{
    Exercise.findById(req.params.id)
    .then(exercise =>res.json(exercise))
    .catch(err => res.status(400).json('Error'+ err));
});

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json(req.params.id + ' is deleted'))
    .catch(err => err.status(400).json('Error'+err));
})

/* my code but wrong lol | issue: will change the id
router.route('/:id').put((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });
    Exercise.findByIdAndUpdate(req.params.id, newExercise)
    .then(()=> res.json(req.params.id + ' is updated'))
    .catch(err => res.status(400).json('Error'+ err));
});
*/

router.route('/update/:id').post((req,res)=>{ // (/updated/:id), post //router.route('/:id').put((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>{
        exercise.username=req.body.username;
        exercise.description=req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date=Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(400).json('Error'+err));
    })
    .catch(err=> res.status(400).json('Error'+err));
});




router.route('/de')

module.exports=router;