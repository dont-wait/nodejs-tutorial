const express = require('express');
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');
const app = express();

//init middleware
app.use(morgan("dev")) //thư viện in ra các log khi người dùng chạy 1 request
//thằng này có 5 chế độ để hiển thị request 
app.use(helmet()) //nguy cơ rò rỉ thông tin công nghệ của web mình dùng là gì
//che thông tin header(công nghệ mình dùng) khỏi các hackers đọc cookies
app.use(compression()) // khi gửi dữ liệu quá nhiều thì tốn nhiều băng thông(đường chỉ chứa dc một lượng xe nhất định)
                        //giảm dung lượng 
//init db
require("./dbs/init.mongodb")
const {checkOverload} = require("./helpers/check.connect")
checkOverload()
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