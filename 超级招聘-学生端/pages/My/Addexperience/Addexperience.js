// pages/My/Addexperience/Addexperience.js
Page({
  data: {
    sdate: '1950-01-01',    //出生日期
    edate: '2030-01-01',    //出生日期
  },
  onLoad: function (options) {

  },

  // 选择开始时间
  sdateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sdate: e.detail.value
    })
  },
  // 选择结束时间
  edateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      edate: e.detail.value
    })
  },
  // 表单验证
  savePersonInfo: function (e) {
    var data = e.detail.value;
    console.log(data)
    var telRule = /^1[3|4|5|7|8]\d{9}$/, nameRule = /^[\u2E80-\u9FFF]+$/
    if (data.name == '') {
      this.showMessage('请输入姓名');
      console.log(233)
    } else if (!nameRule.test(data.name)) {
      this.showMessage('请输入中文名')
    } else if (data.tel == '') {
      this.showMessage('请输入手机号码')
    } else if (!telRule.test(data.tel)) {
      this.showMessage('手机号码格式不正确')
    } else if (data.province == '') {
      this.showMessage('请选择所在地区')
    } else if (data.city == '') {
      this.showMessage('请选择所在地区')
    } else if (data.district == '') {
      this.showMessage('请选择所在地区')
    } else if (data.address == '') {
      this.showMessage('请输入详细地址')
    } else {
      this.showMessage(' 保存成功')
      console.log(data)
    }
  },
  showMessage: function (text) {

  }
})