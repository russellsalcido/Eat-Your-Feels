var express = require("express");
var router = express.Router();
// Import the model (feel.js) to use its database functions.
var feel = require("../models/feel.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  feel.all(function(data) {
    var hbsObject = {
      feels: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/feels", function(req, res) {
  feel.create([
    "name", "downs"
  ], [
    req.body.name, req.body.downs
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/feels/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  feel.update({
    downs: req.body.downs
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
