// client/pages/login/login.js
const app = getApp()
const util = require("../../utils/util")
//获取应用实例
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  getUser: function (res) {
    console.log(res)
    wx.setStorageSync('userInfo', res.detail.userInfo)
    wx.setStorageSync('signature', res.detail.signature)
    app.globalData.userInfo = wx.getStorageSync("userInfo")
    util.login().then((res)=>{
      wx.switchTab({
        url: '/pages/index/index',
      })
    }).catch(err=>{
      console.log("错误返回",err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('进来了')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})