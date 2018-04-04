// pages/My/DeliveryRecords/DeliveryRecords.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: ['全部', '未查看', '已查看', '已邀请'],
    currentTab: 0,
    swiperHeight: 0,
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    var index = e.target.dataset.current
    if (this.data.currentTab !== index) {
      that.setData({
        currentTab: index
      })
    }

  },
  /** 
    * 滑动切换tab 
    */
  tabChange: function (e) {
    var that = this;
    var index = e.detail.current;
    var hIndex = that.data.currentTab;
    // console.log(index)
    // console.log(hIndex)
    that.setData({
      currentTab: index
    })
    // console.log(hIndex)

    wx.createSelectorQuery().selectAll('.height').boundingClientRect(function (rect) {
      that.setData({
        swiperHeight: rect[index].height
      })
    }).exec()
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
    var that = this;
    setTimeout(function () {
      var hIndex = that.data.currentTab;
      wx.createSelectorQuery().selectAll('.height').boundingClientRect(function (rect) {
        that.setData({
          swiperHeight: rect[hIndex].height
        })
      }).exec()
    }, 500)


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