var request = require('request');
module.exports = (req, res) => {
  var code = req.query.code
  var option = {
    url: "https://api.weixin.qq.com/sns/jscode2session?appid=wxbccade31a8e59d52&secret=c0ed74d03b888ada7528b5eaec84d22b&js_code="+code+"&grant_type=authorization_code",
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