
function Vecky (vector) {
  if (!(this instanceof Vecky)) {
    return new Vecky(vector)
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

Vecky.prototype.times = function (val) {
  for (var i = 0, ii = this.dimension; i < ii; i++) {
    this.vector[i] = this.vector[i] * val
  }
}

Vecky.prototype.divide = function (val) {
  for (var i = 0, ii = this.dimension; i < ii; i++) {
    this.vector[i] = this.vector[i] / val
  }
}

Vecky.prototype.proj = function (b) {
  return b.times(this.dot(b).divide(b.dot(b)))
}

Vecky.prototype.normalize = function () {
  var mag = this.magnitude()
  for (var i = 0, ii = this.dimension; i < ii; i++) {
    this.vector[i] = this.vector[i] / mag
  }
}

Vecky.prototype.magnitude = function () {
  var sum = 0
  for (var i = 0, ii = this.dimension; i < ii; i++) {
    sum += this.vectorArray[i] * this.vectorArray[i]
  }

  return Math.sqrt(sum)
}

Vecky.prototype.valueOf = function () {
  return this.magnitude()
}
module.exports = Vecky