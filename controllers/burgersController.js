var express = require("express");

var router = express.Router();
var db = require("../models/");

//get route
router.get("/api/burgers", function(req, res) {
  db.Burger.findAll()
   .then(function(result) {
    res.json(result);
  });
});

// post route
router.post("/api/burgers", function(req, res) {
 db.Burger.create({
   burger_name:req.body.burger_name
 })
  .then(function(results) {
    res.json(results);
  });
});

// put route
router.put("/api/burgers/:id", function(req, res) {
 db.Burger.update({
   devoured:true
 },
 {
   where: {
   id:req.params.id
    }
  })
  .then(function(result) {
    res.json(result)
  });
});

module.exports = router;
