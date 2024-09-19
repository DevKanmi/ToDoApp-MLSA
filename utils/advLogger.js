const winston = require('winston')
const{createLogger,format, transports} = winston

const {combine, timestamp, colorize, printf} = format
const logFormat = printf(({timestamp,level,message})=> `${timestamp} ${level} ${message}`)

const logger = createLogger({
    transports:[
        new transports.File({filename: 'log/combined.log'}),
        new transports.File({filename:'log/error.log',level: 'error'}), //Level signifies only error to be stored here.
        new transports.Console({format: combine(logFormat, colorize({all:true}))})
    ],
    format: combine(
        timestamp({
            format: `YYYY-MM-DD HH:mm:ss`
        }),
        logFormat,
        colorize({all:true})
    )
})

module.exports = {
    logger
}