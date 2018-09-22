// const pool = require('./pool');
const express = require('express');
let router = express.Router();
const controllers = require('../controller/controller')

router.get('/',function(req,res){
  var home = "首页";
  res.json(`${home}`)
})
router.get('/login', controllers.login)
router.get('/news', controllers.news)
module.exports = router;

