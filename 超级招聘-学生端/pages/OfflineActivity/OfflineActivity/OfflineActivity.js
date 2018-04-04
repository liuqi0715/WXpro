// pages/OfflineActivity/OfflineActivity/OfflineActivity.js
var animation = wx.createAnimation({
  duration: 500,
  timingFunction: "linear",
  delay: 0
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city_xz: '地区',
    time_xz: '时间',
    more: false, // 没有更多了
    zhiwu_active: 1, // 职务列表默认id
    source_active: 1, // 简历来源默认id
    status_active: 1, // 简历状态默认id
    box_zhiwu: false, // 招聘职务盒子
    box_source: false, // 简历来源盒子
    box_status: false, // 简历状态盒子
    top: '-1000px', // 下拉列表初始位置
    animationData: {},

    zhiwu_list: [
      {
        id: 1,
        title: '全部'
      },
      {
        id: 2,
        title: '上海'
      },
      {
        id: 3,
        title: '海南'
      },
      {
        id: 4,
        title: '深圳'
      }
    ],
    source_list: [
      {
        id: 1,
        title: '全部'
      },
      {
        id: 2,
        title: '24小时内'
      },
      {
        id: 3,
        title: '最近三天'
      }
    ],
    activity: [
      {
      id: '1',
      name: '春季大型人才招聘会',
      img: '/img/header.jpg',
      city: '郑州',
      time: '2018-03-04 09：00-12：00',
      much: '500家企业',
      post: '11786个',
      place: '河南人才市场河南人才市场河南人才市场河南人才市场'
      },
      {
        id: '2',
      name: '应届生综合人才招聘会',
      img: '/img/zhenzhou.jpg',
      city: '郑州',
      time: '2018-03-04 09：00-12：00',
      much: '500家企业',
      post: '11786个',
      place: '河南人才市场河南人才市场河南人才市场河南人才市场'
      }
    ]
  },
  // 列表点击
  bindtap: function (e) {
    let _type = e.currentTarget.dataset.type;
    let id = e.currentTarget.dataset.id;
    let tit = e.currentTarget.dataset.tit;
    if (_type == 0) {
      // 地区
      this.setData({
        zhiwu_active: id,
        city_xz: tit
      })
      let height = -this.data.zhiwu_list.length * 50 + 'px';
      this.off_box(height);
    } else if (_type == 1) {
      // 时间
      this.setData({
        source_active: id,
        time_xz: tit
      })
      let height = -this.data.source_list.length * 50 + 'px';
      this.off_box(height);
    }

  },
  // 打开下拉选项
  open_box: function (e) {
    let _type = e.currentTarget.dataset.type;
    if (_type == 0) {
      // 地区下拉
      let height = -this.data.zhiwu_list.length * 50 + 'px';
      if (this.data.box_zhiwu) {
        this.off_box(height);
      } else {
        this.setData({
          box_zhiwu: true,
          box_source: false,
          box_status: false,
          top: height
        })
        this.open_animation()
      }
    } else if (_type == 1) {
      // 时间源下拉
      let height = -this.data.source_list.length * 50 + 'px';
      if (this.data.box_source) {
        this.off_box(height);
      } else {
        this.setData({
          box_zhiwu: false,
          box_source: true,
          box_status: false,
          top: height
        })
        this.open_animation();
      }
    } else {
      console.log('下拉菜单 -- 类型错误')
    }
  },
  // 关闭盒子
  off_box: function (e) {
    this.off_animation(e);
    setTimeout(() => {
      this.setData({
        box_zhiwu: false,
        box_source: false,
        box_status: false,
        top: '-1000px'
      })
    }, 400);

  },
  // 打开动画
  open_animation: function (e) {
    this.animation = animation
    animation.top(0).step()
    this.setData({
      animationData: animation.export()
    })
  },
  // 关闭动画
  off_animation: function (e) {
    this.animation = animation
    animation.top(e).step()
    this.setData({
      animationData: animation.export()
    })
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