var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
    data:{name:'aaa',pwd:'123'},
    ret:true,
    msg:"请求成功"
  }
  res.json(data)
});

module.exports = router;
