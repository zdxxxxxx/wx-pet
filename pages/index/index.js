//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        bottomBtns: [{
            iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E7%8E%A9%E5%85%B7.png',
            modelType: 'toy',
            text: '玩具',
        }, {
            iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_zuorenwu.png',
            modelType: 'task',
            text: '做任务',
        }],
        bottomBtn: {
            iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E5%9C%B0%E5%9B%BE.png',
            page: 'map',
            text: '地图',
        },
        animals: [{
            index: 0,
            bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/bg1.png',
            pet: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E5%8A%A8%E7%89%A9-%E9%BA%8B%E9%B9%BF.png',
            food: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E9%A3%9F%E7%89%A9-%E7%B4%A0%E9%A3%9F.png',
            progress: 40,
            name: '麋鹿',
            health: 80,
            level: 3,
            grow: 40
        }, {
            index: 1,
            bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/bg2.png',
            pet: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E5%8A%A8%E7%89%A9-%E5%8C%97%E6%9E%81%E7%86%8A.png',
            food: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E9%A3%9F%E7%89%A9-%E9%B1%BC.png',
            progress: 60,
            name: '北极熊',
            health: 60,
            level: 4,
            grow: 70
        }],
        current: {
            bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/bg1.png',
            pet: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E5%8A%A8%E7%89%A9-%E9%BA%8B%E9%B9%BF.png',
            food: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/%E9%A3%9F%E7%89%A9-%E7%B4%A0%E9%A3%9F.png',
            progress: 40,
            name: '麋鹿',
            health: 80,
            level: 3,
            grow: 40,
            index: 0
        },
        taskListItemMap: {
            qiandao: {
                bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/bar_%E9%BB%84.png',
                title_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/%E7%AD%BE%E5%88%B0%E4%BB%BB%E5%8A%A1%20.png',
                btn_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/btn_%E6%AF%8F%E6%97%A5%E7%AD%BE%E5%88%B0.png',
                comp_btn_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/btn_%E5%B7%B2%E7%AD%BE%E5%88%B0.png'
            },
            gonglv: {
                bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/bar_%E7%B4%AB.png',
                title_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/%E8%AF%BB%E6%94%BB%E7%95%A5%20.png',
                btn_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/btn_%E5%8E%BB%E5%AE%8C%E6%88%90.png',
                comp_btn_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/btn_%E5%B7%B2%E5%AE%8C%E6%88%90.png'
            },
            dati: {
                bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/bar_%E7%BB%BF.png',
                title_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/%E7%AD%94%E9%A2%98%20.png',
                btn_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/btn_%E5%8E%BB%E5%AE%8C%E6%88%90.png',
                comp_btn_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/btn_%E5%B7%B2%E5%AE%8C%E6%88%90.png'
            },
            daka: {
                bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/bar_%E8%93%9D.png',
                title_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/%E6%89%93%E5%8D%A1POI.png',
                btn_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/btn_%E5%8E%BB%E5%AE%8C%E6%88%90.png',
                comp_btn_bg: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/taskList/btn_%E5%B7%B2%E5%AE%8C%E6%88%90.png'
            }
        },
        tasks: [{
            type: 'daka',
            isComplete: false,
        }, {
            type: 'qiandao',
            isComplete: true,
        }],
        userInfo: {},
        indicatorDots: false,
        autoplay: false,
        duration: 500,
        circular: true,
        showTask: false,
        showToy: false
    },
    onLoad: function () {
        this.convertTask(this.data.tasks);
        let userInfo = wx.getStorageSync('userInfo');
        let token = wx.getStorageSync('token');
        if (!userInfo) {
            app.getUserInfo().then((resArg) => {
                this.setUserInfo(resArg);
            })
        } else {
            this.setUserInfo(JSON.parse(userInfo));
        }

        // if (!token) {
        app.getToken().then(() => {
            this.getData()
        })
        // } else {
        //   this.getData()
        // }
    },
    getData() {
        wx.requestWithCookie({
            url: `/user/info`,
            method: 'GET',
            data: {

            },
            success: (res) => {
                console.log(res);
            },
            fail() {}
        })
    },
    getAnimals() {
        wx.requestWithCookie({
            url: `/user/userAnimal`,
            method: 'GET',
            data: {

            },
            success: (res) => {
                console.log(res);
            },
            fail() {}
        })
    },
    convertData(data) {

    },
    convertTask(data) {
        this.setData({
            tasks: data.map(item => {
                return Object.assign({}, item, this.data.taskListItemMap[item.type])
            })
        })
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
            animals
        } = this.data;
        this.setData({
            animals: animals.map(item => {
                item.progress = Math.ceil(Math.random() * 100);
                return item;
            })
        })
    },
    silder(value) {
        const {
            current
        } = value.detail;
        this.setData({
            current: this.data.animals[current]
        })
    },
    showModel(e) {
        const {
            model
        } = e.currentTarget.dataset;
        if (model === 'toy') {
            this.setData({
                showJoy: true
            })
        } else if (model === 'task') {
            this.setData({
                showTask: true
            })
        }
    },
    feed() {

    }
})