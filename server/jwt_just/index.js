const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const PORT = 9000;
const DB_URL = `mongodb://localhost:27017/auth`

const app = express()

app.use(express.json())
app.use(cors());
app.use("/api", authRouter)


const dbConnect = async () =>{
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    } catch (e) {
        console.log('error  catch')
    }
}

async function startApp() {
    try {
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}
dbConnect()
startApp()

// const cors = require('cors');
// const express = require('express')
// const mongoose = require('mongoose')
// const authRouter = require('./authRouter')
// const port = process.env.PORT || 5555
// const MongoClient = require("mongodb").MongoClient;
//
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
//
// // Подключаемся к серверу
// mongoClient.connect(function(err, client){
//
//     // обращаемся к базе данных admin
//     const db = client.db("auth_rolse");
//     const collection = db.collection("auth_rolse");
//     collection.countDocuments(function(err, result){
//
//         if(err){
//             return console.log(err);
//         }
//         console.log(`В коллекции auth_rolse ${result} документов`);
//     });
//
//     db.command({ping: 1}, function(err, result){
//         if(!err){
//             console.log("Подключение с сервером успешно установлено");
//             console.log(result);
//         }
//         console.log('err', err)
//         // Закрываем подключение
//         // client.close();
//         // console.log("Подключение закрыто");
//     });
// });
//
// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use("/auth", authRouter)
//
// async function startApp() {
//     try {
//         app.listen(port, () => console.log('SERVER STARTED ON PORT ' + port))
//     } catch (e) {
//         console.log(e)
//     }
// }
// startApp()
