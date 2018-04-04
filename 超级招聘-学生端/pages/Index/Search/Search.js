// pages/Index/Search/Search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectHide: false,
    inputValue: '',
    getSearch: [],
    modalHidden: true,
    sendKeyword:[],
    job_post: false, // 搜索内容显示
  },
  bindtap:function(e){
    let data;
    let localStorageValue = [];
    // if (this.data.inputValue != '' || e.currentTarget.dataset.tags ) {
    //   //调用API从本地缓存中获取数据
    //   var searchData = wx.getStorageSync('searchData') || []
    //   searchData.push(this.data.inputValue)
    //   wx.setStorageSync('searchData', searchData)
    //   wx.switchTab({
    //     url: '../../Index/Index/Index'
    //   })
    //   // console.log('马上就要跳转了！')
    // } else {
    //   console.log('空白的你搜什么')
    // }
    // console.log(e.currentTarget.dataset.tags)
    var searTags = e.currentTarget.dataset.tags
    var searName = this.data.inputValue
    wx.setStorage({
      key: "searName",
      data: searName,
    })
    this.setData({
      inputValue: searTags,
      job_post: true  
    })

  },
  /**
   * 点击搜索框时
   */
  bindfocus:function(){
    this.setData({
      job_post: false
    })
  },
  bindblur:function(e) {
    // console.log(e.detail.value)
    let val = e.detail.value
    if (val != ''){
      let sendKeyword = this.data.sendKeyword
      console.log(typeof sendKeyword)
      sendKeyword.push(val)

      this.setData({
        inputValue: val,
        sendKeyword: sendKeyword
      })
      wx.setStorage({
        key: "sendKeyword",
        data: sendKeyword
      })
    }
    
    // console.log(this.data.inputValue)    
  },
 
  modalChangeConfirm: function () {
    wx.removeStorageSync('sendKeyword')
    this.setData({
      modalHidden: true,
      sendKeyword: []
    })
    // wx.redirectTo({
    //   url: '../search/search'
    // })
    // this.onLoad();

  },
  
  modalChangeCancel: function () {
    this.setData({
      modalHidden: true
    })
  },
  // 清除历史记录
  clearSearch: function () {
    this.setData({
      modalHidden: false
    })
    // this.onLoad();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    if (wx.getStorageSync('sendKeyword')){
      this.setData({
        sendKeyword: wx.getStorageSync('sendKeyword')
      })
    }
    
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