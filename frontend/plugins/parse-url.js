export default (context, inject) => {
    const parseUrl = (url) => {
        if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
            return url
        }
        return "http://localhost:1337" + url
    }

    inject('parseUrl', parseUrl)
    context.$parseUrl = parseUrl
}