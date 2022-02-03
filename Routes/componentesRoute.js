/*const express = require('express')
const formdataRoute = express.Router()
const connection = require('../dbconnection')


//pedido em http://localhost:3000/produtos
formdataRoute.get('/', (req,res) => {
    connection.query('SELECT * FROM produtos WHERE idProdutos = 1', (err,result) => {
        if(err){
            console.log('Erro na base de dados...')
        }
        else {
            res.json(result)
        }
    }) 
})

module.exports = componentesRoute*/