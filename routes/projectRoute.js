const fs = require('fs');
const express = require('express');
const projectController = require('./Controllers/projectController');
const router = express.Router();

router.param('id',(req,res,next,val) =>{
    console.log(`Tour id is ${val}`);
    next();
})

 

router.route('/').get(projectController.getAllProject).post(projectController.AddProject);

 router.route('/:id').get(projectController.getProject).patch(projectController.updateProject).delete(projectController.deleteProject);

 module.exports = router;