const router = require("express").Router()
const googleapi = require("../controllers/googleController")

router.route("/api/google").get(googleapi.findAllBooks)

module.exports=router; 
