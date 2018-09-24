/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
// var host = 'https://frq6kiab.qcloud.la';
var host = 'http://localhost:3000';
const BASE_URL = "https://www.haohome.top/data"
var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,

    // 登录地址，用于建立会话
    loginUrl: `${host}/login`,

    // 测试的请求地址，用于测试会话
    requestUrl: `${host}/user`,

  },
  // 首页aip
  index: BASE_URL + '/api.php',
};

module.exports = config;
