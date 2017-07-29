var API_URL='https://api.douban.com/v2/movie/top250';

Page({

  data: {
    movies:[]
  },
  onLoad:function(){
    wx.showToast({
      title:"加载中...",
      icon:"loading",
      duration:10000
    });
    wx.request({
      url:API_URL,
      data:{},
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        console.log(res.data);
      }
    });
  }

})