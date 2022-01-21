Component({
  properties: {
    // 控制小眼睛是否睁开
    close:{
      type: Boolean,
      value: true
    },
    // 用于确定当页面中同时多个小眼睛时的点击对象
    eye_type:{
      type: String,
      value: ''
    }
  },
  methods: {
    // 切换密码的显示隐藏状态
    handleStatus(e) {
      this.setData({
        close: e.currentTarget.dataset.status
      })
      this.triggerEvent('changeEye',{close:this.data.close,eye_type:this.data.eye_type})
    }
  }
})
