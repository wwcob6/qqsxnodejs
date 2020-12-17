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
    var id = req.query.id;
    console.log(id);
    /*db.query(`delete from invitations where id='${id}'`,(err, res) => {
        if (err) {
            res.json(err)
        } else {
            let dataAfter = {
                "result": "success"
            }
            res.json(dataAfter)
        }
    })*/

});
// db.query("delete from invitations where id=")
module.exports = router;
