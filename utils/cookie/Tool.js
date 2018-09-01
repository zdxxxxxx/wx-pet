class Tool {
    /**
     * 简单示意：实现获取url host和path的功能
     */
    static parseUrl(url) {
        [url,] = url.split('?')
        let regExp = /\/\/([^/]+)(\/(.*)\/[^\/]*$)?/,
            match = regExp.exec(url)

        return { host: match[1], path: '/' + (match[3] || '') }
    }

    /**
     * 简单示意：查分http header set-cookies
     */
    static splitCookie(setCookies) {
        return setCookies.split(/,(?=[^;]+\=)/)
    }
}


export default Tool
