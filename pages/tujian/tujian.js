//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    toggle:true,
    list:[{
      title:"北极熊",
      picUrl:"https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%89%AD%E8%9B%8B.png",
      message:"正宗好凉茶，正宗好声音，您现在收看的是由加多宝凉茶独家赞助播出的中国好声音",
      show:true
    },{
      title:"北极熊",
      picUrl:"https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%89%AD%E8%9B%8B.png",
      message:"正宗好凉茶，正宗好声音，您现在收看的是由加多宝凉茶独家赞助播出的中国好声音",
      show:true
    },{
      title:"北极熊",
      picUrl:"https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%89%AD%E8%9B%8B.png",
      message:"正宗好凉茶，正宗好声音，您现在收看的是由加多宝凉茶独家赞助播出的中国好声音",
      show:true
    },{
      title:"北极熊",
      picUrl:"https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%89%AD%E8%9B%8B.png",
      message:"正宗好凉茶，正宗好声音，您现在收看的是由加多宝凉茶独家赞助播出的中国好声音",
      show:true
    }]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  toggle(e){
    console.log(e)
    let index = e.currentTarget.dataset.index;
    let list = this.data.list;
    list[index].show = !list[index].show;
    this.setData({
      list:list
    })
  },
  close(e){
    console.log(e)
    let index = e.currentTarget.dataset.index;
    let list = this.data.list;
    list[index].show = !list[index].show;
    this.setData({
      list:list
    })
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})