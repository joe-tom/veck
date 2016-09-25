
/**
 * Performs a scalar multiplication on the vector
 * @param  {Number} val - the multiplier
 * @return {this}     the current vector
 */
Veck.prototype.times = function (val) {
  for (var i = 0, ii = this.dimension; i < ii; i++) {
    this.vector[i] = this.vector[i] * val
  }

  return this
}

/**
 * Performs a scalar division on the vector, same as an inverse scalar multiplication
 * @param  {Number} val - the multiplier
 * @return {this}     the current vector
 */
Veck.prototype.divide = function (val) {
  for (var i = 0, ii = this.dimension; i < ii; i++) {
    this.vector[i] = this.vector[i] / val
  }

  return this
}