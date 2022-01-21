// index.js

import Dialog from '@vant/weapp/dialog/dialog';

Page({
  data: {
      img:'../../images/header.png',
      sex: 'female',
    info:[{
      label: '备注',
      name:'remark',
      value: ''
    },
    {
      label: '部门',
      name:'department',
      value: '综合业务部'
    },
    {
      label: '岗位',
      name:'position',
      value: '前端开发'
    },
    {
      label: '手机号码',
      name:'phone',
      value: '13512454546'
    },
    {
      label: '短号',
      name:'address',
      value: '12542'
    },
    {
      label: '邮箱',
      name:'email',
      value: '12351@qq.com'
    }]
  },
  // 预览图片
  handleImage (e) {
    wx.previewImage({
      current: this.data.img, // 当前显示图片的http链接
      urls: [this.data.img], // 需要预览的图片http链接列表
      complete:function (res) {
        console.log(res)
      }
    })
  },
  // 修改密码
  handleSetting (e) {
    const type = e.target.dataset.type
    const _this = this
    wx.navigateTo({
      url: `/pages/settings/settings?type=${type}`,
    })
  },
  // 退出登录
  showLogOut () {
    Dialog.confirm({
      title: '请确认是否退出登录'
    })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  }
})
