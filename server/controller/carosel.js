const pool = require('./pool');
const express = require('express');
let router = express.Router();

router.get('/',function(req,res){
  res.json('成功')
})
router.get('/product',function(req,res){
  pool.query("SELECT * FROM mf_product WHERE pid<=4 ",function(err,result){
    res.json(result)
  })
})

module.exports = router;