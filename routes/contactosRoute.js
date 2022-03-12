const express = require('express')
const enviarContactosRoute = express.Router()
const connection = require('../dbconnection')

let { sendMail } = require ('../controllers/email.controller')


enviarContactosRoute.post('/', (req,res) => {
    /*
    connection.query(
        'INSERT INTO contactos (PrimNome,UltNome,Email,Telem,Mensagem) VALUES (?,?,?,?,?)',
        [req.body.PrimNome,req.body.UltNome,req.body.Email,req.body.Telem,req.body.Mensagem],
        (err,result) => {
            if(err){
                console.log(err)
                res.json({
                    type: 'error',
                    msg: 'Ocorreu um erro. Tente mais tarde...'
                })
            }
            else {
                console.log(result)
                let emailData = {
                    name: req.body.PrimNome,
                    email: req.body.Email,
                    subject: 'Obrigado pelo seu contacto.'
                }
                
                sendMail(emailData, (error) => {
                    if (error) return res.json ({ msg: 'Ocorreu um erro' })
                    res.json({text : 'Sua mensagem foi enviada com sucesso!'})
                  })
               
            }
        })
        */
        let emailData = {
            name: req.body.PrimNome,
            email: req.body.Email,
            subject: 'Obrigado pelo seu contacto.'
        }
        
        sendMail(emailData, (error) => {
            if (error) 
                return res.json ({ msg: error })
            res.json({text : 'Sua mensagem foi enviada com sucesso!'})
          })

})

module.exports = enviarContactosRoute

