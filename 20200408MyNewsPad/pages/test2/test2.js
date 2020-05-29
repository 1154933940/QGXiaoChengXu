// pages/test2/test2.js
Page({

  //MVVM => M:Model V:View VM:ViewModel
  /**
   * 页面的初始数据
   */
  data: {
    // msg:"<b class='msg-style'>Hello world</b>",
    msg: "Hello world",
  },
  changeMsg() {

    //this.data.msg = "你好世界";
    this.setData({
      msg: "你好世界",
    })
    console.log(this.data.msg)
  },
  toast() {
    // wx.showLoading({
    //   title: '加载中',
    // })
    // wx.showToast({
    //   title: '成功',
    //   icon:"loading",

    // })

    // setTimeout(function(){
    //   wx.hideLoading();
    // },2000)

    wx.showModal({
      title: '您确定吗',
      content: '您确定吗您确定吗您确定吗您确定吗',
      success(res) {
        if (res.confirm)
          console.log("点击的是确定");
        else
          console.log("点击的是取消");
      }
    })
  },
  jumpTo() {
    wx.navigateTo({
      url: '/pages/test/test?id=1',
    })
  },
  getdata() {
    wx.request({
      url: 'https://localhost:44313/main/getnewslist',
      data:{},
      header:{
        'content-type':"application/json"
      },
      success(res){
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

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