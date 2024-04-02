const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', async(req, res) => {
    res.send('<h1>Hellow world</h1>')
})

app.listen(3001, () => {
console.log('app is runnig at Port : 3000')
})