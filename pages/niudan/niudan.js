Page({
    data: {
        times: 3,
        lock: false,
        start: false,
        exit: false,
        scale: false,
        open: false,
        eggs: [],
        eggImgUrls: [
            'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/hong.png',
            'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/lan.png',
            'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/zi.png',
        ],
        exitEgg: {},
        shake: false,
    },

    onLoad: function () {
        this.initEggs();
    },
    initEggs: function () {
        const {
            eggImgUrls
        } = this.data;
        const eggs = []
        for (let i = 0; i < 15; i++) {
            let rd = Math.floor(Math.random() * 3);
            let egg = {
                id: i,
                url: eggImgUrls[rd]
            }
            eggs.push(egg);
        }
        const exitEgg = {
            url: eggImgUrls[Math.floor(Math.random() * 3)]
        }
        this.setData({
            eggs: eggs,
            exitEgg: exitEgg
        })
    },
    start: function (e) {
        const {
            times,
            lock,
        } = this.data;
        if (lock) {
            return;
        }
        if (times === 0) {
            wx.showModal({
                title: '提示',
                content: '没有扭蛋次数啦！！！',
                showCancel: false,
                confirmText: '知道了',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
            return;
        }
        let newTimes = times - 1;
        this.setData({
            lock: true,
            times: newTimes,
            start: true
        })
        setTimeout(() => {
            this.setData({
                start: false,
                exit: true
            })
            setTimeout(() => {
                this.openEgg()
            }, 1000)
        }, 4000)
    },
    openEgg: function () {
        this.setData({
            exit: false,
            scale: true
        })
        setTimeout(() => {
            this.setData({
                open: true
            })
            setTimeout(() => {
                this.getResult()
            }, 1500)
        }, 500)
    },
    getResult: function () {
        setTimeout(() => {
            this.setData({
                lock: false,
                start: false,
                exit: false,
                scale: false,
                open: false,
            })
        })
    }
})