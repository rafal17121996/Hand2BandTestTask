var express = require("express");
var router = express.Router();
const axios = require("axios").default;
//res.data.autocomplete

router.get("/", function (req, res, next) {
    let param = req.query.key
  axios(`https://unsplash.com/nautocomplete/${param}`).then(response => res.send((response.data))) 
  
});

module.exports = router;
