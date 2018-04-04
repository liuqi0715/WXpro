// pages/ResumeDetails/ResumeDetails.js
var WxParse = require('../../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    already_invited: false, // 面试邀请发送成功提示框
    details: {
      avatar: 'https://tva2.sinaimg.cn/crop.0.0.498.498.50/a3232e7ejw8f3nt7edu7lj20du0du3z7.jpg',
      nickName: '王晓蕊',
      invitation_state: 0,
      sex: 0,
      age: 23,
      education: '本科',
      address: '北京-朝阳',
      isPhone: 0,
      phone: 15001296288,
      email: '1315241501@qq.com',
      position: '产品运营',
      qiuzhi_state: '在职-正考虑换工作',
      industry: 'IT/通信/互联网',
      old_info: '国企/郑州/9000-10000',
      advantage: `1.熟练掌握WORD、excel等office软件的操作；
                  2.对市场需求、产品定位有一定的分析能力，有市场调研和营销规划的经验；
                  3.了解商业网站建设和运作管理经验与网络营销；
                  4.有较强的组织能力、活动策划能力和公关能力。`,
      work_experience: [
        {
          id: 1,
          WE_name: '海南玖魅网络服务有限公司',
          date: '2017.03 - 2018.02',
          zhiwei: '前端开发',
          content: '前端开发任务'
        },
        {
          id: 2,
          WE_name: '北京沐融信息科技有限公司',
          date: '2017.03 - 2018.02',
          zhiwei: '部门助理',
          content: '1.销售数据的收集、统计、汇总； 2.负责销售发票的领取、整理、派发和保管；'
        },
      ],
      edu_bg: [
        {
          id: 1,
          name: '河南财经政法大学',
          date: '2017.03 - 2018.02',
          education: '本科',
          major: '计算机',
        }
      ],
      evaluate: '4',
      invitation: 0,
    },
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    var article = `1.熟练掌握WORD、excel等office软件的操作；<br>
                  2.对市场需求、产品定位有一定的分析能力，有市场调研和营销规划的经验；<br>
                  3.了解商业网站建设和运作管理经验与网络营销；<br>
                  4.有较强的组织能力、活动策划能力和公关能力。`;
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    var that = this;
    WxParse.wxParse('advantage', 'html', article, that, 5);
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