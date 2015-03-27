var express = require('express');
var mysql = require('mysql');

var conn = mysql.createConnection("mysql://b7690ba2018fb0:cda860b4@us-cdbr-iron-east-02.cleardb.net/heroku_cfbea60d043e4c1?reconnect=true");

var router = express.Router();


/* POST create a new user */
router.post('/new', function (req, res) {
    console.log("processing");

    //accept form data
    console.log(req.body);

    var post = req.body;
    var query = conn.query('INSERT INTO registration SET ?', post, function (err, result) {
        if(!err) {
            console.log("database is connecting.... \n ");
        } else {
            console.log("Error connecting database ... \n");
        }
        console.log(result);
        res.send(result);//return json response of result object
    });
    console.log(query.sql);
});

module.exports = router;
