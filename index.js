const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')

console.log('Hello, world!');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});


app.post('/api/products', async (req, res) => {
    try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



mongoose.connect("mongodb+srv://adminUser:passAdminUser@backendb.wkeqz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackenDB")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB')
    });