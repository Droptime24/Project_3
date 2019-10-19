const express = require('express');
const router = express.Router();
const Question = require('../models/questions');


// get a list of users from the db
router.get('/questions', function(req, res, next){
    Question.find({}).then(function(questions){
        res.send(questions);
    })
});

// add a user to the db
router.post('/questions', function(req, res, next){
    Question.create(req.body).then(function(question){
        res.send(question);
    }).catch(next);
});

// update a user in the db
router.put('/questions/:id', function(req, res, next){
    Question.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Question.findOne({_id: req.params.id}).then(function(question){
            res.send(question);
        }) 
    })
});

// delete a user from the db
router.delete('/question/:id', function(req, res, next){
    Question.findByIdAndRemove({_id: req.params.id}).then(function(question){
        res.send(question);
    })
});


module.exports = router;