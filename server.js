const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
// Connect to the Mongo DB
if (process.env.NODE_ENV === "production") {
    mongoose.connect(process.env.MONGODB_URI,  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  } else {
    mongoose.connect("mongodb://localhost/reactreadinglist",
    {
      //useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }) .then(()=>{
      console.log("DB Connected Successfully");
  });
  }// Start the API server
app.listen(PORT, () =>
  console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`)
);