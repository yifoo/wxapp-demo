var request = require('request');
module.exports = (req, res) => {
  var code = req.query.code
  var option = {
    url: "https://api.weixin.qq.com/sns/jscode2session?appid=<appid>&secret=<secret>&js_code="+code+"&grant_type=authorization_code",
    method: "GET",
    json: true,
    headers: {
      "content-type": "application/json",
    }
  }
  request(option, function (error, resp, body) {
    if (!error && resp.statusCode == 200) {
      console.log(resp.body)
      res.json({ data: resp.body })
    }
  })
}
