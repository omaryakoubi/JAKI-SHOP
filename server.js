const express = require('express');
const app = express()
const mongoose = require('mongoose')
const path = require("path");

require('dotenv').config({path:"./config/.env"});

var productsRoute = require('./routes/productRoute')
var userRoute = require('./routes/userRoute')
var orderRoute= require('./routes/orderRoute')

app.use(express.json());

app.use('/api/products/' , productsRoute)
app.use('/api/users/' , userRoute) 
app.use('/api/orders/', orderRoute)


app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


const port = process.env.PORT || 5000;
const uri = process.env.DBURL

app.get('/', function (req, res) {
    res.send('This is from Back-end')
  })
    
  app.listen(port, () => {
    console.log(`APP listening at ${port}`)});

    // Connecting to DB

  mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) throw err;
        console.log("Successfully connected to Database");
    });



   