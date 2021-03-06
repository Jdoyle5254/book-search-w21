const express = require("express");

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res) => {
    res.json("hello are you working?")
   
})

app.get("/api", (req, res) => {
    res.json("hello world from your server")
})

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`); 

})