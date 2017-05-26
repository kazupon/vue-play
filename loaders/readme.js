const normalize = require('./normalize')

module.exports = function (source) {
  const code = `
    module.exports = function (Component) {
      Component.options.readme = '${source}'
    }
  `
  return normalize(code)
}
