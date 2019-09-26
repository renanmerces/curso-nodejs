const express = require('express')
const mongoose = require('mongoose')

//Iniciando o app
const app = express()

//Conexão com o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    {
        useNewUrlParser: true,  
        useUnifiedTopology: true
    }
)

//Criação de rota
app.get("/", (req, res) => {
    res.send('Hello World')
})

app.listen('3000')