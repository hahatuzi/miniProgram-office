// components/things/things.js
import {week} from '../../utils/date'
import Dialog from '@vant/weapp/dialog/dialog';
const app = getApp()
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
        showCalendar: false,
        date:'',
        today: '',
        activeDay: 0,
        curDay: new Date().getDate(),
        daysList:[],
        thingsList:[{
            type:'请假',
            status:'待处理',
            id: 1,
            time:'2021/12/30 16:32:27',
            total:'一天',
            header_pic:'/images/header.png',
            name: 'lisa',
            date: '2021/12/30 16:31:27'
        },
        {
            type:'请假',
            status:'已完成',
            id: 2,
            time:'2021/12/30 16:32:27',
            total:'一天',
            header_pic:'/images/header.png',
            name: 'lisa',
            date: '2021/12/30 16:31:27'
        },
        {
            type:'外出',
            status:'待处理',
            id: 3,
            time:'2021/12/30 16:32:27',
            header_pic:'/images/header.png',
            name: 'lisa',
            date: '2021/12/30 16:31:27',
            company:'徐家汇国际大厦',
            people:'王春晖'
        },
        {
            type:'外出',
            status:'待处理',
            id: 3,
            time:'2021/12/30 16:32:27',
            header_pic:'/images/header.png',
            name: 'lisa',
            date: '2021/12/30 16:31:27',
            company:'徐家汇国际大厦',
            people:'王春晖'
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // more
        showCalendar () {
            this.getTabBar().setData({showTab:false})
            this.setData({ showCalendar: true })
        },
        formatDate(date) {
            date = new Date(date);
            return `${date.getMonth() + 1}/${date.getDate()}`;
          },
          onConfirm(event) {
              setTimeout(()=>{
                this.getTabBar().setData({showTab:true})
              },300)
            this.setData({
                showCalendar: false,
                daysList:this.getDaysList(event.detail),
                today: this.handleToday(event.detail)
            })
          },
          onClose () {
            setTimeout(()=>{
                this.getTabBar().setData({showTab:true})
              },300)
            this.setData({ showCalendar: false })
          },
          // choose7
        changeActive (e) {
          this.setData({
              activeDay: e.target.dataset.index
          })
        },
        handleToday (data) {
            let curDate = data || new Date()
            const year = curDate.getFullYear()
            const month = curDate.getMonth() + 1
            const date = curDate.getDate()
            const day = week(curDate.getDay())
            return year + '年' + month + '月'+ date + '日' + ' ' + day
        },
        getDaysList (data) {
            const  today = data || new Date()
            let curDay = today.getDate()
            let list = []
            for(let i = 0;i<7;i++){
                list.push(curDay)
                curDay++
            }
            return list
        },
        handleStatus (e) {
            this.getTabBar().setData({showTab: false})
            const _this = this
            const res = e.target.dataset.item
            const type = e.target.dataset.type=== 'agree'?'同意':'拒绝'
            Dialog.confirm({
                title: res.type + '申请',
                context: _this,
                message: `请再次确认是否${type}${res.name}${res.type}${type === '同意' ?res.total:''}`,
              }).then(() => {
                // on close
                const value = _this.data.thingsList.reduce((result,item)=>{
                    if (item.id === res.id) {
                        type === '同意' ? res.status = '已完成' : res.status = '已驳回'
                        item = res
                    }
                    result.push(item)
                    return result
                },[])
                _this.setData({
                  thingsList:value
                })
                setTimeout(()=>{
                    this.getTabBar().setData({showTab:true})
                  },300)
              })
              .catch(() => {
                setTimeout(()=>{
                    this.getTabBar().setData({showTab:true})
                  },300)
              })
        }
    },
    lifetimes:{
        attached:function () {
            this.setData({
                currentTab: app.globalData.currentTab,
                daysList:this.getDaysList(),
                today: this.handleToday()
            })
        }
    }
})
