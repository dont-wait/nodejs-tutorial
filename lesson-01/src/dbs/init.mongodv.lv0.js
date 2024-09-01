'use strict';
const mongoose = require('mongoose');
const connectString = `mongodb://127.0.0.1:27017/shopDEV` //nên chuyển thành file env

mongoose.connect(connectString).then( _ => {
    console.log('Connected to MongoDB successfully')
}) .catch(err => console.log('Error connect!'))


//dev
if(1===0) {
    mongoose.set('debug', true)
    mongoose.set('debug', {color: true})
}

module.exports = mongoose //thiết lập một kết nối cho các nơi khác kết nối vào
//hạn chế của cách khai báo như file này là bị gọi nhiều lần 

//-> Chỉ cần gọi 1 lần hoi-> SINGLETON
