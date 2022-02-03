const express = require('express')
const path = require('path');
const app = express()
const connection = require('./dbconnection')
 
//definir pasta public
app.use(express.static('./public'))


//definir as routas
/*app.use('/componentes',require('./routes/componentesRoute'))*/

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})

const port = 3000

app.listen(port, () => {
    console.log('Listenning...')
})
