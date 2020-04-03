/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Agent.js":
/*!**********************!*\
  !*** ./src/Agent.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/Point.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _NeuralNetwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NeuralNetwork */ "./src/NeuralNetwork.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var learningRate = 2;

var Agent =
/*#__PURE__*/
function () {
  function Agent() {
    _classCallCheck(this, Agent);

    this.point = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * _constants__WEBPACK_IMPORTED_MODULE_2__["GRID_SIZE"], Math.random() * _constants__WEBPACK_IMPORTED_MODULE_2__["GRID_SIZE"]);
    this.neuralNet = new _NeuralNetwork__WEBPACK_IMPORTED_MODULE_3__["default"](5, Math.pow(2, 3), 2);
    this.bestVec = _toConsumableArray(this.neuralNet.weights);
    this.bestRewards = 0;
    this.rewards = 0;
    this.vel = Array(this.neuralNet.numWeights).fill(0);
  }

  _createClass(Agent, [{
    key: "update",
    value: function update(heatmap) {
      var posX = Math.trunc(this.point.x);
      var posY = Math.trunc(this.point.y);
      var input = heatmap.get5PointRadius(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](posX, posY));
      input = input.map(function (i) {
        return i / 255;
      });
      input = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["magnifyVecTo1"])(input);
      var output = this.neuralNet.feedFoward(input);
      this.point.x += output[0];
      this.point.y += output[1];
      this.point.wrap(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](_constants__WEBPACK_IMPORTED_MODULE_2__["GRID_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_2__["GRID_SIZE"]));
    }
  }, {
    key: "draw",
    value: function draw(display, c) {
      display.drawRect(Math.trunc(this.point.x * _constants__WEBPACK_IMPORTED_MODULE_2__["GRID_BLOCK_SIZE"]), Math.trunc(this.point.y * _constants__WEBPACK_IMPORTED_MODULE_2__["GRID_BLOCK_SIZE"]), _constants__WEBPACK_IMPORTED_MODULE_2__["GRID_BLOCK_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_2__["GRID_BLOCK_SIZE"], c);
    }
  }, {
    key: "learnFrom",
    value: function learnFrom(topAgent) {
      if (this.rewards > this.bestRewards) {
        this.bestVec = _toConsumableArray(this.neuralNet.weights);
        this.bestRewards = this.rewards;
      }

      var globalTopVec = topAgent.neuralNet.weights;
      var agentVec = this.neuralNet.weights;

      for (var i = 0; i < agentVec.length; i++) {
        var gBestVec = (globalTopVec[i] - agentVec[i]) * learningRate * Math.random();
        var lBestVec = (this.bestVec[i] - agentVec[i]) * learningRate * Math.random();
        this.vel[i] = 0.72 * this.vel[i] + gBestVec + lBestVec;
        agentVec[i] += this.vel[i];
        agentVec[i] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clipMinMax"])(agentVec[i], -1, 1);
      }
    }
  }, {
    key: "reward",
    value: function reward() {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.rewards += p;
    }
  }]);

  return Agent;
}();

/* harmony default export */ __webpack_exports__["default"] = (Agent);

/***/ }),

/***/ "./src/Display.js":
/*!************************!*\
  !*** ./src/Display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Display =
/*#__PURE__*/
function () {
  function Display() {
    _classCallCheck(this, Display);

    this.canvas = document.getElementById("display");
    this.context = this.canvas.getContext("2d");
  }

  _createClass(Display, [{
    key: "clear",
    value: function clear() {
      this.drawRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_HEIGHT"], _constants__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_BACKGROUND_COLOR"]);
    }
  }, {
    key: "drawRect",
    value: function drawRect(x, y, w, h) {
      var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "white";
      var ctx = this.context;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(x, y, r) {
      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "white";
      var ctx = this.context;
      ctx.beginPath();
      ctx.arc(x - r, y - r, r, 0, 2 * Math.PI, false);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }, {
    key: "drawLine",
    value: function drawLine(fromX, fromY, toX, toY) {
      var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "white";
      var ctx = this.context;
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  }, {
    key: "drawText",
    value: function drawText(str, x, y) {
      var ctx = this.context;
      ctx.font = "16px monospace";
      ctx.fillStyle = "white";
      ctx.textBaseline = "top";
      ctx.fillText(str, 10, 10);
    }
  }]);

  return Display;
}();

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./src/Engine.js":
/*!***********************!*\
  !*** ./src/Engine.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display */ "./src/Display.js");
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food */ "./src/food.js");
/* harmony import */ var _Swarm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swarm */ "./src/Swarm.js");
/* harmony import */ var _Heatmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Heatmap */ "./src/Heatmap.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Engine =
/*#__PURE__*/
function () {
  function Engine() {
    _classCallCheck(this, Engine);

    this.display = new _Display__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.food = new _food__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.heatMap = new _Heatmap__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.swarm = new _Swarm__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  _createClass(Engine, [{
    key: "run",
    value: function run() {
      this.display.clear();
      this.heatMap.update(this.food);
      this.heatMap.draw(this.display);
      this.swarm.checkCollision(this.food);
      this.swarm.update(this.heatMap);
      this.swarm.draw(this.display);
      this.display.drawText("Episode: ".concat(this.swarm.episode), 0, 0);
    }
  }]);

  return Engine;
}();

/* harmony default export */ __webpack_exports__["default"] = (Engine);

/***/ }),

/***/ "./src/Heatmap.js":
/*!************************!*\
  !*** ./src/Heatmap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/Point.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Heatmap =
/*#__PURE__*/
function () {
  function Heatmap() {
    _classCallCheck(this, Heatmap);

    this.grid = Array(_constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]);

    for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]; i++) {
      this.grid[i] = Array(_constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]).fill(0);
    }
  }

  _createClass(Heatmap, [{
    key: "update",
    value: function update(food) {
      var _this = this;

      for (var y = 0; y < _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]; y++) {
        for (var x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]; x++) {
          var v = [];
          v[0] = this.getPoint(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](x + 1, y));
          v[1] = this.getPoint(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](x, y + 1));
          v[2] = this.getPoint(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](x - 1, y));
          v[3] = this.getPoint(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](x, y - 1));
          var avg = Math.trunc((v[0] + v[1] + v[2] + v[3]) / 4);
          this.grid[y][x] = avg;
        }
      }

      food.points.map(function (f) {
        _this.grid[f.y][f.x] = 255;
      });
    }
  }, {
    key: "draw",
    value: function draw(display) {
      for (var y = 0; y < _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]; y++) {
        for (var x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]; x++) {
          var c = "rgb(".concat(this.grid[y][x], ",").concat(this.grid[y][x], ",").concat(this.grid[y][x], ")");
          display.drawRect(x * _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_BLOCK_SIZE"], y * _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_BLOCK_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_BLOCK_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_BLOCK_SIZE"], c);
        }
      }
    }
  }, {
    key: "getPoint",
    value: function getPoint(point) {
      point.wrap(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](_constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]));
      return this.grid[point.y][point.x];
    }
  }, {
    key: "get5PointRadius",
    value: function get5PointRadius(centerPoint) {
      var vals = [];
      vals[0] = this.getPoint(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](centerPoint.x, centerPoint.y));
      vals[1] = this.getPoint(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](centerPoint.x - 1, centerPoint.y));
      vals[2] = this.getPoint(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](centerPoint.x + 1, centerPoint.y));
      vals[3] = this.getPoint(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](centerPoint.x, centerPoint.y - 1));
      vals[4] = this.getPoint(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](centerPoint.x, centerPoint.y + 1));
      return vals;
    }
  }]);

  return Heatmap;
}();

/* harmony default export */ __webpack_exports__["default"] = (Heatmap);

/***/ }),

/***/ "./src/NeuralNetwork.js":
/*!******************************!*\
  !*** ./src/NeuralNetwork.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NeuralNetwork =
/*#__PURE__*/
function () {
  function NeuralNetwork(numInputs, numHidden, numOutputs) {
    _classCallCheck(this, NeuralNetwork);

    this.numInputs = numInputs;
    this.numHidden = numHidden;
    this.numOutputs = numOutputs;
    this.numWeights = numInputs * numHidden + numHidden * numOutputs + numHidden + numOutputs;
    this.weights = [];
    this.pulse = false;

    for (var i = 0; i < this.numWeights; i++) {
      this.weights[i] = Math.random() - Math.random();
    }

    this.activationF = function (x) {
      return Math.tanh(x);
    };
  }

  _createClass(NeuralNetwork, [{
    key: "feedFoward",
    value: function feedFoward(input) {
      var hidden = Array(this.numHidden);
      var output = Array(this.numOutputs);
      var weightIndex = 0;

      for (var h = 0; h < this.numHidden; h++) {
        hidden[h] = this.weights[weightIndex];
        weightIndex++;

        for (var i = 0; i < this.numInputs; i++) {
          hidden[h] += input[i] * this.weights[weightIndex];
          weightIndex++;
        }

        hidden[h] = this.activationF(hidden[h]);
      }

      for (var o = 0; o < this.numOutputs; o++) {
        output[o] = this.weights[weightIndex];
        weightIndex++;

        for (var _h = 0; _h < this.numHidden; _h++) {
          output[o] += hidden[_h] * this.weights[weightIndex];
          weightIndex++;
        }

        output[o] = this.activationF(output[o]);
      }

      return output;
    }
  }]);

  return NeuralNetwork;
}();

/* harmony default export */ __webpack_exports__["default"] = (NeuralNetwork);

/***/ }),

