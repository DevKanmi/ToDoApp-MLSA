const apiError = require('./api-error')
const {errorResponse} = require('../utils/responses')

const errorHandler = (error, req, res, next) =>{
    if(error instanceof apiError){
        message = error.message
        code = error.code
    }

    errorResponse(res,code,message)
}