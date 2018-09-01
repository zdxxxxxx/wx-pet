import Tool from './Tool'

class Cookie {
    static parseFromStr(host, cookieStr) {
        let cookiePart = cookieStr.split(/;[\s]*/),
            cookie = {},
            key, val

        cookiePart.forEach((part, index) => {
            [key, ...val] = part.split('=')
            val = val.join('=')
            if (index === 0) {
                cookie.key = key
                cookie.val = val
            } else {
                key = key.toLowerCase()
                if (key == 'max-age') {
                    cookie.expires = +new Date + (+val) * 1000
                } else if (key == 'path') {
                    cookie.path = val
                } else if (key == 'domain') {
                    cookie.domain = val
                }
            }
        })

        if(!cookie.domain) {
            cookie.domain = host
        }

        return new Cookie(cookie)
    }

    constructor(cookieInfo) {
        this.key = cookieInfo.key
        this.val = cookieInfo.val
        this.expires = cookieInfo.expires
        this.domain = cookieInfo.domain
        this.path = cookieInfo.path
    }

    toJSONObj() {
        return {key: this.key, val: this.val, expires: this.expires, domain: this.domain, path: this.path}
    }

    /**
     * 是否cookie已经过期
     * 
     * 暂时将session级别cookie默认不过期，现在很多浏览器都支持持久化session级别cookie，暂时不做复杂处理了
     */
    isExpired() {
        return this.expires && this.expires < (+ new Date)
    }

    isMatchRequestUrl(url) {
        let urlInfo = Tool.parseUrl(url);
        return this.isMatchHost(urlInfo.host) &&
            (this.path == '/' || this.path == urlInfo.path || urlInfo.path.indexOf(this.path + '/') === 0)
    }

    isMatchHost(urlHost) {
        let match = urlHost == this.domain
        if (!match && urlHost.length - 1 > this.domain.length) {
            let hostArr = urlHost.split('.')
            while (hostArr.length > 2) {
                hostArr.shift()
                if (hostArr.join('.') == this.domain || '.' + hostArr.join('.') == this.domain) {
                    match = true
                    break
                }
            }
        }
        return match
    }
}

export default Cookie