import CookieStore from './CookieStore';
const host = require("../env")
wx.requestWithCookie = (info) => {
    appendCookieToRequestHeader(info)
    appendTokenToRequestHeader(info)
    let originSuccessCallback = info.success,
        successCallback = (res) => {
            setCookieFromResponseHeader(info.url, res)
            httpInterceptor(res, originSuccessCallback)
        }
    info.success = successCallback
    info.url = `${host.host}` + info.url
    wx.request(info)
}

function httpInterceptor(res, fn) {
    if (res.statusCode === 200) {
        return fn(res.data)
    }
    return fn(res)
}
// 请求前在请求头上追加cookie
function appendCookieToRequestHeader(info) {
    let cookie = CookieStore.getMatchCookies(info.url)
    if (cookie.length) {
        if (!info.header) {
            info.header = {}
        }
        if (!info.header.cookie) {
            info.header.cookie = ''
        } else {
            info.header.cookie += '; '
        }
        info.header.cookie += cookie.map((item) => {
            return item.key + '=' + item.val
        }).join('; ')
    }
}

// 请求前在请求头上追加cookie
function appendTokenToRequestHeader(info) {
    let token = wx.getStorageSync('token')
    if (token) {
        if (!info.header) {
            info.header = {}
        }
        info.header.token = token
    }
}

// 设置cookie 根据响应头中的set-cookie
function setCookieFromResponseHeader(url, res) {
    let setCookies = res.header && res.header['Set-Cookie'] || res.header['set-cookie']
    if (setCookies) {
        CookieStore.setMatchCookies(url, setCookies)
    }
}