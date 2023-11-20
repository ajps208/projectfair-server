const express=require('express')
const router=new express.Router()
const userController=require('../Controller/userController')
const projectController=require('../Controller/projectController')
const jwtMiddileware = require('../Middlewares/jwtMiddileware')
const multerConfig = require('../Middlewares/multerMiddileware')
// register
router.post('/user/register',userController.register)
// login
router.post('/user/login',userController.login)
// addProject
router.post('/project/add',jwtMiddileware,multerConfig.single("projectImage"),projectController.addProjects)

// export router
module.exports=router