const GroupByResult = require('./group-by-result.model');

/**
 * Library to group values and return array of amount
 */
class GroupBy {

	/**
	 * Groups values into objects with value and amount of occurrences.
	 * @param array
	 * @returns {Array<GroupByResult>}
	 */
	static get(array) {
		if (!Array.isArray(array)) {
			throw new Error(`Input value must be an array. Current type: ${typeof array}`);
		}

		return array.reduce((groupedValues, value) => {

			if (groupedValues.hashes[value]) {
				groupedValues.hashes[value].increment();
			} else {
				let result = new GroupByResult(value, 1);
				groupedValues.hashes[value] = result;
				groupedValues.values.push(result);
			}

			return groupedValues;
		}, {
			values: [],
			hashes: []
		}).values;
	}
}

module.exports = GroupBy;

//console.log(classifyTriangle.classify([1,2,6]));