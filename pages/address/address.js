
Page({
  data: {
    value: '',
    activeNames: [],
    addressData:[{
      department:'综合管理部',
      member :[{
        name: '王春晖',
        profile:'/images/header.png',
        comment: '10354',
        email:'1112@qq.com'
      }]
    },
    {
      department:'综合业务部',
      member :[{
        name: '王春晖',
        profile:'/images/header.png',
        comment: '10854',
        email:'1112@qq.com'
      }]
    },
    {
      department:'发展中心',
      member :[{
        name: '王春晖',
        profile:'/images/header.png',
        comment: '10854',
        email:'1112@qq.com'
      }]
    },
    {
      department:'数据中心',
      member :[{
        name: '王春晖',
        profile:'/images/header.png',
        comment: '10854',
        email:'1112@qq.com'
      }]
    }]
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  changeCollapse(e) {
    this.setData({
      activeNames: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
    Toast('搜索' + this.data.value);
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  }
})
