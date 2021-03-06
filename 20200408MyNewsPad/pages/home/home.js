// pages/newsList/newsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeList: [],
    twoList: [{
      id: 1,
      name: '应季鲜果',
      count: 1,
      twodata: [{
        'id': 11,
        'name': '鸡脆骨'
      }, {
        'id': 12,
        'name': '鸡爪'
      }]
    }, {
      id: 2,
      name: '精致糕点',
      count: 6,
      twodata: [{
        'id': 13,
        'name': '羔羊排骨一条'
      }, {
        'id': 14,
        'name': '微辣'
      }]
    }, {
      id: 3,
      name: '全球美食烘培原料',
      count: 12,
      twodata: [{
        'id': 15,
        'name': '秋刀鱼'
      }, {
        'id': 16,
        'name': '锡箔纸金针菇'
      }]
    }]
  },
  clickType(param) {
    this.setData({
      selectBar: param.currentTarget.dataset.id,
    })
  },
  getNewsList() {
    var that = this;
    wx.request({
      url: 'https://jh.fangcuanhuo99.com/api/ApiProduct/GetMGoods',
      success: res => {
        var newslist = res.data.data;
        that.setData({
          homeList: JSON.parse(newslist)
        })
        console.log(this.data.homeList);
        console.log(this.data.twoList);
        console.log("这是一条真的新闻");
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsList();
    //f31bc1ad0b7f4d033c1310727590d445  小程序秘钥
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