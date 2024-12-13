const express = require('express');
const mongoose = require('mongoose');
console.log('Hello, world!');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello, world!');
});


app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.send('req.body');
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