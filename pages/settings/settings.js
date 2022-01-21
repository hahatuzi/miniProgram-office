// pages/setting/setting.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      img:'../../images/header.png',
      alterImage: false,
      settingType: '',
      eye1: true,
      eye2: true,
      password:'',
      confirm_password:'',
      info:[{
        label: '头像',
        type:'image',
        value: '../../images/header.png'
      },
      {
        label: '昵称',
        type:'name',
        value: '王春晖'
      }]
    },
    changeEye (e) {
      const type = e.detail.eye_type
      this.setData({
        [type]:e.detail.close
      })
    },
      // 点击头像
    imagePopup () {
      const _this = this
      wx.chooseMedia({
        count: 1,
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles[0].tempFilePath
          _this.setData({
            img: tempFilePaths
          })
        }
      })
    },
    handleImage (e) {
      const type = e.target.dataset.type
      if (type === '1') {
        wx.chooseMedia({
          count: 1,
          success (res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
          }
        })
      } else {
        wx.previewImage({
          complete:function (res) {
            console.log(res)
          }
        })
      }
    },
    savePassword () {
        if (this.data.password !== this.data.confirm_password) {
            Toast.fail('两次密码不一致，请重新输入');
        } else {
            Toast.success('密码修改成功')
            setTimeout(()=>{

        wx.switchTab({
            url: '/pages/user/user',
          })
        },1000)
    }
},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        settingType: options.type
      })
      wx.setNavigationBarTitle({
        title: options.type === '1' ?'设置' : '密码修改',
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