var express = require('express');
var router = express.Router();
var lunchify = require('../controllers/lunchify');

//Search
router.get('/', function (req,res,next){
  // lunchify.newSearch(req,res);
  res.render('index', {
    title: "Lunchify"
  });
});

router.post('/search', function (req,res,next){
  lunchify.newSearch(req,res);
  // res.json({
  //   data: data
  // });
});


module.exports = router;
