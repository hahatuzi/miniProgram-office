// components/takeoff/takeoff.js
import {formatTime} from '../../utils/util'
import {diffTime} from '../../utils/date'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    minHour: 0,
    maxHour: 24,
    minDate: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),new Date().getHours()).getTime(),
    maxDate: new Date().setFullYear(new Date().getFullYear() + 1),
    currentDate: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),new Date().getHours()).getTime(),
    total_time: [],
    leaveInfo:[{
      title:'请假类型',
      type:'leave_type',
      value:''
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
        return options.filter((option) => option === '00');
      }
      return options
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLeave () {
      Toast.success('请假申请提交成功')
    },
    showPopup (e) {
      this.getTabBar().setData({showTab:false})
      this.setData({
        show: true,
        popType:e.target.dataset.poptype
     })
    },
    onClose() {
      setTimeout(()=>{
        this.getTabBar().setData({showTab:true})
      },300)
      this.setData({ show: false })
    },
    handleConfirm(event) {
      setTimeout(()=>{
        this.getTabBar().setData({showTab:true})
      },300)
      const res = this.data.leaveInfo.map((item,index)=>{
        if (item.type === 'leave_type') {
          item.value = event.detail.name
        } else if (item.type === this.data.popType) {
          item.value =  formatTime(new Date(event.detail))
        }
        if (item.type === 'end_time') {
          const data = diffTime(this.data.leaveInfo[1].value,this.data.leaveInfo[2].value)
          this.setData({
            total_time:data
          })
        }
        return item
      })
      this.setData({
        show: false,
        leaveInfo: res
      })
    }
  }
})
