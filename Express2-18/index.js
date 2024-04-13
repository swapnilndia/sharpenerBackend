import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import sequelize from './utils/database.js'
import UserRouter from './routes/appointment.route.js'
import Appointment from './models/appointment.model.js'

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/appointment', UserRouter)

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



