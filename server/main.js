const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();

// 创建http服务器
let server = http.createServer(app);
server.listen(3000);
app.use( bodyParser.urlencoded({extended:false}) );

// 设置跨域
app.use( cors({
  origin: ["http://127.0.0.1:8080","http://127.0.0.1:5500","http://localhost:8080"],
  credentials: true
}) );

// 引入路由分发
const router = require('./router/router')
app.use(router)