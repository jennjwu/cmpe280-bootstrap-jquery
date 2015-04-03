var express = require('express');
var router = express.Router();

/* GET code of conduct page. */
router.get('/', function(req, res, next) {
    res.render('code');
});

module.exports = router;
