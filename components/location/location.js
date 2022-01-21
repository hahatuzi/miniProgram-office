// components/location/location.js
const App = getApp()
Component({
  properties:{
    curtime:''
  },
  data:{
    inside:false,
    staff:{
      name:'王春晖',
      rules:'基本考勤组/远程',
      date:'2022年1月11日',
      point:'上海市徐汇区五洲国际大厦'
    }
  },
  methods:{
    handlePosition (callback) {
      wx.showLoading({
        title: '数据刷新中...',
      })
      const _this = this
      App.globalData.qqmapsdk.geocoder({
        address: _this.data.staff.point, //地址参数，例：固定地址，address: '肇嘉浜路807号'
        success: function(res) {
          const result = res.result;
          const data = {
            latitude: result.location.lat,
            longitude: result.location.lng
          }
          App.globalData.qqmapsdk.calculateDistance({
            from: '',
            to: [data],
            success: function(res) {
              const info = res.result
              // if (info.elements[0].distance < 8000) {
                _this.setData({
                  inside: true
                })
              // }
            }
        })
        },
        fail: function(error) {
          console.error(error);
        },
        complete:function () {
          wx.hideLoading()
          callback && callback()
        }
      })
    }
  },
  attached:function(){
    this.handlePosition()
  }
})
