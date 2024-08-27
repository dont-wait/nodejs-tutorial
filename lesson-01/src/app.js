const express = require('express');
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');
const app = express();

//init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

//init db

//init routers
app.get("/", (req, res, next) => {
    const strcompression = 'Hello World'
    return res.status(200).json({
        message: "Hello from the API!",
        metadata: strcompression.repeat(1000)
    })
})
//handling errors

module.exports = app