var express = require('express')
, bodyParser = require('body-parser')
, users = require('../models/user')
, router = express.Router()
, parseUrlencoded = bodyParser.urlencoded({ extended: false })

router.route('/')
.get(function(req, res){
  res.json(req.headers);
})
.post(parseUrlencoded, function(req, res) {
  res.json(req.headers);
});
router.route('/:username')
.all(function(req, res) {
  res.json(req.headers);
})
.get(function(req, res) {
  res.json(req.headers);
})
.put(function(req, res) {
  res.json(req.headers);
})
.patch(function(req, res) {
  res.json(req.headers);
})
.delete(function(req, res) {
  res.json(req.headers);
});

module.exports = router;
