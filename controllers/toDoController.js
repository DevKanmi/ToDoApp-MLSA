
//Import Model
const ToDo = require('../models/todoSchema') //Edit ModelName


const createtoDo = async(request, response) =>{
    const {task, details, completion} = request.body
    try{
    const todo = new ToDo({
        task,
        details,
        completion
    })

    const newToDo = await todo.save()
    response.status(200).json(newToDo)
}   catch(error){
    response.status(500).json({error: "Something went wrong"})
}

}

module.exports = {
    createtoDo

}