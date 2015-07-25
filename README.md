# funchecks (functional-data-type-checks)

Small, simple POC for type checking of functional data types. No production dependencies, only ~3KB (1.3KB gzipped).

## Dependencies ##
- All you need is either node or a browser
- Works on any machine
- No dependencies on other packages (with the exception of dev dependencies to build for browsers)

## Potential uses

* Unit testing
* Debugging
* Other assertions

## Features ##
### isFunctor (object -> boolean)
```js
funchecks.isFunctor(object)
```

### isMonad (object -> boolean)
```js
funchecks.isMonad(object)
```

### isMonoid (object, [optional] type -> boolean)
```js
funchecks.isMonoid(object, type?)
```

###  isSemigroup (object, [optional] type -> boolean)
```js
funchecks.isSemigroup(object, type?)
```

### typeOfData (object, [optional] type -> string)
```js
funchecks.typeOfData(object, type?)
```
Return string is a constant that should be checked against funchecks.dataTypes

Examples:
```js
//string is a semigroup
funchecks.typeOfData('what am I?') === funchecks.dataTypes.SEMIGROUP;

//array is a functor
funchecks.typeOfData([]) === funchecks.dataTypes.FUNCTOR;
```

### dataTypes (constants)
* FUNCTOR
* SEMIGROUP
* MONOID
* MONAD

## Installation ##

Npm:
```shell
npm install --save funchecks
```

Browser:
```html
<script src="funchecks.js"></script>
```
## Licence ##
MIT