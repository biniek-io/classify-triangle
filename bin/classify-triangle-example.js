#! /usr/bin/env node

const ClassifyTriangle = require('../lib/classify-triangle');

const inputs = [
	[1,2,3],
	[2,2,3],
	[3,3,3]
];

inputs.forEach((values) => console.log(values, ClassifyTriangle.classify(values)));