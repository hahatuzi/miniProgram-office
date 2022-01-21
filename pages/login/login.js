import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      phone: '',
      password:''
    },
    close:true,
motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // getUserInfo () {
  //   wx.getSetting({
  //     success (res){
  //       console.log(res)
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称
  //         wx.getUserInfo({
  //           success: function(res) {
  //             console.log(res.userInfo)
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  // // 切换密码的显示隐藏状态
  changeEye(e) {
    this.setData({
      close: e.detail.close
    })
  },
  handleForm(e) {
    const value = 'form.' +e.target.dataset.item
    this.setData({
      [value]: e.detail.value
    })
  },
  // 微信用户一键登录
  login (e) {
    if(!this.data.form.phone) {
      Toast('手机号码不能为空')
      return
    }
    if(!this.data.form.password) {
      Toast('密码不能为空')
      return
    }
    // const value = 'form[' +e.target.dataset.item+ ']'
    this.setData({
      value: e.detail.value
    })
    wx.setStorage({
      key: "mock_token",
      data: "qabgadnhsruf326yhbtewdvx",
      encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
      success() {
        wx.getStorage({
          key: "mock_token",
          encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
          success(res) {
            console.log(res.data)
          }
        })
      }
    })
    wx.switchTab({
      url: '/pages/index/index',
    })
    app.globalData.currentTab = 0
  },
  handlePhone(e) {
    console.log(e)
  },
  onLoad() {
    wx.login({
      success (res) {
        if (res.code) {
          console.log(res)
          // //发起网络请求
          // wx.request({
          //   url: 'https://example.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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