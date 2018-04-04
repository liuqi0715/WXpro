// pages/My/MyTestOne/MyTestOne.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose: 0,
    next_test: 0,
    array: [{
      id: 1,
      num: '1',
      message: '活泼',
      items: [
        { value: '1', name: '1', checked: 'true' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' },
      ],
    }, {
      id: 2,
      num: '2',
      message: '果断',
      items: [
        { value: '1', name: '1', checked: 'true' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' },
      ],
    }]
  },
  // 上下页
  next_test: function (e) {
    console.log(e)
    let _type = e.currentTarget.dataset.type
    if (_type == 0) {
      // 返回上一页
      wx.navigateBack({
        delta: 1,
      })
    } else if (_type == 1) {
      wx.navigateTo({
        url: '../MyTestSubmit/MyTestSubmit',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  // 单选
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    let index = e.detail.value.split('-')[0] - 1;
    let itemId = e.detail.value.split('-')[1];
    let array = this.data.array;
    let item = array[index].items;
    for (let i = 0, len = item.length; i < len; i++) {
      if (array[index].items[i].value * 1 == itemId * 1) {
        array[index].items[i].checked = true;
      } else {
        array[index].items[i].checked = false
      }
    }
    console.log(array)
    this.setData({
      array: array
    });
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

  },
  // 点击选中选项
  click_choose: function (e) {

  }
})