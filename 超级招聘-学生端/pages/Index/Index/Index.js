// pages/Index/Index/Index.js
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

    // 选择栏标题
    wz_tit: '位置区域',
    qy_tit: '企业类型',
    hy_tit: '行业类型',
    zy_tit: '专业要求',
    xl_tit: '学历要求',
    zw_tit: '职位名称',
    xz_tit: '薪资范围',
    zn_tit: '智能排序',
    city: '北京',
    searName:'0',//搜索返回值
    more: false, // 没有更多了
    weizhi_active: 1,//位置区域默认id
    qiye_active: 1, // 企业区域默认id
    hangye_active: 1,//行业区域默认id
    zhuanye_active: 1, // 专业区域默认id
    xueli_active: 1,//学历区域默认id
    zhiwei_active: 1, // 职位区域默认id
    xinzi_active: 1,//薪资范围区域默认id
    zhineng_active: 1, // 智能区域默认id
    box_weizhi: false,//位置区域盒子
    box_qiye: false, // 企业区域盒子
    box_hangye: false,//行业区域盒子
    box_zhuanye: false, // 专业区域盒子
    box_xueli: false,//学历区域盒子
    box_zhiwei: false, // 职位名称区域盒子
    box_xinzi: false,//薪资范围区域盒子
    box_zhineng: false, // 智能排序区域盒子
    top: '-1000px', // 下拉列表初始位置
    animationData: {},
    // title:'位置区域',
    // 位置区域列表
    weizhi_list: [
      {
        id: 1,
        title: '不限'
      }, {
        id: 2,
        title: '美兰区'
      }
    ],
    // 企业类型列表
    qiye_list: [
      {
        id: 1,
        title: '不限'
      },
      {
        id: 2,
        title: '国营'
      },
      {
        id: 3,
        title: '民营'
      },
      {
        id: 4,
        title: '合资'
      },
      {
        id: 5,
        title: '外商独资'
      },
      {
        id: 6,
        title: '股份制企业'
      }
    ],
    // 行业类型列表
    hangye_list: [
      {
        id: 1,
        title: '不限'
      }, {
        id: 2,
        title: '计算机'
      }, {
        id: 3,
        title: '互联网'
      }
    ],
    // 专业要求列表
    zhuanye_list: [
      {
        id: 1,
        title: '不限'
      },
      {
        id: 2,
        title: '金融'
      },
      {
        id: 3,
        title: '公务员'
      },
      {
        id: 4,
        title: '计算机'
      },
    ],
    // 学历要求列表
    xueli_list: [
      {
        id: 1,
        title: '不限'
      },
      {
        id: 2,
        title: '初中'
      },
      {
        id: 3,
        title: '高中'
      },
      {
        id: 4,
        title: '大专'
      },
    ],
    //职位名称列表
    zhiwei_list: [
      {
        id: 1,
        title: '不限'
      },
      {
        id: 2,
        title: 'web前端工程师'
      },
      {
        id: 3,
        title: 'PHP工程师'
      }
    ],
    // 薪资范围列表
    xinzi_list: [
      {
        id: 1,
        title: '不限'
      },
      {
        id: 2,
        title: '3000-5000'
      },
      {
        id: 3,
        title: '5000-8000'
      },
      {
        id: 4,
        title: '8000-12000'
      },
      {
        id: 5,
        title: '12000以上'
      }
    ],
    // 智能排序列表
    zhineng_list: [
      {
        id: 1,
        title: '智能排序'
      },
      {
        id: 2,
        title: '距离最近的'
      }, {
        id: 3,
        title: '月薪从高到低'
      },
      {
        id: 4,
        title: '公司规模'
      }
    ]
  },
  // 跳轉到搜索頁面
  goSearch: function (e) {
    wx.navigateTo({    //保留当前页面，跳转到搜索頁面
      url: "../Search/Search"
    })
  },
  // 列表点击
  bindtap: function (e) {
    let _type = e.currentTarget.dataset.type;
    let id = e.currentTarget.dataset.id;
    let tit = e.currentTarget.dataset.tit;
    if (_type == 0) {
      // 位置区域
      this.setData({
        weizhi_active: id,
        wz_tit: tit
      })

      let height = -this.data.weizhi_list.length * 50 + 'px';
      this.off_box(height);

    } else if (_type == 1) {
      // 企业类型
      this.setData({
        qiye_active: id,
        qy_tit: tit
      })
      let height = -this.data.qiye_list.length * 50 + 'px';
      this.off_box(height);
      // console.log(id)
    } else if (_type == 2) {
      // 行业类型
      this.setData({
        hangye_active: id,
        hy_tit: tit
      })
      let height = -this.data.hangye_list.length * 50 + 'px';
      this.off_box(height);
    } else if (_type == 3) {
      // 专业类型
      this.setData({
        zhuanye_active: id,
        zy_tit: tit
      })
      let height = -this.data.zhuanye_list.length * 50 + 'px';
      this.off_box(height);
    }
    else if (_type == 4) {
      // 学历要求
      this.setData({
        xueli_active: id,
        xl_tit: tit
      })
      let height = -this.data.xueli_list.length * 50 + 'px';
      this.off_box(height);
    }
    else if (_type == 5) {
      // 职位名称
      this.setData({
        zhiwei_active: id,
        zw_tit: tit
      })
      let height = -this.data.zhiwei_list.length * 50 + 'px';
      this.off_box(height);
    }
    else if (_type == 6) {
      // 薪资范围
      this.setData({
        xinzi_active: id,
        xz_tit: tit
      })
      let height = -this.data.xinzi_list.length * 50 + 'px';
      this.off_box(height);
    }

    else if (_type == 7) {
      // 智能排序
      this.setData({
        zhineng_active: id,
        zn_tit: tit
      })
      let height = -this.data.zhineng_list.length * 50 + 'px';
      this.off_box(height);

    }

  },

  // 城市选择
  goCity: function (e) {

    wx.navigateTo({
      url: "../City/City"
    })
  },
  // 公司职位详情
  xingqin_load: function (e) {
    wx.navigateTo({
      url: '../'
    })
  },
  // 职位名称
  goZhiwei: function (e) {
    wx.navigateTo({
      url: '../JobName/JobName'
    })
    this.setData({
      box_weizhi: false,
      box_qiye: false,
      box_hangye: false,
      box_zhuanye: false,
      box_xueli: false,
      box_zhiwei: false,
      box_xinzi: false,
      box_zhineng: false,
    })
  },

  // 打开下拉选项
  open_box: function (e) {
    let _type = e.currentTarget.dataset.type;
    if (_type == 0) {
      // 位置下拉
      let height = -this.data.weizhi_list.length * 50 + 'px';
      if (this.data.box_weizhi) {
        this.off_box(height);
      } else {
        this.setData({
          box_weizhi: true,
          box_qiye: false,
          box_hangye: false,
          box_zhuanye: false,
          box_xueli: false,
          box_zhiwei: false,
          box_xinzi: false,
          box_zhineng: false,
          top: height
        })
        this.open_animation()
      }
    } else if (_type == 1) {
      // 企业类型下拉
      let height = -this.data.qiye_list.length * 50 + 'px';
      if (this.data.box_qiye) {
        this.off_box(height);
      } else {
        this.setData({
          box_weizhi: false,
          box_qiye: true,
          box_hangye: false,
          box_zhuanye: false,
          box_xueli: false,
          box_zhiwei: false,
          box_xinzi: false,
          box_zhineng: false,
          top: height
        })
        this.open_animation();
      }
    } else if (_type == 2) {
      // 行业类型下拉
      let height = -this.data.hangye_list.length * 50 + 'px';
      if (this.data.box_hangye) {
        this.off_box(height);
      } else {
        this.setData({
          box_weizhi: false,
          box_qiye: false,
          box_hangye: true,
          box_zhuanye: false,
          box_xueli: false,
          box_zhiwei: false,
          box_xinzi: false,
          box_zhineng: false,
          top: height
        })
        this.open_animation();
      }
    } else if (_type == 3) {
      // 专业类型下拉
      let height = -this.data.zhuanye_list.length * 50 + 'px';
      if (this.data.box_zhuanye) {
        this.off_box(height);
      } else {
        this.setData({
          box_weizhi: false,
          box_qiye: false,
          box_hangye: false,
          box_zhuanye: true,
          box_xueli: false,
          box_zhiwei: false,
          box_xinzi: false,
          box_zhineng: false,
          top: height
        })
        this.open_animation();
      }
    } else if (_type == 4) {
      // 学历要求下拉
      let height = -this.data.xueli_list.length * 50 + 'px';
      if (this.data.box_xueli) {
        this.off_box(height);
      } else {
        this.setData({
          box_weizhi: false,
          box_qiye: false,
          box_hangye: false,
          box_zhuanye: false,
          box_xueli: true,
          box_zhiwei: false,
          box_xinzi: false,
          box_zhineng: false,
          top: height
        })
        this.open_animation();
      }
    } else if (_type == 5) {
      // 职位名称下拉
      let height = -this.data.zhiwei_list.length * 50 + 'px';
      if (this.data.box_zhiwei) {
        this.off_box(height);
      } else {
        this.setData({
          box_weizhi: false,
          box_qiye: false,
          box_hangye: false,
          box_zhuanye: false,
          box_xueli: false,
          box_zhiwei: true,
          box_xinzi: false,
          box_zhineng: false,
          top: height
        })
        this.open_animation();
      }
    } else if (_type == 6) {
      // 薪资范围下拉
      let height = -this.data.xinzi_list.length * 50 + 'px';
      if (this.data.box_xinzi) {
        this.off_box(height);
      } else {
        this.setData({
          box_weizhi: false,
          box_qiye: false,
          box_hangye: false,
          box_zhuanye: false,
          box_xueli: false,
          box_zhiwei: false,
          box_xinzi: true,
          box_zhineng: false,
          top: height
        })
        this.open_animation();
      }
    } else if (_type == 7) {
      // 智能排序下拉
      let height = -this.data.zhineng_list.length * 50 + 'px';
      if (this.data.box_zhineng) {
        this.off_box(height);
      } else {
        this.setData({
          box_weizhi: false,
          box_qiye: false,
          box_hangye: false,
          box_zhuanye: false,
          box_xueli: false,
          box_zhiwei: false,
          box_xinzi: false,
          box_zhineng: true,
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
        box_weizhi: false,
        box_qiye: false,
        box_hangye: false,
        box_zhuanye: false,
        box_xueli: false,
        box_zhiwei: false,
        box_xinzi: false,
        box_zhineng: false,
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
    // console.log(options)
    let that = this;

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        // console.log(latitude + '--' + longitude)
      }
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
    let that = this;
    // 读取缓存
    wx.getStorage({
      key: 'jobName',
      success: function (res) {
        if (res.data) {
          that.setData({
            zw_tit: res.data,
          })
          // 清除缓存
          wx.removeStorage({
            key: 'jobName',
          })
        }
      }
    })
    wx.getStorage({
      key: 'cityName',
      success: function (res) {
        if (res.data) {
          that.setData({
            city: res.data,
          })
          // 清除缓存
          wx.removeStorage({
            key: 'cityName',
          })
        }
      }
    })
    // 获取搜索结果值
    wx.getStorage({
      key: 'searName',
      success: function (res) {
        if (res.data) {
          that.setData({
            searName: res.data
          })
          // 清除缓存
          wx.removeStorage({
            key: 'searName',
          })
          console.log(that.data.searName)
          // console.log('--------------')
        }
      }
     
    })
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