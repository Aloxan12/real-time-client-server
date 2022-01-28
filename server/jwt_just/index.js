const express = require('express')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')

const app = express()

app.use(express.json)

const start = async ()=>{
    try{
        await mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`)
        app.listen(PORT, ()=>console.log('connect 5000 port'))
    }catch (e) {
        
    }
}

start()