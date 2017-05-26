module.exports = function (source) {
  return source.split(/\r?\n/).map(function (line) { return line }).join('')
}
