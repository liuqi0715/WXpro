Page({
  data:{
    gender: ['男', '女'], //性别
    multiIndex: [0, 0, 0],       //期望行业
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    post: ['理财经理', '产品设计', '金融部业务总监', '营业部总监','H5页面工程师'],  //期望职务
    postIndex:0,     //学历默认值为高中
    date:'1995-10-13',    //出生日期
    showDistpicker: false,//控制地区选择器的显示隐藏
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    keyword: ['行动派，证书收割机', '大专', '本科', '研究生', '博士'], //关键字
    keywordIndex:0,     //关键字默认值
    // 备份期望行业 使用的话在选择的时候数据就变了，取消不了,待修复
    multiIndex1: [0, 0, 0],       //期望行业
    multiArray1: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    pay: ['3000-6000', '6000-8000', '8000-10000'], //期望薪酬
    payIndex:0,   
    types:['私企','国企'],   //  企业类型
    typesIndex:0,
    status:['在职-正在考虑换工作','离职'],   //求职状态
    statusIndex:0,

  },
  onLoad:function(options){
 
  },
  // 选择期望工作地
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 选择期望行业
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  // 选择期望行业
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray1: this.data.multiArray,
      multiIndex1: this.data.multiIndex
    };
    data.multiIndex1[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex1[0]) {
          case 0:
            data.multiArray1[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray1[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray1[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray1[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex1[1] = 0;
        data.multiIndex1[2] = 0;
        break;
      case 1:
        switch (data.multiIndex1[0]) {
          case 0:
            switch (data.multiIndex1[1]) {
              case 0:
                data.multiArray1[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray1[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray1[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray1[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray1[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex1[1]) {
              case 0:
                data.multiArray1[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray1[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray1[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex1[2] = 0;
        console.log(data.multiIndex1);
        // break;
    }
    this.setData(data);
  },
  // 期望职务
  postChange: function (e) {
    this.setData({
      postIndex: e.detail.value
    })
  },
  // q期望薪酬
  payChange: function (e) {
    this.setData({
      payIndex: e.detail.value
    })
  },
  // 企业类型
  typesChange: function (e) {
    this.setData({
      typesIndex: e.detail.value
    })
  },
  // 求职状态
  statusChange: function (e) {
    this.setData({
      statusIndex: e.detail.value
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