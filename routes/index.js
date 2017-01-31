var express = require('express');
var router = express.Router();
const mysql = require('mysql');

mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
});

/* GET home page. */
router.get('/', function(req, res, next) {



    res.render('index', {
        title: 'Node.js + MySQL Board'
    });
});

router.post('/', (_req, _res, _next) => {
    console.log(_req.body);

    _res.status(200).json();
});

module.exports = router;
