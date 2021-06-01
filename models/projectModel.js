const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    name : {
        type: String,
        required:[true,'A project must have a name'],
        unique: true
    }
})

const projects = mongoose.model('projects',projectSchema);

module.exports = projects;

// const testproject = new Project({
//     name:'travel website'
// })
// testproject.save().then(doc =>{
//     console.log(doc);
// }).catch(err =>{
//     console.log('Error:', err);
// })