const hostMap = {
    dev: 'http://172.18.35.242:12345',
    lixin: 'http://172.18.22.1:12345',
    prod: 'https://polar-bear-2018t3.mafengwo.cn'
}
const env = 'dev'

function getHost() {
    return hostMap[env]
}

module.exports = {
    host: getHost(),
}