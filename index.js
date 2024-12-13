const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoutes = require("./routes/product-route")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);
app.get('/', (req, res) => {
    res.send('Hello, world!');
});


mongoose.connect("mongodb+srv://adminUser:passAdminUser@backendb.wkeqz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackenDB")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });
