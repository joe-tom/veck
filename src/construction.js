function Veck (vector) {
  if (!(this instanceof Veck)) {
    return new Veck(vector)
  } 
  var _this = this
  this.vector = []
  switch (typeof vector) {
    case 'number':
    this.vector = arguments
    break
    case 'string':
    var units = vector.replace(/ /g, '').split(/(\+|\-)(?=.)/g).filter((i) => (i))
    var map = {}
    for (var i = 0; i < units.length; i++) {
      var char = units[i]
      if (char == '-') {
        units[i + 1] = '-' + units[i + 1]
        continue
      } else if (char == '+') {
        continue
      } else {
        map[char[char.length - 1]] = parseFloat(char)
      }
    }
    Object.keys(map).sort().forEach(function (key) {
      _this.vector.push(map[key])
    })
    break
    case 'object':
    if (vector instanceof Array) {
      this.vector = vector
    } else {
      Object.keys(vector).sort().forEach(function (key) {
        _this.vector.push(vector[key])
      })
    }
    break
  }

  this.dimension = this.vector.length
}
global.Veck = Veck

require('./utils')
require('./scalarMath')
require('./vectorMath')

module.exports = Veck