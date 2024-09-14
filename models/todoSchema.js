const mongoose = require('mongoose')

const todoSchema= new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    details:{
        type: String
    },
    status:{
        type: String,
        required: true,
    }
})

todoSchema.set('toJSON',{
    transform: (document,requiredObject)=>{
        requiredObject.id = requiredObject._id.toString()
        delete requiredObject._id
        delete requiredObject.__v
    }
})

const ToDo = mongoose.model('ToDo', todoSchema)

module.exports = ToDo