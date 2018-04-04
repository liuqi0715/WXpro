// pages/OfflineActivity/Enterprise/Enterprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity: [{
        id: '1',
        img: '/img/zhenzhou.jpg',
        name: '汇丰银行',
        types: '国企',
        size: '100-500人',
        work: '教育/互联网',
        numbers: '36'
      }, {
        id: '2',
        img: '/img/zhenzhou.jpg',
        name: '保利科技',
        types: '国企',
        size: '10-50人',
        work: '教育/互联网',
        numbers: '10'
      }, {
        id: '3',
        img: '/img/zhenzhou.jpg',
        name: '保利科技',
        types: '国企',
        size: '10-50人',
        work: '教育/互联网',
        numbers: '10'
      }, {
        id: '4',
        img: '/img/zhenzhou.jpg',
        name: '保利科技',
        types: '国企',
        size: '10-50人',
        work: '教育/互联网',
        numbers: '10'
      }],
    val: '',
  },
  /**
   * 点击跳转
   */
  bindtap:function(e){
    wx.navigateTo({
      url: '../../Index/Details/Details?id=' + e.currentTarget.dataset.id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 搜索点击
   */
  search:function(e){
    let val = this.data.val;
    console.log(val)
  },
  /**
   * 输入时
   */
  bindinput:function(e){
    let val = e.detail.value;
    this.setData({
      val: val
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