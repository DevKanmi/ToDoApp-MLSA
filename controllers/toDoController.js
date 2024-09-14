
//Import Model
const ToDo = require('../models/todoSchema') //Edit ModelName


const createtoDo = async(request, response) =>{
    const {task, details, status} = request.body
    try{
    const todo = new ToDo({
        task,
        details,
        status
    })

    const newToDo = await todo.save()
    response.status(201).json({message:"A task has been created",newToDo})
}   catch(error){
    response.status(500).json({error: "Something went wrong"})
}}

const getAllToDo = async(request, response)=>{
    try{
    const todo = await ToDo.find({})

    response.status(200).json({
        message:'Here are the tasks on your TODO list!!',todo
    })
}
    catch(error){
        response.status(404).json({error: "Something Went wrong", error
        })
    }
}

const updateToDO =async(request, response)=>{
    try{
        const updates = request.body;

    const todo = await ToDo.findOneAndUpdate(
        { _id: request.params.id},
        { $set: updates },
        { new: true } )
        response.status(201).json(todo)
}
    catch(error){
        console.error(error);
        
        response.status(500).json({error:"Something Went Wrong"})
        
    }
}

const deleteTask = async(request, response) =>{
    try{
        const todo = await ToDo.findByIdAndDelete(request.params.id)
        response.status(204).end()
      }
      catch(error){
        response.status(500).json({error: "Something Went Wrong"})
      }
    }
module.exports = {
    createtoDo,
    getAllToDo,
    updateToDO,
    deleteTask

}