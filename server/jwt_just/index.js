const express = require('express')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 6000

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auth_rolse', {useNewUrlParser: true, useUnifiedTopology: true});


const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/auth_rolse', {useNewUrlParser: true, useUnifiedTopology: true});
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
        console.log('uuuu')
    }
}

start()