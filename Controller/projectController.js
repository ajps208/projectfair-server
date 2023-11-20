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