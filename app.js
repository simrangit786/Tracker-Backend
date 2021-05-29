const fs = require('fs');
const express = require('express');


const app = express();

app.use(express.json());



const project = JSON.parse(fs.readFileSync(`data/project.json`))

const getAllProject = (req,res) =>{
    res.status(200).json({
        status:'sucess',
        results:project.length,
        data:{
            project
        },
        
    })
}

const getProject = (req,res) =>{
    
    const id = req.params.id * 1;
    const projects = project.find(el => el.id === id);

    // if(id > project.length)
    if(!projects){
        res.status(404).json({
            status:'fail',
            message:'Invalid Id'
        })
    }
    res.status(200).json({
        status:'sucess',
        data:{
           projects
        },
        
    })
}


const AddProject = (req,res) =>{
    //console.log(req.body);

    const newId = project[project.length -1].id + 1;
    const newproject = Object.assign({id: newId},req.body);

    project.push(newproject);
    fs.writeFile(`data/project.json`,JSON.stringify(project),err =>{
        res.status(201).json({
            status:'sucess',
            data:{
               project: newproject
            }
        })
    })

}


const updateProject = (req,res) => {
    if(req.params.id * 1 > project.length) {
        return res.status(404).json({
            status:'fail',
            message:"Invalid Id"
        })
    }
    res.status(200).json({
        status:"sucess",
        data : {
            project:"<updated Project here.....>"
        }

    })
}



const deleteProject = (req,res) => {
    if(req.params.id * 1 > project.length) {
        return res.status(404).json({
            status:'fail',
            message:"Invalid Id"
        })
    }
    res.status(204).json({
        status:"sucess",
        data: null

    })
}

app.get('/api/v1/project', getAllProject)
app.get('/api/v1/project/:id', getProject)
app.post('/api/v1/project',AddProject)
app.patch('/api/v1/project/:id',updateProject)
app.delete('/api/v1/project/:id',deleteProject)

const port = 3000;
app.listen(port , () =>{
    console.log(`App running on port ${port}....`)
})