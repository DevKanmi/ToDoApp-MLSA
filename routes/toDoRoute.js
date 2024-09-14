const toDoRoute = require('express').Router()   //Tweak to taste.

//Import Controllers
const {getData} = require('../controllers/toDoController')




//Routes
toDoRoute.get('/',getData)



module.exports = toDoRoute
