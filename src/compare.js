//TODO: swap out after POC
//credit to whoever did the original
//should use bare min needed or a lib really....
module.exports = function(obj1, obj2) {
  var leftChain = [];
  var rightChain = [];

  return (function c(x, y) {
    if ( x === y) {
        return true;
    }

    // Works in case when functions are created in constructor.
    if ((typeof x === 'function' && typeof y === 'function')) {
        return x.toString() === y.toString();
    }

    // At last checking prototypes as good as we can
    if (!(x instanceof Object && y instanceof Object)) {
        return false;
    }

    for (var p in x) {
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