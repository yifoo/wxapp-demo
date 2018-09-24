const config = require('../config')
module.exports = {
  formatTime: date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  },
  formatNumber: n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  },
  // 显示繁忙提示
  showBusy: text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
  }),
  // 显示成功提示
  showSuccess: text => wx.showToast({
    title: text,
    icon: 'success'
  }),
  // 显示失败提示
  showModel: (title, content) => {
    wx.hideToast();
    wx.showModal({
      title,
      content: JSON.stringify(content),
      showCancel: false
    })
  },
  /**
   * 检查是否登录
   * @description 判断是否有userInfo 和 token
   */
  checkLogin() {
    return new Promise((resolve, reject) => {
      if (wx.getStorageSync('openId') && wx.getStorageSync("sessionId")) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  },
  getUserInfo(){
    return new Promise((resolve,reject)=>{
      wx.getUserInfo({
        success(res){
          wx.setStorageSync('userInfo', res.userInfo)
          wx.setStorageSync('signature', res.signature)
          resolve(true)
        },
        fail(){
          reject(false)
        }
      })
    })
  },
  login(){
    var self = this
    return new Promise((resolve,reject)=>{
      self.showBusy("登录中...")
      wx.login({
        success: res => {
          wx.request({
            url: config.service.loginUrl,
            data: { code: res.code },
            success(result) {
              if (result.statusCode === 200) {
                self.showSuccess("登录成功")
                var data = result.data.data
                wx.setStorageSync('sessionId', data.session_key)
                wx.setStorageSync('openId', data.openid)
              }
              resolve(true)
            },
            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
              reject(false)
            }
          })
        }
      })
    })
  }
}
