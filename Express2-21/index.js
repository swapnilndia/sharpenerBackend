import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import sequelize from './utils/database.js'
import ProductRouter from './routes/product.route.js'
import CartRouter from './routes/shop.route.js'
import Product from './models/product.model.js'
import User from './models/user.model.js'
import Cart from './models/cart.model.js'
import CartItem from './models/cart-item.model.js'

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.use((req, res, next) => {
    User.findByPk(2).then(user => {
        req.user = user;
        next()
    }).catch(err => console.log(err))
})
app.use('/product', ProductRouter)
app.use('/cart', CartRouter)

Product.belongsTo(User, {
    constraints: true, onDelete: 'CASCADE'
})
User.hasMany(Product)
User.hasOne(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })

sequelize
    // .sync({force: true})
    .sync()
    .then(result => {
        return User.findByPk(2)
    })
    .then(user => {
        if (!user) {
            User.create({ name: 'swapnil', email: 'swapnil@test.com' })
        }
        return user;
    })
    .then(user => {
        return user.createCart();

    })
    .then(cart => {
        app.listen(PORT, () => {
            console.log(`App is running at port:${PORT} `)
        })
    })
    .catch((err) => {
        console.log(err);
    });



