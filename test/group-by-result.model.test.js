const assert = require('assert');
const rewire = require('rewire');
const GroupByResult = rewire('../lib/group-by/group-by-result.model');

describe('GroupByResult', () => {
    let model;

    beforeEach(() => {
        model = new GroupByResult(1, 2);
    });

    it('should assign initial values to properties', () => {
        assert.equal(model.value, 1);
        assert.equal(model.amount, 2);
    });

    it('should increment amount of found values', () => {
        model.increment();
        assert.equal(model.amount, 3);
    });
});