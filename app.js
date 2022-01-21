// app.js
var QQMapWX = require('./libs/qqmap-wx-jssdk.js')
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    this.globalData.qqmapsdk = new QQMapWX({
        key: 'FBPBZ-R36HS-F3KO5-6LFZJ-BVLI7-G6FMN'
    })
  },
  globalData: {
    qqmapsdk:{},
    userInfo: null,
    currentTab: 0
  }
})
