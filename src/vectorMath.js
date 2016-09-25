

Veck.prototype.add = function (vector) {

}




Veck.prototype.proj = function (b) {
  return b.times(this.dot(b).divide(b.dot(b)))
}

Veck.prototype.normalize = function () {
  var mag = this.magnitude()
  for (var i = 0, ii = this.dimension; i < ii; i++) {
    this.vector[i] = this.vector[i] / mag
  }
}

Veck.prototype.magnitude = function () {
  var sum = 0
  for (var i = 0, ii = this.dimension; i < ii; i++) {
    sum += this.vectorArray[i] * this.vectorArray[i]
  }

  return Math.sqrt(sum)
}
