const assert = require('assert');
const rewire = require('rewire');
const ClassifyTriangle = rewire('../lib/classify-triangle');

describe('ClassifyTriangle', () => {
    describe('#classify', () => {

        it('should properly recognize triangles', () => {
            assert.equal(ClassifyTriangle.classify([1,2,3]), 'Triangle scalene');
            assert.equal(ClassifyTriangle.classify([2,2,3]), 'Triangle isosceles');
            assert.equal(ClassifyTriangle.classify([3,3,3]), 'Triangle equilateral');
        });

        it('should throw error if input is not an array', () => {
            assert.throws(() => ClassifyTriangle.classify({}), /Input value must be an array. Current type: object/);
        });

        it('should throw error if input is not an array with 3 values', () => {
            assert.throws(() => ClassifyTriangle.classify([1, 1]), /Invalid amount of values to classify - must be 3. Invalid value: 2/);
            assert.throws(() => ClassifyTriangle.classify([1, 1, 1, 1]), /Invalid amount of values to classify - must be 3. Invalid value: 4/);
        });

        it('should throw error if input values are not positive numbers', () => {
            assert.throws(() => ClassifyTriangle.classify(['1', '2', '3']), /Values to classify must be numbers. Invalid value: 1; type: string/);
            assert.throws(() => ClassifyTriangle.classify([0, 1, 2]), /Values must be positive value. Invalid value: 0/);
        });

        it('should throw error if input is not representing the sides of triangle', () => {
            assert.throws(() => ClassifyTriangle.classify([1,2,6]), /Triangle can't be build from following values: 1,2,6/);
        });
    });
});