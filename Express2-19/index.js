import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import sequelize from './utils/database.js'
import ExpenseRouter from './routes/expense.route.js'
import Appointment from './models/expense.model.js'

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/expense', ExpenseRouter)

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is running at port:${PORT} `)
        })
    })
    .catch((err) => {
        console.log(err);
    });



