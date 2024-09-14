//Create Configuration files
require('dotenv').config()

MONGODB_URI = process.env.MONGODB_URI

PORT = process.env.PORT 



module.exports  ={
    MONGODB_URI,
    PORT    
}  //Export your Mongodb Uri and Port