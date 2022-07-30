const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

const AuthRoute = require("./src/routes/AuthRoute")
const UserRoute = require("./src/routes/UserRoute")
const PostRoute = require("./src/routes/PostRoute")
const PageRoute = require("./src/routes/PageRoute")
const UploadRoute = require("./src/routes/UploadRoute")
const ChatRoute = require ('./src/routes/ChatRoute')
const MessageRoute = require("./src/routes/MessageRoute")
const ContactRoute = require("./src/routes/ContactRoute")

const app = express()

dotenv.config()
app.use(express.json())

app.use(bodyParser.json({ 
    limit: "50mb", 
    extended: true 
}))
app.use(bodyParser.urlencoded({ 
    limit: "50mb", 
    extended: true 
}))
app.use(cors())

app.use(express.static('public'))
app.use('/images', express.static('images'))

mongoose.connect(process.env.DATABASE, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(console.log("Conectado ao banco de dados"))
.catch((err) => console.log(err))

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/page', PageRoute)
app.use('/chat', ChatRoute)
app.use('/upload', UploadRoute)
app.use('/message', MessageRoute)
app.use('/contact', ContactRoute)

app.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})