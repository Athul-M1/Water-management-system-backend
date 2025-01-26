const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    date:{
        type:Date,
        default:Date.now()
    },
    pH:{
        required:true,
        type:Number //or string
    },
    turbidity:{
        required:true,
        type:Number 
    },
    temperature:{
        required:true,
        type:Number 
    }
})
const dataModel = mongoose.model('dataModel',dataSchema)
module.exports = dataModel