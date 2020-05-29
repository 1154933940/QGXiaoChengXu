// pages/test/test.js
var QRCode = require('../../utils/weapp-qrcode.js');
var qrcode;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showView: true,
    inputext: ""
  },
  customVal: 1,
  clickMe: function() {
    console.log(this.customVal);
  },
  userInput(e) {
    this.data.inputext = e.detail.value;
  },
  longClickMe() {
    console.log("我被长长的点名了");
  },
  changeInput() {
    console.log("我改变了");
  },
  getFocus() {
    console.log("获得焦点");
  },
  loseFocus() {
    console.log("失去焦点");
  },
  getUserInfo(e) {
    console.log(e);
  },
  getPhoneNumber() {
    console.log("获取用户电话");
  },
  contact() {
    console.log("联系客服");
  },
  clickMe(param) {

    console.log(param);
  },
  getScancode: function() {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        var result = res.result;

        _this.setData({
          result: result,
        })
      }
    })
  },
  viewA(param) {
    console.log(param);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options);
    qrcode = new QRCode('canvas', {
      text: "code=0000000000000",
      width: 150,
      height: 150,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
    showView: (options.showView == "true" ? false : true);
  },
  tapHandler: function(e) {
    if (this.data.inputext == "") {
      wx.showToast({
        title: '请输入内容！',
        icon: 'none',
        duration: 2000 //持续的时间
      })
      return false;
    }
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    });

    console.log(this.data.inputext)
    // qrcode.makeCode(e.target.dataset.code); //用元素对应的code更新二维码
    qrcode.makeCode(this.data.inputext); //用元素对应的code更新二维码
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})