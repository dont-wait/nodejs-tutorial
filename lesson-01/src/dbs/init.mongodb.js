'use strict'

const mongoose = require('mongoose')
const connectString = `mongodb://localhost:27017/shopDEV`
const {countConnect} = require('../helpers/check.connect')

class Database {
    constructor() {
        this.connect()
    }

    //connect
    connect(type = "mongodb")  { //in lai hoat dong khi ta query
        if(1===1) {
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }

        mongoose.connect(connectString, 
        {maxPoolSize: 50}
        )
            .then(_ => console.log(`Connected MongoDB PRO Success`, countConnect()))
            .catch(err => console.log(`Error connect!`))
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb