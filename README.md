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