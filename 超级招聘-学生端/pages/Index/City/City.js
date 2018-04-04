// pages/Index/City/City.js
let City = require('../../../lib/city.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: City
  },
  bindtap(e) {
    
    var cityName = e.detail.name
    console.log(cityName)
    wx.setStorage({
      key: "cityName",
      data: cityName
    })
    wx.reLaunch({   
      url: "../../Index/Index/Index"
    })
  },
  input(e) {//获取input的值
    this.value = e.detail.value
    // console.log(this.value);
  },
  searchMt() {
    // 当没有输入的时候，默认inputvalue 为 空字符串，因为组件 只能接受 string类型的 数据 
    if (!this.value) {
      this.value = '';
    }
    this.setData({
      value: this.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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