
/**
 * Returns the dot product of the current vector and a provided vector
 * 
 * @param  {Veck} vector - the vector to do the dot product with
 * @return {Number}        the dot product
 */
Veck.prototype.dot = function (vector) {
  var sum = 0
  for (var i = Math.min(vector.dimension, this.dimension); i--;) {
    sum += vector.vector[i] * this.vector[i]
  }
  return sum
}

/**
 * Returns a new Veck cross product of the current vector and the provided vector.
 * Vectors must have 3 dimensions or less.
 * If any vector has over 3 dimensions, an error will be thrown
 * 
 * @param  {Veck} vector - the vector to do the cross product with
 * @return {Veck}        the cross product, new vector
 */
Veck.prototype.cross = function (vector) {
  if (vector.length > 3 || this.length > 3) throw Error('Too Many Dimensions!')

  var u = this.vector
  var v = vector.vector
  
  var u1 = u[0]
  var u2 = u[1]
  var u3 = u[2]

  var v1 = v[0]
  var v2 = v[1]
  var v3 = v[2]

  return new Veck([
    (u2 * v3) - (u3 * v2),
    (u3 * v1) - (u1 * v3),
    (u1 * v2) - (u2 * v1)
  ])
}

/**
 * Adds the provided vector to the current one
 * 
 * @param {Veck} vector - the vector to add to the current one
 * @return {this}
 */
Veck.prototype.add = function (vector) {
  for (var i = Math.max(vector.dimension,this.dimension); i--;) {
    this.vector[i] = (this.vector[i] || 0) + (vector.vector[i] || 0)
  }
  return this
}

/**
 * Computes the projection of the provided vector onto the current vector
 * @param  {Veck} b - the provided vector to project
 * @return {[type]}   [description]
 */
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
