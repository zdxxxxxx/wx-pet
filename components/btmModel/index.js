Component({
    options: {
        multipleSlots: true,

    },
    properties: {
        icon: {
            type: String,
            value: ''
        },
        heightPercent: {
            type: Number,
            value: 40,
            observer: function (newVal, oldVal, changedPath) {
                this.getHeight(newVal);
            }
        },
        show: {
            type: Boolean,
            value: false,
        }
    },
    data: {
        height: 200
    },

    attached: function () {
        this.getHeight(this.data.heightPercent)
    },
    methods: {
        hide: function () {
            this.setData({
                show: false
            })
        },
        getHeight(percent) {
            let that = this;
            wx.getSystemInfo({
                success: function (res) {
                    that.setData({
                        height: res.windowHeight * 2 * percent / 100
                    })
                }
            })
        }
    }
})