const express=require('express')
const router=new express.Router()
const userController=require('../Controller/userController')
// register
router.post('/user/register',userController.register)

// export router
module.exports=router