
//Import Model
const ToDo = require('../models/todoSchema') //Edit ModelName
const {StatusCodes} = require('http-status-codes')
const{successResponse, errorResponse} = require('../utils/responses')
const {logger}= require('../utils/advLogger')
const { error } = require('winston')

const createtoDo = async(request, response) =>{
    const {task, details, status} = request.body
    try{
    logger.info(`Start: Creation of task`)
    const todo = new ToDo({
        task,
        details,
        status
    })

    const newToDo = await todo.save()
    logger.info('End: Task Successfully Created')
    successResponse(response,StatusCodes.CREATED,'Task Created',newToDo)

}  
catch(error){
    response.status(500).json({error: "Something went wrong"})
}}

const getAllToDo = async(request, response)=>{
    try{
    const todo = await ToDo.find({})
    logger.info('Start : Show all Tasks Commenced:')
    

    successResponse(response,StatusCodes.OK,'All Taska returned',todo)
    logger.info('End: All tasks Successully shown.')
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