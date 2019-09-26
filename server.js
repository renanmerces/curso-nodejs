const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o app
const app = express()

//Conexão com o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    {
        useNewUrlParser: true,  
        useUnifiedTopology: true
    }
)

requireDir("./src/models")

const Product = mongoose.model('Product')

//Criação de rota
app.get("/", (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Learn build native apps with React',
        url: 'https://github.com/facebook/react-native'
    })
    
    return res.send('Hello World')
})

app.listen('3000')