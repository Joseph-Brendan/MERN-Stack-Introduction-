const mongoose = require('mongoose')

const NigerianSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    nin:{
        type:Number,
        required:true
    },
    bvn:{
        type:Number,
        required:true
    },
    
})

module.exports = mongoose.model('Nigerians', NigerianSchema)