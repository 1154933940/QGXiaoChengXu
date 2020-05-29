// pages/newsList/newsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topBars: [{
        id: 1,
        name: "关注"
      },
      {
        id: 2,
        name: "推荐"
      },
      {
        id: 3,
        name: "直播"
      },
      {
        id: 4,
        name: "影视"
      },
      {
        id: 5,
        name: "新闻"
      }
    ],
    selectBar:1,
    newsList: [
    //   {
    //   "id": 1,
    //   "userName": "Ace",
    //   "headUrl": "/resource/images/UserHeaders/user1.jpg",
    //   "isFocus": true,
    //   "newsTitle": "只争朝夕，不负韶华",
    //   "isVideo": true,
    //   "videoUrl": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    //   "newsText": "",
    //   "newsAbstrack": null,
    //   "imageUrls": null,
    //   "isOriginal": true,
    //   "createTime": "2020-03-05T15:58:00"
    // }, {
    //   "id": 2,
    //   "userName": "Ace",
    //     "headUrl": "/resource/images/UserHeaders/user1.jpg",
    //   "isFocus": false,
    //   "newsTitle": "特朗普：希望中国购买美国生产的喷气发动机",
    //   "isVideo": false,
    //   "videoUrl": null,
    //   "newsText": "<p><span>【特朗普：希望中国购买美国生产的喷气发动机 国家安全不是“挡箭牌”】</span><span>格隆汇2月19日丨特朗普政府此前考虑阻止通用电气公司向中国出口LEAP-1C航空发动机。不过，特朗普最新表示，周二拒绝了美国国会提出的一些对中国贸易的限制，他说，“美国国家安全”不可以被当作给那些与美国进行贸易的国家制造麻烦的借口。特朗普在推特写道：“美国不可以也不会变成一个让那些计划购买美国商品的国家难以打交道的国家，包括永远也不会以美国国家安全为借口在内，否则，我们的企业为了保存竞争力，就会被迫离开美国。”同时他在推特补充说：“譬如，我希望中国购买我们的喷气式发动机，世界上最好的喷气式发动机。”</span></p><image src='../../resource/images/NewsImages/news1.jpg' alt=''/>",
    //   "newsAbstrack": "【特朗普：希望中国购买美国生产的喷气发动机】财联社2月19日讯，美国特朗普总统周二拒绝美国国会提出的一些对中国贸易的限制",
    //   "imageUrls": "../../resource/images/NewsImages/news1.jpg",
    //   "isOriginal": true,
    //   "createTime": "2020-03-05T15:58:00"
    // }
    ]
  },
  clickType(param){
   this.setData({
     selectBar: param.currentTarget.dataset.id,
   })
  },
  getNewsList(){
   var that = this;
    wx.request({
      url: 'https://localhost:44313/main/getnewslist',
      success: res=>{
       var newslist = res.data;
        this.setData({
         newsList: newslist
       })
        console.log(newslist);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getNewsList();
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