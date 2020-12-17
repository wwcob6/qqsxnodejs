var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../database/DBConfig')
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'test1',
    post:3306
})
/* GET users listing. */
router.get('/', function(req, res, next) {
    db.query("SELECT id, author_id, created_at, content FROM invitations", (err, data) => {
        if (err) {
            res.json(err)
        }
        else {
            let dataAfter = {
                "ret": true,
                "data": {
                    data
                }
            }
            res.json(dataAfter)
            console.log(dataAfter);
            console.log(`获取成功`)
        }
    })

});

module.exports = router;
