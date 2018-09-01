var cookieUtil = require('./utils/cookie/req-with-cookies')
var host = require('./utils/env')
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              wx.setStorage({
                key: 'userInfo',
                data: JSON.stringify(res.userInfo)
              })
            }
          })
        }
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              console.log('allow location')
            }
          })
        }
      }
    })


  },
  getUserInfo() {
    return new Promise((resolve, reject) => {
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                this.globalData.userInfo = res.userInfo
                wx.setStorage({
                  key: 'userInfo',
                  data: JSON.stringify(res.userInfo)
                })
                resolve(res.userInfo)
              },
              fail() {
                reject();
              }
            })
          }
        }
      })
    })
  },
  getToken() {
    return new Promise((resolve, reject) => {
      // 登录
      wx.login({
        success: res => {
          if (res.code) {
            wx.request({
              url: `${host.host}/login`,
              method: 'POST',
              data: {
                code: res.code
              },
              success: (res) => {
                if (res.statusCode == 200 && res.data) {
                  wx.setStorage({
                    key: 'token',
                    data: res.data.data.token
                  });
                  var resArg = res.data.data.token;
                  resolve(resArg)
                }
              },
              fail() {
                reject();
              }
            })
          }
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    host: host.host
  }
})