/***/ "./src/Point.js":
/*!**********************!*\
  !*** ./src/Point.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point =
/*#__PURE__*/
function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "equals",
    value: function equals(point) {
      if (this.x === point.x && this.y === point.y) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "truncPoint",
    value: function truncPoint() {
      return new Point(Math.trunc(this.x), Math.trunc(this.y));
    }
  }, {
    key: "wrap",
    value: function wrap(maxPoint) {
      if (this.x < 0) {
        this.x = maxPoint.x + this.x;
      }

      if (this.x >= maxPoint.x) {
        this.x = maxPoint.x - this.x;
      }

      if (this.y < 0) {
        this.y = maxPoint.y + this.y;
      }

      if (this.y >= maxPoint.y) {
        this.y = maxPoint.y - this.y;
      }
    }
  }, {
    key: "clipWrap",
    value: function clipWrap(maxPoint) {
      if (this.x < 0) {
        this.x = 0;
      }

      if (this.x >= maxPoint.x) {
        this.x = maxPoint.x - 1;
      }

      if (this.y < 0) {
        this.y = 0;
      }

      if (this.y >= maxPoint.y) {
        this.y = maxPoint.y - 1;
      }
    }
  }]);

  return Point;
}();

/* harmony default export */ __webpack_exports__["default"] = (Point);

/***/ }),

/***/ "./src/Swarm.js":
/*!**********************!*\
  !*** ./src/Swarm.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Agent */ "./src/Agent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Swarm =
/*#__PURE__*/
function () {
  function Swarm() {
    _classCallCheck(this, Swarm);

    this.swarm = Array(_constants__WEBPACK_IMPORTED_MODULE_1__["NUM_AGENTS"]);
    this.eliteAgent = null;
    this.eliteRewards = null;
    this.eliteRate = 0;
    this.episode = 0;
    this.timeStamp = Date.now();

    for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__["NUM_AGENTS"]; i++) {
      this.swarm[i] = new _Agent__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
  }

  _createClass(Swarm, [{
    key: "update",
    value: function update(heatmap) {
      var _this = this;

      this.teach();
      this.swarm.map(function (o) {
        o.update(heatmap, _this.episode);
      });
    }
  }, {
    key: "draw",
    value: function draw(display) {
      var _this2 = this;

      this.swarm.map(function (o) {
        if (o == _this2.eliteAgent) {
          o.draw(display, "rgb(255, 0, 0)");
        } else {
          o.draw(display, "rgb(0, 255, 0)");
        }
      });
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(food) {
      this.swarm.forEach(function (agent) {
        if (food.checkCollision(agent.point.truncPoint())) {
          agent.reward();
        }
      });
      return false;
    }
  }, {
    key: "getTopAgent",
    value: function getTopAgent() {
      var tmpAgent = this.swarm[0];
      this.swarm.forEach(function (agent) {
        if (agent.rewards > tmpAgent.rewards) {
          tmpAgent = agent;
        }
      });
      return tmpAgent;
    }
  }, {
    key: "teach",
    value: function teach() {
      var topAgent = this.getTopAgent();

      if (topAgent.rewards > this.eliteRewards) {
        this.eliteAgent = topAgent;
        this.eliteRewards = topAgent.rewards;
        this.swarm.forEach(function (agent) {
          if (agent !== topAgent) agent.learnFrom(topAgent);
          agent.rewards = 0;
        });
        this.episode++;
        this.timeStamp = Date.now();
        console.log("Top Agents Reward: ".concat(this.eliteRewards));
      }
    }
  }]);

  return Swarm;
}();

/* harmony default export */ __webpack_exports__["default"] = (Swarm);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: DISPLAY_WIDTH, DISPLAY_HEIGHT, DISPLAY_BACKGROUND_COLOR, GRID_SIZE, GRID_BLOCK_SIZE, NUM_FOOD, NUM_AGENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_WIDTH", function() { return DISPLAY_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_HEIGHT", function() { return DISPLAY_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_BACKGROUND_COLOR", function() { return DISPLAY_BACKGROUND_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_SIZE", function() { return GRID_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_BLOCK_SIZE", function() { return GRID_BLOCK_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_FOOD", function() { return NUM_FOOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_AGENTS", function() { return NUM_AGENTS; });
var DISPLAY_WIDTH = 640;
var DISPLAY_HEIGHT = 640;
var DISPLAY_BACKGROUND_COLOR = "black";
var GRID_SIZE = 80;
var GRID_BLOCK_SIZE = Math.trunc(DISPLAY_WIDTH / GRID_SIZE);
var NUM_FOOD = 10;
var NUM_AGENTS = 15;

/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point */ "./src/Point.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Food =
/*#__PURE__*/
function () {
  function Food(numFood) {
    _classCallCheck(this, Food);

    this.points = Array(numFood).fill(0);

    for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__["NUM_FOOD"]; i++) {
      this.points[i] = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](Math.trunc(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]), Math.trunc(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]));
    }
  }

  _createClass(Food, [{
    key: "draw",
    value: function draw(display) {
      this.points.forEach(function (p) {
        display.drawRect(p.x * _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_BLOCK_SIZE"], p.y * _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_BLOCK_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_BLOCK_SIZE"], _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_BLOCK_SIZE"], "white");
      });
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(point) {
      for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__["NUM_FOOD"]; i++) {
        if (this.points[i].equals(point)) {
          this.points[i] = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](Math.trunc(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]), Math.trunc(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_SIZE"]));
          return true;
        }
      }

      return false;
    }
  }]);

  return Food;
}();

/* harmony default export */ __webpack_exports__["default"] = (Food);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Engine */ "./src/Engine.js");



var main = function main() {
  var engine = new _Engine__WEBPACK_IMPORTED_MODULE_1__["default"]();
  setInterval(function () {
    return engine.run();
  }, 1000 / 50);
};

