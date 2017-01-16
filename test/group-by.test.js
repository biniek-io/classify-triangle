const assert = require('assert');
const rewire = require('rewire');
const GroupBy = rewire('../lib/group-by/group-by');

describe('GroupBy', () => {
  describe('#get', () => {

    it('should return empty array for empty input', () => {
      assert.deepEqual(GroupBy.get([]), []);
    });

    it('should return correct values for different inputs', () => {
      assert.deepEqual(GroupBy.get([1,2,3]), [{value: 1, amount: 1}, {value: 2, amount: 1}, {value: 3, amount: 1}]);
      assert.deepEqual(GroupBy.get([3,3,3]), [{value: 3, amount: 3}]);
      assert.deepEqual(GroupBy.get(['a', 'b', 'c']), [{value: 'a', amount: 1}, {value: 'b', amount: 1}, {value: 'c', amount: 1}]);
    });

    it('should throw error if input is not an array', () => {
      assert.throws(() => GroupBy.get({}), /Input value must be an array. Current type: object/);
    });
  });
});