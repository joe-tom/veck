# veck ➢
A multidimensional vector math library for JS

## Vector Construction
```js
var v = require('veck')

// These are all the same vector
var v1 = v(-2, 10, 2.3)
var v2 = v('-2i+10j+2.3k')
var v3 = v([-2,10,2.3])
var v4 = v({x: -2, y: 10, z: 2.3})

// These are also the same vector
// Note: vectors created through arguments can only be created with 'new' 
var u1 = new v(-2, 3, 1, 4, -10.2, 7.5, 1)

var u2 = v([-2, 3, 1, 4, -10.2, 7.5, 1])
var u3 = new v([-2, 3, 1, 4, -10.2, 7.5, 1])

var u4 = v({a: -2, b: 3, c: 1, d: 4, e: -10.2, f: 7.5, g: 1})
var u5 = new v({a: -2, b: 3, c: 1, d: 4, e: -10.2, f: 7.5, g: 1})

var u6 = v('-2a+3b+c+4d-10.2e+7.5f+g+2h+10i')
var u7 = new v('-2a+3b+c+4d-10.2e+7.5f+g+2h+10i')
```

## API
### Utils
#### .toArray()
Returns veck as an Array
```js
new v([1,2,3]).toArray() => [1,2,3]
```
#### .toString()
Returns the vector as an ijk string, it will use more letters if need be.
```js
new v([1,2,3]).toString() => 'i+2j+3k'
```
#### .clone()
Makes an identical copy of the current vector.
#### .equals(vector)
```js
new v([1,2,3]).equals(new v([1,2,3]))
// this is true
```

### Vector Scalar Math
#### .times(k), .multiply(k) _(alias)_ .scale(k) _(alias)_
Performs a scalar multiplication on the current vector using the provided parameter, k. .multiply() can also be used as an alias for this
```js
var v1 = v([1,2,3])
v1.times(2)

v1.equals(v([2,4,6]))
//This is true!
```
#### .divide(k)
Performs a scalar division on the current vector using the provided parameter, k. This is the inverse of .multiply
```js
var v1 = v([2,4,6])
v1.divide(2)

v1.equals(v([1,2,3]))
//This is true!
```
### Vector Vector Math

#### Hadamard Product .hadamard(vector)
#### Cross Product .cross(vector)
#### Dot Product .dot(vector)


### Vector Utility
#### .angle(vector)
#### .normalize() .norm() _(alias)_
