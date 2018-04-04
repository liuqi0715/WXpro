// pages/My/InvMe/InvMe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    falg: 0,
    eva: 0,
    ass:0,
    text_eva:'',
    title:[{
      job:'客户经理',
      time: '2018-06-02',
      company: '保利公司',
      content: '华为是全球领先的信息与通信技术(ICT)解决方案供应商,专注于ICT领域,坚持稳健经营、持续创新、开放合作,在电信运营商、企业、终端和云计算等领域构筑了端到端的解决...'
    }],
    after_inv: [{
      job: '客户经理',
      time: '2018-06-02',
      company: '保利公司',
      content: '华为是全球领先的信息与通信技术(ICT)解决方案供应商,专注于ICT领域,坚持稳健经营、持续创新、开放合作,在电信运营商、企业、终端和云计算等领域构筑了端到端的解决...'
    }]
  },
  /**
   *同意/拒绝面试
  */
  refuse: function () {
    this.setData({
      falg: 1,
      decide: '已拒绝',
      gou: 'cancel',
    })
  } ,
  agree: function () {
    this.setData({
      falg: 1,
      decide: '已接受',
      gou: 'success '
    })
  },
  // 查看详情
  see_more:function(e){
    wx.navigateTo({
      url: '../MsAsk/MsAsk?id=' + e.currentTarget.dataset.id,
    })
  },
  // 和hr聊聊
  hrll:function(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../ImHR/ImHR?id=' + id,
    })
  },
  /**
   *填写面试评语
  */
  add_eva:function(){
    this.setData({
      eva: 1,
    })
  },
  bindblur: function (e) {
    this.setData({
      text_eva: e.detail.value
    })
  },
  btn_ass: function (e) {
    if (e.detail.value) {
      var val = e.detail.value
      console.log(val);
    } else {
      var val = this.data.text_eva;
      console.log(val);
      this.setData({
        my_assess: val,
        ass:1,
      })
    }
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