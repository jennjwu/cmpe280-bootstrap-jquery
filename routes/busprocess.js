var express = require('express');
var router = express.Router();

/* GET business process page. */
router.get('/', function(req, res, next) {
    res.render('busprocess');
});

module.exports = router;
