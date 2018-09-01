Page({
    data: {
        show: false,
        scale: 18,
        latitude: 0,
        longitude: 0,
        markers: []
    },
    onLoad: function () {
        wx.getLocation({
            type: "gcj02",
            success: (res) => {
                this.setData({
                    longitude: res.longitude,
                    latitude: res.latitude
                })
                this.initMarkers(res);
            }
        })
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    controls: [{
                        id: 4,
                        iconPath: '/images/marker.png',
                        position: {
                            left: res.windowWidth / 2 - 16,
                            top: res.windowHeight / 4 - 45,
                            width: 30,
                            height: 45
                        },
                        clickable: true
                    }, ]
                })
            }
        });
    },
    initMarkers: function (data) {
        const {
            longitude,
            latitude
        } = data;
        const markers = [];
        for (let i = 0; i < 5; i++) {
            markers.push({
                id: i + 1,
                longitude: longitude + rd_num(),
                latitude: latitude + rd_num(),
                iconPath: '',
                width: 40,
                height: 40
            })
        }
        this.setData({
            markers
        })

        function rd_num() {
            let fuhao = (0.5 - Math.random()) * 2;
            fuhao = fuhao > 0 ? 1 : -1;
            let rd = fuhao * (Math.random() * 20 + 1) / 10000;
            return rd;
        }
    },
    onShow: function () {
        // 1.创建地图上下文，移动当前位置到地图中心
        this.mapCtx = wx.createMapContext("ofoMap");
        this.movetoPosition()
    },
    bindcontroltap: function (e) {
        switch (e.controlId) {
            case 1:
                this.movetoPosition();
                break;
            case 2:

                break;
        }
    },
    goIndex() {
        wx.redirectTo({
            url: `../index/index`
        });
    },
    // 地图视野改变事件
    bindregionchange: function (e) {
        // 拖动地图，获取附件单车位置
        if (e.type == "begin") {

        } else if (e.type == "end") {
            this.mapCtx.getCenterLocation({
                success: (res) => {

                }
            })
        }
    },
    bindmarkertap: function (e) {
        const {
            markerId
        } = e;
        this.setData({
            markerId
        })
        this.showModel()
    },
    showModel: function () {
        this.setData({
            show: true
        })
    },
    goToMarkerPoi: function () {
        const {
            markerId
        } = this.data;
        let currMaker = this.data.markers[markerId - 1];
        this.setData({
            polyline: [{
                points: [{
                    longitude: this.data.longitude,
                    latitude: this.data.latitude
                }, {
                    longitude: currMaker.longitude,
                    latitude: currMaker.latitude
                }],
                color: "#FF0000DD",
                width: 1,
                dottedLine: true
            }],
            scale: 18,
            show: false
        })
    },
    movetoPosition: function () {
        this.mapCtx.moveToLocation();
    }
})