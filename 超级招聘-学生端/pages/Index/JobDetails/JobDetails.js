// pages/Index/JobDetails/JobDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    titleName:'',
    collectChange:true
  },

// 跳转至公司详情
  goDetails:function(e){
    wx.navigateTo({    //保留当前页面，跳转到搜索頁面
      url: "../Details/Details"
    })
  },
  // 收藏
  collectGo:function(){
    this.setData({
      collectChange: !this.data.collectChange
    })
  },
  // 投递简历
  toudiGo: function () {//和HR聊聊
    this.setData({
      modalHidden: false,
      titleName: '确定投递简历至该公司吗?'
    })
    // this.onLoad();
  },
  // 确定
  modalChangeConfirm: function () {
    this.setData({
      modalHidden: true,
    })
  },
  // 取消
  modalChangeCancel: function () {
    this.setData({
      modalHidden: true
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