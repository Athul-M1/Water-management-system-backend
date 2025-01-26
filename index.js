require('dotenv').config()

require('./DB/connection')
const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')


const server = express()

server.use(cors()) //to use middlewre 
server.use(express.json()) //convert into json format 
server.use(router)
const port = 3000 || process.env.PORT 

server.listen(port,()=>{
    console.log(`Server is running on the port = ${port}`)
})

server.get('/',(req,res)=>{
    res.send(`<h1>Server is running</h1>`)
}) 


  