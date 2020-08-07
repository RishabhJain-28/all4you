const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// *  Customer Model
const { Customer } = require("../models/customer");

module.exports = function (passport) {
  passport.use(
    "customer",
    new LocalStrategy(async (loginDetails, password, done) => {
      console.log(loginDetails);

      // Find a Customer
      let foundCustomer;
      // Check if loginDetails include "@"
      if (loginDetails.includes("@")) {
        // True -> Find by email
        foundCustomer = await Customer.findOne({ email: loginDetails }).exec();
      } else {
        // False -> Find by phoneNo
        foundCustomer = await Customer.findOne({
          phoneNo: parseInt(loginDetails),
        }).exec();
      }
      if (!foundCustomer) {
        console.log("No customer found");
        return done(null, false, { message: "Invalid Credentials" });
      }

      if (foundCustomer.status.toLowerCase() === "inactive")
        return done(null, false, {
          message: "Your access has been restricted. Contact Admin.",
        });

      // Match Password
      bcrypt.compare(password, foundCustomer.password, (err, isMatch) => {
        if (isMatch) {
          return done(null, foundCustomer);
        } else {
          return done(null, false, { message: "Incorrect Credentials" });
        }
      });
    })
  );

  passport.serializeUser(function (foundCustomer, done) {
    done(null, foundCustomer.id);
  });

  passport.deserializeUser(function (id, done) {
    Customer.findById(id, function (err, foundCustomer) {
      done(err, foundCustomer);
    });
  });
};
