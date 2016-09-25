# veck ➢
A multidimensional vector math library for JS

## Vector Construction
There are four ways to construct a vector with Veck.

### Method 1: Using unit vectors
Veck accepts a unit vector as a unit vector string. Note: _(Veck does not have a mathematical parser, this means the unit vector string should be in simplest form)_
```js
var V = require('veck')

var myBigVector = V('3i+2j-8k')
```

### Method 2: Using an array
Veck can also create a vector using an array, as the order of an array matters, this is the preferred method for creating vectors with Veck.
```js
var V = require('veck')

var myBestVector = V([1,2,3])
//Same as 1i+2j+3k
```
### Method 3: Using an object
Similar to an array, you can create a vector with an object. However, the object keys **MUST** be letters, order does not matter in terms of the object.
```js
var V = require('veck')

var myBestVector({i: 2.3, j: 10.2, k: 8.9})
```
### Method 4: Using arguments
Veck can create a vector by accepting a multitude of arguments. Note: _(This **MUST** be used with new. This will **NOT** work without creating a new Veck object) 
```js
var V = require('veck')

var myCoolVector = new V(1,2,3)
//Same as 1i+2j+3k
```