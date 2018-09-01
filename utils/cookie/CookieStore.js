import Tool from './Tool'
import Cookie from './Cookie'

class CookieStore {
    static cookieStorageKey = 'cookies'

    /**
     * 根据请求url，获取匹配发送的cookie
     */
    static getMatchCookies(url) {
        CookieStore.clearExpired()

        let cookies = wx.getStorageSync(CookieStore.cookieStorageKey) || [],
            matchCookies = []
        cookies.forEach((cookie) => {
            if ((new Cookie(cookie)).isMatchRequestUrl(url)) {
                matchCookies.push(cookie)
            }
        })

        return matchCookies
    }

    /**
     * 根据请求url和set-cookies信息，设置cookie存储
     */
    static setMatchCookies(url, setCookies) {
        let urlInfo = Tool.parseUrl(url),
            cookieStrArr = Tool.splitCookie(setCookies)
        cookieStrArr.forEach((cookieStr) => {
            let cookieIns = Cookie.parseFromStr(urlInfo.host, cookieStr)
            if (cookieIns.isMatchHost(urlInfo.host)) {
                CookieStore.saveItem(cookieIns.toJSONObj())
            }
        })
    }


    /**
     * 保存Cookie
     */
    static saveItem(cookie) {
        let cookies = wx.getStorageSync(CookieStore.cookieStorageKey) || [],
            cookiesMap = {}

        cookies.forEach((cookieItem, index) => {
            cookiesMap[cookieItem.key + ',' + cookieItem.domain + ',' + cookieItem.path] = index
        })

        let cookieMapKey = cookie.key + ',' + cookie.domain + ',' + cookie.path
        if (cookieMapKey in cookiesMap) {
            cookies[cookiesMap[cookieMapKey]] = cookie
        } else {
            cookies.unshift(cookie)
        }

        wx.setStorageSync(CookieStore.cookieStorageKey, cookies)
        CookieStore.clearExpired()
    }

    /**
     * 清理失效cookie
     */
    static clearExpired() {
        let cookies = wx.getStorageSync(CookieStore.cookieStorageKey) || [],
            validCookies = []

        cookies.forEach((cookie) => {
            if (!(new Cookie(cookie)).isExpired()) {
                validCookies.push(cookie)
            }
        })

        wx.setStorageSync(CookieStore.cookieStorageKey, validCookies)
        return validCookies
    }
}

export default CookieStore