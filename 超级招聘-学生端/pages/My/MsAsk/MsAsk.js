// pages/My/MsAsk/MsAsk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,//模态框默认不显示
    titleName:''//模态框默认名字
  },
  // 点击弹出模态框
  jujueGo:function(){  //拒绝面试
      this.setData({
        modalHidden: false,
        titleName: '确定拒绝面试吗?'
      })
      // this.onLoad();
   
  },
  tongyiGo: function () {//同意面试
    this.setData({
      modalHidden: false,
      titleName:'确定同意面试吗?'
    })
    // this.onLoad();
  },
  talkGo: function () {//和HR聊聊
    this.setData({
      modalHidden: false,
      titleName: '确定要去和HR聊聊吗?'
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