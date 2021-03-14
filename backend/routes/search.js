var express = require("express");
var router = express.Router();
const axios = require("axios").default;


router.get("/", function (req, res, next) {
   let param = req.query.key
  axios(
    `https://unsplash.com/napi/search?query=${param}&per_page=20&xp=`
  ).then((response) => res.send(response.data));
});

module.exports = router;
