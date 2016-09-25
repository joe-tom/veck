var v = require('../index')
var assert = require('assert');

describe('Veck', function () {
  describe('Vector Construction', function () {
    it('should work with a string vector', function () {
      var str = '-3i+2j+5k'
      assert.deepStrictEqual(v(str).vector,[-3,2,5])
    })
    it('should work with a string vector with reversed units', function () {
      var str = '9p-3i+2j'
      assert.deepStrictEqual(v(str).vector,[-3,2,9])
    })
    it('should work with an array', function () {
      var arr  = [1,3,2,4]
      assert.deepStrictEqual(v(arr).vector, arr)
    })
    it('should work with an object (order irrelavent)', function () {
      var arr = {
        h: 12,
        i: 8,
        a: -2.3
      }
      assert.deepStrictEqual(v(arr).vector,[-2.3,12,8])
    })
  })
  describe('Vector Utils', function () {
    it('should work by returning a string', function () {
      var str = '3i+2j+4k'
      var v1 = v(str)
      assert.equal(str, v1.toString())
    })
    describe('clone', function () {
      it('should have the same values', function () {
        var v1 = v([1,2,3])
        var v2 = v1.clone()
        assert.deepStrictEqual(v1,v2)
      })
      it('should have a different array', function () {
        var v1 = v([1,2,3])
        var v2 = v1.clone()
        v2.times(10)
        assert.notDeepStrictEqual(v1,v2)
      })
    })
  })
})