const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')

const toDoRouter = require('./routes/toDoRoute')
const middleware = require('./middlewares/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')


mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

async function DBconnecton () {
    try{
   await mongoose.connect(config.MONGODB_URI)
   logger.info('connected to MongoDB')
}

catch (error){
    logger.error('Error connecting to MongoDB :', error.message)
}
}

DBconnecton();


app.use(cors())
app.use(express.static('dist'))
app.use(express.json())


app.use('/api/todo', toDoRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
