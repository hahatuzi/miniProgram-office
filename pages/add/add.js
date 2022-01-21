// pages/add/add.js
import Dialog from '@vant/weapp/dialog/dialog';
Page({

    /**
     * 页面的初始数据
     */
    data: {
      addInfo:[{
        title:'快捷请假',
        icon: "/images/rocket.png"
      },
      {
        title:'请假调休',
        icon: "/images/time.png",
        url:'/pages/leave/leave'
      },
      {
        title:'外出申请',
        icon: "/images/car.png",
        url:'/pages/business/business'
      },
      {
        title:'其他申请',
        icon: "/images/other.png",
        url:'/pages/leave/leave'
      }]
    },
    click (e){
      if (!e.target.dataset.url) {
        Dialog.confirm({
          title: '请假申请',
          message: `员工 当天 请假一小时`,
        }).then(() => {
          // on close
        })
        .catch(() => {
          // on cancel
        });
      }
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