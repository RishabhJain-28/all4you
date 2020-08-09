const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const session = require("express-session");
const passport = require("passport");

//routes
const homepage = require("./routes/homepage");
const customer = require("./routes/customer");
const merchant = require("./routes/merchant");
const location = require("./routes/location");
const category = require("./routes/category");
const deals = require("./routes/deals");

// * Passport Config
// Customer
require("./config/passportConfigCustomer")(passport);
// Merchant
require("./config/passportConfigMerchant")(passport);
// Admin
require("./config/passportConfigAdmin")(passport);

//Exception handling
//TODO Proper exception handling,resolving and logging
process.on("unhandledRejection", console.log);
process.on("uncaughtException", console.log);

//online DB
mongoose
  .connect(
    "mongodb+srv://aryaman:all4you@all4you.4rsvl.mongodb.net/all4you?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(console.log("Connected to MongoDB online..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(
  session({
    secret: "isse mat dekho please",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/homepage", homepage);
app.use("/api/customer", customer);
app.use("/api/merchant", merchant);
app.use("/api/location", location);
app.use("/api/category", category);
app.use("/api/deals", deals);

const port = process.env.PORT || 3124;
app.listen(port, console.log(`Listening on port ${port}...`));
