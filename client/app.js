//app.js
var config = require('./config')
var util = require('./utils/util.js')
App({
  onLaunch: function () {
    // 调用登录接口
    var self = this
    util.checkLogin().then(() => {
      self.setData({
        userInfo: wx.getStorageSync("userInfo")
      })
    }).catch(() => {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    })
  },
  globalData: {}
})