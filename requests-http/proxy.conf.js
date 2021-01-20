const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8005/',
    secure: false,
    loglevel: 'debug',
    pathRewrite: { '^/api': '' }
  }

]

module.exports = PROXY_CONFIG;
//export default PROXY_CONFIG;
