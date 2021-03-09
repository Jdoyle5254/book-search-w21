const express = require("express");

const PORT = process.env.PORT || 3001

//TODO need to create route to local DB   need to create flow chart for api calls and server to db calls

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res) => {
    res.json("hello are you working?")
   
})

app.get("/api", (req, res) => {
    res.json("hello world from your server")
})

// Connect to the Mongo DB
if (process.env.NODE_ENV === "production") {
    mongoose.connect(process.env.MONGODB_URI,  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  } else {
    mongoose.connect("mongodb://localhost/booksearchdb",
    {
      //useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }) .then(()=>{
      console.log("DB Connected Successfully");
  });
  }

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`); 

})