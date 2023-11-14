// register
const users=require('../Models/userSchema')
exports.register=async(req,res)=>{
    console.log("inside register controller function");
    const {username,email,password}=req.body
    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(406).json("account already exists !!!! please login...")
        }else{
            const newUser=new users({
                username,email,password,github:"",linkedin:"",profile:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(200).json(`Register Api failed, Error:${err}`)

    }
}