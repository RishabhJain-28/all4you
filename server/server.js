const express = require("express");
const app = express();
const mongoose = require("mongoose");

// const homepage = require("./routes/homepage");

mongoose
  .connect("mongodb://localhost/vidly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB locally..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());

// app.use("/api/homepage", homepage);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));
