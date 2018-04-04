// pages/My/DiplomaCertification/DiplomaCertification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 上传图片
  upload:function(){
    let that=this;
    let arr=that.data.imgArr;
    wx.chooseImage({
      count:9-that.data.imgArr.length,
      success:function(res){
        console.log(res)
        res.tempFilePaths.forEach(function(i,index){
          arr.push(i)
        })

        that.setData({
          imgArr: arr
        })
      }
    })
  },
  // 删除
  del:function(e){
    let index=e.currentTarget.dataset.index;  //获取删除图片的下标
    let arr=this.data.imgArr;                 //获取图片数组
    arr.splice(index,1);
    this.setData({
      imgArr:arr
    })
  },
  // 预览
  preview:function(e){
    let index = e.currentTarget.dataset.index;  //获取删除图片的下标
    let arr = this.data.imgArr;      //获取图片数组
    console.log(arr)
    wx.previewImage({
      current: index, // 当前显示图片的http链接
      urls: arr // 需要预览的图片http链接列表
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