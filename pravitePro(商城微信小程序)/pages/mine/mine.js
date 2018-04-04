const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //这里默认显示提示框，正式环境需要进行验证
    hasNotBinding:true,
    //显示获取验证码
    getCode:true,
    hasGetCode:false,
    codeInfo:"获取验证码",
    num:60,
    userInfo:{},   //微信登录获取用户信息
    //订单状态
    orderStatus:[
        "https://misc.reflower.com.cn/images/obligation.svg",
        "https://misc.reflower.com.cn/images/service.svg",   //服务中
        "https://misc.reflower.com.cn/images/already.svg",    //已完成
        "https://misc.reflower.com.cn/images/renew.svg",      //续订管理
        "https://misc.reflower.com.cn/images/card.svg",       //优惠卷
        "https://misc.reflower.com.cn/images/caotact.svg"     //联系客服
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo);
    if (app.globalData.userInfo) {
      console.log(app.globalData.userInfo);
      this.setData({
        userInfo: app.globalData.userInfo,

      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,

          })
        }
      })
    };
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    /**
     * 首先验证用户是否绑定手机，绑定则影藏否则就
    */

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
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

  },
  /**
   * 用户点击获取验证码,60秒重新获取一次
  */
  getCode:function(){ 
    let timer = setInterval(()=>{
        if(this.data.num==0){
          clearInterval(timer)
          this.setData({
            getCode:true,
            hasGetCode:false
          })
         
        }else{
          this.setData({
            getCode: false,
            hasGetCode: true
          })
        }
        this.setData({
          num: this.data.num--
        })
        this.data.num--
      },1000)
  },
  closeBinding:function(){
    this.setData({
      hasNotBinding:false,
    })
  }

})