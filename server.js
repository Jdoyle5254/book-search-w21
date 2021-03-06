const express = require("express");

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res) => {
    return ("hello are you working?")
    console.log("you are here working now")
})

app.get("/api", (req, res) => {
    return ("hello world from your server")
})

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`); 

})