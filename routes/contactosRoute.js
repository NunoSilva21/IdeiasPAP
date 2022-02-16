const express = require('express')
const enviarContactosRoute = express.Router()
const connection = require('../dbconnection')

enviarContactosRoute.post('/', (req,res) => {
    console.log(req.body)
    connection.query(
        'INSERT INTO contactos (PrimNome,UltNome,Email,Telem,Mensagem) VALUES (?,?,?,?,?)',
        [req.body.PrimNome,req.body.UltNome,req.body.Email,req.body.Telem,req.body.Mensagem],
        (err,result) => {
            if(err){
                console.log(err)
            }
            else {
                console.log(result)
                res.json({text : 'Utilizador adicionado com sucesso!'})
            }
        })


})

module.exports = enviarContactosRoute

