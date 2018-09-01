//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        bottomBtn: {
            iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E4%BF%9D%E6%8A%A4%E5%8C%BA.png',
            page: 'index',
            text: '保护区',
        },
        maps: [{
            index: 0,
            bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/bg_%E5%9C%B0%E5%9B%BE_%E6%9E%81%E5%9C%B0.png',
            name: '北极',
        }, {
            index: 1,
            bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/bg_%E5%9C%B0%E5%9B%BE_%E5%8D%8E%E5%8C%97.png',
            name: '华北地区'
        }],
        current: {
            index: 0,
            bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/bg_%E5%9C%B0%E5%9B%BE_%E6%9E%81%E5%9C%B0.png',
            name: '北极'
        },
        userInfo: {},
        indicatorDots: false,
        autoplay: false,
        duration: 500,
        circular: true
    },
    onLoad: function () {

    },
    getData() {

    },
    setUserInfo(info) {
        console.log(info)
        this.setData({
            userInfo: info
        })
    },
    go: function (e) {
        const {
            page
        } = e.target.dataset;
        wx.navigateTo({
            url: `../${page}/${page}`
        });
    },
    show: function () {
        const {
            imgUrls
        } = this.data;
        this.setData({
            imgUrls: imgUrls.map(item => {
                item.progress = Math.ceil(Math.random() * 100);
                return item;
            })
        })
        // wx.showModal({
        //   title: '攻略',
        //   content: '攻略......',
        //   showCancel: false,
        //   confirmText: '知道了',
        //   success: function (res) {
        //     if (res.confirm) {
        //       console.log('用户点击确定')
        //     } else if (res.cancel) {
        //       console.log('用户点击取消')
        //     }
        //   }
        // })
    },
    silder(value) {
        const {
            current
        } = value.detail;
        this.setData({
            current: this.data.maps[current]
        })
    }
})