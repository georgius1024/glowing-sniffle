process.env.PUBLIC_PATH = require('./package.json').publicPath
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? process.env.PUBLIC_PATH : '/'
}
