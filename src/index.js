var isFunctor = require('./checks/isFunctor.js');
var isMonad = require('./checks/isMonad.js');
var isMonoid = require('./checks/isMonoid.js');
var isSemigroup = require('./checks/isSemigroup.js');
var typeOfData = require('./checks/typeOfData.js');
var dataTypes = require('./const/dataTypes.js');

module.exports = {
	isFunctor: isFunctor,
	isMonad: isMonad,
	isMonoid: isMonoid,
	isSemigroup: isSemigroup,
	typeOfData: typeOfData,
	dataTypes: dataTypes
}
