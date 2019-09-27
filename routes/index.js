var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function (req, res, next) {
  console.log("LOGGING BODY FROM DOWNSTREAM");
  console.log(req.body);
  res.send(req.body);
});

router.get('/get', function (req, res, next) {
  console.log("LOGGING BODY FROM DOWNSTREAM");
  console.log(req.body);
  res.send("<h1>Hello</h1>");
});

router.get('/empty', function (req, res, next) {
  console.log("LOGGING BODY FROM DOWNSTREAM");
  console.log(req.body);
  res.send("");
});

module.exports = router;
