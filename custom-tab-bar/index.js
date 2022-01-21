const app = getApp()
Component({
    data: {
      selected: 0,
      color: "#7A7E83",
      selectedColor: "#07c160",
      fontWeight:'bold',
      showTab: true,
      "list": [
        {
            "pagePath": "/pages/index/index",
            "text": "首页",
            "iconPath": "/images/tab/index.png",
            "selectedIconPath": "/images/tab/index_select.png"
        },
        {
            "pagePath": "/pages/address/address",
            "text": "通讯录",
            "iconPath": "/images/tab/address.png",
            "selectedIconPath": "/images/tab/address_select.png"
        },
        {
            "pagePath": "/pages/add/add",
            "text": "新建",
            "iconPath": "/images/tab/add.png",
            "selectedIconPath": "/images/tab/add_select.png",
            "isSpecial":true
        },
        {
            "pagePath": "/pages/message/message",
            "text": "消息",
            "iconPath": "/images/tab/message.png",
            "selectedIconPath": "/images/tab/message_select.png"
        },
        {
            "pagePath": "/pages/user/user",
            "text": "我的",
            "iconPath": "/images/tab/user.png",
            "selectedIconPath": "/images/tab/user_select.png"
        }
    ]
    },
    attached() {
    },
    ready () {
      this.setData({
        selected: app.globalData.currentTab
      })
    },
    methods: {
      switchTab(e) {
        const index = e.currentTarget.dataset.index
        const path = e.currentTarget.dataset.path
        app.globalData.currentTab = index
        wx.switchTab({
          url: path,
        })
      }
    }
  })