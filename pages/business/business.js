// pages/business/business.js
const App = getApp()
Page({
data: {
  showTest: false,
  showpeople: false,
  showdate: false,
  showtime:false,
  curClickTarget:'',
  options:[{
    label:'外出人员名单',
    type:'people',
    value:[]
  },
  {
    label:'外出日期选择',
    type:'date',
    value:''
  },
  {
    label:'外出时段选择',
    type:'time',
    value:''
  },
  {
    label:'外出单位选择',
    type:'company',
    value:''
  },
  {
    label:'外出单位地址',
    type:'address',
    value:''
  }],
  person: '',
    namelist:[],
    showList: false,
    show: false,
    time:[],
    columns: ['上午', '下午', '全天'],
    date:'',
    active: 0,
    longitude:'',
    latitude:'',
    activeNames: ['1'],
    destinationInfo:{}
  },
  closePopup (e) {
    const _this = this
    const type = e.target.dataset.type
    this.setData({
      [type]: !_this.data[type]
    })
  },
  handleClick (e) {
    const item = e.target.dataset.item
    if (item.type === 'company' || item.type === 'address') {
      Object.keys(this.data.destinationInfo).length === 0 ? this.choosePosition() : this.openLocation()
      return
    }
    let str = 'show' + item.type
    const status = this.data[str]
    this.setData({
      [str]: !status
    })
  },
  test () {
    const value = !this.data.showTest
    this.setData({
      showTest:value
    })
  },
  showPopup() {
    this.setData({ show: true });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  },
  onConfirm(event) {
    const time = []
    // time.push(this.formatDate(event.detail))?
    const type = event.target.dataset.type
    const res = this.data.options.map(item=>{
      if (item.type === 'date' && type === 'showdate') item.value = this.formatDate(event.detail)
      if (item.type === 'time' && type === 'showtime') item.value = event.detail.value
      return item
    })
    this.setData({
      [type]: !this.data[type],
      options: res
      // active:1
    });
  },
  // 人员输入框变化
  changeValue(e) {
    this.setData({
      person: e.detail,
    });
  },
  // 选择外出人员
  choosePeople (e) {
    this.data.namelist.push(this.data.person)
    const data = this.data.options.map(item=>{
      if (item.type === 'people'){
        item.value = this.data.namelist.join('，')
      }
      return item
    })
    this.setData({
      showList: true,
      namelist:this.data.namelist,
      options: data,
      person: ''
    })
  },
  // 删除某外出成员
  canclePeople(event) {
    const item = event.target.dataset.people
    const index = this.data.namelist.indexOf(item)
    if (index > -1) {
      this.data.namelist.splice(index, 1)
    }
    const data = this.data.options.map(item=>{
      if (item.type === 'people'){
        item.value = this.data.namelist.join('，')
      }
      return item
    })
    this.setData({
      namelist:  this.data.namelist,
      options: data
    })
  },
  openLocation () {
    wx.openLocation({
      latitude: this.data.destinationInfo.latitude,
      longitude: this.data.destinationInfo.longitude,
      success:function (res) {
        console.log(res)
      }
    })
  },
  choosePosition () {
    const _this = this
    wx.chooseLocation({
      latitude: _this.data.latitude,
      longitude: _this.data.longitude,
      success: function (res) {
        const data = _this.data.options.map(item=>{
          if (item.type === 'company') item.value = res.name
          if (item.type === 'address') item.value = res.address
          return item
        })
        _this.setData({
          destinationInfo :res,
          options: data
        })
    },
    fail: function (res) {
        console.log(res);
    },
    complete: function (res) {
        console.log(res);
    }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this
    wx.getLocation({
      isHighAccuracy:true,
      type: 'gcj02',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        _this.setData({
          latitude:latitude,
          longitude:longitude
        })
      }
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