const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyparser.json())
app.use(cors())

// app.get('/', async(req, res) => {
//     res.send('<h1>Hello to node js</h1>')
// })
app.get('/', async(req, res) => {
    res.send({Body: 'hellow'})
})

app.listen(3000, () => {
    console.log('app is running at port 3000')
})