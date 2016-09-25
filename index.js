function Vecky (vector) {
  if (!(this instanceof Vecky)) return new Vecky(vector)

  this.vector = []
  switch (typeof vector) {
    case 'number':

      break
    case 'string':
      var units = vector.replace(/ /g, '').split(/(\+|\-)(?=.)/g).filter((i) => (i))
      units.sort(function (a, b) {
        return (a < b ? -1 : (a > b ? 1 : 0))
      })
      for (var i = 0; i < units.length; i++) {

      }
      break
    case 'object':
      if (vector instanceof Array) {
        this.vector = vector
      } else {
        Object.keys(vector).sort().forEach(function (key) {
          this.vector[key] = vector[key]
        })
      }
      break
  }

  this.dimension = vectorArray.length
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
