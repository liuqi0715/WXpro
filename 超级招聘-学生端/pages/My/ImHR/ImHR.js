// pages/My/ImHR/ImHR.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
  },
  // 输入框失去焦点
  bindblur: function (e) {
    let val = e.detail.value;
    this.setData({
      value: val
    })
  },
  // 发送消息
  send: function (e) {
    let val
    if (e.detail.value) {
      val = e.detail.value;
    } else {
      val = this.data.value;
    }
    console.log(val)
    this.setData({
      value: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '汇丰银行HR'
    })

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