const toDoRoute = require('express').Router()   //Tweak to taste.

//Import Controllers
const {createtoDo, getAllToDo,updateToDO, deleteTask} = require('../controllers/toDoController')




//Routes
toDoRoute.get('/tasks',getAllToDo)
toDoRoute.post('/create',createtoDo)
toDoRoute.patch('/update/:id', updateToDO)
toDoRoute.delete('/delete/:id',deleteTask)



module.exports = toDoRoute
