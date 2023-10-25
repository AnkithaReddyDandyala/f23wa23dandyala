var express = require('express');
var router = express.Router();

/* Math.cbrt function */
router.get('/', function(req, res, next) {
  var randomNo = Math.random()* 100;
  var x = randomNo;

  if (req.query.x !== undefined) {
    x = parseFloat(req.query.x);
  }

  var result = Math.cbrt(x);
  
  var responseText = `Math.cbrt(${x}) is ${result}`;
  
  res.render('computation', { title: responseText });
});

module.exports=router;