const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

var productsRoute = require("./routes/productRoute");
var userRoute = require("./routes/userRoute");
var orderRoute = require("./routes/orderRoute");

app.use(express.json());

app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);



const port = 5000;
const uri =
  "mongodb+srv://chayma:chayma@cluster0.7gwdc.mongodb.net/?retryWrites=true&w=majority";

app.get("/", function (req, res) {
  res.send("This is from Back-end");
});
//init server
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});

// Connecting to DB
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("Successfully connected to Database");
  }
);
