const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o app
const app = express()
app.use(express.json())

//Conexão com o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    {
        useNewUrlParser: true,  
        useUnifiedTopology: true
    }
)

requireDir("./src/models")

const Product = mongoose.model('Product')

//Rotas
app.use('/api', require('./src/routes'))

app.listen('3000')