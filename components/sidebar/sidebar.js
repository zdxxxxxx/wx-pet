Component({
    data: {},
    properties: {
        navBtns: {
            type: Array,
            value: [{
                iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E5%9B%BE%E9%89%B4.png',
                page: 'tujian',
                text: '图鉴',
            }, {
                iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%89%AD%E8%9B%8B.png',
                page: 'niudan',
                text: '扭蛋',
            }, {
                iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_poi.png',
                page: 'poi',
                text: 'POI',
            }, {
                iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%88%90%E5%B0%B1.png',
                page: 'chengjiu',
                text: '成就',
            }],
        },

        bottomBtn: {
            type: Object,
            value: {
                iconUrl: 'https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E8%BF%94%E5%9B%9E%E5%9C%B0%E5%9B%BE.png',
                page: 'map',
                text: '地图',
            }
        }
    },

    methods: {
        go(e) {
            const {
                page
            } = e.target.dataset;
            console.log(e)
            wx.redirectTo({
                url: `../${page}/${page}`
            });
        },
        action() {

        }
    }
})