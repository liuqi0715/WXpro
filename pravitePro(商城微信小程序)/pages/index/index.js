//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    imgUrls: [
      'http://img.reflower.com.cn/0f4f3b26ae72bc26adf11d9645236f40110ae6f9',
      'http://img.reflower.com.cn/61c74f435f365f472a0c88156a929b31d74c54b4',
      'http://img.reflower.com.cn/774716053868b203cfd8cb15c3dc5136af2e2234'
    ],

    topInfo:[{item:"暖心推荐",id:0},{item:"居家升级",id:1},{item:"快乐工作",id:2},{item:"用心礼品",id:3}],
    topInfoId:0,
    indicatorDots: true, //出现下方点点
    autoplay: true,       //自动播放
    interval: 3000,       //3秒循环一次
    duration: 1000,

    isChecked:false,    //顶部选中变色
    //限时特惠的花品
    countFlower:[
      "http://img.reflower.com.cn/b3e8eb86ad757052bd6ee25423f861d740285b42",
      "http://img.reflower.com.cn/b4baa46a2d737d0d5d7163fb579e98d149a62683",
      "http://img.reflower.com.cn/4241991bcc9c8830499c9a9f6e997ee886e380e6",
      "http://img.reflower.com.cn/5a93ecfc341fd763cf353ec5506e7c32b126f089"
    ],
  //自然系列花品
  natureFlowers:[
    {
      id:"12",
      url:"http://img.reflower.com.cn/12452439290f460c45d44866b7b59626adf62a1a"
    },{
      id:"02",
      url:"http://img.reflower.com.cn/6e556960c0e856e3edfcac943219d55b0bcf8651"
    },{
      id:"03",
      url:"http://img.reflower.com.cn/178985468b481347df3f7092c6578eec7a757da1"
    },{
      id:"24",
      url:"http://img.reflower.com.cn/3dbdacfa98abd75bf1bf28ef6afe36ccc9eb9f0c"
    },
  ]
  },
  //事件处理函数
  bindViewTap: function() {    
/**
 *  页面跳转方法  wx.navigateTo
 * 
*/
    wx.navigateTo({                     
      url: '../logs/logs'   
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
    //发送请求，这里的接口需要在后台进行配置。
    // wx.request({
    //   url: 'xxxxxxxxx',
    //   data: {},
    //   header: { 'Content-Type': 'application/json' },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // }) 
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 商城顶部swiper逻辑
  */
   changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //顶部点击变色
  topClick:function(e){
    console.log(e,"==");
    this.setData({
      topInfoId: e.target.dataset.id,   //将topInfoId设置为ID，相等时添加class样式。
    })
  },
  //点击自然系花品，跳转相应页面；
  buyFlowers:function(e){
    console.log(e.target.dataset.id,"跳转页面携带ID");
    let Id = e.target.dataset.id;
    wx.navigateTo({
      url: "goodsDetail/goodsDetail"
    })

  }

})
