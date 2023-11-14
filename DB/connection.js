const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("monogodb atlas sucessfully connected with plserver");
}).catch((err)=>{
    console.log(`mongodb connection failed!!! Error:${err}`);
})