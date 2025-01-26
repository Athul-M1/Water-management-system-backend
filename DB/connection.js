const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString,).then(()=>{
    console.log("Mongodb connection sucessul")
}).catch((err)=>{
    console.log("connection failed",err)
})