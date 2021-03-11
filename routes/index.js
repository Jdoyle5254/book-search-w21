const router = require("express").Router()
const googleroute = require("./google")
const path = require("path")

router.use("/", googleroute)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

  module.exports=router; 