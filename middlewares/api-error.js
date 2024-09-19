const { StatusCodes} = require('http-status-codes')

class apiError {
    
    constructor(code, message){
        this.code = code,
        this.message = message
    }

    //Methods
    static notFound(){
        return new apiError(StatusCodes.NOT_FOUND, 'Requested resource not found')
    }

    static badRequest(message){
        return new apiError(StatusCodes.BAD_REQUEST, message)
    }

    static internalError(){
        return new apiError(StatusCodes.INTERNAL_SERVER_ERROR,'internal server error')
    }
}
 

module.exports = apiError