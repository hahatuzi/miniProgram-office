// pages/leave/leave.js
import {formatTime} from '../../utils/util'
import {diffTime} from '../../utils/date'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({
  data: {
    minHour: 0,
    maxHour: 24,
    minDate: new Date().getTime(),
    maxDate: new Date().setFullYear(new Date().getFullYear() + 1),
    currentDate: new Date().getTime(),
    total_time: [],
    leaveInfo:[{
      title:'请假类型',
      type:'leave_type',
      value:'调休假'
    },
    {
      title:'开始时间选择',
      type:'start_time',
      value:''
    },
    {
      title:'结束时间选择',
      type:'end_time',
      value:''
    }],
    show: false,
    popType: 'leave_type',
    actions: [
      {
        name: '年假',
      },
      {
        name: '调休假',
      },
      {
        name: '病假',
      },
    ],
    filter(type, options) {
      if (type === 'minute') {
        return options.filter((option) => option % 30 === 0);
      }
      return options
    },
  },
  handleLeave () {
    Toast.success('请假申请提交成功')
  },
  showPopup (e) {
    this.setData({
      show: true,
      popType:e.target.dataset.poptype
   })
  },
  onClose() {
    this.setData({ show: false })
  },
  onConfirm(event) {
    this.data.leaveInfo.forEach((item,index)=>{
      let value = 'leaveInfo['+ index + '].value'
      if (item.type === 'leave_type') {
        this.setData({
          show: false,
         [value]:event.detail.name
        })
      } else if (item.type === this.data.popType) {
        this.setData({
          show:false,
          [value]: formatTime(new Date(event.detail))
        })
      }
      if (item.type === 'end_time') {
        const data = diffTime(this.data.leaveInfo[1].value,this.data.leaveInfo[2].value)
        this.setData({
          total_time:data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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