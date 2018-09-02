//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        toggle: true,
        list: [{
            title: "北极熊",
            picUrl: "https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%89%AD%E8%9B%8B.png",
            message: "正宗好凉茶，正宗好声音，您现在收看的是由加多宝凉茶独家赞助播出的中国好声音",
            show: true,
            lock: true
        }, {
            title: "北极熊",
            picUrl: "https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%89%AD%E8%9B%8B.png",
            message: "正宗好凉茶，正宗好声音，您现在收看的是由加多宝凉茶独家赞助播出的中国好声音",
            show: true
        }, {
            title: "北极熊",
            picUrl: "https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%89%AD%E8%9B%8B.png",
            message: "正宗好凉茶，正宗好声音，您现在收看的是由加多宝凉茶独家赞助播出的中国好声音",
            show: true
        }, {
            title: "北极熊",
            picUrl: "https://2018t3.oss-cn-beijing.aliyuncs.com/polar-bear/images/btn_%E6%89%AD%E8%9B%8B.png",
            message: "正宗好凉茶，正宗好声音，您现在收看的是由加多宝凉茶独家赞助播出的中国好声音",
            show: true
        }]
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        this.getData()
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成

    },
    toggle(e) {
        let index = e.currentTarget.dataset.index;
        let list = this.data.list;
        list[index].show = !list[index].show;
        this.setData({
            list: list
        })
    },
    close(e) {
        let index = e.currentTarget.dataset.index;
        let list = this.data.list;
        list[index].show = !list[index].show;
        this.setData({
            list: list
        })
    },
    getData() {
        wx.requestWithCookie({
            url: `/animal/all`,
            method: 'GET',
            data: {

            },
            success: (res) => {
                this.convertData(res.data);
            },
            fail() {}
        })
    },
    convertData(data) {
        const {
            all_animals,
            user_animal_id
        } = data;
        const map = {
            id: 'id',
            img: 'picUrl',
            name: 'title',
            lock: 'lock',
            describe: 'message',
            show: 'show'
        };
        const formatData = all_animals.map(d => {
            const obj = {};
            d['lock'] = !user_animal_id.includes(d.id);
            d['show'] = true;
            Object.keys(map).forEach(key => {
                obj[map[key]] = d[key];
            });
            return obj;
        })
        console.log(formatData)
        this.setData({
            list: formatData
        })
    }
})