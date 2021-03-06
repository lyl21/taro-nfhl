export default {
    pages: [
        'pages/index/index',
        'pages/userCenter/userCenter',
        'pages/personal/personal',
        'pages/qs/qs',
        'pages/hh/hh',
        'pages/bs/bs',
        'pages/zz/zz',
        'pages/anli/anli',
        'pages/vr/vr',
    ],
    tabBar: {
        color: "#666",
        selectedColor: "#b4282d",
        backgroundColor: "#fafafa",
        borderStyle: 'black',
        list: [{
            pagePath: "pages/index/index",
            iconPath: "assets/img/index_no_selected.png",
            selectedIconPath: "assets/img/index_selected.png",
            text: "首页"
        }, {
            pagePath: "pages/userCenter/userCenter",
            iconPath: "assets/img/user_center_no_selected.png",
            selectedIconPath: "assets/img/user_center_selected.png",
            text: "我的"
        }]
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    "permission":{
        "scope.userLocation":{
            "desc": "你的位置信息将用于小程序定位"
        }
    },
    "plugins" : {
        "routePlan" : {
            "version" : "1.0.13",
            "provider" : "wx50b5593e81dd937a"
        }
    }
}
