// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   active: 0,
   messageList:[{
     messageType:'我的申请',
     data:[{
      type:'请假',
      status:0,
      time:'2021年12月30日 16:32:27',
      header_pic:'/images/header.png',
      name: 'lisa',
      date: '2021年12月30日 16:31:27'
     },
     {
      type:'请假',
      status:0,
      time:'2021年12月30日 16:32:27',
      header_pic:'/images/header.png',
      name: 'lisa',
      date: '2021年12月30日 16:31:27'
     }]
   },
   {
    messageType:'经我审批',
    data:[{
     type:'请假',
     status:'待处理',
     time:'2021年12月30日 16:21:27',
     header_pic:'/images/header.png',
     name: 'lisa',
     date: '2021年12月30日 16:31:27'
    }]
  },
  {
    messageType:'被驳回',
    data:[{
     type:'请假',
     status:'已完成',
     time:'2021年12月30日 16:30:27',
     header_pic:'/images/header.png',
     name: 'lisa',
     date: '2021年12月30日 16:31:27'
    }]
  }]
  },
  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
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
  }
})
