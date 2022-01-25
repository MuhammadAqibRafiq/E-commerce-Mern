const mongoose = require("mongoose")


const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
    console.log("Database connection succesfull")
}).catch((err)=>{
    console.log("Database connection failed")
})