
const Project = require('./../../models/projectModel');



// const project = JSON.parse(fs.readFileSync(`data/project.json`));
exports.getAllProject = async(req,res) =>{
    try{
        const project = await Project.find();

    
    res.status(200).json({
        status:'sucess',
         results:project.length,
         data:{
            project
        },
        
    })
}catch(err) {
    res.status(404).json({
        status:'fail',
        message:err
    })
}
}

exports.getProject = async(req,res) =>{
    try{
       const project =  await Project.findById(req.params.id);

       res.status(200).json({
             status:'sucess',
             data:{
                project
           }
        })
            
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
    
        })

    }
    

    // const projects = project.find(el => el.id === id);

    // // if(id > project.length)
    // if(!projects){
    //     res.status(404).json({
    //         status:'fail',
    //         message:'Invalid Id'
    //     })
    // }
    // res.status(200).json({
    //     status:'sucess',
    //     data:{
    //        projects
    //     },
        
    // })
}


exports.AddProject = async(req,res) =>{
    try{

    const newProject = await Project.create(req.body);
    //console.log(req.body);

    // const newId = project[project.length -1].id + 1;
    // const newproject = Object.assign({id: newId},req.body);

    // project.push(newproject);
    // fs.writeFile(`data/project.json`,JSON.stringify(project),err =>{
        res.status(201).json({
            status:'sucess',
              data:{
                 project: newProject
             }
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:"Invalid data sent"
        })
    }

}


exports.updateProject = async(req,res) => {
   try{
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    
    res.status(200).json({
        status:"sucess",
        data : {
            project
        }
    })

}catch(err){
    res.status(404).json({
    status:"fail",
    message:err 
})
}
}



exports.deleteProject = async(req,res) => {
    try{

     await Project.findByIdAndDelete(req.params.id )
    
    res.status(204).json({
        status:"sucess",
        data: null

    })
}catch(err){
    res.status(404).json({
    status:"fail",
    message:err 
})
}
}

