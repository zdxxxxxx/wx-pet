Page({
    data: {
        times: 0,
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
        result: {},
        userData: {}
    },

    onLoad: function () {
        this.initEggs();
        this.getData();
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
        this.getResult()
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
                this.over()
            }, 1500)
        }, 500)
    },
    over: function () {
        setTimeout(() => {
            this.setData({
                lock: false,
                start: false,
                exit: false,
                scale: false,
                open: false,
            })
            wx.showModal({
                title: '恭喜扭到保护动物啦',
                content: this.data.result.describe,
                showCancel: false,
                confirmText: '去看看',
                success: function (res) {
                    if (res.confirm) {
                        wx.redirectTo({
                            url: `../index/index`
                        });
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        })
    },
    getResult() {
        wx.requestWithCookie({
            url: `/animal/new`,
            method: 'GET',
            data: {

            },
            success: (res) => {
                this.setData({
                    result: res.data.new_animal
                })
            },
            fail() {}
        })
    },
    getData() {
        wx.requestWithCookie({
            url: `/user/info`,
            method: 'GET',
            data: {

            },
            success: (res) => {
                this.setData({
                    userData: res.data,
                    times: res.data.chance
                })
            },
            fail() {}
        })
    },
})