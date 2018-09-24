//index.js
//获取应用实例
const app = getApp()
const config = require('../../config');
const util = require("../../utils/util.js")
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    banner: null,
    channel:null,
    newGoodList: null,
    hotGoodList: null,
    brandList: null,
    topicList: null,
    categoryList: null
  },
  onLoad: function () {
    var self = this
    this.getIndexData()
  },
  onShow(){
    // if(!this.data.banner){
    //   
    // }
  },
  getIndexData(){
    console.log(app.globalData)
    wx.request({
      url: config.index,
      method:"get",
      success:resp=>{
        var data = resp.data.data;
        console.log(data)
        this.setData({
          banner:data.banner,
          channel:data.channel,
          newGoodsList: data.newGoodsList,
          hotGoodsList:data.hotGoodsList,
          brandList:data.brandList,
          topicList:data.topicList,
          categoryList: data.categoryList
        })
      }
    })
  }
})
