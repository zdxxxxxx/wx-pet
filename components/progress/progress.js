Component({
    options: {
        multipleSlots: true
    },
    data: {
        total: 185,
        cur_width: 0,
    },
    properties: {
        percent: {
            type: Number,
            value: 5,
            observer: function (newVal, oldVal, changedPath) {
                this.setWidth(newVal)
            }
        }
    },
    attached() {
        this.setWidth(this.data.percent)
    },
    methods: {
        setWidth(percent) {
            this.setData({
                cur_width: this.data.total * (percent / 100)
            })
        }
    }
})