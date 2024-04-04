const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/add-product', async (req, res) => {
    res.send('<form action="/product" method="POST" ><input type="text" name="title" placeholder="add name of product"><input type="number" name="age" placeholder="add age of product"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res) => {
    res.send('<h1>Hello to node js</h1>');
});

app.listen(3000, () => {
    console.log('app is running at port 3000');
});
