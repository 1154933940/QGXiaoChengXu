// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  customVal: 1,
  clickMe: function() {
    console.log(this.customVal);
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
  contact(){
    console.log("联系客服");
  },
  clickMe(param){

    console.log(param);
  },
 
  viewA(param) {
    console.log(param);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
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