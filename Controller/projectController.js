const projects=require('../Models/projectSchema')

// add projects
exports.addProjects=async (req,res)=>{
    console.log("inside add project");
    const userId=req.payload
    const projectImage=req.file.filename
    const{title,languages,overview,github,website}=req.body
    // console.log(`${userId},${title},${languages},${overview},${github},${website},${projectImage}`);
    try {
        const existingUser=await projects.findOne({github})
        if(existingUser){
            res.status(406).json("project alredy exit!!!!upload another")

        }else{
            const newProject=new projects({
                title,languages,overview,github,website,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)

        }
        
    } catch (error) {
        res.status(401).json(`Request failed: ${err}`)

    }
   
}

// getuserprojects
exports.allUserProjects= async (req,res)=>{
    const userId=req.payload
    try {
        const userProjects=await projects.find({userId})
        res.status(200).json(userProjects)
        
    } catch (error) {
        res.status(401).json(err)
    }
}
// getallprojects
exports.allProjects= async (req,res)=>{
    const searchKey=req.query.search
    const query={
        languages:{$regex:searchKey, $options:"i"}
    }
    try {
        const projectDetails=await projects.find(query)
        res.status(200).json(projectDetails)
        
    } catch (error) {
        res.status(401).json(err)
    }
}

// gethomeprojects
exports.gethomeProjects= async (req,res)=>{
    try {
        const homeProjects=await projects.find().limit(3)
        res.status(200).json(homeProjects)
        
    } catch (error) {
        res.status(401).json(err)
    }
}

// editprojects
exports.editProjects= async (req,res)=>{
    // get project id
   const {id}=req.params
   const userId=req.payload
   const{title,languages,overview,github,website,projectImage}=req.body
   const uploadProjectImage=req.file?req.file.filename:projectImage

   try {
     const updateProject = await projects.findByIdAndUpdate({_id:id},
     {title,languages,overview,github,website,projectImage:uploadProjectImage,userId},{new:true})
     await updateProject.save()
     res.status(200).json(updateProject)
   } catch (error) {
    res.status(401).json(err)
   }

}

// delete project
exports.deleteProjects= async (req,res)=>{
    // get project details
   const {id}=req.params
   try {
       const removeProject=await projects.findByIdAndDelete({_id:id})
       res.status(200).json(removeProject)
   } catch (error) {
    res.status(401).json(err)
   }  
}