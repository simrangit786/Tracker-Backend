const fs = require('fs');
const express = require('express');
const projectRouter = require('./routes/projectRoute')
const morgan = require('morgan');



const app = express();

if(process.env.NODE_ENV ==="development")
{
    app.use(morgan('dev'));
}

app.use(express.json());


app.use((req,res,next) =>{
    console.log("hello from the middleware");
    next();
})



// app.get('/api/v1/project', getAllProject)
// app.get('/api/v1/project/:id', getProject)
// app.post('/api/v1/project',AddProject)
// app.patch('/api/v1/project/:id',updateProject)
// app.delete('/api/v1/project/:id',deleteProject)

 

 

 
 app.use('/api/v1/project',projectRouter)

module.exports=app;