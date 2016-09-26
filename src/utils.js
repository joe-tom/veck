var LETTERS = 'ijklmnopqrstupwxyz'

/**
 * Returns a new Veck object that is identical to the current one
 * 
 * @return {Veck} The new Veck object
 */
Veck.prototype.clone = function () {
  return new Veck(this.vector.slice(0))
}

/**
 * Returns true if the two vectors are the same
 * 
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
 * 
 * @return {Number}
 */
Veck.prototype.valueOf = function () {
  return this.magnitude()
}

/**
 * Returns the stringified ijk version of the vector
 * 
 * @return {String} 
 */
Veck.prototype.toString = function () {
  if (LETTERS.length < this.dimension) {
    throw new Error('Too Many Dimensions!')
  }

  var str = ''
  for (var i = 0, ii = this.dimension; i < ii; i++) {
    if(this.vector[i] < 0) {
      str += '-'
    } else if (this.vector[i] == 0) {
      continue
    } else {
      str += '+'
    }
    str += Math.abs(this.vector[i]) + LETTERS[i]
  }
  if(str[0] == '+') return str.substr(1)
  else return str
}

/**
 * Returns the array value of the veck object
 * 
 * @return {Array}
 */
Veck.prototype.toArray = function () {
  return this.vector
}