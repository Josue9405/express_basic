//Usando objeto express
const express = require('express')
// App de Express
const app = express()
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Path inicial, responderá a la url
app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.get('/launchx',(req,res) => {
    res.send('Bienvenidos a Launch X')
})

app.get('/explorers/object',(req,res) =>{
    const explorer = {name: "Josue", msg: "Hello"}
    res.send(explorer)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})