main();

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: clipMinMax, sum, max, magnifyVecTo1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipMinMax", function() { return clipMinMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magnifyVecTo1", function() { return magnifyVecTo1; });
function clipMinMax(num, min, max) {
  var tmpNum = num;
  if (tmpNum < min) tmpNum = min;
  if (tmpNum > max) tmpNum = max;
  return tmpNum;
}
function sum(vec) {
  return vec.reduce(function (a, i) {
    return a + i;
  });
}
function max(vec) {
  return vec.reduce(function (a, i) {
    return i > a ? i : a;
  });
}
function magnifyVecTo1(vec) {
  var maxIn = max(vec);

  if (maxIn != 0) {
    var scale = 1 / maxIn;
    var scaledVec = vec.map(function (e) {
      return e * scale;
    });
    return scaledVec;
  }

  return vec;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fzc2VydC9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FnZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9EaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9FbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlYXRtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05ldXJhbE5ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Td2FybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb29kLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsibGVhcm5pbmdSYXRlIiwiQWdlbnQiLCJwb2ludCIsIlBvaW50IiwiTWF0aCIsInJhbmRvbSIsIkdSSURfU0laRSIsIm5ldXJhbE5ldCIsIk5ldXJhbE5ldHdvcmsiLCJiZXN0VmVjIiwid2VpZ2h0cyIsImJlc3RSZXdhcmRzIiwicmV3YXJkcyIsInZlbCIsIkFycmF5IiwibnVtV2VpZ2h0cyIsImZpbGwiLCJoZWF0bWFwIiwicG9zWCIsInRydW5jIiwieCIsInBvc1kiLCJ5IiwiaW5wdXQiLCJnZXQ1UG9pbnRSYWRpdXMiLCJtYXAiLCJpIiwibWFnbmlmeVZlY1RvMSIsIm91dHB1dCIsImZlZWRGb3dhcmQiLCJ3cmFwIiwiZGlzcGxheSIsImMiLCJkcmF3UmVjdCIsIkdSSURfQkxPQ0tfU0laRSIsInRvcEFnZW50IiwiZ2xvYmFsVG9wVmVjIiwiYWdlbnRWZWMiLCJsZW5ndGgiLCJnQmVzdFZlYyIsImxCZXN0VmVjIiwiY2xpcE1pbk1heCIsInAiLCJEaXNwbGF5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRElTUExBWV9XSURUSCIsIkRJU1BMQVlfSEVJR0hUIiwiRElTUExBWV9CQUNLR1JPVU5EX0NPTE9SIiwidyIsImgiLCJjb2xvciIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiciIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZnJvbVgiLCJmcm9tWSIsInRvWCIsInRvWSIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic3RyIiwiZm9udCIsInRleHRCYXNlbGluZSIsImZpbGxUZXh0IiwiRW5naW5lIiwiZm9vZCIsIkZvb2QiLCJoZWF0TWFwIiwiSGVhdG1hcCIsInN3YXJtIiwiU3dhcm0iLCJjbGVhciIsInVwZGF0ZSIsImRyYXciLCJjaGVja0NvbGxpc2lvbiIsImRyYXdUZXh0IiwiZXBpc29kZSIsImdyaWQiLCJ2IiwiZ2V0UG9pbnQiLCJhdmciLCJwb2ludHMiLCJmIiwiY2VudGVyUG9pbnQiLCJ2YWxzIiwibnVtSW5wdXRzIiwibnVtSGlkZGVuIiwibnVtT3V0cHV0cyIsInB1bHNlIiwiYWN0aXZhdGlvbkYiLCJ0YW5oIiwiaGlkZGVuIiwid2VpZ2h0SW5kZXgiLCJvIiwibWF4UG9pbnQiLCJOVU1fQUdFTlRTIiwiZWxpdGVBZ2VudCIsImVsaXRlUmV3YXJkcyIsImVsaXRlUmF0ZSIsInRpbWVTdGFtcCIsIkRhdGUiLCJub3ciLCJ0ZWFjaCIsImZvckVhY2giLCJhZ2VudCIsInRydW5jUG9pbnQiLCJyZXdhcmQiLCJ0bXBBZ2VudCIsImdldFRvcEFnZW50IiwibGVhcm5Gcm9tIiwiY29uc29sZSIsImxvZyIsIk5VTV9GT09EIiwibnVtRm9vZCIsImVxdWFscyIsIm1haW4iLCJlbmdpbmUiLCJzZXRJbnRlcnZhbCIsInJ1biIsIm51bSIsIm1pbiIsIm1heCIsInRtcE51bSIsInN1bSIsInZlYyIsInJlZHVjZSIsImEiLCJtYXhJbiIsInNjYWxlIiwic2NhbGVkVmVjIiwiZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQSw4Q0FBYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyw0REFBZTs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsbUJBQU8sQ0FBQywwQ0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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Q0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQU8sQ0FBQywwRUFBb0I7O0FBRS9DO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyw2REFBVTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtB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QUM5RyxHQUFKLENBQVEsVUFBQW9ILENBQUM7QUFBQSxhQUFJQSxDQUFDLEdBQUdGLEtBQVI7QUFBQSxLQUFULENBQWhCO0FBQ0EsV0FBT0MsU0FBUDtBQUNEOztBQUNELFNBQU9MLEdBQVA7QUFDRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBjb21wYXJlIGFuZCBpc0J1ZmZlciB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2Jsb2IvNjgwZTllNWU0ODhmMjJhYWMyNzU5OWE1N2RjODQ0YTYzMTU5MjhkZC9pbmRleC5qc1xuLy8gb3JpZ2luYWwgbm90aWNlOlxuXG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciB4ID0gYS5sZW5ndGg7XG4gIHZhciB5ID0gYi5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV07XG4gICAgICB5ID0gYltpXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoeSA8IHgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGlzQnVmZmVyKGIpIHtcbiAgaWYgKGdsb2JhbC5CdWZmZXIgJiYgdHlwZW9mIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlcihiKTtcbiAgfVxuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKTtcbn1cblxuLy8gYmFzZWQgb24gbm9kZSBhc3NlcnQsIG9yaWdpbmFsIG5vdGljZTpcbi8vIE5COiBUaGUgVVJMIHRvIHRoZSBDb21tb25KUyBzcGVjIGlzIGtlcHQganVzdCBmb3IgdHJhZGl0aW9uLlxuLy8gICAgIG5vZGUtYXNzZXJ0IGhhcyBldm9sdmVkIGEgbG90IHNpbmNlIHRoZW4sIGJvdGggaW4gQVBJIGFuZCBiZWhhdmlvci5cblxuLy8gaHR0cDovL3dpa2kuY29tbW9uanMub3JnL3dpa2kvVW5pdF9UZXN0aW5nLzEuMFxuLy9cbi8vIFRISVMgSVMgTk9UIFRFU1RFRCBOT1IgTElLRUxZIFRPIFdPUksgT1VUU0lERSBWOCFcbi8vXG4vLyBPcmlnaW5hbGx5IGZyb20gbmFyd2hhbC5qcyAoaHR0cDovL25hcndoYWxqcy5vcmcpXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDkgVGhvbWFzIFJvYmluc29uIDwyODBub3J0aC5jb20+XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvXG4vLyBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuLy8gcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4vLyBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuLy8gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuLy8gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbC8nKTtcbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBmdW5jdGlvbnNIYXZlTmFtZXMgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZm9vKCkge30ubmFtZSA9PT0gJ2Zvbyc7XG59KCkpO1xuZnVuY3Rpb24gcFRvU3RyaW5nIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufVxuZnVuY3Rpb24gaXNWaWV3KGFycmJ1Zikge1xuICBpZiAoaXNCdWZmZXIoYXJyYnVmKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIGdsb2JhbC5BcnJheUJ1ZmZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoYXJyYnVmKTtcbiAgfVxuICBpZiAoIWFycmJ1Zikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoYXJyYnVmIGluc3RhbmNlb2YgRGF0YVZpZXcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYXJyYnVmLmJ1ZmZlciAmJiBhcnJidWYuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4vLyAxLiBUaGUgYXNzZXJ0IG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbnMgdGhhdCB0aHJvd1xuLy8gQXNzZXJ0aW9uRXJyb3IncyB3aGVuIHBhcnRpY3VsYXIgY29uZGl0aW9ucyBhcmUgbm90IG1ldC4gVGhlXG4vLyBhc3NlcnQgbW9kdWxlIG11c3QgY29uZm9ybSB0byB0aGUgZm9sbG93aW5nIGludGVyZmFjZS5cblxudmFyIGFzc2VydCA9IG1vZHVsZS5leHBvcnRzID0gb2s7XG5cbi8vIDIuIFRoZSBBc3NlcnRpb25FcnJvciBpcyBkZWZpbmVkIGluIGFzc2VydC5cbi8vIG5ldyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IoeyBtZXNzYWdlOiBtZXNzYWdlLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogYWN0dWFsLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCB9KVxuXG52YXIgcmVnZXggPSAvXFxzKmZ1bmN0aW9uXFxzKyhbXlxcKFxcc10qKVxccyovO1xuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9mdW5jdGlvbi5wcm90b3R5cGUubmFtZS9ibG9iL2FkZWVlZWM4YmZjYzYwNjhiMTg3ZDdkOWZiM2Q1YmIxZDNhMzA4OTkvaW1wbGVtZW50YXRpb24uanNcbmZ1bmN0aW9uIGdldE5hbWUoZnVuYykge1xuICBpZiAoIXV0aWwuaXNGdW5jdGlvbihmdW5jKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzKSB7XG4gICAgcmV0dXJuIGZ1bmMubmFtZTtcbiAgfVxuICB2YXIgc3RyID0gZnVuYy50b1N0cmluZygpO1xuICB2YXIgbWF0Y2ggPSBzdHIubWF0Y2gocmVnZXgpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV07XG59XG5hc3NlcnQuQXNzZXJ0aW9uRXJyb3IgPSBmdW5jdGlvbiBBc3NlcnRpb25FcnJvcihvcHRpb25zKSB7XG4gIHRoaXMubmFtZSA9ICdBc3NlcnRpb25FcnJvcic7XG4gIHRoaXMuYWN0dWFsID0gb3B0aW9ucy5hY3R1YWw7XG4gIHRoaXMuZXhwZWN0ZWQgPSBvcHRpb25zLmV4cGVjdGVkO1xuICB0aGlzLm9wZXJhdG9yID0gb3B0aW9ucy5vcGVyYXRvcjtcbiAgaWYgKG9wdGlvbnMubWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG9wdGlvbnMubWVzc2FnZTtcbiAgICB0aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBnZXRNZXNzYWdlKHRoaXMpO1xuICAgIHRoaXMuZ2VuZXJhdGVkTWVzc2FnZSA9IHRydWU7XG4gIH1cbiAgdmFyIHN0YWNrU3RhcnRGdW5jdGlvbiA9IG9wdGlvbnMuc3RhY2tTdGFydEZ1bmN0aW9uIHx8IGZhaWw7XG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHN0YWNrU3RhcnRGdW5jdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gbm9uIHY4IGJyb3dzZXJzIHNvIHdlIGNhbiBoYXZlIGEgc3RhY2t0cmFjZVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcbiAgICBpZiAoZXJyLnN0YWNrKSB7XG4gICAgICB2YXIgb3V0ID0gZXJyLnN0YWNrO1xuXG4gICAgICAvLyB0cnkgdG8gc3RyaXAgdXNlbGVzcyBmcmFtZXNcbiAgICAgIHZhciBmbl9uYW1lID0gZ2V0TmFtZShzdGFja1N0YXJ0RnVuY3Rpb24pO1xuICAgICAgdmFyIGlkeCA9IG91dC5pbmRleE9mKCdcXG4nICsgZm5fbmFtZSk7XG4gICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgLy8gb25jZSB3ZSBoYXZlIGxvY2F0ZWQgdGhlIGZ1bmN0aW9uIGZyYW1lXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gc3RyaXAgb3V0IGV2ZXJ5dGhpbmcgYmVmb3JlIGl0IChhbmQgaXRzIGxpbmUpXG4gICAgICAgIHZhciBuZXh0X2xpbmUgPSBvdXQuaW5kZXhPZignXFxuJywgaWR4ICsgMSk7XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcobmV4dF9saW5lICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhY2sgPSBvdXQ7XG4gICAgfVxuICB9XG59O1xuXG4vLyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IgaW5zdGFuY2VvZiBFcnJvclxudXRpbC5pbmhlcml0cyhhc3NlcnQuQXNzZXJ0aW9uRXJyb3IsIEVycm9yKTtcblxuZnVuY3Rpb24gdHJ1bmNhdGUocywgbikge1xuICBpZiAodHlwZW9mIHMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHMubGVuZ3RoIDwgbiA/IHMgOiBzLnNsaWNlKDAsIG4pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzO1xuICB9XG59XG5mdW5jdGlvbiBpbnNwZWN0KHNvbWV0aGluZykge1xuICBpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzIHx8ICF1dGlsLmlzRnVuY3Rpb24oc29tZXRoaW5nKSkge1xuICAgIHJldHVybiB1dGlsLmluc3BlY3Qoc29tZXRoaW5nKTtcbiAgfVxuICB2YXIgcmF3bmFtZSA9IGdldE5hbWUoc29tZXRoaW5nKTtcbiAgdmFyIG5hbWUgPSByYXduYW1lID8gJzogJyArIHJhd25hbWUgOiAnJztcbiAgcmV0dXJuICdbRnVuY3Rpb24nICsgIG5hbWUgKyAnXSc7XG59XG5mdW5jdGlvbiBnZXRNZXNzYWdlKHNlbGYpIHtcbiAgcmV0dXJuIHRydW5jYXRlKGluc3BlY3Qoc2VsZi5hY3R1YWwpLCAxMjgpICsgJyAnICtcbiAgICAgICAgIHNlbGYub3BlcmF0b3IgKyAnICcgK1xuICAgICAgICAgdHJ1bmNhdGUoaW5zcGVjdChzZWxmLmV4cGVjdGVkKSwgMTI4KTtcbn1cblxuLy8gQXQgcHJlc2VudCBvbmx5IHRoZSB0aHJlZSBrZXlzIG1lbnRpb25lZCBhYm92ZSBhcmUgdXNlZCBhbmRcbi8vIHVuZGVyc3Rvb2QgYnkgdGhlIHNwZWMuIEltcGxlbWVudGF0aW9ucyBvciBzdWIgbW9kdWxlcyBjYW4gcGFzc1xuLy8gb3RoZXIga2V5cyB0byB0aGUgQXNzZXJ0aW9uRXJyb3IncyBjb25zdHJ1Y3RvciAtIHRoZXkgd2lsbCBiZVxuLy8gaWdub3JlZC5cblxuLy8gMy4gQWxsIG9mIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIG11c3QgdGhyb3cgYW4gQXNzZXJ0aW9uRXJyb3Jcbi8vIHdoZW4gYSBjb3JyZXNwb25kaW5nIGNvbmRpdGlvbiBpcyBub3QgbWV0LCB3aXRoIGEgbWVzc2FnZSB0aGF0XG4vLyBtYXkgYmUgdW5kZWZpbmVkIGlmIG5vdCBwcm92aWRlZC4gIEFsbCBhc3NlcnRpb24gbWV0aG9kcyBwcm92aWRlXG4vLyBib3RoIHRoZSBhY3R1YWwgYW5kIGV4cGVjdGVkIHZhbHVlcyB0byB0aGUgYXNzZXJ0aW9uIGVycm9yIGZvclxuLy8gZGlzcGxheSBwdXJwb3Nlcy5cblxuZnVuY3Rpb24gZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBvcGVyYXRvciwgc3RhY2tTdGFydEZ1bmN0aW9uKSB7XG4gIHRocm93IG5ldyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3Ioe1xuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgIG9wZXJhdG9yOiBvcGVyYXRvcixcbiAgICBzdGFja1N0YXJ0RnVuY3Rpb246IHN0YWNrU3RhcnRGdW5jdGlvblxuICB9KTtcbn1cblxuLy8gRVhURU5TSU9OISBhbGxvd3MgZm9yIHdlbGwgYmVoYXZlZCBlcnJvcnMgZGVmaW5lZCBlbHNld2hlcmUuXG5hc3NlcnQuZmFpbCA9IGZhaWw7XG5cbi8vIDQuIFB1cmUgYXNzZXJ0aW9uIHRlc3RzIHdoZXRoZXIgYSB2YWx1ZSBpcyB0cnV0aHksIGFzIGRldGVybWluZWRcbi8vIGJ5ICEhZ3VhcmQuXG4vLyBhc3NlcnQub2soZ3VhcmQsIG1lc3NhZ2Vfb3B0KTtcbi8vIFRoaXMgc3RhdGVtZW50IGlzIGVxdWl2YWxlbnQgdG8gYXNzZXJ0LmVxdWFsKHRydWUsICEhZ3VhcmQsXG4vLyBtZXNzYWdlX29wdCk7LiBUbyB0ZXN0IHN0cmljdGx5IGZvciB0aGUgdmFsdWUgdHJ1ZSwgdXNlXG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwodHJ1ZSwgZ3VhcmQsIG1lc3NhZ2Vfb3B0KTsuXG5cbmZ1bmN0aW9uIG9rKHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICghdmFsdWUpIGZhaWwodmFsdWUsIHRydWUsIG1lc3NhZ2UsICc9PScsIGFzc2VydC5vayk7XG59XG5hc3NlcnQub2sgPSBvaztcblxuLy8gNS4gVGhlIGVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBzaGFsbG93LCBjb2VyY2l2ZSBlcXVhbGl0eSB3aXRoXG4vLyA9PS5cbi8vIGFzc2VydC5lcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCAhPSBleHBlY3RlZCkgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnPT0nLCBhc3NlcnQuZXF1YWwpO1xufTtcblxuLy8gNi4gVGhlIG5vbi1lcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgZm9yIHdoZXRoZXIgdHdvIG9iamVjdHMgYXJlIG5vdCBlcXVhbFxuLy8gd2l0aCAhPSBhc3NlcnQubm90RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90RXF1YWwgPSBmdW5jdGlvbiBub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgPT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICchPScsIGFzc2VydC5ub3RFcXVhbCk7XG4gIH1cbn07XG5cbi8vIDcuIFRoZSBlcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgYSBkZWVwIGVxdWFsaXR5IHJlbGF0aW9uLlxuLy8gYXNzZXJ0LmRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5kZWVwRXF1YWwgPSBmdW5jdGlvbiBkZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoIV9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgZmFsc2UpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnZGVlcEVxdWFsJywgYXNzZXJ0LmRlZXBFcXVhbCk7XG4gIH1cbn07XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBkZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoIV9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgdHJ1ZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdkZWVwU3RyaWN0RXF1YWwnLCBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBzdHJpY3QsIG1lbW9zKSB7XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGFjdHVhbCkgJiYgaXNCdWZmZXIoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYWN0dWFsLCBleHBlY3RlZCkgPT09IDA7XG5cbiAgLy8gNy4yLiBJZiB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgYSBEYXRlIG9iamVjdCwgdGhlIGFjdHVhbCB2YWx1ZSBpc1xuICAvLyBlcXVpdmFsZW50IGlmIGl0IGlzIGFsc28gYSBEYXRlIG9iamVjdCB0aGF0IHJlZmVycyB0byB0aGUgc2FtZSB0aW1lLlxuICB9IGVsc2UgaWYgKHV0aWwuaXNEYXRlKGFjdHVhbCkgJiYgdXRpbC5pc0RhdGUoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMgSWYgdGhlIGV4cGVjdGVkIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgdGhlIGFjdHVhbCB2YWx1ZSBpc1xuICAvLyBlcXVpdmFsZW50IGlmIGl0IGlzIGFsc28gYSBSZWdFeHAgb2JqZWN0IHdpdGggdGhlIHNhbWUgc291cmNlIGFuZFxuICAvLyBwcm9wZXJ0aWVzIChgZ2xvYmFsYCwgYG11bHRpbGluZWAsIGBsYXN0SW5kZXhgLCBgaWdub3JlQ2FzZWApLlxuICB9IGVsc2UgaWYgKHV0aWwuaXNSZWdFeHAoYWN0dWFsKSAmJiB1dGlsLmlzUmVnRXhwKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBhY3R1YWwuc291cmNlID09PSBleHBlY3RlZC5zb3VyY2UgJiZcbiAgICAgICAgICAgYWN0dWFsLmdsb2JhbCA9PT0gZXhwZWN0ZWQuZ2xvYmFsICYmXG4gICAgICAgICAgIGFjdHVhbC5tdWx0aWxpbmUgPT09IGV4cGVjdGVkLm11bHRpbGluZSAmJlxuICAgICAgICAgICBhY3R1YWwubGFzdEluZGV4ID09PSBleHBlY3RlZC5sYXN0SW5kZXggJiZcbiAgICAgICAgICAgYWN0dWFsLmlnbm9yZUNhc2UgPT09IGV4cGVjdGVkLmlnbm9yZUNhc2U7XG5cbiAgLy8gNy40LiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKChhY3R1YWwgPT09IG51bGwgfHwgdHlwZW9mIGFjdHVhbCAhPT0gJ29iamVjdCcpICYmXG4gICAgICAgICAgICAgKGV4cGVjdGVkID09PSBudWxsIHx8IHR5cGVvZiBleHBlY3RlZCAhPT0gJ29iamVjdCcpKSB7XG4gICAgcmV0dXJuIHN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gSWYgYm90aCB2YWx1ZXMgYXJlIGluc3RhbmNlcyBvZiB0eXBlZCBhcnJheXMsIHdyYXAgdGhlaXIgdW5kZXJseWluZ1xuICAvLyBBcnJheUJ1ZmZlcnMgaW4gYSBCdWZmZXIgZWFjaCB0byBpbmNyZWFzZSBwZXJmb3JtYW5jZVxuICAvLyBUaGlzIG9wdGltaXphdGlvbiByZXF1aXJlcyB0aGUgYXJyYXlzIHRvIGhhdmUgdGhlIHNhbWUgdHlwZSBhcyBjaGVja2VkIGJ5XG4gIC8vIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgKGFrYSBwVG9TdHJpbmcpLiBOZXZlciBwZXJmb3JtIGJpbmFyeVxuICAvLyBjb21wYXJpc29ucyBmb3IgRmxvYXQqQXJyYXlzLCB0aG91Z2gsIHNpbmNlIGUuZy4gKzAgPT09IC0wIGJ1dCB0aGVpclxuICAvLyBiaXQgcGF0dGVybnMgYXJlIG5vdCBpZGVudGljYWwuXG4gIH0gZWxzZSBpZiAoaXNWaWV3KGFjdHVhbCkgJiYgaXNWaWV3KGV4cGVjdGVkKSAmJlxuICAgICAgICAgICAgIHBUb1N0cmluZyhhY3R1YWwpID09PSBwVG9TdHJpbmcoZXhwZWN0ZWQpICYmXG4gICAgICAgICAgICAgIShhY3R1YWwgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHxcbiAgICAgICAgICAgICAgIGFjdHVhbCBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheSkpIHtcbiAgICByZXR1cm4gY29tcGFyZShuZXcgVWludDhBcnJheShhY3R1YWwuYnVmZmVyKSxcbiAgICAgICAgICAgICAgICAgICBuZXcgVWludDhBcnJheShleHBlY3RlZC5idWZmZXIpKSA9PT0gMDtcblxuICAvLyA3LjUgRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGFjdHVhbCkgIT09IGlzQnVmZmVyKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBtZW1vcyA9IG1lbW9zIHx8IHthY3R1YWw6IFtdLCBleHBlY3RlZDogW119O1xuXG4gICAgdmFyIGFjdHVhbEluZGV4ID0gbWVtb3MuYWN0dWFsLmluZGV4T2YoYWN0dWFsKTtcbiAgICBpZiAoYWN0dWFsSW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAoYWN0dWFsSW5kZXggPT09IG1lbW9zLmV4cGVjdGVkLmluZGV4T2YoZXhwZWN0ZWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9zLmFjdHVhbC5wdXNoKGFjdHVhbCk7XG4gICAgbWVtb3MuZXhwZWN0ZWQucHVzaChleHBlY3RlZCk7XG5cbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgc3RyaWN0LCBtZW1vcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNBcmd1bWVudHMob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgc3RyaWN0LCBhY3R1YWxWaXNpdGVkT2JqZWN0cykge1xuICBpZiAoYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBpZiBvbmUgaXMgYSBwcmltaXRpdmUsIHRoZSBvdGhlciBtdXN0IGJlIHNhbWVcbiAgaWYgKHV0aWwuaXNQcmltaXRpdmUoYSkgfHwgdXRpbC5pc1ByaW1pdGl2ZShiKSlcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgaWYgKHN0cmljdCAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYSkgIT09IE9iamVjdC5nZXRQcm90b3R5cGVPZihiKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIHZhciBhSXNBcmdzID0gaXNBcmd1bWVudHMoYSk7XG4gIHZhciBiSXNBcmdzID0gaXNBcmd1bWVudHMoYik7XG4gIGlmICgoYUlzQXJncyAmJiAhYklzQXJncykgfHwgKCFhSXNBcmdzICYmIGJJc0FyZ3MpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgaWYgKGFJc0FyZ3MpIHtcbiAgICBhID0gcFNsaWNlLmNhbGwoYSk7XG4gICAgYiA9IHBTbGljZS5jYWxsKGIpO1xuICAgIHJldHVybiBfZGVlcEVxdWFsKGEsIGIsIHN0cmljdCk7XG4gIH1cbiAgdmFyIGthID0gb2JqZWN0S2V5cyhhKTtcbiAgdmFyIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgdmFyIGtleSwgaTtcbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT09IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFfZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBzdHJpY3QsIGFjdHVhbFZpc2l0ZWRPYmplY3RzKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gOC4gVGhlIG5vbi1lcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgZm9yIGFueSBkZWVwIGluZXF1YWxpdHkuXG4vLyBhc3NlcnQubm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdERlZXBFcXVhbCA9IGZ1bmN0aW9uIG5vdERlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIGZhbHNlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ25vdERlZXBFcXVhbCcsIGFzc2VydC5ub3REZWVwRXF1YWwpO1xuICB9XG59O1xuXG5hc3NlcnQubm90RGVlcFN0cmljdEVxdWFsID0gbm90RGVlcFN0cmljdEVxdWFsO1xuZnVuY3Rpb24gbm90RGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgdHJ1ZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdub3REZWVwU3RyaWN0RXF1YWwnLCBub3REZWVwU3RyaWN0RXF1YWwpO1xuICB9XG59XG5cblxuLy8gOS4gVGhlIHN0cmljdCBlcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgc3RyaWN0IGVxdWFsaXR5LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbi8vIGFzc2VydC5zdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIHN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCAhPT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PT0nLCBhc3NlcnQuc3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG4vLyAxMC4gVGhlIHN0cmljdCBub24tZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIGZvciBzdHJpY3QgaW5lcXVhbGl0eSwgYXNcbi8vIGRldGVybWluZWQgYnkgIT09LiAgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdFN0cmljdEVxdWFsID0gZnVuY3Rpb24gbm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9PScsIGFzc2VydC5ub3RTdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpIHtcbiAgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChleHBlY3RlZCkgPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICByZXR1cm4gZXhwZWN0ZWQudGVzdChhY3R1YWwpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAoYWN0dWFsIGluc3RhbmNlb2YgZXhwZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElnbm9yZS4gIFRoZSBpbnN0YW5jZW9mIGNoZWNrIGRvZXNuJ3Qgd29yayBmb3IgYXJyb3cgZnVuY3Rpb25zLlxuICB9XG5cbiAgaWYgKEVycm9yLmlzUHJvdG90eXBlT2YoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGV4cGVjdGVkLmNhbGwoe30sIGFjdHVhbCkgPT09IHRydWU7XG59XG5cbmZ1bmN0aW9uIF90cnlCbG9jayhibG9jaykge1xuICB2YXIgZXJyb3I7XG4gIHRyeSB7XG4gICAgYmxvY2soKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVycm9yID0gZTtcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIF90aHJvd3Moc2hvdWxkVGhyb3csIGJsb2NrLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICB2YXIgYWN0dWFsO1xuXG4gIGlmICh0eXBlb2YgYmxvY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJsb2NrXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cGVjdGVkID09PSAnc3RyaW5nJykge1xuICAgIG1lc3NhZ2UgPSBleHBlY3RlZDtcbiAgICBleHBlY3RlZCA9IG51bGw7XG4gIH1cblxuICBhY3R1YWwgPSBfdHJ5QmxvY2soYmxvY2spO1xuXG4gIG1lc3NhZ2UgPSAoZXhwZWN0ZWQgJiYgZXhwZWN0ZWQubmFtZSA/ICcgKCcgKyBleHBlY3RlZC5uYW1lICsgJykuJyA6ICcuJykgK1xuICAgICAgICAgICAgKG1lc3NhZ2UgPyAnICcgKyBtZXNzYWdlIDogJy4nKTtcblxuICBpZiAoc2hvdWxkVGhyb3cgJiYgIWFjdHVhbCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgJ01pc3NpbmcgZXhwZWN0ZWQgZXhjZXB0aW9uJyArIG1lc3NhZ2UpO1xuICB9XG5cbiAgdmFyIHVzZXJQcm92aWRlZE1lc3NhZ2UgPSB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZyc7XG4gIHZhciBpc1Vud2FudGVkRXhjZXB0aW9uID0gIXNob3VsZFRocm93ICYmIHV0aWwuaXNFcnJvcihhY3R1YWwpO1xuICB2YXIgaXNVbmV4cGVjdGVkRXhjZXB0aW9uID0gIXNob3VsZFRocm93ICYmIGFjdHVhbCAmJiAhZXhwZWN0ZWQ7XG5cbiAgaWYgKChpc1Vud2FudGVkRXhjZXB0aW9uICYmXG4gICAgICB1c2VyUHJvdmlkZWRNZXNzYWdlICYmXG4gICAgICBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSkgfHxcbiAgICAgIGlzVW5leHBlY3RlZEV4Y2VwdGlvbikge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgJ0dvdCB1bndhbnRlZCBleGNlcHRpb24nICsgbWVzc2FnZSk7XG4gIH1cblxuICBpZiAoKHNob3VsZFRocm93ICYmIGFjdHVhbCAmJiBleHBlY3RlZCAmJlxuICAgICAgIWV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpKSB8fCAoIXNob3VsZFRocm93ICYmIGFjdHVhbCkpIHtcbiAgICB0aHJvdyBhY3R1YWw7XG4gIH1cbn1cblxuLy8gMTEuIEV4cGVjdGVkIHRvIHRocm93IGFuIGVycm9yOlxuLy8gYXNzZXJ0LnRocm93cyhibG9jaywgRXJyb3Jfb3B0LCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC50aHJvd3MgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovZXJyb3IsIC8qb3B0aW9uYWwqL21lc3NhZ2UpIHtcbiAgX3Rocm93cyh0cnVlLCBibG9jaywgZXJyb3IsIG1lc3NhZ2UpO1xufTtcblxuLy8gRVhURU5TSU9OISBUaGlzIGlzIGFubm95aW5nIHRvIHdyaXRlIG91dHNpZGUgdGhpcyBtb2R1bGUuXG5hc3NlcnQuZG9lc05vdFRocm93ID0gZnVuY3Rpb24oYmxvY2ssIC8qb3B0aW9uYWwqL2Vycm9yLCAvKm9wdGlvbmFsKi9tZXNzYWdlKSB7XG4gIF90aHJvd3MoZmFsc2UsIGJsb2NrLCBlcnJvciwgbWVzc2FnZSk7XG59O1xuXG5hc3NlcnQuaWZFcnJvciA9IGZ1bmN0aW9uKGVycikgeyBpZiAoZXJyKSB0aHJvdyBlcnI7IH07XG5cbi8vIEV4cG9zZSBhIHN0cmljdCBvbmx5IHZhcmlhbnQgb2YgYXNzZXJ0XG5mdW5jdGlvbiBzdHJpY3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkgZmFpbCh2YWx1ZSwgdHJ1ZSwgbWVzc2FnZSwgJz09Jywgc3RyaWN0KTtcbn1cbmFzc2VydC5zdHJpY3QgPSBvYmplY3RBc3NpZ24oc3RyaWN0LCBhc3NlcnQsIHtcbiAgZXF1YWw6IGFzc2VydC5zdHJpY3RFcXVhbCxcbiAgZGVlcEVxdWFsOiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsLFxuICBub3RFcXVhbDogYXNzZXJ0Lm5vdFN0cmljdEVxdWFsLFxuICBub3REZWVwRXF1YWw6IGFzc2VydC5ub3REZWVwU3RyaWN0RXF1YWxcbn0pO1xuYXNzZXJ0LnN0cmljdC5zdHJpY3QgPSBhc3NlcnQuc3RyaWN0O1xuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChoYXNPd24uY2FsbChvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTtcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXNjcmlwdG9yc1trZXlzW2ldXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbnZhciBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbCgndXRpbC5wcm9taXNpZnkuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sICYmIG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF0pIHtcbiAgICB2YXIgZm4gPSBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInV0aWwucHJvbWlzaWZ5LmN1c3RvbVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBmdW5jdGlvbiBmbigpIHtcbiAgICB2YXIgcHJvbWlzZVJlc29sdmUsIHByb21pc2VSZWplY3Q7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBwcm9taXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCB2YWx1ZSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZm4sIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBmbixcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKVxuICApO1xufVxuXG5leHBvcnRzLnByb21pc2lmeS5jdXN0b20gPSBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xcblxuZnVuY3Rpb24gY2FsbGJhY2tpZnlPblJlamVjdGVkKHJlYXNvbiwgY2IpIHtcbiAgLy8gYCFyZWFzb25gIGd1YXJkIGluc3BpcmVkIGJ5IGJsdWViaXJkIChSZWY6IGh0dHBzOi8vZ29vLmdsL3Q1SVM2TSkuXG4gIC8vIEJlY2F1c2UgYG51bGxgIGlzIGEgc3BlY2lhbCBlcnJvciB2YWx1ZSBpbiBjYWxsYmFja3Mgd2hpY2ggbWVhbnMgXCJubyBlcnJvclxuICAvLyBvY2N1cnJlZFwiLCB3ZSBlcnJvci13cmFwIHNvIHRoZSBjYWxsYmFjayBjb25zdW1lciBjYW4gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICAvLyBcInRoZSBwcm9taXNlIHJlamVjdGVkIHdpdGggbnVsbFwiIG9yIFwidGhlIHByb21pc2UgZnVsZmlsbGVkIHdpdGggdW5kZWZpbmVkXCIuXG4gIGlmICghcmVhc29uKSB7XG4gICAgdmFyIG5ld1JlYXNvbiA9IG5ldyBFcnJvcignUHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aCBhIGZhbHN5IHZhbHVlJyk7XG4gICAgbmV3UmVhc29uLnJlYXNvbiA9IHJlYXNvbjtcbiAgICByZWFzb24gPSBuZXdSZWFzb247XG4gIH1cbiAgcmV0dXJuIGNiKHJlYXNvbik7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICB9XG5cbiAgLy8gV2UgRE8gTk9UIHJldHVybiB0aGUgcHJvbWlzZSBhcyBpdCBnaXZlcyB0aGUgdXNlciBhIGZhbHNlIHNlbnNlIHRoYXRcbiAgLy8gdGhlIHByb21pc2UgaXMgYWN0dWFsbHkgc29tZWhvdyByZWxhdGVkIHRvIHRoZSBjYWxsYmFjaydzIGV4ZWN1dGlvblxuICAvLyBhbmQgdGhhdCB0aGUgY2FsbGJhY2sgdGhyb3dpbmcgd2lsbCByZWplY3QgdGhlIHByb21pc2UuXG4gIGZ1bmN0aW9uIGNhbGxiYWNraWZpZWQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG1heWJlQ2IgPSBhcmdzLnBvcCgpO1xuICAgIGlmICh0eXBlb2YgbWF5YmVDYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxhc3QgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtYXliZUNiLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAvLyBJbiB0cnVlIG5vZGUgc3R5bGUgd2UgcHJvY2VzcyB0aGUgY2FsbGJhY2sgb24gYG5leHRUaWNrYCB3aXRoIGFsbCB0aGVcbiAgICAvLyBpbXBsaWNhdGlvbnMgKHN0YWNrLCBgdW5jYXVnaHRFeGNlcHRpb25gLCBgYXN5bmNfaG9va3NgKVxuICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXQpIHsgcHJvY2Vzcy5uZXh0VGljayhjYiwgbnVsbCwgcmV0KSB9LFxuICAgICAgICAgICAgZnVuY3Rpb24ocmVqKSB7IHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2tpZnlPblJlamVjdGVkLCByZWosIGNiKSB9KTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYWxsYmFja2lmaWVkLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2FsbGJhY2tpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbCkpO1xuICByZXR1cm4gY2FsbGJhY2tpZmllZDtcbn1cbmV4cG9ydHMuY2FsbGJhY2tpZnkgPSBjYWxsYmFja2lmeTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgeyBjbGlwTWluTWF4LCBtYWduaWZ5VmVjVG8xIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgR1JJRF9CTE9DS19TSVpFLCBHUklEX1NJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IE5ldXJhbE5ldHdvcmsgZnJvbSBcIi4vTmV1cmFsTmV0d29ya1wiO1xyXG5cclxuY29uc3QgbGVhcm5pbmdSYXRlID0gMjtcclxuXHJcbmNsYXNzIEFnZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucG9pbnQgPSBuZXcgUG9pbnQoXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiBHUklEX1NJWkUsXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiBHUklEX1NJWkVcclxuICAgICk7XHJcbiAgICB0aGlzLm5ldXJhbE5ldCA9IG5ldyBOZXVyYWxOZXR3b3JrKDUsIDIgKiogMywgMik7XHJcbiAgICB0aGlzLmJlc3RWZWMgPSBbLi4udGhpcy5uZXVyYWxOZXQud2VpZ2h0c107XHJcbiAgICB0aGlzLmJlc3RSZXdhcmRzID0gMDtcclxuICAgIHRoaXMucmV3YXJkcyA9IDA7XHJcbiAgICB0aGlzLnZlbCA9IEFycmF5KHRoaXMubmV1cmFsTmV0Lm51bVdlaWdodHMpLmZpbGwoMCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoaGVhdG1hcCkge1xyXG4gICAgbGV0IHBvc1ggPSBNYXRoLnRydW5jKHRoaXMucG9pbnQueCk7XHJcbiAgICBsZXQgcG9zWSA9IE1hdGgudHJ1bmModGhpcy5wb2ludC55KTtcclxuXHJcbiAgICBsZXQgaW5wdXQgPSBoZWF0bWFwLmdldDVQb2ludFJhZGl1cyhuZXcgUG9pbnQocG9zWCwgcG9zWSkpO1xyXG4gICAgaW5wdXQgPSBpbnB1dC5tYXAoaSA9PiBpIC8gMjU1KTtcclxuICAgIGlucHV0ID0gbWFnbmlmeVZlY1RvMShpbnB1dCk7XHJcblxyXG4gICAgbGV0IG91dHB1dCA9IHRoaXMubmV1cmFsTmV0LmZlZWRGb3dhcmQoaW5wdXQpO1xyXG5cclxuICAgIHRoaXMucG9pbnQueCArPSBvdXRwdXRbMF07XHJcbiAgICB0aGlzLnBvaW50LnkgKz0gb3V0cHV0WzFdO1xyXG5cclxuICAgIHRoaXMucG9pbnQud3JhcChuZXcgUG9pbnQoR1JJRF9TSVpFLCBHUklEX1NJWkUpKTtcclxuICB9XHJcblxyXG4gIGRyYXcoZGlzcGxheSwgYykge1xyXG4gICAgZGlzcGxheS5kcmF3UmVjdChcclxuICAgICAgTWF0aC50cnVuYyh0aGlzLnBvaW50LnggKiBHUklEX0JMT0NLX1NJWkUpLFxyXG4gICAgICBNYXRoLnRydW5jKHRoaXMucG9pbnQueSAqIEdSSURfQkxPQ0tfU0laRSksXHJcbiAgICAgIEdSSURfQkxPQ0tfU0laRSxcclxuICAgICAgR1JJRF9CTE9DS19TSVpFLFxyXG4gICAgICBjXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbGVhcm5Gcm9tKHRvcEFnZW50KSB7XHJcbiAgICBpZiAodGhpcy5yZXdhcmRzID4gdGhpcy5iZXN0UmV3YXJkcykge1xyXG4gICAgICB0aGlzLmJlc3RWZWMgPSBbLi4udGhpcy5uZXVyYWxOZXQud2VpZ2h0c107XHJcbiAgICAgIHRoaXMuYmVzdFJld2FyZHMgPSB0aGlzLnJld2FyZHM7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdsb2JhbFRvcFZlYyA9IHRvcEFnZW50Lm5ldXJhbE5ldC53ZWlnaHRzO1xyXG4gICAgbGV0IGFnZW50VmVjID0gdGhpcy5uZXVyYWxOZXQud2VpZ2h0cztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFnZW50VmVjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBnQmVzdFZlYyA9XHJcbiAgICAgICAgKGdsb2JhbFRvcFZlY1tpXSAtIGFnZW50VmVjW2ldKSAqIGxlYXJuaW5nUmF0ZSAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgIGxldCBsQmVzdFZlYyA9XHJcbiAgICAgICAgKHRoaXMuYmVzdFZlY1tpXSAtIGFnZW50VmVjW2ldKSAqIGxlYXJuaW5nUmF0ZSAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgIHRoaXMudmVsW2ldID0gMC43MiAqIHRoaXMudmVsW2ldICsgZ0Jlc3RWZWMgKyBsQmVzdFZlYztcclxuICAgICAgYWdlbnRWZWNbaV0gKz0gdGhpcy52ZWxbaV07XHJcbiAgICAgIGFnZW50VmVjW2ldID0gY2xpcE1pbk1heChhZ2VudFZlY1tpXSwgLTEsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV3YXJkKHAgPSAxKSB7XHJcbiAgICB0aGlzLnJld2FyZHMgKz0gcDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFnZW50O1xyXG4iLCJpbXBvcnQge1xyXG4gIERJU1BMQVlfV0lEVEgsXHJcbiAgRElTUExBWV9IRUlHSFQsXHJcbiAgRElTUExBWV9CQUNLR1JPVU5EX0NPTE9SXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5jbGFzcyBEaXNwbGF5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLmRyYXdSZWN0KFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBESVNQTEFZX1dJRFRILFxyXG4gICAgICBESVNQTEFZX0hFSUdIVCxcclxuICAgICAgRElTUExBWV9CQUNLR1JPVU5EX0NPTE9SXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZHJhd1JlY3QoeCwgeSwgdywgaCwgY29sb3IgPSBcIndoaXRlXCIpIHtcclxuICAgIGNvbnN0IGN0eCA9IHRoaXMuY29udGV4dDtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICB9XHJcblxyXG4gIGRyYXdDaXJjbGUoeCwgeSwgciwgY29sb3IgPSBcIndoaXRlXCIpIHtcclxuICAgIGNvbnN0IGN0eCA9IHRoaXMuY29udGV4dDtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoeCAtIHIsIHkgLSByLCByLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdMaW5lKGZyb21YLCBmcm9tWSwgdG9YLCB0b1ksIGNvbG9yID0gXCJ3aGl0ZVwiKSB7XHJcbiAgICBjb25zdCBjdHggPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGZyb21YLCBmcm9tWSk7XHJcbiAgICBjdHgubGluZVRvKHRvWCwgdG9ZKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd1RleHQoc3RyLCB4LCB5KSB7XHJcbiAgICBjb25zdCBjdHggPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjdHguZm9udCA9IFwiMTZweCBtb25vc3BhY2VcIjtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcclxuICAgIGN0eC5maWxsVGV4dChzdHIsIDEwLCAxMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5O1xyXG4iLCJpbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9EaXNwbGF5XCI7XHJcbmltcG9ydCBGb29kIGZyb20gXCIuL2Zvb2RcIjtcclxuaW1wb3J0IFN3YXJtIGZyb20gXCIuL1N3YXJtXCI7XHJcbmltcG9ydCBIZWF0bWFwIGZyb20gXCIuL0hlYXRtYXBcIjtcclxuXHJcbmNsYXNzIEVuZ2luZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG4gICAgdGhpcy5mb29kID0gbmV3IEZvb2QoKTtcclxuICAgIHRoaXMuaGVhdE1hcCA9IG5ldyBIZWF0bWFwKCk7XHJcbiAgICB0aGlzLnN3YXJtID0gbmV3IFN3YXJtKCk7XHJcbiAgfVxyXG5cclxuICBydW4oKSB7XHJcbiAgICB0aGlzLmRpc3BsYXkuY2xlYXIoKTtcclxuICAgIHRoaXMuaGVhdE1hcC51cGRhdGUodGhpcy5mb29kKTtcclxuICAgIHRoaXMuaGVhdE1hcC5kcmF3KHRoaXMuZGlzcGxheSk7XHJcbiAgICB0aGlzLnN3YXJtLmNoZWNrQ29sbGlzaW9uKHRoaXMuZm9vZCk7XHJcbiAgICB0aGlzLnN3YXJtLnVwZGF0ZSh0aGlzLmhlYXRNYXApO1xyXG4gICAgdGhpcy5zd2FybS5kcmF3KHRoaXMuZGlzcGxheSk7XHJcbiAgICB0aGlzLmRpc3BsYXkuZHJhd1RleHQoYEVwaXNvZGU6ICR7dGhpcy5zd2FybS5lcGlzb2RlfWAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW5naW5lO1xyXG4iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IHsgR1JJRF9TSVpFLCBHUklEX0JMT0NLX1NJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNsYXNzIEhlYXRtYXAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ncmlkID0gQXJyYXkoR1JJRF9TSVpFKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR1JJRF9TSVpFOyBpKyspIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gQXJyYXkoR1JJRF9TSVpFKS5maWxsKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGZvb2QpIHtcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgR1JJRF9TSVpFOyB5KyspIHtcclxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBHUklEX1NJWkU7IHgrKykge1xyXG4gICAgICAgIGxldCB2ID0gW107XHJcbiAgICAgICAgdlswXSA9IHRoaXMuZ2V0UG9pbnQobmV3IFBvaW50KHggKyAxLCB5KSk7XHJcbiAgICAgICAgdlsxXSA9IHRoaXMuZ2V0UG9pbnQobmV3IFBvaW50KHgsIHkgKyAxKSk7XHJcbiAgICAgICAgdlsyXSA9IHRoaXMuZ2V0UG9pbnQobmV3IFBvaW50KHggLSAxLCB5KSk7XHJcbiAgICAgICAgdlszXSA9IHRoaXMuZ2V0UG9pbnQobmV3IFBvaW50KHgsIHkgLSAxKSk7XHJcblxyXG4gICAgICAgIGxldCBhdmcgPSBNYXRoLnRydW5jKCh2WzBdICsgdlsxXSArIHZbMl0gKyB2WzNdKSAvIDQpO1xyXG4gICAgICAgIHRoaXMuZ3JpZFt5XVt4XSA9IGF2ZztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvb2QucG9pbnRzLm1hcChmID0+IHtcclxuICAgICAgdGhpcy5ncmlkW2YueV1bZi54XSA9IDI1NTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhkaXNwbGF5KSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdSSURfU0laRTsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgR1JJRF9TSVpFOyB4KyspIHtcclxuICAgICAgICBsZXQgYyA9IGByZ2IoJHt0aGlzLmdyaWRbeV1beF19LCR7dGhpcy5ncmlkW3ldW3hdfSwke3RoaXMuZ3JpZFt5XVt4XX0pYDtcclxuICAgICAgICBkaXNwbGF5LmRyYXdSZWN0KFxyXG4gICAgICAgICAgeCAqIEdSSURfQkxPQ0tfU0laRSxcclxuICAgICAgICAgIHkgKiBHUklEX0JMT0NLX1NJWkUsXHJcbiAgICAgICAgICBHUklEX0JMT0NLX1NJWkUsXHJcbiAgICAgICAgICBHUklEX0JMT0NLX1NJWkUsXHJcbiAgICAgICAgICBjXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UG9pbnQocG9pbnQpIHtcclxuICAgIHBvaW50LndyYXAobmV3IFBvaW50KEdSSURfU0laRSwgR1JJRF9TSVpFKSk7XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkW3BvaW50LnldW3BvaW50LnhdO1xyXG4gIH1cclxuXHJcbiAgZ2V0NVBvaW50UmFkaXVzKGNlbnRlclBvaW50KSB7XHJcbiAgICBsZXQgdmFscyA9IFtdO1xyXG4gICAgdmFsc1swXSA9IHRoaXMuZ2V0UG9pbnQobmV3IFBvaW50KGNlbnRlclBvaW50LngsIGNlbnRlclBvaW50LnkpKTtcclxuICAgIHZhbHNbMV0gPSB0aGlzLmdldFBvaW50KG5ldyBQb2ludChjZW50ZXJQb2ludC54IC0gMSwgY2VudGVyUG9pbnQueSkpO1xyXG4gICAgdmFsc1syXSA9IHRoaXMuZ2V0UG9pbnQobmV3IFBvaW50KGNlbnRlclBvaW50LnggKyAxLCBjZW50ZXJQb2ludC55KSk7XHJcbiAgICB2YWxzWzNdID0gdGhpcy5nZXRQb2ludChuZXcgUG9pbnQoY2VudGVyUG9pbnQueCwgY2VudGVyUG9pbnQueSAtIDEpKTtcclxuICAgIHZhbHNbNF0gPSB0aGlzLmdldFBvaW50KG5ldyBQb2ludChjZW50ZXJQb2ludC54LCBjZW50ZXJQb2ludC55ICsgMSkpO1xyXG4gICAgcmV0dXJuIHZhbHM7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYXRtYXA7XHJcbiIsImNsYXNzIE5ldXJhbE5ldHdvcmsge1xyXG4gIGNvbnN0cnVjdG9yKG51bUlucHV0cywgbnVtSGlkZGVuLCBudW1PdXRwdXRzKSB7XHJcbiAgICB0aGlzLm51bUlucHV0cyA9IG51bUlucHV0cztcclxuICAgIHRoaXMubnVtSGlkZGVuID0gbnVtSGlkZGVuO1xyXG4gICAgdGhpcy5udW1PdXRwdXRzID0gbnVtT3V0cHV0cztcclxuICAgIHRoaXMubnVtV2VpZ2h0cyA9XHJcbiAgICAgIG51bUlucHV0cyAqIG51bUhpZGRlbiArIG51bUhpZGRlbiAqIG51bU91dHB1dHMgKyBudW1IaWRkZW4gKyBudW1PdXRwdXRzO1xyXG4gICAgdGhpcy53ZWlnaHRzID0gW107XHJcbiAgICB0aGlzLnB1bHNlID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVdlaWdodHM7IGkrKykge1xyXG4gICAgICB0aGlzLndlaWdodHNbaV0gPSBNYXRoLnJhbmRvbSgpIC0gTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWN0aXZhdGlvbkYgPSB4ID0+IHtcclxuICAgICAgcmV0dXJuIE1hdGgudGFuaCh4KTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmZWVkRm93YXJkKGlucHV0KSB7XHJcbiAgICBsZXQgaGlkZGVuID0gQXJyYXkodGhpcy5udW1IaWRkZW4pO1xyXG4gICAgbGV0IG91dHB1dCA9IEFycmF5KHRoaXMubnVtT3V0cHV0cyk7XHJcblxyXG4gICAgbGV0IHdlaWdodEluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IGggPSAwOyBoIDwgdGhpcy5udW1IaWRkZW47IGgrKykge1xyXG4gICAgICBoaWRkZW5baF0gPSB0aGlzLndlaWdodHNbd2VpZ2h0SW5kZXhdO1xyXG4gICAgICB3ZWlnaHRJbmRleCsrO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtSW5wdXRzOyBpKyspIHtcclxuICAgICAgICBoaWRkZW5baF0gKz0gaW5wdXRbaV0gKiB0aGlzLndlaWdodHNbd2VpZ2h0SW5kZXhdO1xyXG4gICAgICAgIHdlaWdodEluZGV4Kys7XHJcbiAgICAgIH1cclxuICAgICAgaGlkZGVuW2hdID0gdGhpcy5hY3RpdmF0aW9uRihoaWRkZW5baF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IG8gPSAwOyBvIDwgdGhpcy5udW1PdXRwdXRzOyBvKyspIHtcclxuICAgICAgb3V0cHV0W29dID0gdGhpcy53ZWlnaHRzW3dlaWdodEluZGV4XTtcclxuICAgICAgd2VpZ2h0SW5kZXgrKztcclxuICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCB0aGlzLm51bUhpZGRlbjsgaCsrKSB7XHJcbiAgICAgICAgb3V0cHV0W29dICs9IGhpZGRlbltoXSAqIHRoaXMud2VpZ2h0c1t3ZWlnaHRJbmRleF07XHJcbiAgICAgICAgd2VpZ2h0SW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgICBvdXRwdXRbb10gPSB0aGlzLmFjdGl2YXRpb25GKG91dHB1dFtvXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV1cmFsTmV0d29yaztcclxuIiwiY2xhc3MgUG9pbnQge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuICBlcXVhbHMocG9pbnQpIHtcclxuICAgIGlmICh0aGlzLnggPT09IHBvaW50LnggJiYgdGhpcy55ID09PSBwb2ludC55KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJ1bmNQb2ludCgpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoTWF0aC50cnVuYyh0aGlzLngpLCBNYXRoLnRydW5jKHRoaXMueSkpO1xyXG4gIH1cclxuXHJcbiAgd3JhcChtYXhQb2ludCkge1xyXG4gICAgaWYgKHRoaXMueCA8IDApIHtcclxuICAgICAgdGhpcy54ID0gbWF4UG9pbnQueCArIHRoaXMueDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnggPj0gbWF4UG9pbnQueCkge1xyXG4gICAgICB0aGlzLnggPSBtYXhQb2ludC54IC0gdGhpcy54O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMueSA8IDApIHtcclxuICAgICAgdGhpcy55ID0gbWF4UG9pbnQueSArIHRoaXMueTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnkgPj0gbWF4UG9pbnQueSkge1xyXG4gICAgICB0aGlzLnkgPSBtYXhQb2ludC55IC0gdGhpcy55O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpcFdyYXAobWF4UG9pbnQpIHtcclxuICAgIGlmICh0aGlzLnggPCAwKSB7XHJcbiAgICAgIHRoaXMueCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy54ID49IG1heFBvaW50LngpIHtcclxuICAgICAgdGhpcy54ID0gbWF4UG9pbnQueCAtIDE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy55IDwgMCkge1xyXG4gICAgICB0aGlzLnkgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMueSA+PSBtYXhQb2ludC55KSB7XHJcbiAgICAgIHRoaXMueSA9IG1heFBvaW50LnkgLSAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XHJcbiIsImltcG9ydCBBZ2VudCBmcm9tIFwiLi9BZ2VudFwiO1xyXG5pbXBvcnQgeyBOVU1fQUdFTlRTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5jbGFzcyBTd2FybSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN3YXJtID0gQXJyYXkoTlVNX0FHRU5UUyk7XHJcbiAgICB0aGlzLmVsaXRlQWdlbnQgPSBudWxsO1xyXG4gICAgdGhpcy5lbGl0ZVJld2FyZHMgPSBudWxsO1xyXG4gICAgdGhpcy5lbGl0ZVJhdGUgPSAwO1xyXG4gICAgdGhpcy5lcGlzb2RlID0gMDtcclxuICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX0FHRU5UUzsgaSsrKSB7XHJcbiAgICAgIHRoaXMuc3dhcm1baV0gPSBuZXcgQWdlbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZShoZWF0bWFwKSB7XHJcbiAgICB0aGlzLnRlYWNoKCk7XHJcbiAgICB0aGlzLnN3YXJtLm1hcChvID0+IHtcclxuICAgICAgby51cGRhdGUoaGVhdG1hcCwgdGhpcy5lcGlzb2RlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhdyhkaXNwbGF5KSB7XHJcbiAgICB0aGlzLnN3YXJtLm1hcChvID0+IHtcclxuICAgICAgaWYgKG8gPT0gdGhpcy5lbGl0ZUFnZW50KSB7XHJcbiAgICAgICAgby5kcmF3KGRpc3BsYXksIFwicmdiKDI1NSwgMCwgMClcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgby5kcmF3KGRpc3BsYXksIFwicmdiKDAsIDI1NSwgMClcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDb2xsaXNpb24oZm9vZCkge1xyXG4gICAgdGhpcy5zd2FybS5mb3JFYWNoKGFnZW50ID0+IHtcclxuICAgICAgaWYgKGZvb2QuY2hlY2tDb2xsaXNpb24oYWdlbnQucG9pbnQudHJ1bmNQb2ludCgpKSkge1xyXG4gICAgICAgIGFnZW50LnJld2FyZCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRUb3BBZ2VudCgpIHtcclxuICAgIGxldCB0bXBBZ2VudCA9IHRoaXMuc3dhcm1bMF07XHJcblxyXG4gICAgdGhpcy5zd2FybS5mb3JFYWNoKGFnZW50ID0+IHtcclxuICAgICAgaWYgKGFnZW50LnJld2FyZHMgPiB0bXBBZ2VudC5yZXdhcmRzKSB7XHJcbiAgICAgICAgdG1wQWdlbnQgPSBhZ2VudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRtcEFnZW50O1xyXG4gIH1cclxuXHJcbiAgdGVhY2goKSB7XHJcbiAgICBsZXQgdG9wQWdlbnQgPSB0aGlzLmdldFRvcEFnZW50KCk7XHJcblxyXG4gICAgaWYgKHRvcEFnZW50LnJld2FyZHMgPiB0aGlzLmVsaXRlUmV3YXJkcykge1xyXG4gICAgICB0aGlzLmVsaXRlQWdlbnQgPSB0b3BBZ2VudDtcclxuICAgICAgdGhpcy5lbGl0ZVJld2FyZHMgPSB0b3BBZ2VudC5yZXdhcmRzO1xyXG5cclxuICAgICAgdGhpcy5zd2FybS5mb3JFYWNoKGFnZW50ID0+IHtcclxuICAgICAgICBpZiAoYWdlbnQgIT09IHRvcEFnZW50KSBhZ2VudC5sZWFybkZyb20odG9wQWdlbnQpO1xyXG4gICAgICAgIGFnZW50LnJld2FyZHMgPSAwO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZXBpc29kZSsrO1xyXG4gICAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBUb3AgQWdlbnRzIFJld2FyZDogJHt0aGlzLmVsaXRlUmV3YXJkc31gKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3YXJtO1xyXG4iLCJleHBvcnQgY29uc3QgRElTUExBWV9XSURUSCA9IDY0MDtcclxuZXhwb3J0IGNvbnN0IERJU1BMQVlfSEVJR0hUID0gNjQwO1xyXG5leHBvcnQgY29uc3QgRElTUExBWV9CQUNLR1JPVU5EX0NPTE9SID0gXCJibGFja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdSSURfU0laRSA9IDgwO1xyXG5leHBvcnQgY29uc3QgR1JJRF9CTE9DS19TSVpFID0gTWF0aC50cnVuYyhESVNQTEFZX1dJRFRIIC8gR1JJRF9TSVpFKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOVU1fRk9PRCA9IDEwO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5VTV9BR0VOVFMgPSAxNTtcclxuIiwiaW1wb3J0IHsgR1JJRF9CTE9DS19TSVpFLCBHUklEX1NJWkUsIE5VTV9GT09EIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5cclxuY2xhc3MgRm9vZCB7XHJcbiAgY29uc3RydWN0b3IobnVtRm9vZCkge1xyXG4gICAgdGhpcy5wb2ludHMgPSBBcnJheShudW1Gb29kKS5maWxsKDApO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX0ZPT0Q7IGkrKykge1xyXG4gICAgICB0aGlzLnBvaW50c1tpXSA9IG5ldyBQb2ludChcclxuICAgICAgICBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiBHUklEX1NJWkUpLFxyXG4gICAgICAgIE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIEdSSURfU0laRSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoZGlzcGxheSkge1xyXG4gICAgdGhpcy5wb2ludHMuZm9yRWFjaChwID0+IHtcclxuICAgICAgZGlzcGxheS5kcmF3UmVjdChcclxuICAgICAgICBwLnggKiBHUklEX0JMT0NLX1NJWkUsXHJcbiAgICAgICAgcC55ICogR1JJRF9CTE9DS19TSVpFLFxyXG4gICAgICAgIEdSSURfQkxPQ0tfU0laRSxcclxuICAgICAgICBHUklEX0JMT0NLX1NJWkUsXHJcbiAgICAgICAgXCJ3aGl0ZVwiXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ29sbGlzaW9uKHBvaW50KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9GT09EOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucG9pbnRzW2ldLmVxdWFscyhwb2ludCkpIHtcclxuICAgICAgICB0aGlzLnBvaW50c1tpXSA9IG5ldyBQb2ludChcclxuICAgICAgICAgIE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIEdSSURfU0laRSksXHJcbiAgICAgICAgICBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiBHUklEX1NJWkUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vZDtcclxuIiwiaW1wb3J0IHsgc3RyaWN0IH0gZnJvbSBcImFzc2VydFwiO1xyXG5pbXBvcnQgRW5naW5lIGZyb20gXCIuL0VuZ2luZVwiO1xyXG5cclxuY29uc3QgbWFpbiA9ICgpID0+IHtcclxuICBjb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKCk7XHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4gZW5naW5lLnJ1bigpLCAxMDAwIC8gNTApO1xyXG59O1xyXG5cclxubWFpbigpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY2xpcE1pbk1heChudW0sIG1pbiwgbWF4KSB7XHJcbiAgbGV0IHRtcE51bSA9IG51bTtcclxuICBpZiAodG1wTnVtIDwgbWluKSB0bXBOdW0gPSBtaW47XHJcbiAgaWYgKHRtcE51bSA+IG1heCkgdG1wTnVtID0gbWF4O1xyXG4gIHJldHVybiB0bXBOdW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW0odmVjKSB7XHJcbiAgcmV0dXJuIHZlYy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1heCh2ZWMpIHtcclxuICByZXR1cm4gdmVjLnJlZHVjZSgoYSwgaSkgPT4gKGkgPiBhID8gaSA6IGEpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hZ25pZnlWZWNUbzEodmVjKSB7XHJcbiAgbGV0IG1heEluID0gbWF4KHZlYyk7XHJcbiAgaWYgKG1heEluICE9IDApIHtcclxuICAgIGNvbnN0IHNjYWxlID0gMSAvIG1heEluO1xyXG4gICAgbGV0IHNjYWxlZFZlYyA9IHZlYy5tYXAoZSA9PiBlICogc2NhbGUpO1xyXG4gICAgcmV0dXJuIHNjYWxlZFZlYztcclxuICB9XHJcbiAgcmV0dXJuIHZlYztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9