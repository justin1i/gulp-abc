var should = require('should');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});


var lib__a = require('../lib/a');

describe('测试库A', function() {
  describe('#方法', function() {
    it('应该返回1', function() {
      lib__a().should.equal(1);
    });
  });
});