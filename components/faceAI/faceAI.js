// components/faceAI/faceAI.js
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
    ctx:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    takePhoto() {
      this.data.ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          this.setData({
            src: res.tempImagePath
          })
          wx.initFaceDetect({
            success (res) {
              wx.faceDetect({
                success (res) {
                  console.log(res)
                }
              })
            },
            fail (res) {
              console.log(res,'fail')
            },
            complete (res) {
              console.log(res,'complete')
            }
          })
        },
        error(e) {
          console.log(e.detail)
        }
      })
    }
  },
  attached () {
    wx.authorize({
      scope: 'scope.camera',
    })
    const ctx = wx.createCameraContext()
    this.setData({
      ctx
    })
  }
})
