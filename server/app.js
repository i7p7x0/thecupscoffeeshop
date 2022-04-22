//----------------- packages -----------------//
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
// routes
const contactRoutes = require("./routes/contactRoute");
const menuRoutes = require("./routes/menuRoute");
// const adminRoutes = require("./routes/adminRoute");

//----------------- app declaration -----------------//
const app = express();

//----------------- bodyparser useage -----------------//
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//----------------- disable CORS policy -----------------//
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

//----------------- routes useage -----------------//
app.use("/contact", contactRoutes);
app.use("/menu", menuRoutes);
// app.use("/admin", adminRoutes);

//----------------- connection string for mongodb database connection -----------------//
const connectionString =
  "mongodb+srv://" +
  process.env.ADMIN_USER +
  ":" +
  process.env.ADMIN_PASSWORD +
  "@cupscoffeeshopnpcluster.bj70t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

///----------------- connect to database and start server -----------------//
mongoose
  .connect(connectionString)
  .then((result) =>
    app.listen(5000, () => {
      console.log("server started on port 5000");
    })
  )
  .catch((err) => console.log(err));
