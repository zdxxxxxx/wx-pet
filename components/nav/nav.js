Component({
    options: {},
    properties: {
        title: {
            type: String,
            value: ''
        }
    },
    data: {
        // 弹窗显示控制
        isShow: false
    },
    attached: function () {
        let pages = getCurrentPages();
        if (pages.length > 1) {
            this.setData({
                isShow: true
            })
        }
    },
    methods: {
        onTap: function () {
            wx.redirectTo({
                url: `../index/index`
            });
        }
    }
})