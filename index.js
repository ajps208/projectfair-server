// Loads .env file contents into process .env by default
require('dotenv').config()
const express =require('express')
const cors=require('cors')
const router=require('./Routes/router')
// create an express application
const plServer=express()

plServer.use(cors())
plServer.use(express.json())
plServer.use(router)
const PORT=4000 || process.env.PORT
plServer.listen(PORT,()=>{console.log(`Project fair server started at ${PORT} and  waiting for client request!!!`);})
// http get request 
plServer.get('/',(req,res)=>{
    res.send(`<h1>Project fair server started </h1>`)
})