Component({
    options: {
        multipleSlots: true
    },
    data: {
        avatarUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E5%A4%B4%E5%83%8F-default.png'
    },
    properties: {
        avatar: {
            type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E5%A4%B4%E5%83%8F-default.png', // 属性初始值（可选），如果未指定则会根据类型选择一个
            observer: function (newVal, oldVal, changedPath) {
                this.setData({
                    avatarUrl: newVal ? newVal : 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E5%A4%B4%E5%83%8F-default.png'
                })
            }
        }
    },
    methods: {
        setUserInfo: function (e) {
            const {
                detail
            } = e;
            if (detail.errMsg === "getUserInfo:ok") {
                this.setData({
                    avatarUrl: detail.userInfo.avatarUrl
                })
            }
        }
    }
})