// pages/Index/Details/Details.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChecked: true,  //企业简介
    isFazhan: true,//发展历程
    isFazhanTwo: true,//发展历程2
    isMsJiazai: true,//面试评价加载
    isShow: true,//企業詳情與職位選項卡
    currentTab: 0,
  },
  // 查看定位
  map: function (e) {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  // 選項卡切換
  swichNav: function (e) {
    let that = this
    if (that.data.currentTab === e.target.dataset.current) {
      return false;

    } else {
      let showMode = e.target.dataset.current == 0;
      that.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode

      })

    }
  },
  //  页面点击加载更多内容
  detailMore: function (e) {//企业简介
    var that = this
    let _type = e.currentTarget.dataset.type;

    if (_type == 0) {
      that.setData({
        isChecked: !that.data.isChecked
      })
    } else if (_type == 1) {
      that.setData({
        isFazhan: !that.data.isFazhan
      })
    } else if (_type == 2) {
      that.setData({
        isFazhanTwo: !that.data.isFazhanTwo
      })
    } else if (_type == 3) {
      that.setData({
        isMsJiazai: !that.data.isMsJiazai
      })
    }
    else if (_type == 4) {
      that.setData({
        isMsJiazai: !that.data.isMsJiazai
      })
    }
  },
  // fazhanMore:function(e){//发展历程
  //   var that = this
  //   that.setData({
  //     isFazhan: !that.data.isFazhan
  //   }) 
  // },


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