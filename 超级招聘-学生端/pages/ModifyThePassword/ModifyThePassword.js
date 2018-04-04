// pages/SetPassword/SetPassword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newPwd: '', // 第一个框密码         新密码
    isNewPwd: true, // 第一个框密码显示
    DPwd: '', // 第二个框密码         确认密码
    isDPwd: true, // 第二个框显示
    oldPwd: '', // 第三个框密码       旧密码
    isOldPwd: true, // 第三个框显示
  },

  // 表单提交
  formSubmit: function (e) {
    console.log(e,"?====")
    let DPwd = e.detail.value.DPwd;
    let newPwd = e.detail.value.newPwd;
    let oldPwd = e.detail.value.oldPwd;
    if (DPwd == '' || newPwd == '' || oldPwd == '') {
      wx.showToast({
        title: '密码不能为空',
        icon: 'success',
        duration: 2000
      })
    } else if (DPwd != newPwd) {
      wx.showToast({
        title: '密码不一致',
        icon: 'error',
        duration: 2000
      })
    } else if (DPwd == newPwd) {
      wx.showToast({
        title: '密码修改成功',
        icon: 'success',
        duration: 2000,
        success: function () {
          setTimeout(function () {
            wx.switchTab({
              url: '../My/My'
            })
          }, 2000)
        }
      })
    }
  },

  // 失去焦点时
  bindblur: function (e) {
    let _type = e.currentTarget.dataset.type;
    if (_type == 0) {
      // 第一个框
      this.setData({
        oldPwd: e.detail.value
      })
    } else if (_type == 1) {
      // 第二个框
      this.setData({
        newPwd: e.detail.value
      })
    } else if(_type == 2) {
      // 第三个框
      this.setData({
        DPwd: e.detail.value
      })
    }else{
      console.log('失去焦点时 -- 类型错误')

    }
  },

  // 显示隐藏
  isShow: function (e) {
    let _type = e.currentTarget.dataset.type;
    if (_type == 0) {
      // 第一个框
      this.setData({
        isOldPwd: !this.data.isOldPwd
      })
    } else if (_type == 1) {
      // 第二个框
      this.setData({
        isNewPwd: !this.data.isNewPwd
      })
    }else if( _type ==2){
      // 第三个框
      this.setData({
        isDPwd: !this.data.isDPwd
      })
    } else {
      console.log('显示隐藏 -- 类型错误')
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