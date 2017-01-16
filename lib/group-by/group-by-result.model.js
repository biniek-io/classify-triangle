/**
 * Model to keep values for GroupBy class
 * @see GroupBy
 */
class GroupByResult {
	/**
	 * Constructor
	 * @param {*} value
	 * @param {number} amount
	 */
	constructor(value, amount) {
		this.value = value;
		this.amount = parseFloat(amount);
	}

	/**
	 * Increment amount of counted values
	 */
	increment() {
		++this.amount;
	}
}

module.exports = GroupByResult;