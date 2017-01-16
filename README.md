About
================

`classify-triangle` is a library to recognize type of triangle.

The recognition alghoritm is based on grouping values of triangle sides and checking one with biggest amount of occurrences.
I have implemented my own version of `groupBy` method - however tool libs like [lodash](https://lodash.com/) has it already built-in.

How to run example
================

```bash
npm run example
```

How to use
================

```javascript
const classifyTriangle = require('classify-triangle');
classifyTriangle.classify([1,2,3]);
```

How to run tests 
================

```bash
npm install
npm test
```

How to integrate with browser package
================

To make it working with browser the easiest way is to set up extra build step with [browserify](http://browserify.org/)/[rollup](http://rollupjs.org/) 
combined with [Babel transpiler](https://babeljs.io/) to move syntax to ES5 (IE11 is not supporting ES6).