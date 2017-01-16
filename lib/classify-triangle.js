const Triangle = require('./triangle.enum');
const GroupBy = require('./group-by/group-by');

/**
 * Class which is classifing type of triangle. Supports three types of triangles:
 * - equilateral
 * - isosceles
 * - scalene
 */
class ClassifyTriangle {

	/*
	 * Static method to classify triangle
	 * @param {Array} array - array of 3 elements which represent sides of triangle
	 * @return {String} string value of type of triangle
	 * @throws
	 */
	static classify(sides) {

        // validation
		if (!Array.isArray(sides)) {
			throw new Error(`Input value must be an array. Current type: ${typeof sides}`);
		}

		if (sides.length !== 3) {
			throw new Error(`Invalid amount of values to classify - must be 3. Invalid value: ${sides.length}`);
		}

		let l = sides.length;
		for (let i = 0; i<l; ++i) {
			let value = sides[i];
			let type = (typeof value);

			if (type !== 'number') {
				throw new Error(`Values to classify must be numbers. Invalid value: ${value}; type: ${type}`);
			}

			if (value <= 0) {
				throw new Error(`Values must be positive value. Invalid value: ${value}`);
			}
		}

		sides.sort();
		if (sides[0] + sides[1] < sides[2]) {
			throw new Error(`Triangle can't be build from following values: ${sides}`);
		}

		// run GroupBy function to fetch most common side size
		const [topValue] = GroupBy.get(sides)
                                  .sort((val1, val2) => val1.amount < val2.amount);

		switch(topValue.amount) {
			case Triangle.TRIANGLE_EQUILATERAL: 
				return `Triangle equilateral`;
			case Triangle.TRIANGLE_ISOSCELES: 
				return `Triangle isosceles`;
			case Triangle.TRIANGLE_SCALENE: 
				return `Triangle scalene`;
		}
	}
}

module.exports = ClassifyTriangle;
