var v = require('../index')
var assert = require('assert');

describe('Veck', function () {
  describe('Vector Construction', function () {
    it('should work with a string vector', function () {
      var str = '-3i+2j+5k'
      assert.deepEqual(v(str).vector,[-3,2,5])
    })
    it('should work with a string vector with reversed units', function () {
      var str = '9p-3i+2j'
      assert.deepEqual(v(str).vector,[-3,2,9])
    })
    it('should work with an array', function () {
      var arr  = [1,3,2,4]
      assert.deepEqual(v(arr).vector, arr)
    })
    it('should work with an object (order irrelavent)', function () {
      var arr = {
        h: 12,
        i: 8,
        a: -2.3
      }
      assert.deepEqual(v(arr).vector,[-2.3,12,8])
    })
  })
})