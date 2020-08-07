const express = require("express");
const app = express();
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");
// const homepage = require("./routes/homepage");
const customer = require("./routes/customer");

// * Passport Config
// Customer
require("./config/passportConfigCustomer")(passport);
// Merchant
require("./config/passportConfigMerchant")(passport);
// Admin
require("./config/passportConfigAdmin")(passport);

mongoose
  .connect("mongodb://localhost/vidly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB locally..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(
  session({
    secret: "isse mat dekho please",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use("/api/homepage", homepage);
app.use("/api/customer", customer);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));
