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
    var deleteId = `delete from invitations where id='${id}'`
    db.query(deleteId,(err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log('success')
        }
    })

});
// db.query("delete from invitations where id=")
module.exports = router;
