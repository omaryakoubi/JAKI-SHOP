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


if(process.env.NODE_ENV === 'production'){

app.use('/' , express.static("/client/build"))

app.get("*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "/client/build/index.html"));
});
}

const port = process.env.PORT || 5000;
const uri = process.env.DBURL || "mongodb+srv://hamzatoukabi:02091994@shopdb.td4n9.mongodb.net/shopdb?retryWrites=true&w=majority"

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



   
