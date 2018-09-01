//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bottomBtns: [{
      iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E7%8E%A9%E5%85%B7.png',
      modelType: 'toy',
      text: '玩具',
    }, {
      iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_zuorenwu.png',
      modelType: 'task',
      text: '做任务',
    }],
    bottomBtn: {
      iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E5%9C%B0%E5%9B%BE.png',
      page: 'map',
      text: '地图',
    },
    animals: [{
      index: 0,
      bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/bg1.png',
      pet: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E5%8A%A8%E7%89%A9-%E9%BA%8B%E9%B9%BF.png',
      food: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E9%A3%9F%E7%89%A9-%E7%B4%A0%E9%A3%9F.png',
      progress: 40,
      name: '麋鹿'
    }, {
      index: 1,
      bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/bg2.png',
      pet: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E5%8A%A8%E7%89%A9-%E5%8C%97%E6%9E%81%E7%86%8A.png',
      food: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E9%A3%9F%E7%89%A9-%E9%B1%BC.png',
      progress: 60,
      name: '北极熊'
    }],
    current: {
      bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/bg1.png',
      pet: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E5%8A%A8%E7%89%A9-%E9%BA%8B%E9%B9%BF.png',
      food: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E9%A3%9F%E7%89%A9-%E7%B4%A0%E9%A3%9F.png',
      progress: 40,
      index: 0
    },
    userInfo: {},
    indicatorDots: false,
    autoplay: false,
    duration: 500,
    circular: true,
    showTask: false,
    showToy: false
  },
  onLoad: function () {
    let userInfo = wx.getStorageSync('userInfo');
    let token = wx.getStorageSync('token');
    if (!userInfo) {
      app.getUserInfo().then((resArg) => {
        this.setUserInfo(resArg);
      })
    } else {
      this.setUserInfo(JSON.parse(userInfo));
    }

    // if (!token) {
    app.getToken().then(() => {
      this.getData()
    })
    // } else {
    //   this.getData()
    // }
  },
  getData() {
    wx.requestWithCookie({
      url: `/user/info`,
      method: 'GET',
      data: {

      },
      success: (res) => {
        console.log(res);
      },
      fail() {}
    })
  },
  getAnimals() {
    wx.requestWithCookie({
      url: `/user/userAnimal`,
      method: 'GET',
      data: {

      },
      success: (res) => {
        console.log(res);
      },
      fail() {}
    })
  },
  convertData(data) {

  },
  setUserInfo(info) {
    console.log(info)
    this.setData({
      userInfo: info
    })
  },
  go: function (e) {
    const {
      page
    } = e.target.dataset;
    wx.navigateTo({
      url: `../${page}/${page}`
    });
  },
  show: function () {
    const {
      animals
    } = this.data;
    this.setData({
      animals: animals.map(item => {
        item.progress = Math.ceil(Math.random() * 100);
        return item;
      })
    })
  },
  silder(value) {
    const {
      current
    } = value.detail;
    this.setData({
      current: this.data.animals[current]
    })
  },
  showModel(e) {
    const {
      model
    } = e.currentTarget.dataset;
    if (model === 'toy') {
      this.setData({
        showJoy: true
      })
    } else if (model === 'task') {
      this.setData({
        showTask: true
      })
    }
  },
  feed() {

  }
})