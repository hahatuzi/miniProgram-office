// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    recordMain: [
      {
      title: "待办事项"
      },
      {
      title: "远程考勤"
      },
      {
      title: "请假外出"
      },
      {
      title: "外出查询"
      }],
     currentTab: 0,
    curtime:'',
    timer:''
  },
  // 点击标题切换当前页时改变样式
  switchNav:function(e) {
    var cur = e.currentTarget.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
      currentTab: cur
      })
    }
  },
  // 滚动切换标签样式 
  switchTab: function(e) {
    this.setData({
    currentTab: e.detail.current
    })
  },
  getTime () {
    let hh = new Date().getHours()
    let mm = new Date().getMinutes()
    let ss = new Date().getSeconds()
    if (hh < 10) hh = '0' + hh
    if (mm < 10) mm = '0' + mm
    if (ss < 10) ss = '0' + ss
    const time = hh + ':' + mm + ':' + ss
    this.setData({
      curtime: time
    })
  },
  onPullDownRefresh () {
    const location_comp = this.selectComponent('.location_comp')
    location_comp.handlePosition(
      ()=>{wx.stopPullDownRefresh()}
    )
  },
  onShow(){
    this.setData({
      currentTab: 0,
      timer:setInterval(()=>{
        this.getTime()
      },1000)
    })
  },
  onHide () {
    clearInterval(this.data.timer)
  }
})
