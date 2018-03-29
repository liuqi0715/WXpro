Page({
  data:{
 
    cityName: [],
    cityCode: [],
    citySelIndex: '',
    gender: ['男', '女'], //性别
    genderIndex:0,        //性别默认值男
    education:['高中','大专','本科','研究生','博士'],  //学历
    educationIndex:0,     //学历默认值为高中
    date:'1995-10-13',    //出生日期
    showDistpicker: false,//控制地区选择器的显示隐藏
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    keyword: ['行动派，证书收割机', '大专', '本科', '研究生', '博士'], //关键字
    keywordIndex:0,     //关键字默认值
  },
  onLoad:function(options){
 
  },

  // 选择性别
  genderChange: function (e) {
    this.setData({
      genderIndex: e.detail.value
    })
  },
  // 选择时间
  dateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 选择地区
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 选择关键字
  keywordChange:function(e){
    this.setData({
      keywordIndex: e.detail.value
    })
  },
  // 表单验证
  savePersonInfo: function(e) {
    var data = e.detail.value;
    console.log(data)
    var telRule = /^1[3|4|5|7|8]\d{9}$/, nameRule = /^[\u2E80-\u9FFF]+$/
    if (data.name == '') {
      this.showMessage('请输入姓名');
      console.log(233)
    } else if (! nameRule.test(data.name)) {
      this.showMessage('请输入中文名')
    } else if (data.tel == '') {
      this.showMessage('请输入手机号码')
    } else if (! telRule.test(data.tel)) {
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
  showMessage: function(text) {
    
  }
})