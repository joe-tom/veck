
/**
 * Returns a new Veck object that is identical to the current one
 * @return {Veck} The new Veck object
 */
Veck.prototype.clone = function () {
  return new Veck(this.vector.slice(0))
}

/**
 * Returns true if the two vectors are the same
 * @param  {Veck} vector - the Veck vectors to compare to this one
 * @return {Boolean}
 */
Veck.prototype.equals = function (vector) {
  if(vector.dimension != this.dimension) return false
  for (var i = 0,ii = vector.dimension;i < ii;i++) {
    if(vector.vector[i] != this.vector[i]) return false
  }
  return true
}

/**
 * Returns the magnitude of the current Veck vector
 * @return {Number}
 */
Veck.prototype.valueOf = function () {
  return this.magnitude()
}