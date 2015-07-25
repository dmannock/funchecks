
function insOf(inst, val) {
    return val instanceof inst;
}

//TODO: swap out after POC
//credit to whoever did this
//should use bare min needed or a lib really....
module.exports = function(obj1, obj2) {
  var leftChain = [];
  var rightChain = [];

  return (function c(x, y) {
    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if ((isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number')
        // Compare primitives and functions.     
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        || x === y) {
         return true;
    }

    // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes
    if ((typeof x === 'function' && typeof y === 'function') ||
       (insOf(Date, x) && insOf(Date, y)) ||
       (insOf(RegExp, x) && insOf(RegExp, y)) ||
       (insOf(String, x) && insOf(String, y)) ||
       (insOf(Number, x) && insOf(Number, y))) {
        return x.toString() === y.toString();
    }

    // At last checking prototypes as good as we can
    if (!(insOf(Object, x) && insOf(Object, y))) {
        return false;
    }

    if (x.isPrototypeOf(y) || y.isPrototypeOf(x) 
        || x.constructor !== y.constructor || x.prototype !== y.prototype
        // last Check - for infinitive linking loops
        || leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
         return false;
    }

    for (var p in x) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)
        	|| typeof y[p] !== typeof x[p]) {
            return false;
        }

        if (typeof (x[p]) === 'object' || typeof (x[p]) === 'function') {
            leftChain.push(x);
            rightChain.push(y);

            if (!c(x[p], y[p])) {
                return false;
            }

            leftChain.pop();
            rightChain.pop();
        } else if (x[p] !== y[p]) {
            return false;
        }
    }

    return true;
  })(obj1, obj2);
};