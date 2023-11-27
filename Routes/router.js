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
// getuserprojects
router.get('/user/allprojects',jwtMiddileware,projectController.allUserProjects)
// getallrprojects
router.get('/user/all',jwtMiddileware,projectController.allProjects)
// gethomerprojects
router.get('/user/homeprojects',projectController.gethomeProjects)
// editproject
router.put('/project/edit/:id',jwtMiddileware,multerConfig.single("projectImage"),projectController.editProjects)
// delteproject
router.delete('/project/remove/:id',jwtMiddileware,projectController.deleteProjects)

// export router
module.exports=router